import React from "react";
import { Link } from "react-router-dom";

function ProductItem(item) {

  const {
    image,
    name,
    _id
  } = item;

  return (
    <div className="card px-1 py-1">
      <Link to={`/products/${_id}`}>
        <img
          alt={name}
          src={`/images/${image}`}
        />
        <p>{name}</p>
      </Link>
      </div>
  );
}

export default ProductItem;
