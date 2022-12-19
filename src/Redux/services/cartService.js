import axios from 'axios';

const addToCart = async (item, existItem) => {
  const quantity = existItem ? existItem.quantity + 1 : 1;
  const { data } = await axios.get(
    `${process.env.REACT_APP_SERVER_URL}/api/products/${item._id}`
  );
  if (data.countInStock < quantity) {
    window.alert('Sorry. Product is out of stock');
    return;
  }
  return {
    payload: { ...item, quantity },
  };
};

const removeToCart = async (item) => {
  return {
    payload: item,
  };
};

const updateToCart = async (item, quantity) => {
  const { data } = await axios.get(
    `${process.env.REACT_APP_SERVER_URL}/api/products/${item._id}`
  );
  if (data.countInStock < quantity) {
    window.alert('Sorry. Product is out of stock');
    return;
  }
  return {
    payload: { ...item, quantity },
  };
};

export default { addToCart, removeToCart, updateToCart };
