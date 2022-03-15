import React, { useEffect } from 'react';
import { idbPromise } from '../utils/helpers';
import CartItem from '../components/CartItem';
import { useStoreContext } from '../utils/GlobalState';
import { ADD_MULTIPLE_TO_CART } from '../utils/actions';

const Favorites = () => {
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

  return (
    <div className="bg-light">
      <h2 className='px-2 text-center pb-3'>Liked items</h2>
      {state.cart.length ? (
        <div>
          {state.cart.map((item) => (
            <CartItem key={item._id} item={item} />
          ))}
        </div>
      ) : (
        <h3>
          You haven't liked anything yet!
        </h3>
      )}
    </div>
  );
};

export default Favorites;
