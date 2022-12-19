const initialState = {
  fullBox: false,
  userInfo: localStorage.getItem('userInfo')
    ? JSON.parse(localStorage.getItem('userInfo'))
    : null,

  cart: {
    shippingAddress: localStorage.getItem('shippingAddress')
      ? JSON.parse(localStorage.getItem('shippingAddress'))
      : { location: {} },
    paymentMethod: localStorage.getItem('paymentMethod')
      ? localStorage.getItem('paymentMethod')
      : '',
    cartItems: localStorage.getItem('cartItems')
      ? JSON.parse(localStorage.getItem('cartItems'))
      : [],
  },
};

export const TYPE = {
  SET_FULLBOX_ON: 'SET_FULLBOX_ON',
  SET_FULLBOX_OFF: 'SET_FULLBOX_OFF',
  CART_ADD_ITEM: 'CART_ADD_ITEM',
  CART_REMOVE_ITEM: 'CART_REMOVE_ITEM',
  CART_CLEAR: 'CART_CLEAR',
  USER_SIGNIN: 'USER_SIGNIN',
  USER_SIGNOUT: 'USER_SIGNOUT',
  SAVE_SHIPPING_ADDRESS: 'SAVE_SHIPPING_ADDRESS',
  SAVE_SHIPPING_ADDRESS_MAP_LOCATION: 'SAVE_SHIPPING_ADDRESS_MAP_LOCATION',
  SAVE_PAYMENT_METHOD: 'SAVE_PAYMENT_METHOD',
};

export function reducer2(state = initialState, action) {
  switch (action.type) {
    case TYPE.SET_FULLBOX_ON:
      return { ...state, fullBox: true };
    case TYPE.SET_FULLBOX_OFF:
      return { ...state, fullBox: false };

    case TYPE.CART_ADD_ITEM:
      // add to cart
      const newItem = action.payload;
      const existItem = state.cart.cartItems.find(
        (item) => item._id === newItem._id
      );
      const cartItems = existItem
        ? state.cart.cartItems.map((item) =>
            item._id === existItem._id ? newItem : item
          )
        : [...state.cart.cartItems, newItem];
      localStorage.setItem('cartItems', JSON.stringify(cartItems));
      return { ...state, cart: { ...state.cart, cartItems } };
    case TYPE.CART_REMOVE_ITEM: {
      const cartItems = state.cart.cartItems.filter(
        (item) => item._id !== action.payload._id
      );
      localStorage.setItem('cartItems', JSON.stringify(cartItems));
      return { ...state, cart: { ...state.cart, cartItems } };
    }
    case TYPE.CART_CLEAR:
      return { ...state, cart: { ...state.cart, cartItems: [] } };

    case TYPE.USER_SIGNIN:
      return { ...state, userInfo: action.payload };
    case TYPE.USER_SIGNOUT:
      return {
        ...state,
        userInfo: null,
        cart: {
          cartItems: [],
          shippingAddress: {},
          paymentMethod: '',
        },
      };
    case TYPE.SAVE_SHIPPING_ADDRESS:
      return {
        ...state,
        cart: {
          ...state.cart,
          shippingAddress: action.payload,
        },
      };
    case TYPE.SAVE_SHIPPING_ADDRESS_MAP_LOCATION:
      return {
        ...state,
        cart: {
          ...state.cart,
          shippingAddress: {
            ...state.cart.shippingAddress,
            location: action.payload,
          },
        },
      };

    case TYPE.SAVE_PAYMENT_METHOD:
      return {
        ...state,
        cart: { ...state.cart, paymentMethod: action.payload },
      };
    default:
      return state;
  }
}
