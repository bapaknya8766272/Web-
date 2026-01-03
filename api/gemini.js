// api/gemini.js
module.exports = async (req, res) => {
    // 1. Ambil pesan dari frontend
    // Pastikan req.body ada, jika tidak pakai object kosong
    const { message } = req.body || {};

    if (!message) {
        return res.status(400).json({ reply: "Pesan tidak boleh kosong." });
    }

    // 2. Ambil API Key dari Vercel Environment Variables
    const apiKey = process.env.GEMINI_API_KEY;

    if (!apiKey) {
        return res.status(500).json({ reply: "Error: API Key belum di-setting di Vercel Settings!" });
    }

    const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${apiKey}`;

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
        
        // Cek jika ada error dari Google
        if (data.error) {
            console.error("Google API Error:", data.error);
            throw new Error(data.error.message);
        }

        // Ambil balasan
        if (!data.candidates || data.candidates.length === 0) {
             throw new Error("Tidak ada balasan dari AI.");
        }

        const reply = data.candidates[0].content.parts[0].text;
        
        // 3. Kirim jawaban balik ke frontend
        return res.status(200).json({ reply });

    } catch (error) {
        console.error("Gemini Server Error:", error);
        return res.status(500).json({ reply: "Maaf, server AI sedang sibuk. Silakan hubungi Admin via WhatsApp." });
    }
};
