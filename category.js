function createCategoryCard(product) {
  const stockHtml = product.inStock
    ? `
      <div class="btn-row">
        <button class="buy-btn" onclick="addToCart(${product.id})">Buy Now</button>
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

function addToCart(productId) {
  let cart = JSON.parse(localStorage.getItem("chocoSapphireCart")) || [];
  const product = getProducts().find((p) => p.id === productId);
  if (!product || !product.inStock) return;

  const existing = cart.find((item) => item.id === productId);
  if (existing) {
    existing.quantity += 1;
  } else {
    cart.push({ ...product, quantity: 1 });
  }

  localStorage.setItem("chocoSapphireCart", JSON.stringify(cart));
  alert("Added to cart");
}

function renderCategoryPage() {
  const titleEl = document.getElementById("categoryTitle");
  const gridEl = document.getElementById("categoryGrid");
  const tier = document.body.dataset.tier;

  titleEl.textContent = `${tier} Collection`;
  gridEl.innerHTML = "";

  const products = getProductsByTier(tier);
  products.forEach((product) => {
    gridEl.appendChild(createCategoryCard(product));
  });
}

renderCategoryPage();
window.addToCart = addToCart;