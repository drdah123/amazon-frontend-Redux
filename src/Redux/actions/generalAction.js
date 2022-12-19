import { TYPE } from '../reducers/reducer';
import generalService from '../services/generalService';

const setFullBoxOn = () => {
  return {
    type: TYPE.SET_FULLBOX_ON,
  };
};

const setFullBoxOff = () => {
  return {
    type: TYPE.SET_FULLBOX_OFF,
  };
};

const saveShippingAddress = (...arg) => {
  return (dispatch) => {
    generalService
      .saveShippingAddress(...arg)
      .then((saveResponse) => {
        dispatch({
          type: TYPE.SAVE_SHIPPING_ADDRESS,
          payload: saveResponse.payload,
        });
      })
      .catch((err) => console.log(err));
  };
};
const saveShippingAddressLocation = (location, place) => {
  return (dispatch) => {
    generalService
      .saveShippingAddressLocation(location, place)
      .then((saveResponse) => {
        dispatch({
          type: TYPE.SAVE_SHIPPING_ADDRESS_MAP_LOCATION,
          payload: saveResponse.payload,
        });
      })
      .catch((err) => console.log(err));
  };
};

const saveMethodPayment = (paymentMethod) => {
  return (dispatch) => {
    generalService
      .saveMethodPayment(paymentMethod)
      .then((paymentResponse) => {
        dispatch({
          type: TYPE.SAVE_PAYMENT_METHOD,
          payload: paymentResponse.payload,
        });
      })
      .catch((err) => console.log(err));
  };
};

const placeOrder = (...arg) => {
  return (dispatch) => {
    generalService
      .placeOrder(...arg)
      .then(() => {
        dispatch({
          type: TYPE.CART_CLEAR,
        });
      })
      .catch((err) => console.log(err));
  };
};

export default {
  setFullBoxOff,
  setFullBoxOn,
  saveShippingAddress,
  saveShippingAddressLocation,
  saveMethodPayment,
  placeOrder,
};
