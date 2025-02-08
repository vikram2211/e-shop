import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useCart } from "../context/CartContext";
import "./ProductDetails.css";

const ProductDetails = () => {
  const { id } = useParams();
  const { cart, addToCart } = useCart(); 
  const [product, setProduct] = useState(null);

  const isInCart = cart.some(item => item.id === Number(id)); 

  useEffect(() => {
    fetch(`https://api.escuelajs.co/api/v1/products/${id}`)
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, [id]);

  const handleAddToCart = () => {
    if (product) {
      addToCart(product); 
    }
  };

  if (!product) return <h2>Loading...</h2>;

  return (
    <div className="details">
      <img src={product.images[0]} alt={product.title} />
      <h2>{product.title}</h2>
      <p><span><b>Description:</b></span> {product.description}</p>
      <p><span><b>Price:</b></span> ${product.price}</p>
      <button
        className="cart_btn"
        onClick={handleAddToCart}
        disabled={isInCart}
      >
        {isInCart ? "Added to Cart" : "Add to Cart"}
      </button>
    </div>
  );
};

export default ProductDetails;
