// api/gemini.js
module.exports = async (req, res) => {
    // 1. Validasi Pesan
    const { message } = req.body || {};
    if (!message) {
        return res.status(400).json({ reply: "Pesan tidak boleh kosong." });
    }

    // 2. Cek API Key
    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) {
        return res.status(500).json({ reply: "Error: API Key belum di-setting di Vercel Settings!" });
    }

    // --- FUNGSI PEMANGGIL GOOGLE AI ---
    async function callGoogleAI(modelName, apiVersion) {
        const url = `https://generativelanguage.googleapis.com/${apiVersion}/models/${modelName}:generateContent?key=${apiKey}`;
        
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

        // Jika error, lempar ke catch
        if (data.error) {
            throw new Error(data.error.message || "Google API Error");
        }

        // Jika sukses, kembalikan teks
        if (data.candidates && data.candidates.length > 0) {
            return data.candidates[0].content.parts[0].text;
        }
        
        throw new Error("Tidak ada balasan dari AI.");
    }

    // --- LOGIKA UTAMA (COBA SATU PER SATU) ---
    try {
        // PERCOBAAN 1: Pakai Model Terbaru (Gemini 1.5 Flash) di v1beta
        try {
            console.log("Mencoba Gemini 1.5 Flash...");
            const reply = await callGoogleAI('gemini-1.5-flash', 'v1beta');
            return res.status(200).json({ reply });
        } catch (e) {
            console.warn("Gagal pakai Flash, mencoba Pro...", e.message);
        }

        // PERCOBAAN 2: Jika Flash gagal, Pakai Model Stabil (Gemini Pro) di v1
        try {
            console.log("Mencoba Gemini Pro...");
            const reply = await callGoogleAI('gemini-pro', 'v1');
            return res.status(200).json({ reply });
        } catch (e) {
            console.warn("Gagal pakai Pro...", e.message);
            throw e; // Lempar error terakhir
        }

    } catch (error) {
        console.error("SEMUA MODEL GAGAL:", error);
        // Fallback terakhir: Pesan manual agar user tidak kecewa
        return res.status(200).json({ 
            reply: "Maaf, sistem AI sedang sibuk. Silakan hubungi Admin via WhatsApp untuk respon cepat." 
        });
    }
};
