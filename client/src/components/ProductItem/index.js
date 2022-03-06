import React from "react";
import { Link } from "react-router-dom";
import { pluralize } from "../../utils/helpers"
import { useStoreContext } from "../../utils/GlobalState";
import { ADD_TO_CART } from "../../utils/actions";
import { idbPromise } from "../../utils/helpers";

function ProductItem(item) {
  const [state, dispatch] = useStoreContext();

  const {
    image,
    name,
    _id,
  } = item;

  const { cart } = state

  const addToCart = () => {
    const itemInCart = cart.find((cartItem) => cartItem._id === _id)
    if (itemInCart) {
      idbPromise('cart', 'put', {
        ...itemInCart,
        purchaseQuantity: parseInt(itemInCart.purchaseQuantity) + 1
      });
    } else {
      dispatch({
        type: ADD_TO_CART,
        product: { ...item, purchaseQuantity: 1 }
      });
      idbPromise('cart', 'put', { ...item, purchaseQuantity: 1 });
    }
  }

  return (
    <div className="card p-2 m-2 d-inline-flex">
      <Link to={`/products/${_id}`}>
        <img
          className="card-img-top"
          alt={name}
          src={`/images/${image}`}
        />
      </Link>
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
        <div className="card-text">Available</div>
      </div>
      <button className="btn btn-primary" onClick={addToCart}>Add to favorites</button>
    </div>
  );
}

export default ProductItem;
