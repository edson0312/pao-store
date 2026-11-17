const products = [
  {
    id: "tee-black",
    name: "Classic Tee",
    kind: "T-shirt",
    type: "apparel",
    art: "tee",
    color: "Black",
    price: 590,
    fill: "#1e1916",
    ink: "#f6f1ea",
    sizes: ["S", "M", "L", "XL"],
    blurb: "A heavy cotton tee with the Pao mark on the chest."
  },
  {
    id: "mug-white",
    name: "Day Mug",
    kind: "Mug",
    type: "drinkware",
    art: "mug",
    color: "White",
    price: 390,
    fill: "#f7f4ef",
    ink: "#1e1916",
    stroke: "#d9d0c6",
    detail: "11 oz",
    blurb: "An 11 oz ceramic mug for coffee or tea."
  },
  {
    id: "tote-natural",
    name: "Canvas Tote",
    kind: "Bag",
    type: "home",
    art: "tote",
    color: "Natural",
    price: 450,
    fill: "#f3e6c4",
    ink: "#12356b",
    stroke: "#e2d2a4",
    detail: "One size",
    blurb: "A cotton tote for groceries, books, or a day out."
  },
  {
    id: "bottle-blue",
    name: "Steel Bottle",
    kind: "Bottle",
    type: "drinkware",
    art: "bottle",
    color: "Blue",
    price: 690,
    fill: "#1a62d0",
    ink: "#f5e512",
    detail: "500 ml",
    blurb: "A steel bottle that keeps a drink cold on the way."
  },
  {
    id: "notebook-navy",
    name: "Plain Notebook",
    kind: "Notebook",
    type: "home",
    art: "notebook",
    color: "Navy",
    price: 280,
    fill: "#12356b",
    ink: "#f5e512",
    detail: "A5 · 80 pages",
    blurb: "A stitched A5 notebook with blank pages."
  },
  {
    id: "cap-navy",
    name: "Everyday Cap",
    kind: "Cap",
    type: "apparel",
    art: "cap",
    color: "Navy",
    price: 420,
    fill: "#12356b",
    ink: "#f5e512",
    sizes: ["S/M", "L/XL"],
    blurb: "A cotton cap with the Pao mark on the front."
  }
];
const COD_LIMIT = 3000;

const state = {
  filter: "all",
  view: "shop",
  productId: null,
  size: "M",
  cart: []
};

const main = document.querySelector("#main");

function peso(amount) {
  return `₱${amount.toLocaleString("en-PH")}`;
}

function productArt(product) {
  const stroke = product.stroke ? ` stroke="${product.stroke}" stroke-width="3"` : "";
  const label = `<text x="120" y="148" text-anchor="middle" fill="${product.ink}" font-family="Georgia, serif" font-size="26">Pao</text>`;
  if (product.art === "tee") {
    return `<svg viewBox="0 0 240 250" aria-hidden="true">
      <path fill="${product.fill}"${stroke} d="M78 46 L52 62 L24 48 L42 104 L68 88 L68 214 L172 214 L172 88 L198 104 L216 48 L188 62 L162 46 C142 74 98 74 78 46 Z"/>
      ${label}
    </svg>`;
  }
  if (product.art === "tote") {
    return `<svg viewBox="0 0 240 250" aria-hidden="true">
      <path fill="none" stroke="${product.ink}" stroke-width="8" d="M86 78 V52 h16 v26 M138 78 V52 h16 v26"/>
      <rect x="62" y="78" width="116" height="130" rx="10" fill="${product.fill}"${stroke}/>
      ${label}
    </svg>`;
  }
  if (product.art === "bottle") {
    return `<svg viewBox="0 0 240 250" aria-hidden="true">
      <rect x="104" y="36" width="32" height="28" rx="6" fill="${product.ink}"/>
      <path fill="${product.fill}" d="M96 64 h48 l10 28 v112 a24 24 0 0 1 -24 24 h-20 a24 24 0 0 1 -24 -24 V92 Z"/>
      <text x="120" y="150" text-anchor="middle" fill="${product.ink}" font-family="Georgia, serif" font-size="22">Pao</text>
    </svg>`;
  }
  if (product.art === "notebook") {
    return `<svg viewBox="0 0 240 250" aria-hidden="true">
      <rect x="58" y="40" width="124" height="168" rx="8" fill="${product.fill}"/>
      <path stroke="${product.ink}" stroke-width="4" d="M78 78 h84 M78 102 h84 M78 126 h64"/>
      <text x="120" y="176" text-anchor="middle" fill="${product.ink}" font-family="Georgia, serif" font-size="26">Pao</text>
    </svg>`;
  }
  if (product.art === "cap") {
    return `<svg viewBox="0 0 240 250" aria-hidden="true">
      <path fill="${product.fill}" d="M48 150 q72 -20 144 0 l-8 22 q-64 16 -128 0 Z"/>
      <path fill="${product.fill}" d="M70 146 q50 -78 100 0 v18 H70 Z"/>
      <text x="120" y="132" text-anchor="middle" fill="${product.ink}" font-family="Georgia, serif" font-size="22">Pao</text>
    </svg>`;
  }
  return `<svg viewBox="0 0 240 250" aria-hidden="true">
    <path fill="${product.fill}"${stroke} d="M156 78 h18 a28 36 0 0 1 0 72 h-18"/>
    <rect x="62" y="58" width="100" height="140" rx="16" fill="${product.fill}"${stroke}/>
    <ellipse cx="112" cy="62" rx="46" ry="12" fill="${product.ink}" opacity="0.25"/>
    ${label}
  </svg>`;
}

function findProduct(id) {
  return products.find((item) => item.id === id);
}

function cartCount() {
  return state.cart.reduce((sum, item) => sum + item.qty, 0);
}

function cartTotal() {
  return state.cart.reduce((sum, item) => sum + item.qty * findProduct(item.id).price, 0);
}

function updateBadge() {
  document.querySelector("[data-cart-count]").textContent = String(cartCount());
  document.querySelectorAll(".nav button").forEach((button) => {
    button.setAttribute("aria-pressed", button.dataset.filter === state.filter ? "true" : "false");
  });
}

function render() {
  updateBadge();
  if (state.view === "product") renderProduct();
  else if (state.view === "cart") renderCart();
  else if (state.view === "checkout") renderCheckout();
  else if (state.view === "done") renderDone();
  else renderShop();
}

function renderShop() {
  const list = products.filter((item) => state.filter === "all" || item.type === state.filter);
  main.innerHTML = `
    <section class="hero">
      <div>
        <h1>Physical goods, ready to ship.</h1>
        <p>Pao lists tangible products the shop can source and deliver. A shirt or a mug can sit next to a bag, a bottle, or anything else we can pack.</p>
      </div>
      <div class="hero-note">
        <strong>Sample catalog</strong>
        <p class="muted">These six items show the range. A new product is added the same way, once it has a price, a photo, and a way to ship.</p>
      </div>
    </section>
    <section class="grid" id="shop">
      ${list.map((product) => `
        <button class="card" type="button" data-action="open" data-id="${product.id}">
          <div class="art">${productArt(product)}</div>
          <div class="card-body">
            <p class="kind">${product.kind}</p>
            <h2>${product.name}</h2>
            <p class="muted">${product.color}</p>
            <p class="price">${peso(product.price)}</p>
          </div>
        </button>
      `).join("")}
    </section>
  `;
}

function renderProduct() {
  const product = findProduct(state.productId);
  const sizeBlock = product.sizes
    ? `<p class="kind">Size</p>
       <div class="size-list">
         ${product.sizes.map((size) => `<button type="button" data-action="size" data-size="${size}" aria-pressed="${state.size === size}">${size}</button>`).join("")}
       </div>`
    : `<p class="muted">${product.detail}</p>`;
  main.innerHTML = `
    <button class="ghost back" type="button" data-action="shop">Back to shop</button>
    <article class="detail">
      <div class="art">${productArt(product)}</div>
      <div>
        <p class="kind">${product.kind}</p>
        <h1>${product.name}</h1>
        <p class="price">${peso(product.price)}</p>
        <p>${product.blurb}</p>
        <p class="muted">Color: ${product.color}</p>
        ${sizeBlock}
        <button class="primary" type="button" data-action="add" data-id="${product.id}">Add to cart</button>
      </div>
    </article>
  `;
}

function renderCart() {
  if (state.cart.length === 0) {
    main.innerHTML = `
      <section class="panel">
        <h1>Your cart is empty</h1>
        <p class="muted">Add a product to see it here.</p>
        <button class="primary" type="button" data-action="shop">Browse products</button>
      </section>`;
    return;
  }
  main.innerHTML = `
    <section class="panel">
      <h1>Cart</h1>
      ${state.cart.map((item) => {
        const product = findProduct(item.id);
        const label = product.sizes ? `${product.color} · ${item.size}` : `${product.color}${product.detail ? ` · ${product.detail}` : ""}`;
        return `
          <div class="line">
            <div class="art">${productArt(product)}</div>
            <div>
              <strong>${product.name}</strong>
              <p class="muted">${label}</p>
              <div class="qty">
                <button type="button" data-action="qty" data-key="${item.key}" data-dir="-1" aria-label="Decrease quantity">−</button>
                <span>${item.qty}</span>
                <button type="button" data-action="qty" data-key="${item.key}" data-dir="1" aria-label="Increase quantity">+</button>
              </div>
            </div>
            <div>
              <p class="price">${peso(product.price * item.qty)}</p>
              <button class="ghost" type="button" data-action="remove" data-key="${item.key}">Remove</button>
            </div>
          </div>`;
      }).join("")}
      <div class="totals">
        <strong>Subtotal ${peso(cartTotal())}</strong>
        <button class="primary" type="button" data-action="checkout">Checkout</button>
      </div>
      <p class="muted">Shipping is added on the next step. Cash on delivery is available up to ₱3,000 in Metro Manila and the rest of Luzon.</p>
    </section>
  `;
}

function renderCheckout() {
  const codAllowed = cartTotal() <= COD_LIMIT;
  main.innerHTML = `
    <button class="ghost back" type="button" data-action="cart">Back to cart</button>
    <section class="panel">
      <h1>Checkout</h1>
      <p class="muted">Subtotal ${peso(cartTotal())}. This preview does not charge a card.</p>
      <form class="form" data-action="place">
        <label>Full name<input name="name" required autocomplete="name"></label>
        <label>Mobile<input name="mobile" required inputmode="tel" placeholder="09"></label>
        <label>Address<input name="address" required></label>
        <label>Region
          <select name="region" required>
            <option value="NCR">Metro Manila · shipping ₱80</option>
            <option value="Luzon">Rest of Luzon · shipping ₱120</option>
            <option value="Visayas">Visayas · shipping ₱180</option>
            <option value="Mindanao">Mindanao · shipping ₱180</option>
          </select>
        </label>
        <fieldset class="pay-options">
          <legend class="kind">Payment</legend>
          <label><input type="radio" name="pay" value="GCash" checked> GCash via PayMongo</label>
          <label><input type="radio" name="pay" value="Card"> Card via PayMongo</label>
          <label><input type="radio" name="pay" value="Maya"> Maya via PayMongo</label>
          <label><input type="radio" name="pay" value="COD" ${codAllowed ? "" : "disabled"}> Cash on delivery ${codAllowed ? "(Luzon and Metro Manila, up to ₱3,000)" : "(unavailable above ₱3,000)"}</label>
        </fieldset>
        <p class="notice" data-region-note hidden></p>
        <button class="primary" type="submit">Place order</button>
      </form>
    </section>
  `;
}

function renderDone() {
  main.innerHTML = `
    <section class="panel">
      <p class="kind">Order received</p>
      <h1>Thanks for shopping at Pao.</h1>
      <p>This is a preview, so no payment was taken. On the live WooCommerce store, PayMongo or cash on delivery would confirm the order and email the receipt.</p>
      <button class="primary" type="button" data-action="shop">Back to shop</button>
    </section>
  `;
}

document.body.addEventListener("click", (event) => {
  const target = event.target.closest("[data-action]");
  if (!target) return;
  const action = target.dataset.action;

  if (action === "shop") {
    state.view = "shop";
    render();
  } else if (action === "filter") {
    state.filter = target.dataset.filter;
    state.view = "shop";
    render();
  } else if (action === "open") {
    state.productId = target.dataset.id;
    const opened = findProduct(target.dataset.id);
    state.size = opened.sizes ? (opened.sizes.includes("M") ? "M" : opened.sizes[0]) : "";
    state.view = "product";
    render();
  } else if (action === "size") {
    state.size = target.dataset.size;
    render();
  } else if (action === "add") {
    const product = findProduct(target.dataset.id);
    const size = product.sizes ? state.size : (product.detail || "One size");
    const key = `${product.id}-${size}`;
    const existing = state.cart.find((item) => item.key === key);
    if (existing) existing.qty += 1;
    else state.cart.push({ key, id: product.id, size, qty: 1 });
    state.view = "cart";
    render();
  } else if (action === "cart") {
    state.view = "cart";
    render();
  } else if (action === "qty") {
    const item = state.cart.find((line) => line.key === target.dataset.key);
    item.qty += Number(target.dataset.dir);
    if (item.qty < 1) state.cart = state.cart.filter((line) => line.key !== item.key);
    render();
  } else if (action === "remove") {
    state.cart = state.cart.filter((line) => line.key !== target.dataset.key);
    render();
  } else if (action === "checkout") {
    state.view = "checkout";
    render();
  }
});

document.body.addEventListener("change", (event) => {
  if (event.target.name !== "region") return;
  const note = document.querySelector("[data-region-note]");
  const cod = document.querySelector('input[value="COD"]');
  const far = event.target.value === "Visayas" || event.target.value === "Mindanao";
  if (far) {
    note.hidden = false;
    note.textContent = "Visayas and Mindanao pay online before the parcel ships. Cash on delivery is turned off for this address.";
    if (cod) {
      cod.disabled = true;
      if (cod.checked) document.querySelector('input[value="GCash"]').checked = true;
    }
  } else if (cartTotal() <= COD_LIMIT) {
    note.hidden = true;
    if (cod) cod.disabled = false;
  }
});

document.body.addEventListener("submit", (event) => {
  const form = event.target;
  if (form.dataset.action !== "place") return;
  event.preventDefault();
  const data = new FormData(form);
  const region = data.get("region");
  const pay = data.get("pay");
  if ((region === "Visayas" || region === "Mindanao") && pay === "COD") return;
  if (pay === "COD" && cartTotal() > COD_LIMIT) return;
  state.cart = [];
  state.view = "done";
  render();
});

render();
