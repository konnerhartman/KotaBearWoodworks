import React from "react";
import { Link } from "react-router-dom";
import { useStoreContext } from "../../utils/GlobalState";
import { ADD_TO_CART } from "../../utils/actions";
import { idbPromise } from "../../utils/helpers";

function ProductItem(item) {
  const [state, dispatch] = useStoreContext();

  const {
    image,
    name,
    _id,
    availability,
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
    <div className="card p-2 m-2 d-inline-flex shadow">
      <div>
        <Link to={`/products/${_id}`} className='text-decoration-none'>
          <img
            className="card-img-top"
            alt={name}
            src={`/images/${image}`}
          />
        <div className="card-body text-dark ">
          <h5 className="card-title">{name}</h5>
          <p className="card-text">Available: {availability}</p>
        </div>
        </Link>
        <div>
          <button className="btn btn-primary" onClick={addToCart}>Add to favorites</button>
        </div>
      </div>
    </div>
  );
}

export default ProductItem;
