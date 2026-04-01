const ownerWhatsAppNumber = "8801712345678"; // replace later

const EMAILJS_PUBLIC_KEY = "Jk88fSQ2KhQTIyLj4";
const EMAILJS_SERVICE_ID = "service_x7tldir";
const EMAILJS_TEMPLATE_ID = "template_nzggmtz";

if (window.emailjs) {
  emailjs.init({
    publicKey: EMAILJS_PUBLIC_KEY
  });
}

let cart = JSON.parse(localStorage.getItem("chocoSapphireCart")) || [];

const classicProductsEl = document.getElementById("classicProducts");
const premiumProductsEl = document.getElementById("premiumProducts");
const luxuriousProductsEl = document.getElementById("luxuriousProducts");

const cartButton = document.getElementById("cartButton");
const cartCount = document.getElementById("cartCount");
const drawerOverlay = document.getElementById("drawerOverlay");
const closeCart = document.getElementById("closeCart");
const cartItems = document.getElementById("cartItems");
const subtotalEl = document.getElementById("subtotal");
const deliveryEl = document.getElementById("delivery");
const totalEl = document.getElementById("total");
const checkoutBtn = document.getElementById("checkoutBtn");

const checkoutModal = document.getElementById("checkoutModal");
const closeCheckout = document.getElementById("closeCheckout");
const orderForm = document.getElementById("orderForm");
const formSubtotal = document.getElementById("formSubtotal");
const formDelivery = document.getElementById("formDelivery");
const formTotal = document.getElementById("formTotal");
const deliveryZone = document.getElementById("deliveryZone");

function saveCart() {
  localStorage.setItem("chocoSapphireCart", JSON.stringify(cart));
}

function getDeliveryCharge() {
  const zone = deliveryZone ? deliveryZone.value : "";
  if (cart.length === 0) return 0;
  if (zone === "inside") return 80;
  if (zone === "outside") return 150;
  return 0;
}

function getTotals() {
  const subtotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const delivery = getDeliveryCharge();
  const total = subtotal + delivery;
  return { subtotal, delivery, total };
}

function createProductCard(product) {
  const stockHtml = product.inStock
    ? `
      <div class="btn-row">
        <button class="buy-btn" onclick="buyNow(${product.id})">Buy Now</button>
        <button class="cart-btn" onclick="addToCart(${product.id})">Add to Cart</button>
      </div>
    `
    : `<div class="stock-out-badge">Stock Out</div>`;

  const card = document.createElement("div");
  card.className = "flip-card";

  card.innerHTML = `
    <div class="flip-card-inner">
      <div class="card-face flip-card-front">
        <img src="${product.image}" alt="${product.name}" class="product-image" />
        <div class="card-content">
          <p class="product-tier">${product.tier}</p>
          <h3>${product.name}</h3>
          <p class="small-muted">${product.category}</p>
          <p class="price">৳${product.price}</p>
          ${stockHtml}
        </div>
      </div>

      <div class="card-face flip-card-back">
        <div>
          <img src="${product.image}" alt="${product.name}" class="back-small-image" />
          <p class="product-tier">${product.tier}</p>
          <h3>${product.name}</h3>
          <p class="small-muted">${product.category}</p>
          <p class="back-desc">${product.description}</p>
        </div>

        <div>
          <p class="price">৳${product.price}</p>
          ${stockHtml}
        </div>
      </div>
    </div>
  `;

  return card;
}

function renderCategoryPreview(tier, container, pageLink) {
  const products = getProductsByTier(tier);
  const previewProducts = products.slice(0, 3);

  container.innerHTML = "";

  previewProducts.forEach((product) => {
    container.appendChild(createProductCard(product));
  });

  if (products.length > 3) {
    const viewMoreWrap = document.createElement("div");
    viewMoreWrap.className = "view-more-wrap";
    viewMoreWrap.innerHTML = `<a href="${pageLink}" class="view-more-btn">View More</a>`;
    container.appendChild(viewMoreWrap);
  }
}

function addToCart(productId) {
  const product = getProducts().find((p) => p.id === productId);
  if (!product || !product.inStock) return;

  const existing = cart.find((item) => item.id === productId);
  if (existing) {
    existing.quantity += 1;
  } else {
    cart.push({ ...product, quantity: 1 });
  }

  saveCart();
  renderCart();
  openCart();
}

function buyNow(productId) {
  addToCart(productId);
  openCheckoutModal();
}

function increaseQty(productId) {
  const item = cart.find((product) => product.id === productId);
  if (item) item.quantity += 1;
  saveCart();
  renderCart();
}

function decreaseQty(productId) {
  const item = cart.find((product) => product.id === productId);
  if (!item) return;

  item.quantity -= 1;
  if (item.quantity <= 0) {
    cart = cart.filter((product) => product.id !== productId);
  }

  saveCart();
  renderCart();
}

function renderCart() {
  cartItems.innerHTML = "";

  if (cart.length === 0) {
    cartItems.innerHTML = `<div class="empty-box">Your cart is empty.</div>`;
  } else {
    cart.forEach((item) => {
      const cartItem = document.createElement("div");
      cartItem.className = "cart-item";
      cartItem.innerHTML = `
        <img src="${item.image}" alt="${item.name}" />
        <div class="cart-item-info">
          <h4>${item.name}</h4>
          <p>৳${item.price} each</p>
          <div class="qty-row">
            <button onclick="decreaseQty(${item.id})">-</button>
            <span>${item.quantity}</span>
            <button onclick="increaseQty(${item.id})">+</button>
          </div>
        </div>
        <div class="cart-line-total">৳${item.price * item.quantity}</div>
      `;
      cartItems.appendChild(cartItem);
    });
  }

  const totalCount = cart.reduce((sum, item) => sum + item.quantity, 0);
  cartCount.textContent = totalCount;

  const { subtotal, delivery, total } = getTotals();
  subtotalEl.textContent = `৳${subtotal}`;
  deliveryEl.textContent = `৳${delivery}`;
  totalEl.textContent = `৳${total}`;
  formSubtotal.textContent = `৳${subtotal}`;
  formDelivery.textContent = `৳${delivery}`;
  formTotal.textContent = `৳${total}`;
}

function openCart() {
  drawerOverlay.classList.remove("hidden");
}

function closeCartDrawer() {
  drawerOverlay.classList.add("hidden");
}

function openCheckoutModal() {
  if (cart.length === 0) {
    alert("Your cart is empty.");
    return;
  }
  checkoutModal.classList.remove("hidden");
  renderCart();
}

function closeCheckoutModal() {
  checkoutModal.classList.add("hidden");
}

cartButton.addEventListener("click", openCart);
closeCart.addEventListener("click", closeCartDrawer);

drawerOverlay.addEventListener("click", (e) => {
  if (e.target === drawerOverlay) {
    closeCartDrawer();
  }
});

checkoutBtn.addEventListener("click", () => {
  closeCartDrawer();
  openCheckoutModal();
});

closeCheckout.addEventListener("click", closeCheckoutModal);

checkoutModal.addEventListener("click", (e) => {
  if (e.target === checkoutModal) {
    closeCheckoutModal();
  }
});

deliveryZone.addEventListener("change", () => {
  renderCart();
});

orderForm.addEventListener("submit", async (e) => {
  e.preventDefault();

  if (cart.length === 0) {
    alert("Your cart is empty.");
    return;
  }

  const fullName = document.getElementById("fullName").value.trim();
  const phone = document.getElementById("phone").value.trim();
  const zone = document.getElementById("deliveryZone").value;
  const area = document.getElementById("area").value.trim();
  const address = document.getElementById("address").value.trim();
  const note = document.getElementById("note").value.trim();

  if (!zone) {
    alert("Please select delivery area.");
    return;
  }

  const zoneText = zone === "inside" ? "Inside Dhaka" : "Outside Dhaka";
  const { subtotal, delivery, total } = getTotals();

  const itemsText = cart
    .map((item, index) => `${index + 1}. ${item.name} × ${item.quantity} = ৳${item.price * item.quantity}`)
    .join("\n");

  const templateParams = {
    shop_name: "Choco Sapphire",
    customer_name: fullName,
    customer_phone: phone,
    delivery_zone: zoneText,
    area_city: area || "Not given",
    full_address: address,
    note: note || "None",
    order_items: itemsText,
    subtotal: `৳${subtotal}`,
    delivery_charge: `৳${delivery}`,
    total_amount: `৳${total}`
  };

  try {
    if (
      window.emailjs &&
      EMAILJS_PUBLIC_KEY !== "YOUR_PUBLIC_KEY" &&
      EMAILJS_SERVICE_ID !== "YOUR_SERVICE_ID" &&
      EMAILJS_TEMPLATE_ID !== "YOUR_TEMPLATE_ID"
    ) {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        templateParams
      );
    }

    const whatsappMessage = `New Order - Choco Sapphire

Customer Name: ${fullName}
Phone: ${phone}
Delivery Zone: ${zoneText}
Area/City: ${area || "Not given"}
Address: ${address}
Note: ${note || "None"}

Ordered Items:
${itemsText}

Subtotal: ৳${subtotal}
Delivery: ৳${delivery}
Total: ৳${total}`;

    window.open(
      `https://wa.me/${ownerWhatsAppNumber}?text=${encodeURIComponent(whatsappMessage)}`,
      "_blank"
    );

    alert("Order confirmed. WhatsApp order opened.");

    cart = [];
    saveCart();
    renderCart();
    orderForm.reset();
    closeCheckoutModal();
  } catch (error) {
    console.error(error);
    alert("Order sending failed.");
  }
});

renderCategoryPreview("Classic", classicProductsEl, "classic.html");
renderCategoryPreview("Premium", premiumProductsEl, "premium.html");
renderCategoryPreview("Luxurious", luxuriousProductsEl, "luxurious.html");
renderCart();

window.addToCart = addToCart;
window.buyNow = buyNow;
window.increaseQty = increaseQty;
window.decreaseQty = decreaseQty;