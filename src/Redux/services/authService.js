import axios from 'axios';

const signIn = async (email, password) => {
  try {
    const { data } = await axios.post(
      `${process.env.REACT_APP_SERVER_URL}/api/users/signin`,
      {
        email,
        password,
      }
    );
    localStorage.setItem('userInfo', JSON.stringify(data));
    return {
      payload: data,
    };
  } catch (e) {}
};
const signUp = async (name, email, password) => {
  try {
    const { data } = await axios.post(
      `${process.env.REACT_APP_SERVER_URL}/api/users/signup`,
      {
        name,
        email,
        password,
      }
    );
    localStorage.setItem('userInfo', JSON.stringify(data));
    return {
      payload: data,
    };
  } catch (error) {}
};

const UpdateUser = async (name, email, password, token) => {
  try {
    const { data } = await axios.put(
      `${process.env.REACT_APP_SERVER_URL}/api/users/profile`,
      {
        name,
        email,
        password,
      },
      {
        headers: { Authorization: `Bearer ${token}` },
      }
    );
    localStorage.setItem('userInfo', JSON.stringify(data));
    return {
      payload: data,
    };
  } catch (error) {}
};

const signOut = async () => {
  localStorage.removeItem('userInfo');
  localStorage.removeItem('shippingAddress');
  localStorage.removeItem('paymentMethod');
};
export default { signIn, signUp, UpdateUser, signOut };
