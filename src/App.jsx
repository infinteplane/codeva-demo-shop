import { useState } from "react";
import { products } from "./data/products.js";
import ProductCard from "./components/ProductCard.jsx";
import CartSummary from "./components/CartSummary.jsx";

export default function App() {
  const [cart, setCart] = useState([]);

  function addToCart(product) {
    setCart((items) => {
      const existing = items.find((item) => item.id === product.id);
      if (existing) {
        return items.map((item) => (item.id === product.id ? { ...item, qty: item.qty + 1 } : item));
      }
      return [...items, { ...product, qty: 1 }];
    });
  }

  return (
    <main className="shop">
      <header>
        <h1>Chai &amp; Clay</h1>
        <p>Handmade mugs from Multan</p>
      </header>
      <section className="grid">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} onAdd={addToCart} />
        ))}
      </section>
      <CartSummary items={cart} />
    </main>
  );
}
