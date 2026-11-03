import PriceTag from "./Pricetag.jsx";

export default function ProductCard({ product, onAdd }) {
  return (
    <article className="card">
      <h2>{product.name}</h2>
      <PriceTag amount={product.price} />
      <button onClick={() => onAdd(product)}>Add to cart</button>
    </article>
  );
}
