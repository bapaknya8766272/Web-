// api/gemini.js
module.exports = async (req, res) => {
    const { message } = req.body || {};

    if (!message) {
        return res.status(400).json({ reply: "Pesan tidak boleh kosong." });
    }

    const apiKey = process.env.GEMINI_API_KEY;

    if (!apiKey) {
        return res.status(500).json({ reply: "Error: API Key belum di-setting di Vercel Settings!" });
    }

    // GANTI MODEL KE 'gemini-pro' AGAR LEBIH STABIL
    const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=${apiKey}`;

    try {
        const response = await fetch(url, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                contents: [{
                    parts: [{
                        text: `Kamu adalah Customer Service 'ALFA Hosting'. Jawab pertanyaan ini dengan sopan dan singkat: "${message}"`
                    }]
                }]
            })
        });

        const data = await response.json();
        
        if (data.error) {
            console.error("Google API Error:", data.error);
            // Jika masih error model, kita coba fallback manual di server
            return res.status(200).json({ reply: "Maaf, sistem AI sedang pemeliharaan. Silakan hubungi Admin via WhatsApp untuk respon cepat." });
        }

        if (!data.candidates || data.candidates.length === 0) {
             // Kadang AI memblokir jawaban karena safety, kita kasih pesan default
             return res.status(200).json({ reply: "Maaf, saya tidak bisa menjawab pertanyaan tersebut. Silakan hubungi Admin." });
        }

        const reply = data.candidates[0].content.parts[0].text;
        
        return res.status(200).json({ reply });

    } catch (error) {
        console.error("Server Error:", error);
        return res.status(500).json({ reply: "Maaf, terjadi gangguan koneksi. Coba lagi nanti." });
    }
};
