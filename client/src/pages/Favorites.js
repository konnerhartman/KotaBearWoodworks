import React, { useEffect } from 'react';
import { idbPromise } from '../utils/helpers';
import FavoriteItem from '../components/FavoriteItem';
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
    <div className="likes bg-white text-center favorites pb-2">
      <h2 className='p-3 text-light'><span>Favorites</span></h2>
      {state.cart.length ? (
        <div>
          {state.cart.map((item) => (
            <FavoriteItem key={item._id} item={item} />
          ))}
        </div>
      ) : (
        <h3 className='p-5 text-white'>
          You haven't liked anything yet!
        </h3>
      )}
    </div>
  );
};

export default Favorites;
