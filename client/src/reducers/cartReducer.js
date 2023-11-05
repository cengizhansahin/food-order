export const cartReducer = (state = { cartItems: [] }, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      const mevcutIse = state.cartItems.find(
        (sepet) => sepet._id === action.payload._id
      );
      if (mevcutIse) {
        return {
          ...state,
          cartItems: state.cartItems.map((menu) =>
            menu._id === action.payload._id ? action.payload : menu
          ),
        };
      } else {
        return {
          ...state,
          cartItems: [...state.cartItems, action.payload],
        };
      }
    case "DELETE_FROM_CART":
      return {
        ...state,
        cartItems: state.cartItems.filter(
          (sepet) => sepet._id !== action.payload._id
        ),
      };
    default:
      return state;
  }
};
