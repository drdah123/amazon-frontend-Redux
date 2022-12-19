import { TYPE } from '../reducers/reducer';
import cartService from '../services/cartService';

const cartAddItem = (item, existItem) => {
  return (dispatch) => {
    cartService
      .addToCart(item, existItem)
      .then((cartResponse) => {
        dispatch({
          type: TYPE.CART_ADD_ITEM,
          payload: cartResponse.payload,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

const cartRemoveItem = (item) => {
  return (dispatch) => {
    cartService
      .removeToCart(item)
      .then((cartResponse) => {
        dispatch({
          type: TYPE.CART_REMOVE_ITEM,
          payload: cartResponse.payload,
        });
      })
      .catch((err) => console.log(err));
  };
};
const cartUpdateItem = (item, quantity) => {
  return (dispatch) => {
    cartService
      .updateToCart(item, quantity)
      .then((cartResponse) => {
        dispatch({
          type: TYPE.CART_ADD_ITEM,
          payload: cartResponse.payload,
        });
      })
      .catch((err) => console.log(err));
  };
};

export default { cartUpdateItem, cartAddItem, cartRemoveItem };
