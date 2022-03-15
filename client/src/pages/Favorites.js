import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { idbPromise } from '../utils/helpers';
import FavoriteItem from '../components/FavoriteItem';
import { useStoreContext } from '../utils/GlobalState';
import { ADD_MULTIPLE_TO_CART } from '../utils/actions';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDoubleLeft } from '@fortawesome/free-solid-svg-icons';

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
      <Link to="/gallery" className='backBtn p-2 text-dark'>
        <FontAwesomeIcon icon={faAngleDoubleLeft} /> Back to Products
      </Link>
      <h2 className='px-2 text-center pb-3'>Favorites</h2>
      {state.cart.length ? (
        <div>
          {state.cart.map((item) => (
            <FavoriteItem key={item._id} item={item} />
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
