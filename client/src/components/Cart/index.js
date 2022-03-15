import React, { useEffect } from 'react';
import { idbPromise } from '../../utils/helpers';
import CartItem from '../CartItem';
import { useStoreContext } from '../../utils/GlobalState';
import { TOGGLE_CART, ADD_MULTIPLE_TO_CART } from '../../utils/actions';
import './style.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmarkCircle, faHeart } from '@fortawesome/free-solid-svg-icons'


const Cart = () => {
  const [state, dispatch] = useStoreContext();

  useEffect(() => {
    async function getCart() {
      const cart = await idbPromise('cart', 'get');
      dispatch({ type: ADD_MULTIPLE_TO_CART, products: [...cart] });
    }

    if (!state.cart.length) {
      getCart();
    }
  }, [state.cart.length, dispatch]);

  function toggleCart() {
    dispatch({ type: TOGGLE_CART });
  }

  if (!state.cartOpen) {
    return (
      <div className="cart-closed text-center" onClick={toggleCart}>
        <FontAwesomeIcon 
          aria-label="trash"
          icon={faHeart}
          className='text-white p-2 pb-0'
        />
      </div>
    );
  }

  return (
    <div className="cart bg-light">
      <FontAwesomeIcon 
        className="close" 
        onClick={toggleCart} 
        icon={faXmarkCircle} 
      />
      <h2 className='px-2 text-center pb-3'>Liked items</h2>
      {state.cart.length ? (
        <div>
          {state.cart.map((item) => (
            <CartItem key={item._id} item={item} />
          ))}
        </div>
      ) : (
        <h3 className='text-center'>
          You haven't liked anything yet!
        </h3>
      )}
    </div>
  );
};

export default Cart;
