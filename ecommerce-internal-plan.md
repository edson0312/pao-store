# Internal plan: online store for physical products

**Audience:** internal planning for the organization  
**Market:** buyers in the Philippines, prices in Philippine peso (PHP)  
**Platform:** WooCommerce on WordPress (decided)  
**Gateway:** PayMongo (decided)  
**Timeline:** about four weeks with one developer  
**Status:** approved to build. Week 1 starts when the host and domain are ready. The launch product list is still to be filled in.  

Rates and payment-method lists below were checked against public Shopify, PayMongo, and Maya pages in late 2026. Confirm them on the provider’s site before signing a plan or a merchant account. This plan is an operating proposal, not legal or tax advice.

---

## 1. Decision

The organization will build version one on **WooCommerce on WordPress**.

The store sells tangible goods to customers in the Philippines and is planned for launch in about four weeks with one developer. It can list **any physical product the organization can source and ship**. Version one is a single store the organization runs: a catalog and checkout, with the organization as the seller. Other sellers listing on the site would be a later phase, if ever.

Shopify and a custom build were compared in section 4 and were not selected. That comparison stays in the plan as the record of the choice.

---

## 2. What we are building

A public shop where a customer in the Philippines can:

- browse physical products
- open a product page
- add items to a cart
- check out as a guest, or with an account
- pay with methods people in the Philippines actually use
- see a shipping charge based on where the parcel is going
- receive an email when the order is placed and when its status changes

Staff can add a product, set a price and stock, and manage the order from an admin screen, without asking the developer to edit code for every new item.

### Operating rule for “any product that is available”

The software can hold any tangible SKU. A product is published only when all four of these are true:

1. There is a supplier and a known cost.
2. The selling price covers product cost, payment fees, packaging, shipping contribution, and a margin the organization accepts.
3. The listing has a name, price, at least one photo, and a short description a buyer can trust.
4. There is a fulfillment path: units already in the organization’s hands, or a supplier who will release the item within a handling time printed on the product page.

Items that need a special license (medicine, food with specific permits, and similar regulated goods) stay off the store until the organization confirms it is allowed to sell them.

Version one ships inside the Philippines. International selling waits until domestic checkout, payment, and delivery are stable.

---

## 3. Version one scope

Included in the four-week build:

| Capability | What the customer or staff gets |
|---|---|
| Product pages | Name, price, photos, description, variants such as size or color, stock status |
| Cart | Add, update quantity, remove, see subtotal |
| Guest checkout | Buy without creating an account |
| Customer accounts | Register, log in, see past orders |
| Admin | Add and edit products, prices, stock, and orders |
| Shipping calculator | Charge based on destination zone and, where needed, weight or shipping class |
| Order emails | Confirmation to the customer, notification to staff, and a message when the order is completed or updated |

Also included because a Philippine store needs them to take real orders:

- Store currency set to PHP
- Online payment through PayMongo (GCash, Maya, cards, and the other methods enabled on that account)
- Cash on delivery up to ₱3,000 in Metro Manila and the rest of Luzon. Visayas and Mindanao pay online before the parcel ships.
- Basic pages: home, shop, cart, checkout, account, contact, shipping policy, return policy, privacy notice

Left for a later phase:

- A phone app
- Other sellers listing their own products on our site
- Live courier rates from J&T, LBC, Ninja Van, or Flash pulled at checkout
- Selling outside the Philippines
- Subscriptions, gift cards, and a loyalty program
- Replacing WooCommerce with a custom platform (section 4)

---

## 4. Platform decision

**Selected: WooCommerce on WordPress.** Shopify and a custom build are kept here so the advantages that were weighed stay on record.

### WooCommerce on WordPress — selected

WordPress is the site. WooCommerce is the shop: products, cart, checkout, accounts, orders, and shipping zones. The developer hosts it, points a domain at it, and configures plugins. Staff then add products in the admin.

**Advantages**

- The features in section 3 are built in. A single developer can configure them in weeks.
- The organization owns the site, the product data, and the customer list.
- There is no platform percentage on each sale. Hosting is a fixed monthly cost.
- Philippine peso is a normal store currency.
- PayMongo and Maya both publish WooCommerce plugins, so GCash, Maya, cards, and other enabled methods can sit on one checkout.
- Cash on delivery is a standard payment method in WooCommerce, which matters for many Philippine buyers.
- Shipping zones can price NCR, the rest of Luzon, Visayas, and Mindanao differently without a courier contract on day one.
- New products are an admin task. The developer does not rebuild the site when the catalog grows.
- If the organization already works in WordPress, the same person can maintain the shop.

**What it asks of us**

- We pay for hosting, a domain, and backups, and someone applies updates.
- Plugin choice stays small. One payment plugin, one well-supported theme, and WooCommerce itself. Extra plugins are a later decision.
- PayMongo’s WooCommerce plugin expects the store currency to be PHP. Live keys require a registered business on the PayMongo account, not an individual account.

**Rough running cost**

- Hosting suitable for WooCommerce: about USD 15–40 per month, or a local host in a similar peso range
- Domain: about ₱500–1,000 per year, depending on the name
- Payment fees: the gateway’s rate only (see section 5)
- Theme: a maintained free theme, or a one-time paid theme if the layout needs it

### Shopify — not selected

Shopify is a hosted store. Catalog, checkout, hosting, SSL, and admin are Shopify’s. The developer sets up the theme, payments, shipping, and products. Shopify runs the servers.

**Advantages**

- Fastest path when the developer should avoid server setup, security patches, and hosting incidents.
- Checkout, inventory, discount codes, and order screens are polished and already tested at large scale.
- Staff can add any number of products. Unlimited products are part of the standard plans.
- PayMongo, Maya, HitPay, and similar gateways have Shopify apps, so GCash, Maya, QR Ph, and cards are available.
- Cash on delivery and bank transfer can be added as manual payment methods.
- Abandoned-checkout email and a large app store are available when the store is ready to market harder.
- Support sits with Shopify for platform outages.

**What it asks of us in the Philippines**

Shopify Payments, Shopify’s own card processor, is not available to businesses based in the Philippines (confirmed against Shopify’s country coverage and 2026 write-ups of that list). Every online card or e-wallet payment therefore goes through a third-party gateway, and Shopify adds its own fee on top of the gateway:

| Shopify plan (monthly price if billed monthly) | Extra fee on third-party payments |
|---|---|
| Basic, USD 39 / month | 2% |
| Grow, USD 105 / month | 1% |
| Advanced, USD 399 / month | 0.6% |

Yearly billing lowers the plan price (Basic is listed at USD 29 / month when paid yearly). The percentage still applies. On a ₱100,000 month of paid orders, Basic adds about ₱2,000 before the gateway’s own fee. Manual methods such as cash on delivery are treated differently under Shopify’s billing rules; confirm the current help article before relying on that exemption.

Calculated live shipping rates from carriers are restricted on the Basic plan. Zone-based rates, which this plan uses in version one, work on Basic.

**Rough running cost**

- Plan: USD 39 / month on Basic billed monthly, or USD 29 / month billed yearly
- Plus 2% of third-party payment volume on Basic
- Plus the gateway’s own rate (section 5)
- Apps, if we add any, are often a separate monthly charge

### Custom build (Next.js and Medusa) — not selected for version one

The storefront is a Next.js site. Medusa, an open-source commerce backend, handles products, carts, and orders. PostgreSQL stores the data. Payments are integrated through a gateway API. The developer designs and hosts both parts.

**Advantages**

- The organization owns the code and can shape checkout, catalog rules, and admin without an app store.
- No Shopify percentage and no WordPress plugin constraints.
- A good fit later if the store needs unusual pricing, a private ordering portal, or a workflow packaged platforms keep blocking.
- The same stack can grow into a larger system if the organization hires more developers.

**What it asks of us**

- Version one of section 3 is several months for one developer, because payments, emails, accounts, admin, shipping rules, and security are built or assembled piece by piece.
- PayMongo or Maya must be integrated and kept working through API changes.
- The organization depends on that developer for every fix until there is a second person who knows the code.
- This option misses the “in weeks” target.

A custom build fits later, after the shop has steady orders and a reason WooCommerce cannot support the workflow. It is not the version-one build.

### Why WooCommerce was selected

| Need | How WooCommerce meets it |
|---|---|
| Live in about four weeks with one developer | Products, cart, checkout, accounts, and orders are already in the plugin |
| Buyers in the Philippines | PHP currency, PayMongo or Maya, and built-in cash on delivery |
| Any physical product the organization can ship | Staff add the next SKU in the admin |
| Predictable cost | Hosting is a fixed bill. The platform takes no percentage of the sale |

---

## 5. Payments and delivery in the Philippines

### Payments in version one

**PayMongo** is the gateway. The store currency is PHP. One gateway keeps reconciliation simple. Published 2026 rates include roughly:

- GCash about 2.23%
- Maya about 1.79%
- Cards about 3.125% + a small fixed peso amount
- QR Ph and online banking at lower published rates

Maya Checkout stays a backup only if the PayMongo merchant account cannot be approved in time. Its WooCommerce plugin is already documented, and its checkout card rate is published at 3.5% + ₱10.

**Cash on delivery**, using these working rules:

| Rule | Setting |
|---|---|
| Maximum order total | ₱3,000 |
| Where it is offered | Metro Manila and the rest of Luzon |
| Visayas and Mindanao | Pay online before the parcel ships |
| Before dispatch | Staff confirm the order, then book the courier |
| Who collects the cash | The courier, under that courier’s COD service |

These figures are the operating default because the organization approved cash on delivery with a cap and with limited zones, and did not name a different amount. Change the cap in WooCommerce if finance wants a different number. No code change is required.

The PayMongo account needs business documents. Submit that application in week 1. Test mode lets the developer finish checkout before live approval.

### Shipping calculator in version one

Charge by zone, using rates the organization sets from real courier quotes:

| Zone | Examples |
|---|---|
| Metro Manila | NCR cities |
| Luzon | Outside NCR |
| Visayas | Island group |
| Mindanao | Island group |

Optional add-ons in the same setup: a heavier shipping class for bulky goods, and a longer handling time on products that are ordered from a supplier after the sale.

Couriers to price against: J&T, Ninja Van, Flash Express, LBC, and JRS, plus a same-day option such as GrabExpress or Lalamove only for Metro Manila if staff can dispatch it. The customer sees our zone price at checkout. Staff books the actual pickup in the courier’s own tool. Automatic label-buying inside the shop is a later project, after we know which courier carries most orders.

---

## 6. Four-week schedule

One developer. The organization supplies decisions, documents, and product information in the same weeks. Slippage usually comes from merchant-account approval and from product photos arriving late, so those start immediately.

### Week 1 — Foundation

**Developer**

- Install WordPress and WooCommerce on the host
- Set the store currency to PHP, install SSL, and connect the domain when it is ready
- Create the core pages: Home, Shop, Cart, Checkout, My Account, and Contact
- Install the PayMongo plugin in test mode, and turn on cash on delivery with a ₱3,000 limit for Metro Manila and the rest of Luzon
- Choose one maintained theme and set up daily backups

**Organization**

- Submit the PayMongo merchant application with business documents
- Buy the domain if there is not one already
- Name a staff member who will own orders after launch
- List the first products and suppliers (a short launch catalog is enough)

### Week 2 — Catalog and pages

**Developer**

- Product structure: simple products and variable products (size, color)
- Shop, product, cart, and account layouts that work on a phone
- Admin checklist so staff can add a product without the developer

**Organization**

- Prices, costs, photos, and short descriptions for the launch catalog
- Handling time for each product (in stock versus ordered after payment)
- Draft text for shipping, returns, and privacy. A lawyer or the organization’s usual reviewer should approve the wording.

### Week 3 — Checkout, shipping, email

**Developer**

- Guest checkout and customer accounts
- Payment methods in test mode, including cash on delivery
- Shipping zones and rates from the organization’s courier quotes
- Order emails: new order to the customer, new order to staff, completed order, and a status update
- Place test orders for each payment method and each zone

**Organization**

- Provide the peso rates for each zone
- Name who receives order emails and how fast they must be acted on

### Week 4 — Launch

**Developer**

- Switch payments to live after the merchant account is approved
- Run one small real purchase and refund it
- Check the main path on a phone: find a product, add to cart, check out, receive the email
- Train staff on adding a product and moving an order from paid to shipped
- Write a one-page handover: where to log in, how to add a product, how backups run, who to call if checkout fails

**Organization**

- Staff process the test order as they will process a real one
- Publish the launch catalog only
- Announce the store when test checkout has succeeded

If the payment account is still pending at the end of week 4, launch with cash on delivery and bank transfer in the zones we can serve, and turn on GCash and cards the day the account is approved. The store itself does not need to wait.

---

## 7. People

| Role | Responsibility |
|---|---|
| Developer (one) | Build, configure, test, train, and hand over version one. Stay on call the first two weeks after launch for checkout and payment issues. |
| Organization lead | Budget, policies, and who is allowed to refund |
| Order owner | Watch new-order email, pack or place the supplier order, book the courier, mark the order complete |
| Catalog owner | Photos, prices, stock counts, and new products after launch. This can be the same person as the order owner at the start. |

After handover, new ordinary products are a staff task. The developer comes back for payment issues, theme changes, and the later-phase items in section 3.

---

## 8. Money to set aside

Figures are planning ranges, not quotes.

**To launch (one-time)**

- Developer time for four weeks. Price this at the organization’s agreed rate.
- Domain registration
- Theme, if a paid one is chosen
- A small budget for sample courier shipments so zone rates are real

**Every month after launch**

- Hosting, plus gateway fees only when a sale happens
- Courier costs, recovered partly through the shipping charge
- Staff time for orders and customer messages

**Worked example, ₱100,000 of online payments in a month**

Assume a blend near 2.5% gateway fees (between a Maya e-wallet rate and a card rate). Exact blend depends on how customers pay.

- Gateway: about ₱2,500
- Platform percentage: none. Hosting is the fixed bill, on the order of one to two thousand pesos.

Cash on delivery avoids the gateway percentage and adds collection risk and courier COD charges. Price those into the COD zone rates.

---

## 9. Risks and how version one handles them

| Risk | Handling |
|---|---|
| Merchant account approval takes longer than the build | Start the application in week 1. Launch can open with COD and bank transfer. |
| “Any product” becomes a catalog nobody can fulfill | Publish only SKUs that meet the four rules in section 2. |
| Cash on delivery refusals | Cap the amount, limit the zones, and confirm the order before dispatch. |
| Shipping price is wrong | Use zone tables we control. Adjust after the first real shipments. |
| The site needs updates and backups | Daily backups from week 1. The developer applies WordPress, WooCommerce, and plugin updates on a set day, and the organization keeps its own admin login. |
| One developer is the only person who can fix checkout | Handover note in week 4, a backup of the site, and admin access held by the organization, not only by the developer. |
| Competing with Shopee or Lazada on general assortment | Version one is our own shop for customers who will buy from us. Winning search on every commodity product is a marketing project, outside this build. |

---

## 10. Decisions

Confirmed for version one:

| # | Item | Decision |
|---|---|---|
| 1 | Gateway | PayMongo. Maya Checkout only if PayMongo cannot be approved in time. |
| 2 | Launch catalog | Every live product has a supplier cost, a selling price, at least one photo, and a handling time. The organization fills in the first product rows during week 1. |
| 3 | Cash on delivery | Up to ₱3,000, Metro Manila and the rest of Luzon. Visayas and Mindanao pay online first. |
| 4 | Start | Week 1 begins when the host is ready and the domain is chosen. |

The build does not need a custom software design. The developer still needs three inputs from the organization in week 1: the host login, the domain name, and the first product rows.

### Launch catalog sheet

Copy one row per product and fill it in. Leave a row out of the store until all five columns are filled.

| Product | Supplier cost (₱) | Selling price (₱) | Handling time | Photo ready |
|---|---|---|---|---|
| | | | In stock, or number of days | Yes / not yet |
| | | | | |
| | | | | |
