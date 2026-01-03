// api/gemini.js
module.exports = async (req, res) => {
    // 1. Validasi Input
    const { message } = req.body || {};
    if (!message) {
        return res.status(400).json({ reply: "Pesan tidak boleh kosong." });
    }

    // 2. Cek API Key
    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) {
        return res.status(500).json({ reply: "Error: API Key belum di-setting di Vercel!" });
    }

    // --- DAFTAR MODEL YANG AKAN DICOBA (Urutan Prioritas) ---
    // Kita pakai 'v1beta' karena ini versi paling kompatibel saat ini
    const modelsToTry = [
        "gemini-1.5-flash",       // Paling baru & cepat
        "gemini-1.5-flash-latest",// Alternatif nama flash
        "gemini-1.5-pro",         // Versi pro terbaru
        "gemini-1.0-pro",         // Versi stabil lama
        "gemini-pro"              // Nama alias lama
    ];

    // Fungsi untuk memanggil API
    async function tryModel(modelName) {
        const url = `https://generativelanguage.googleapis.com/v1beta/models/${modelName}:generateContent?key=${apiKey}`;
        
        console.log(`Mencoba model: ${modelName}...`);

        const response = await fetch(url, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                contents: [{
                    parts: [{
                        text: `Kamu adalah Customer Service 'ALFA Hosting'. Jawab pertanyaan ini dengan sopan, singkat, dan bahasa Indonesia: "${message}"`
                    }]
                }]
            })
        });

        const data = await response.json();

        // Jika Google kasih error, lempar ke catch
        if (data.error) {
            throw new Error(data.error.message || `Gagal di model ${modelName}`);
        }

        // Jika sukses, ambil teksnya
        if (data.candidates && data.candidates.length > 0) {
            return data.candidates[0].content.parts[0].text;
        }
        
        throw new Error("Bot tidak memberikan balasan.");
    }

    // --- LOGIKA UTAMA (LOOPING) ---
    for (const model of modelsToTry) {
        try {
            // Coba model saat ini
            const reply = await tryModel(model);
            
            // Jika berhasil, langsung kirim jawaban dan STOP looping
            console.log(`BERHASIL menggunakan model: ${model}`);
            return res.status(200).json({ reply });

        } catch (error) {
            // Jika gagal, lanjut ke model berikutnya
            console.warn(`Gagal pakai ${model}: ${error.message}`);
            continue; 
        }
    }

    // --- JIKA SEMUA MODEL GAGAL ---
    console.error("SEMUA MODEL GAGAL.");
    return res.status(200).json({ 
        reply: "Maaf, sistem AI sedang sibuk (Semua model overload). Silakan hubungi Admin via WhatsApp." 
    });
};
