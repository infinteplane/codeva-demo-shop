// Formats a price for the shop, e.g. 1299.5 -> "Rs 1,299.50"
export default function PriceTag({ amount }) {
  const text = amount.toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 });
  return <span className="price">Rs {text}</span>;
}
