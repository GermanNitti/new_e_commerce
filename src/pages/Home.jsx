import { useState } from "react";
import { Link } from "react-router-dom";
import products from "../data/products.json";
import "../styles/Home.css";

export default function Home() {
  return (
    <div>
      <h1>Productos</h1>
      <div className="products-container">
        {products.map((product) => (
          <FlipCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}

function FlipCard({ product }) {
  const [flipped, setFlipped] = useState(false);

  return (
    <div className="product-wrapper">
      <div className={`card ${flipped ? "flipped" : ""}`} onClick={() => setFlipped(!flipped)}>
        <div className="card-content">
          {/* 🔥 Líneas animadas en los bordes */}
          <div className="border-outline" />

          {/* Frente con imagen */}
          <div
            className="card-front"
            style={{ backgroundImage: `url(${product.image})` }}
          ></div>

          {/* Reverso con descripción resumida */}
          <div className="card-back">
  <ul className="product-features">
    {product.description.split("|").map((feature, index) => (
      <li key={index}>✔️ {feature.trim()}</li>
    ))}
  </ul>
  <Link to={`/product/${product.id}`} className="product-link">
    Ver más
  </Link>
</div>
        </div>
      </div>  

      {/* Título y precio debajo de la tarjeta */}
      <div className="product-info">
        <h2 className="product-title">{product.name}</h2>
        <p className="product-price">${product.price}</p>
      </div>
    </div>
  );
}
