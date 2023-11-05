export const addToCartAction =
  (menu, miktar, ozellik) => (dispatch, getState) => {
    var cartItem = {
      _id: menu._id,
      ad: menu.ad,
      img: menu.img,
      desc: menu.desc,
      ozellik: menu.ozellik,
      miktar: miktar,
      fiyat: menu.fiyat,
      fiyatlar: menu.fiyat[0][ozellik] * miktar,
    };
    dispatch({
      type: "ADD_TO_CART",
      payload: cartItem,
    });
    const cartItems = getState().cartReducer.cartItems;
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  };

export const deleteFromCartAction = (menu) => (dispatch, getState) => {
  dispatch({
    type: "DELETE_FROM_CART",
    payload: menu,
  });

  const cartItems = getState().cartReducer.cartItems;
  localStorage.setItem("cartItems", JSON.stringify(cartItems));
};
