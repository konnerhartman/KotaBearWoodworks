import React from 'react';
import { Link } from "react-router-dom";
import { useStoreContext } from "../../utils/GlobalState";
import { REMOVE_FROM_CART } from "../../utils/actions";
import { idbPromise } from "../../utils/helpers";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashCan } from '@fortawesome/free-solid-svg-icons'


const FavoriteItem = ({ item }) => {

  const [, dispatch] = useStoreContext();

  const removeFromCart = item => {
    dispatch({
      type: REMOVE_FROM_CART,
      _id: item._id
    });
    idbPromise('cart', 'delete', { ...item });

  };

  return (
    <div className="card d-inline-flex m-2 p-2 shadow">
      <Link to={`/products/${item._id}`}>
        <img
          className='card-img-top favorite-img'
          src={`/images/${item.image}`}
          alt=""
        />
      </Link>
      <div className="card-body row">
        <Link className='col-10 text-dark text-decoration-none' to={`/products/${item._id}`}>
          <h5 className="card-title">{item.name}</h5>
        </Link>
        <FontAwesomeIcon 
          className='col-1 p-1'
          aria-label="trash"
          onClick={() => removeFromCart(item)}
          icon={faTrashCan} 
        />
      </div>
    </div>
  );
}

export default FavoriteItem;