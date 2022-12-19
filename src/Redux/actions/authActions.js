import { TYPE } from '../reducers/reducer';
import authService from '../services/authService';

const singIn = (email, password, navigate, redirect) => {
  return (dispatch) => {
    authService
      .signIn(email, password)
      .then((authResponse) => {
        dispatch({
          type: TYPE.USER_SIGNIN,
          payload: authResponse.payload,
        });
      })
      .then(() => navigate(redirect || '/'))
      .catch();
  };
};
const singUp = (name, email, password, navigate, redirect) => {
  return (dispatch) => {
    authService
      .signUp(name, email, password)
      .then((authResponse) => {
        dispatch({
          type: TYPE.USER_SIGNIN,
          payload: authResponse.payload,
        });
      })
      .then(() => navigate(redirect || '/'))
      .catch();
  };
};
const update = (...arg) => {
  return (dispatch) => {
    authService
      .UpdateUser(...arg)
      .then((authResponse) => {
        dispatch({
          type: TYPE.USER_SIGNIN,
          payload: authResponse.payload,
        });
      })
      .catch();
  };
};

export default { singIn, singUp, update };
