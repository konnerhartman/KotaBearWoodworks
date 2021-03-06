import React from "react";
import ProductList from "../components/ProductList";
import CategoryMenu from "../components/CategoryMenu";
import Cart from "../components/Cart";

const Gallery = () => {
  return (
    <div className="gallery">
      <CategoryMenu />
      <ProductList />
      <Cart />
    </div>
  );
};

export default Gallery;
