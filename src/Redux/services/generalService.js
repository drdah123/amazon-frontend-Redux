import axios from 'axios';

const saveShippingAddress = async (
  fullName,
  address,
  city,
  postalCode,
  country,
  location
) => {
  localStorage.setItem(
    'shippingAddress',
    JSON.stringify({
      fullName,
      address,
      city,
      postalCode,
      country,
      location,
    })
  );
  return {
    payload: {
      fullName,
      address,
      city,
      postalCode,
      country,
      location,
    },
  };
};

const saveShippingAddressLocation = async (location, place) => {
  return {
    payload: {
      lat: location.lat,
      lng: location.lng,
      address: place.formatted_address,
      name: place.name,
      vicinity: place.vicinity,
      googleAddressId: place.id,
    },
  };
};

const saveMethodPayment = async (paymentMethod) => {
  localStorage.setItem('paymentMethod', paymentMethod);
  return {
    payload: paymentMethod,
  };
};

const placeOrder = async (cart, token, navigate) => {
  try {
    const { data } = await axios.post(
      `${process.env.REACT_APP_SERVER_URL}/api/orders`,
      {
        orderItems: cart.cartItems,
        shippingAddress: cart.shippingAddress,
        paymentMethod: cart.paymentMethod,
        itemsPrice: cart.itemsPrice,
        shippingPrice: cart.shippingPrice,
        taxPrice: cart.taxPrice,
        totalPrice: cart.totalPrice,
      },
      {
        headers: {
          authorization: `Bearer ${token}`,
        },
      }
    );
    localStorage.removeItem('cartItems');
    navigate(`/order/${data.order._id}`);
  } catch (error) {}
};
export default {
  saveShippingAddress,
  saveShippingAddressLocation,
  saveMethodPayment,
  placeOrder,
};
