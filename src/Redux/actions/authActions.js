import { TYPE } from '../reducers/reducer';
import authService from '../services/authService';

const singIn = (email, password) => {
  return (dispatch) => {
    authService
      .signIn(email, password)
      .then((authResponse) => {
        dispatch({
          type: TYPE.USER_SIGNIN,
          payload: authResponse.payload,
        });
      })
      .catch((err) => console.log(err));
  };
};
const singUp = (email, password, name) => {
  return (dispatch) => {
    authService
      .signUp(name, email, password)
      .then((authResponse) => {
        dispatch({
          type: TYPE.USER_SIGNOUT,
          payload: authResponse.payload,
        });
      })
      .catch((err) => console.log(err));
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
      .catch((err) => console.log(err));
  };
};

export default { singIn, singUp, update };
