import { useState } from "react";
import "./App.css";
import ProductCard from "./ProductCard.jsx";
function App() {
  const data = [
    {
      productImage:
        "https://www.skechers.in/on/demandware.static/-/Sites-skechers_india/default/dw17940ed5/images/large/195969748763-1.jpg",
      productName: "Sketchers",
      // ProductPrice: "$100.00",
      productRatings: "96.00%",
    },
    {
      productImage:
        "https://images.unsplash.com/flagged/photo-1556637640-2c80d3201be8?auto=format&fit=crop&q=80&w=1000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      productName: "Adidas",
      // ProductPrice: "$150.00",
      productRatings: "99.00%",
    },
    {
      productImage:
        "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&q=80&w=1000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      productName: "Nike",
      productRatings: "98.00%",
    },
    {
      productImage:
        "https://images.unsplash.com/photo-1605034313761-73ea4a0cfbf3?auto=format&fit=crop&q=80&w=1000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      productName: "Puma",
      productRatings: "97.01%",

    },
    ];

  const [product, setProduct] = useState([]);
  const [inCart, setInCart] = useState(0);

  // dummy dely
  setTimeout(() => {
    setProduct(data);
  }, 1000);

  return (
    <div className="app">
      <div className="cart-comp">
        <h1>CART {inCart}</h1>
      </div>

      <div className="cart-area">
        {product?.map((prod, idx) => (
          <ProductCard
            key={idx}
            productImg={prod.productImage}
            productName={prod.productName}
            // ProductPrice={prod.ProductPrice}
            productRatings={prod.productRatings}
            inCart={inCart}
            setInCart={setInCart}
          />
        ))}
      </div>
    </div>
  );
}

export default App;