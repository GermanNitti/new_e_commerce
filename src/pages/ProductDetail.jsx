// /pages/ProductDetail.jsx
import { useParams } from "react-router-dom";
import products from "../data/products.json";
import "../styles/productdetail.css";

export default function ProductDetail() {
  const { id } = useParams();
  const product = products.find((p) => p.id === parseInt(id));

  if (!product) return <p className="not-found">Producto no encontrado</p>;

  return (
    <div className="product-detail">
      <h1 className="product-title">{product.name}</h1>
      <img
        className="product-image"
        src={product.image}
        alt={product.name}
      />
      <p className="product-description">{product.description}</p>
      <p className="product-price">Precio: ${product.price}</p>

      <button className="buy-button" onClick={() => alert(`Compraste: ${product.name}`)}>
        Comprar
      </button>
    </div>
  );
}
