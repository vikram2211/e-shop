import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Home.css";

const Home = () => {
  const [products, setProducts] = useState([]);
  console.log("products",products);

  useEffect(() => {
    fetch("https://api.escuelajs.co/api/v1/products")
      .then((res) => res.json())
      .then((data) => setProducts(data)); 
  }, []);

  return (
    <div className="home">
      {products.map((product) => (
        <Link to={`/product/${product.id}`} key={product.id} className="product">
        <div className="category">{product.category.name}</div>

          <img src={product.images[0]} alt={product.title} />
          <h3>{product.title}</h3>
          <p>${product.price}</p>
        </Link>
      ))}
    </div>
  );
};

export default Home;
