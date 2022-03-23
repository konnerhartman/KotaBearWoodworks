import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';

import Cart from '../components/Cart';
import { useStoreContext } from '../utils/GlobalState';
import {
  REMOVE_FROM_CART,
  ADD_TO_CART,
  UPDATE_PRODUCTS,
} from '../utils/actions';
import { QUERY_PRODUCTS } from '../utils/queries';
import { idbPromise } from '../utils/helpers';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-regular-svg-icons';
import { faHeart as solidFaHeart, faAngleDoubleLeft, faScrewdriverWrench } from '@fortawesome/free-solid-svg-icons';


function Detail() {
  const [state, dispatch] = useStoreContext();
  const { id } = useParams();

  const [currentProduct, setCurrentProduct] = useState({});

  const { loading, data } = useQuery(QUERY_PRODUCTS);

  const { products, cart } = state;

  useEffect(() => {
    // already in global store
    if (products.length) {
      setCurrentProduct(products.find((product) => product._id === id));
    }
    // retrieved from server
    else if (data) {
      dispatch({
        type: UPDATE_PRODUCTS,
        products: data.products,
      });

      data.products.forEach((product) => {
        idbPromise('products', 'put', product);
      });
    }
    // get cache from idb
    else if (!loading) {
      idbPromise('products', 'get').then((indexedProducts) => {
        dispatch({
          type: UPDATE_PRODUCTS,
          products: indexedProducts,
        });
      });
    }
  }, [products, data, loading, dispatch, id]);

  const addToCart = () => {
    const itemInCart = cart.find((cartItem) => cartItem._id === id);
    if (itemInCart) {
      idbPromise('cart', 'put', {
        ...itemInCart,
        purchaseQuantity: parseInt(itemInCart.purchaseQuantity) + 1,
      });
    } else {
      dispatch({
        type: ADD_TO_CART,
        product: { ...currentProduct, purchaseQuantity: 1 },
      });
      idbPromise('cart', 'put', { ...currentProduct, purchaseQuantity: 1 });
    }
  };

  const removeFromCart = () => {
    dispatch({
      type: REMOVE_FROM_CART,
      _id: currentProduct._id,
    });

    idbPromise('cart', 'delete', { ...currentProduct });
  };

  return (
    <div className='gallery'>
      {currentProduct && cart ? (
        <div>
          <p>
            <Link to="/gallery" className='backBtn p-2 text-dark'>
              <FontAwesomeIcon icon={faAngleDoubleLeft} /> Back to Gallery
            </Link>
          </p>
          <div className='text-center'>
            <div className='row'>
              <h2 className='col-lg-7 col-9 text-end'><span>{currentProduct.name}</span></h2>
              <p className='likeBtn col-lg-5 col-3 text-start'>
                <button 
                hidden={cart.find((p) => p._id === currentProduct._id)}
                onClick={addToCart}
                >
                  <FontAwesomeIcon icon={faHeart} />
                </button>
                <button
                  hidden={!cart.find((p) => p._id === currentProduct._id)}
                  onClick={removeFromCart}
                >
                  <FontAwesomeIcon icon={solidFaHeart} />
                </button>
              </p>
            </div>
            <div className='row'>
              <div className='col-lg-6 col-sm-12 p-2'>
                <img
                  className='rounded shadow-lg detail-img'
                  src={`/images/${currentProduct.image}`}
                  alt={currentProduct.name}
                />
              </div>
              <div className='col-lg-6 col-sm-12'>
                <h4>Available:</h4>
                <p className='m-0 pb-4 detail-text'><span>{currentProduct.availability}</span></p>
                <h4>Details:</h4>
                <p className='m-0 detail-text'>{currentProduct.description}</p>
              </div>
            </div>
          </div>
        </div>
      ) : null}
      {loading ? <FontAwesomeIcon className='spinner' icon={faScrewdriverWrench} /> : null}
      <Cart />
    </div>
  );
}

export default Detail;
