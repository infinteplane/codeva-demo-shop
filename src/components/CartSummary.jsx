import PriceTag from "./PriceTag.jsx";

export default function CartSummary({ items }) {
  const count = items.reduce((n, item) => n + item.qty, 0);
  const total = items.reduce((sum, item) => sum + item.price * item.qty, 0);
  return (
    <aside className="cart">
      <strong>{count} items</strong> - total <PriceTag amount={total} />
    </aside>
  );
}
