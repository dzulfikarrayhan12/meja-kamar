 
  const hanPart = document.getElementById('han-part');
  let scrollTimeout;

  window.addEventListener('scroll', () => {
    // Sembunyikan saat scroll
    hanPart.classList.add('hidden');

    // Jika masih scroll, reset timeout
    clearTimeout(scrollTimeout);

    // Setelah scroll berhenti 1 detik, tampilkan kembali
    scrollTimeout = setTimeout(() => {
      hanPart.classList.remove('hidden');
    }, 1000);
  });



  // (Opsional) Jika kamu ingin mengembalikan tulisan saat scroll ke atas:
  // window.addEventListener('scroll', () => {
  //   if (window.scrollY < 10) {
  //     hanPart.classList.remove('hidden');
  //   }

document.addEventListener("DOMContentLoaded", function () {
  // ------------------------
  // TOGGLE PASSWORD VISIBILITY
  // ------------------------
// ------------------------
// TOGGLE PASSWORD VISIBILITY
// ------------------------
const togglePassword = document.getElementById('togglePassword');
const passwordInput = document.getElementById('password');
const eyeIcon = document.getElementById('eyeIcon');

togglePassword?.addEventListener('click', () => {
  const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
  passwordInput.setAttribute('type', type);
  eyeIcon.className = type === 'password' ? 'ri-eye-line text-xl' : 'ri-eye-off-line text-xl';
});

// ------------------------
// LOGIN / REGISTER MODAL
// ------------------------
const loginModal = document.getElementById('loginModal');
const toggleBtn = document.getElementById('toggleBtn');
const modalTitle = document.getElementById('modalTitle');
const emailInput = document.getElementById('email');
const emailContainer = document.getElementById('emailContainer');
const confirmPasswordInput = document.getElementById('confirmPassword');
const submitBtn = document.getElementById('submitBtn');
const userBtn = document.getElementById('userBtn');
const closeModalBtn = document.getElementById('closeModalBtn');

let isRegister = false;

toggleBtn?.addEventListener('click', () => {
  isRegister = !isRegister;
  modalTitle.textContent = isRegister ? 'Register' : 'Login';
  emailContainer.classList.toggle('hidden', !isRegister);
  confirmPasswordInput?.classList.toggle('hidden', !isRegister);
  submitBtn.querySelector('i').className = isRegister ? 'ri-user-add-line' : 'ri-login-box-line';
  submitBtn.querySelector('span').textContent = isRegister ? 'Register' : 'Login';
  toggleBtn.textContent = isRegister ? 'Login' : 'Register';
  emailInput.required = isRegister;
});

userBtn?.addEventListener('click', () => {
  loginModal?.classList.remove('hidden');
  loginModal?.classList.add('flex');
  typeText(texts[currentForm]); // Start typing effect
});

closeModalBtn?.addEventListener('click', () => {
  loginModal?.classList.add('hidden');
  loginModal?.classList.remove('flex');
  isRegister = false;
  modalTitle.textContent = 'Login';
  emailContainer.classList.add('hidden');
  confirmPasswordInput?.classList.add('hidden');
  submitBtn.querySelector('i').className = 'ri-login-box-line';
  submitBtn.querySelector('span').textContent = 'Login';
  toggleBtn.textContent = 'Register';
  emailInput.required = false;
});

// ------------------------
// TYPING TEXT EFFECT
// ------------------------
const typedEl = document.getElementById('typed');
const cursor = document.getElementById('cursor');
const texts = {
  login: 'silahkan daftar jika belum punya akun',

};
let currentForm = 'login';
let i = 0;
let typingInterval;
let resetTimeout;

function typeText(text) {
  clearInterval(typingInterval);
  clearTimeout(resetTimeout);
  i = 0;
  typedEl.textContent = '';
  typingInterval = setInterval(() => {
    if (i < text.length) {
      typedEl.textContent += text.charAt(i);
      i++;
    } else {
      clearInterval(typingInterval);
      resetTimeout = setTimeout(() => {
        typedEl.textContent = '';
        i = 0;
        typeText(text);
      }, 4500);
    }
  }, 90);
}

// ------------------------
// SWITCH FORM FUNCTION
// ------------------------

function switchForm(target) {
  currentForm = target;

  const loginForm = document.getElementById('loginForm');
  const registerForm = document.getElementById('registerForm');

  loginForm.classList.toggle('hidden', target !== 'login');
  registerForm.classList.toggle('hidden', target !== 'register');

  // Tambahkan class active sesuai form aktif
  loginForm.classList.toggle('active', target === 'login');
  registerForm.classList.toggle('active', target === 'register');

  // Ubah judul form
  document.getElementById('form-title').textContent = target.toUpperCase();

  // Efek ketik teks
  typeText(texts[target]);
}


// ------------------------
// GENERIC PASSWORD TOGGLE FUNCTION
// ------------------------
function togglePasswordField(id) {
  const input = document.getElementById(id);
  const icon = input.nextElementSibling;
  if (input.type === 'password') {
    input.type = 'text';
    icon.classList.replace('ri-eye-line', 'ri-eye-off-line');
  } else {
    input.type = 'password';
    icon.classList.replace('ri-eye-off-line', 'ri-eye-line');
  }
}

  // ------------------------
  // KERANJANG & PRODUK
  // ------------------------
    const container = document.getElementById('product-container');
  const cartCount = document.getElementById('cart-count');
  const checkoutList = document.getElementById('checkout-list');
  const totalPriceElement = document.getElementById('total-price');

  const descriptions = [
    "An exclusive dark-themed hoodie boasting a majestic scorpion emblem at its core.",
    "A luxurious hoodie adorned with an intricately detailed spider masterpiece.",
    "A premium hoodie illuminated by a mysterious, radiant eye motif.",
    "Custom-crafted masterpiece showcasing a third eye skull design of supreme artistry.",
  ];

  function updateCartCount() {
    const cart = JSON.parse(localStorage.getItem("checkout")) || [];
    const totalQty = cart.reduce((sum, item) => sum + (item.qty || 1), 0);
    if (cartCount) {
      cartCount.textContent = totalQty > 0 ? totalQty : '';
      cartCount.style.display = totalQty > 0 ? "flex" : "none";
    }
  }

  // RENDER PRODUK
  if (container) {
    for (let i = 1; i <= 18; i++) {
      const productDiv = document.createElement('div');
      productDiv.className = 'bg-white p-4 rounded-lg shadow flex flex-col';

      const img = document.createElement('img');
      img.src = `images/${i}.jpg`;
      img.alt = `Produk ${i}`;
      img.className = 'w-full h-[280px] object-contain rounded-md mb-4 bg-white';

      const title = document.createElement('h3');
      title.className = 'text-lg font-semibold mb-1';
      title.textContent = `Produk ${i}`;

      const desc = document.createElement('p');
      desc.className = 'text-gray-600 text-sm mb-2';
      desc.textContent = descriptions[(i - 1) % descriptions.length];

      const price = document.createElement('div');
      price.className = 'text-black-500 font-bold mb-4';
      price.textContent = 'Rp250.000';

      const button = document.createElement('button');
button.className = `
  mt-auto 
  bg-green-800       /* hijau tua */
  hover:bg-green-700 /* hover hijau sedikit lebih terang */
  text-white 
  font-semibold 
  py-2 px-4 
  rounded 
  transition-colors duration-300 
  flex items-center justify-center gap-2 
  relative
`;
button.innerHTML = '<i class="ri-shopping-cart-line absolute left-4"></i><span>Tambah ke Keranjang</span>';


      button.addEventListener('click', () => {
        const item = {
          title: title.textContent,
          desc: desc.textContent,
          price: price.textContent,
          image: img.src,
          qty: 1
        };

        const cart = JSON.parse(localStorage.getItem("checkout")) || [];
        const existing = cart.find(p => p.title === item.title);
        if (existing) {
          existing.qty += 1;
        } else {
          cart.push(item);
        }
        localStorage.setItem("checkout", JSON.stringify(cart));
        updateCartCount();
      });

      productDiv.appendChild(img);
      productDiv.appendChild(title);
      productDiv.appendChild(desc);
      productDiv.appendChild(price);
      productDiv.appendChild(button);
      container.appendChild(productDiv);
    }
  }

  updateCartCount();

  // BUTTON UNTUK PINDAH KE CHECKOUT
  document.getElementById("checkout-btn")?.addEventListener("click", () => {
    const cart = JSON.parse(localStorage.getItem("checkout")) || [];
    if (cart.length === 0) {
      alert("Keranjang kosong.");
      return;
    }
    window.location.href = "checkout.html";
  });

  // BAGIAN CHECKOUT
  let cart = JSON.parse(localStorage.getItem('checkout')) || [];

  function updateTotal() {
    let total = 0;
    cart.forEach(item => {
      const price = parseInt(item.price.replace(/\D/g, '')) || 0;
      total += price * (item.qty || 1);
    });
    if (totalPriceElement) {
      totalPriceElement.textContent = `Rp${total.toLocaleString('id-ID')}`;
    }
  }

  function saveCart() {
    localStorage.setItem('checkout', JSON.stringify(cart));
    renderCart();
  }

  function renderCart() {
    if (!checkoutList || !totalPriceElement) return;

    checkoutList.innerHTML = '';
    if (cart.length === 0) {
      checkoutList.innerHTML = `<div class="text-center text-gray-500 mt-10">Keranjang kosong.</div>`;
      totalPriceElement.textContent = 'Rp0';
      return;
    }

    cart.forEach((item, index) => {
      const div = document.createElement('div');
      div.className = 'bg-white p-4 rounded-lg shadow flex items-center gap-4';

      div.innerHTML = `
        <img src="${item.image}" alt="${item.title}" class="w-20 h-20 object-cover rounded" />
        <div class="flex-1">
          <h3 class="text-md font-semibold">${item.title}</h3>
          <p class="text-sm text-gray-500">${item.desc}</p>
          <p class="text-orange-500 font-bold mt-1">${item.price}</p>
          <div class="flex items-center gap-2 mt-2">
            <button class="text-white bg-gray-400 hover:bg-gray-600 px-2 py-1 rounded" onclick="changeQty(${index}, -1)">-</button>
            <span class="px-3">${item.qty || 1}</span>
            <button class="text-white bg-gray-700 hover:bg-gray-900 px-2 py-1 rounded" onclick="changeQty(${index}, 1)">+</button>
          </div>
        </div>
        <button onclick="removeItem(${index})" class="text-red-500 hover:text-red-700"><i class="ri-delete-bin-line text-xl"></i></button>
      `;
      checkoutList.appendChild(div);
    });

    updateTotal();
  }

  window.changeQty = function (index, delta) {
    cart[index].qty = (cart[index].qty || 1) + delta;
    if (cart[index].qty <= 0) {
      cart.splice(index, 1);
    }
    saveCart();
    updateCartCount();
  }

  window.removeItem = function (index) {
    cart.splice(index, 1);
    saveCart();
    updateCartCount();
  }

  document.getElementById("pay-btn")?.addEventListener("click", () => {
    if (cart.length === 0) {
      alert("Keranjang kosong.");
      return;
    }

    const name = document.getElementById("name")?.value.trim();
    const address = document.getElementById("address")?.value.trim();
    const phone = document.getElementById("phone")?.value.trim();
    const method = document.getElementById("payment-method")?.value;
    const note = document.getElementById("note")?.value.trim();

    if (!name || !address || !phone || !method) {
      alert("Mohon lengkapi semua data pembayaran.");
      return;
    }

    const history = JSON.parse(localStorage.getItem("history")) || [];
    history.push({
      items: cart,
      total: totalPriceElement.textContent,
      time: new Date().toLocaleString(),
      status: "Belum Dibayar",
      customer: { name, address, phone, method, note }
    });

    localStorage.setItem("history", JSON.stringify(history));
    localStorage.removeItem("checkout");
    alert("Pesanan berhasil disimpan. Kami akan menghubungi Anda segera.");
    window.location.href = "index.html";
  });


  renderCart();
});

if (window.location.pathname.includes("checkout.html")) {
  renderCart();
  updateCartCount();
}

//routes

 // ROUTING (SPA)
  const route = (event) => {
    event.preventDefault();
    const path = event.target.getAttribute("href");
    window.history.pushState({}, "", path);
    handleLocation();
  };

  const routes = {
    "/": "/pages/index.html",
    "/checkout": "/pages/checkout.html",
  };

  const handleLocation = async () => {
    const path = window.location.pathname;
    const route = routes[path] || routes["/"];
    try {
      const html = await fetch(route).then((res) => res.text());
      document.getElementById("main-page").innerHTML = html;
      afterPageLoad(path);
    } catch (err) {
      console.error("Halaman tidak ditemukan.", err);
    }
  };

  window.onpopstate = handleLocation;
  window.route = route;

  handleLocation();

  function afterPageLoad(path) {
    if (path === "/") renderProducts();
    if (path === "/checkout") renderCart();
  }

  window.goBack = function () {
    window.location.href = "index.html";
  };


  
