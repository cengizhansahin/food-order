export const userReducer = (state = { users: null }, action) => {
  switch (action.type) {
    case "REQUEST":
      return {
        ...state,
      };
    case "SUCCESS":
      return {
        users: action.payload,
      };

    case "FAILED":
      return {
        error: action.payload,
      };

    default:
      return state;
  }
};
