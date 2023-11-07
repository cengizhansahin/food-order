import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCartAction, deleteFromCartAction } from "../actions/cartActions";

function CartPage() {
  const cartState = useSelector((state) => state.cartReducer);

  const { cartItems } = cartState;
  // const cartItems2 = cartState.cartItems

  const toplamFiyat = cartItems.reduce(
    (toplam, urun) => toplam + urun.fiyatlar,
    0
  );

  const dispatch = useDispatch();

  return (
    <div>
      <div className="container">
        <div className="text-center">
          <h2 className="display-2 text-warning">Sepetim</h2>
          {cartItems.length > 0 ? (
            cartItems.map((urun) => (
              <div className="row border border-3 border-warning shadow-lg p-3 mb-5">
                <div className="col-md-4">
                  <img src={urun.img} alt="" style={{ width: "200px" }} />
                </div>
                <div className="col-md-4">
                  <h3>
                    {urun.ad} |{""}
                    <span className="text-danger">
                      {urun.ozellik.slice(0, 1).toUpperCase()}
                      {urun.ozellik.slice(1, urun.ozellik[urun.ozellik.length])}
                    </span>
                  </h3>
                  <p>{urun.desc}</p>
                </div>
                <div className="col-md-4">
                  <h5 className="text-dark">Ürün Adedi</h5>
                  <div className="d-flex justify-content-center align-items-center w-50 mx-auto">
                    <i
                      class="fa-regular fa-square-plus text-danger fa-2x  "
                      style={{ cursor: "pointer" }}
                      onClick={() =>
                        dispatch(
                          addToCartAction(urun, urun.miktar + 1, urun.ozellik)
                        )
                      }
                    ></i>
                    <span
                      className="mx-1 text-dark"
                      style={{ fontSize: "20px" }}
                    >
                      {urun.miktar}
                    </span>
                    <i
                      class="fa-regular fa-square-minus text-danger fa-2x "
                      style={{ cursor: "pointer" }}
                      onClick={() =>
                        dispatch(
                          addToCartAction(urun, urun.miktar - 1, urun.ozellik)
                        )
                      }
                    ></i>
                  </div>
                  <i
                    className="fa-solid fa-trash text-danger mx-2"
                    style={{ cursor: "pointer" }}
                    onClick={() => dispatch(deleteFromCartAction(urun))}
                  ></i>
                  <p className="text-danger " style={{ fontWeight: "bold" }}>
                    Fiyat: {urun.fiyatlar} ₺
                  </p>
                </div>
              </div>
            ))
          ) : (
            <div className="alert alert-danger" role="alert">
              SEPETE ÜRÜN YOK 😭
            </div>
          )}
        </div>
        <h5 className="text-danger">Toplam fiyat: {toplamFiyat}</h5>
      </div>
    </div>
  );
}

export default CartPage;
