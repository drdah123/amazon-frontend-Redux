import axios from 'axios';

const signIn = async (email, password) => {
  try {
    const { data } = await axios.post('/api/users/signin', {
      email,
      password,
    });
    localStorage.setItem('userInfo', JSON.stringify(data));
    return {
      payload: data,
    };
  } catch (e) {
    console.log(e);
  }
};
const signUp = async (name, email, password) => {
  try {
    const { data } = await axios.post('/api/users/signup', {
      name,
      email,
      password,
    });
    localStorage.setItem('userInfo', JSON.stringify(data));
    return {
      payload: data,
    };
  } catch (error) {
    console.log(error);
  }
};

const UpdateUser = async (name, email, password, token) => {
  try {
    const { data } = await axios.put(
      '/api/users/profile',
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
export default { signIn, signUp, UpdateUser };
