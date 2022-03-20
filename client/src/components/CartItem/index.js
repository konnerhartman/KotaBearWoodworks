import React from 'react';
import { useStoreContext } from "../../utils/GlobalState";
import { REMOVE_FROM_CART } from "../../utils/actions";
import { idbPromise } from "../../utils/helpers";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashCan } from '@fortawesome/free-solid-svg-icons'


const CartItem = ({ item }) => {

  const [, dispatch] = useStoreContext();

  const removeFromCart = item => {
    dispatch({
      type: REMOVE_FROM_CART,
      _id: item._id
    });
    idbPromise('cart', 'delete', { ...item });

  };

  return (
    <div className="d-inline-flex">
      <div>
        <img
          src={`/images/${item.image}`}
          alt=""
        />
      </div>
      <div>
        <p>{item.name}</p>
        <div>
          <FontAwesomeIcon 
            aria-label="trash"
            onClick={() => removeFromCart(item)}
            icon={faTrashCan} 
          />
        </div>
      </div>
    </div>
  );
}

export default CartItem;