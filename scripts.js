// --- 1. DATABASE PRODUK DEFAULT (LENGKAP + STOK) ---
const defaultProducts = [
    // === VPS (Ada Stok) ===
    { 
        id: 'vps1', category: 'vps', name: 'BASIC VPS 1', price: 15000, stock: 10,
        desc: "✅ RAM: 1GB Dedicated\n✅ CPU: 1 Core High Performance\n✅ Storage: 20GB NVMe SSD\n✅ Bandwidth: 1TB\n✅ OS: Linux (Ubuntu/Debian/CentOS)\n🚀 Cocok untuk: Tunneling, Bot Ringan." 
    },
    { 
        id: 'vps2', category: 'vps', name: 'BASIC VPS 2', price: 25000, stock: 15,
        desc: "✅ RAM: 2GB Dedicated\n✅ CPU: 1 Core High Performance\n✅ Storage: 50GB NVMe SSD\n✅ Bandwidth: 2TB\n✅ Akses Root Full Control\n🚀 Cocok untuk: Hosting Web Kecil, VPN Pribadi." 
    },
    { 
        id: 'vps3', category: 'vps', name: 'BASIC VPS 3', price: 30000, stock: 8,
        desc: "✅ RAM: 2GB Dedicated\n✅ CPU: 2 Core (Multithread)\n✅ Storage: 50GB NVMe SSD\n✅ Bandwidth: 2TB\n✅ Anti-DDoS Basic\n🚀 Cocok untuk: Script Multiprocess, Database." 
    },
    { 
        id: 'vps4', category: 'vps', name: 'STANDARD VPS', price: 35000, stock: 20, recommend: true,
        desc: "🔥 BEST SELLER!\n✅ RAM: 4GB Dedicated\n✅ CPU: 2 Core High Performance\n✅ Storage: 80GB NVMe SSD\n✅ Bandwidth: 4TB\n✅ Support Docker\n🚀 Cocok untuk: Game Server (MCPE/SAMP), Bot Music, Store Online." 
    },
    { 
        id: 'vps5', category: 'vps', name: 'HIGH VPS 1', price: 45000, stock: 5,
        desc: "✅ RAM: 8GB Dedicated\n✅ CPU: 4 Core Extreme\n✅ Storage: 160GB NVMe SSD\n✅ Bandwidth: 5TB\n✅ Virtualisasi KVM\n🚀 Cocok untuk: Server Minecraft Java, Website Traffic Tinggi." 
    },
    { 
        id: 'vps6', category: 'vps', name: 'HIGH VPS 2', price: 70000, stock: 3,
        desc: "✅ RAM: 16GB Dedicated\n✅ CPU: 4 Core Extreme\n✅ Storage: 240GB NVMe SSD\n✅ Bandwidth: 5TB\n✅ Network 1Gbps\n🚀 Cocok untuk: Komunitas Game Besar, App Server Berat." 
    },

    // === PANEL PTERODACTYL (Ada Stok - LENGKAP 1-9) ===
    { 
        id: 'pnl1', category: 'panel', name: 'PANEL HEMAT 1GB', price: 1000, stock: 50,
        desc: "🔹 RAM: 1GB\n🔹 CPU: 35%\n🔹 Disk: 1GB\n🔹 Server: Indonesia\n✨ Cocok untuk coba-coba atau script bot sangat ringan." 
    },
    { 
        id: 'pnl2', category: 'panel', name: 'PANEL HEMAT 2GB', price: 2000, stock: 50,
        desc: "🔹 RAM: 2GB\n🔹 CPU: 50%\n🔹 Disk: 2GB\n🔹 Server: Indonesia\n✨ Cocok untuk Bot WhatsApp Single Session." 
    },
    { 
        id: 'pnl3', category: 'panel', name: 'PANEL HEMAT 3GB', price: 3000, stock: 40,
        desc: "🔹 RAM: 3GB\n🔹 CPU: 95%\n🔹 Disk: 3GB\n🔹 Server: Indonesia\n✨ Stabil untuk Bot Discord atau WA Multi-Device." 
    },
    { 
        id: 'pnl4', category: 'panel', name: 'PANEL HEMAT 4GB', price: 4000, stock: 30,
        desc: "🔹 RAM: 4GB\n🔹 CPU: 110%\n🔹 Disk: 4GB\n🔹 Server: Singapore\n✨ Kuat untuk menjalankan 2-3 script bot sekaligus." 
    },
    { 
        id: 'pnl5', category: 'panel', name: 'PANEL STANDAR 5GB', price: 5000, stock: 25,
        desc: "🔹 RAM: 5GB\n🔹 CPU: 135%\n🔹 Disk: 5GB\n🔹 Server: Singapore Premium\n✨ Rekomendasi untuk Server SAMP/MTA dengan player sedang." 
    },
    { 
        id: 'pnl6', category: 'panel', name: 'PANEL STANDAR 6GB', price: 6000, stock: 20,
        desc: "🔹 RAM: 6GB\n🔹 CPU: 160%\n🔹 Disk: 6GB\n🔹 Server: Singapore Premium\n✨ Performa tinggi untuk kebutuhan hosting medium." 
    },
    { 
        id: 'pnl7', category: 'panel', name: 'PANEL STANDAR 7GB', price: 7000, stock: 20,
        desc: "🔹 RAM: 7GB\n🔹 CPU: 185%\n🔹 Disk: 7GB\n🔹 Server: Singapore Premium\n✨ Cocok untuk Bot Music High Quality Audio." 
    },
    { 
        id: 'pnl8', category: 'panel', name: 'PANEL TURBO 8GB', price: 8000, stock: 15,
        desc: "🔹 RAM: 8GB\n🔹 CPU: 200%\n🔹 Disk: 8GB\n🔹 Server: Singapore Premium\n✨ Sangat lancar untuk Minecraft PE server kecil." 
    },
    { 
        id: 'pnl9', category: 'panel', name: 'PANEL TURBO 9GB', price: 9000, stock: 15,
        desc: "🔹 RAM: 9GB\n🔹 CPU: 300%\n🔹 Disk: 9GB\n🔹 Performa Stabil & Cepat\n✨ Pilihan terbaik sebelum upgrade ke Unlimited." 
    },

    // === PANEL PREMIUM ===
    { 
        id: 'prem1', category: 'panel', name: 'PANEL UNLIMITED', price: 10000, stock: 10, recommend: true,
        desc: "👑 KHUSUS SULTAN\n♾️ RAM: Unlimited\n♾️ CPU: Unlimited\n♾️ Disk: Unlimited\n🛡️ Garansi Anti Suspend (S&K)\n✨ Bebas deploy apa saja sepuasnya!" 
    },
    { 
        id: 'prem2', category: 'panel', name: 'RESELLER PANEL', price: 15000, stock: 5,
        desc: "💼 PAKET USAHA 1\n✅ Dapat Akun Reseller\n✅ Bisa Membuat Panel Sendiri\n✅ Bisa Jual Panel ke Orang Lain\n💰 Cocok untuk pemula bisnis hosting." 
    },
    { 
        id: 'prem3', category: 'panel', name: 'ADMIN PANEL', price: 20000, stock: 5, recommend: true,
        desc: "💼 PAKET USAHA 2\n✅ Dapat Akun Admin Panel\n✅ Full Akses Create/Delete Server\n✅ Bisa Open Reseller Panel\n💰 Potensi Balik Modal Sangat Cepat!" 
    },
    { 
        id: 'prem4', category: 'panel', name: 'OWNER PANEL', price: 25000, stock: 3,
        desc: "🏢 TINGKAT TERTINGGI\n✅ Akses Panel Owner\n✅ Bisa Bikin Admin & Reseller\n✅ Full Control Resource Server\n✅ Prioritas Support." 
    },
    { 
        id: 'prem5', category: 'panel', name: 'PT PANEL (PARTNER)', price: 35000, stock: 2, recommend: true,
        desc: "🤝 PAKET PARTNER\n✅ Join Manajemen\n✅ Akses Database Panel\n✅ Bebas Pasang Iklan di Panel\n✅ Full Support Teknis." 
    },

    // === JASA LAINNYA (UNLIMITED STOK) ===
    { id: 'oth1', category: 'other', name: 'JASA INSTALL PANEL', price: 10000, desc: "🛠️ Terima Beres!\nKami instalkan Panel Pterodactyl di VPS Anda.\nTermasuk konfigurasi Domain & SSL (HTTPS)." },
    { id: 'oth2', category: 'other', name: 'BASH AUTOSCRIPT', price: 15000, desc: "📜 Script Auto Install\nBuat Panel Pterodactyl sendiri hanya dengan 1 baris perintah.\nSupport Ubuntu 20.04/22.04." },
    { id: 'oth3', category: 'other', name: 'FIX ERROR SCRIPT', price: 7000, desc: "🔧 Bot Anda Error?\nKami bantu perbaiki error pada script Bot WA/Telegram/Discord.\nHarga tergantung tingkat kesulitan." },
    { id: 'oth4', category: 'other', name: 'JASA RENAME SC', price: 20000, desc: "✏️ Rebranding Script\nGanti nama author, credit, dan tampilan script bot agar terlihat seperti milik Anda sendiri." },
    { id: 'oth5', category: 'other', name: 'PEMBUATAN WEBSITE', price: 30000, desc: "🌐 Website Profesional\nLanding Page, Top Up Game, atau Company Profile.\nDesain Responsif & Modern." }
];

// --- 2. LOGIC RENDER PRODUK (DENGAN TAMPILAN STOK) ---
function initProducts() {
    // Jika data kosong atau kurang dari 10 (data lama), reset ke yang baru & lengkap
    if (!localStorage.getItem('products') || JSON.parse(localStorage.getItem('products')).length < 10) {
        localStorage.setItem('products', JSON.stringify(defaultProducts));
    }
}

function renderProducts() {
    initProducts();
    const products = JSON.parse(localStorage.getItem('products')) || [];
    
    const vpsContainer = document.getElementById('vps-list');
    const panelContainer = document.getElementById('panel-list');
    const otherContainer = document.getElementById('other-list');

    if(vpsContainer) vpsContainer.innerHTML = '';
    if(panelContainer) panelContainer.innerHTML = '';
    if(otherContainer) otherContainer.innerHTML = '';

    products.forEach((p) => {
        const productData = JSON.stringify(p).replace(/"/g, '"');
        const shortDesc = p.desc.split('\n')[0]; 

        // Logika Tampilan Stok
        let stockDisplay = '';
        let buttonState = '';
        let buttonText = 'BELI SEKARANG';
        let stockClass = 'stock-ready';

        // Hanya VPS dan Panel yang punya stok
        if (p.category !== 'other') {
            if (p.stock && p.stock > 0) {
                stockDisplay = `<div style="position:absolute; top:10px; right:10px; background:#27ae60; color:white; padding:2px 8px; border-radius:10px; font-size:0.8rem; font-weight:bold;">Stok: ${p.stock}</div>`;
            } else {
                stockDisplay = `<div style="position:absolute; top:10px; right:10px; background:#e74c3c; color:white; padding:2px 8px; border-radius:10px; font-size:0.8rem; font-weight:bold;">HABIS</div>`;
                buttonState = 'disabled style="background:#ccc; cursor:not-allowed;"';
                buttonText = 'STOK HABIS';
                stockClass = 'stock-empty';
            }
        }

        const itemHtml = `
            <div class="service-item ${p.recommend ? 'recommend' : ''} ${stockClass}" style="position:relative;">
                ${stockDisplay}
                <h3>${p.name}</h3>
                <h4 style="color:#27ae60; text-align:center; margin:5px 0; font-size:1.2rem;">${formatCurrency(p.price)}</h4>
                <p style="text-align:center; color:#666;">${shortDesc}...</p>
                
                <div style="margin-top:auto;">
                    <button class="order-btn" onclick="addToCart('${p.name}', ${p.price}, '${p.category}', ${p.stock})" ${buttonState}>${buttonText}</button>
                    <button class="detail-btn" onclick='openDetailModal(${productData})'>LIHAT DETAIL</button>
                </div>
            </div>
        `;

        if (p.category === 'vps' && vpsContainer) vpsContainer.innerHTML += itemHtml;
        else if (p.category === 'panel' && panelContainer) panelContainer.innerHTML += itemHtml;
        else if (p.category === 'other' && otherContainer) otherContainer.innerHTML += itemHtml;
    });
}

// --- 3. LOGIKA KERANJANG (VALIDASI STOK) ---
const cartTableBody = document.querySelector('#cart-table tbody');
const totalPriceElement = document.getElementById('total-price');
const cartBadge = document.getElementById('cart-badge');
let cart = JSON.parse(localStorage.getItem('cart')) || [];

function addToCart(name, price, category, currentStock) {
    // Cek Stok untuk VPS/Panel
    if (category !== 'other') {
        const itemInCart = cart.find(item => item.service === name);
        const quantityInCart = itemInCart ? itemInCart.quantity : 0;
        
        if (quantityInCart >= currentStock) {
            alert("Maaf, stok produk ini sudah habis!");
            return;
        }
    }

    const existingItem = cart.find(item => item.service === name);
    if(existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({ service: name, price: price, quantity: 1 });
    }
    saveCart();
    updateCart();
    
    // Efek Tombol
    const btn = event.target;
    if(btn && btn.tagName === 'BUTTON') {
        const originalText = btn.innerText;
        btn.innerText = "✓ Masuk";
        btn.style.background = "#27ae60";
        setTimeout(() => {
            btn.innerText = originalText;
            btn.style.background = "";
        }, 1000);
    }
}

// --- 4. FUNGSI UTILITAS STANDAR ---
function formatCurrency(num) {
    return parseInt(num).toLocaleString('id-ID', { style: 'currency', currency: 'IDR', minimumFractionDigits: 0 });
}

function updateCart() {
    if(!cartTableBody) return;
    cartTableBody.innerHTML = '';
    let total = 0; let totalItems = 0;
    cart.forEach((item, index) => {
        const row = document.createElement('tr');
        row.innerHTML = `<td>${item.service}</td><td>${item.quantity}</td><td>${formatCurrency(item.price * item.quantity)}</td><td><button onclick="removeItem(${index})" style="background:#e74c3c; color:white; border:none; padding:5px 10px; border-radius:4px; cursor:pointer;">Hapus</button></td>`;
        cartTableBody.appendChild(row);
        total += item.price * item.quantity; totalItems += item.quantity;
    });
    if(totalPriceElement) totalPriceElement.textContent = formatCurrency(total);
    if(cartBadge) { cartBadge.textContent = totalItems; cartBadge.style.display = totalItems > 0 ? 'inline-block' : 'none'; }
    updatePaymentAmount(); 
}

function removeItem(index) { cart.splice(index, 1); saveCart(); updateCart(); }
function saveCart() { localStorage.setItem('cart', JSON.stringify(cart)); }
function updatePaymentAmount() { 
    const d = document.getElementById('total-to-pay'); 
    if(d) { 
        let t = cart.reduce((s, i) => s + (i.price * i.quantity), 0); 
        d.textContent = "Total Tagihan: " + formatCurrency(t); 
    } 
}

function trackVisitor() { 
    if (window.location.pathname.endsWith('index.html') || window.location.pathname === '/' || window.location.pathname.endsWith('/')) { 
        let v = localStorage.getItem('total_visits') || 0; 
        if (!sessionStorage.getItem('has_visited')) { 
            v = parseInt(v) + 1; 
            localStorage.setItem('total_visits', v); 
            sessionStorage.setItem('has_visited', 'true'); 
        } 
    } 
}

function openDetailModal(product) { 
    const m = document.getElementById('product-detail-modal'); 
    if(!m)return; 
    document.getElementById('modal-prod-name').innerText=product.name; 
    document.getElementById('modal-prod-price').innerText=formatCurrency(product.price); 
    document.getElementById('modal-prod-desc').innerText=product.desc; 
    const btn=document.getElementById('modal-add-btn'); 
    btn.onclick=()=>{addToCart(product.name, product.price, product.category, product.stock); closeDetailModal();}; 
    m.style.display='flex'; 
}

function closeDetailModal() { document.getElementById('product-detail-modal').style.display='none'; }
window.onclick = function(e) { const m = document.getElementById('product-detail-modal'); if(e.target==m) m.style.display="none"; }

// --- 5. CHATBOT HYBRID (MANUAL FALLBACK + AI) ---
function getFallbackResponse(text) {
    text = text.toLowerCase();
    if (text.includes('harga') || text.includes('biaya')) return "Untuk harga lengkap, silakan cek daftar layanan di halaman utama website kami.";
    if (text.includes('cara') && text.includes('beli')) return "Klik tombol 'BELI SEKARANG' pada produk yang diinginkan, lalu lanjut ke pembayaran.";
    if (text.includes('pembayaran') || text.includes('bayar')) return "Kami menerima pembayaran via QRIS, Dana, GoPay, dan Transfer Bank.";
    if (text.includes('panel')) return "Kami menyediakan Panel Pterodactyl murah mulai Rp 1.000.";
    if (text.includes('vps')) return "VPS tersedia dengan spesifikasi beragam mulai Rp 15.000.";
    if (text.includes('admin') || text.includes('owner')) return "Silakan hubungi WhatsApp Admin di 0822-2676-9163 untuk bantuan lebih lanjut.";
    if (text.includes('halo') || text.includes('hai') || text.includes('p')) return "Halo! Ada yang bisa saya bantu terkait layanan hosting?";
    return "Maaf, saya kurang mengerti. Bisa hubungi Admin via WhatsApp untuk respon cepat?";
}

async function getAIResponse(userMessage) {
    const apiKey = 'AIzaSyB83yRApWuoMpXzYpmgawmugU70YftdBiE'; 
    const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${apiKey}`;

    const requestBody = {
        contents: [{
            parts: [{
                text: `Kamu adalah Customer Service 'ALFA Hosting'. Jawab pertanyaan ini dengan sopan dan singkat: "${userMessage}"`
            }]
        }]
    };

    try {
        const response = await fetch(url, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(requestBody)
        });

        if (!response.ok) throw new Error('API Error');

        const data = await response.json();
        const reply = data.candidates[0].content.parts[0].text;
        return reply;

    } catch (error) {
        console.warn("AI Gagal/Sibuk, beralih ke Manual:", error);
        return getFallbackResponse(userMessage); 
    }
}

// --- 6. INIT UTAMA ---
document.addEventListener('DOMContentLoaded', () => { 
    trackVisitor(); 
    renderProducts(); 
    updateCart(); 
    
    const proceedBtn=document.getElementById('proceed-to-payment'); 
    if(proceedBtn)proceedBtn.addEventListener('click',()=>{if(cart.length===0){alert('Kosong!');return;}window.location.href='payment.html';});
    
    const themeBtn=document.getElementById('theme-btn'); 
    if(themeBtn){if(localStorage.getItem('theme')==='dark')document.body.classList.add('dark-mode');themeBtn.addEventListener('click',()=>{document.body.classList.toggle('dark-mode');localStorage.setItem('theme',document.body.classList.contains('dark-mode')?'dark':'light');});}
    
    const liveChatToggle=document.getElementById('live-chat-toggle'); const liveChat=document.getElementById('live-chat'); const liveChatClose=document.getElementById('live-chat-close'); const liveChatForm=document.getElementById('live-chat-form'); const liveChatInput=document.getElementById('live-chat-input'); const liveChatMessages=document.getElementById('live-chat-messages');
    if(liveChatToggle)liveChatToggle.addEventListener('click',()=>{liveChat.style.display='flex';liveChatToggle.style.display='none';}); if(liveChatClose)liveChatClose.addEventListener('click',()=>{liveChat.style.display='none';liveChatToggle.style.display='block';});
    
    if(liveChatForm)liveChatForm.addEventListener('submit',async(e)=>{e.preventDefault();const m=liveChatInput.value.trim();if(!m)return;const u=document.createElement('div');u.textContent=m;u.style.cssText="background:#007bff;color:white;padding:8px;border-radius:10px;margin-bottom:5px;align-self:flex-end;max-width:80%;";liveChatMessages.appendChild(u);liveChatInput.value='';const l=document.createElement('div');l.textContent='...';liveChatMessages.appendChild(l);const r=await getAIResponse(m);liveChatMessages.removeChild(l);const b=document.createElement('div');b.textContent=r;b.style.cssText="background:#eee;color:black;padding:8px;border-radius:10px;margin-bottom:5px;align-self:flex-start;max-width:80%;";liveChatMessages.appendChild(b);liveChatMessages.scrollTop=liveChatMessages.scrollHeight;});
});