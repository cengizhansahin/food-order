import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import StripeCheckout from "react-stripe-checkout";
import { checkoutOrderAction } from "../actions/orderAction";
import Swal from "sweetalert2";

function Checkout({ toplamfiyat }) {
    const orderState = useSelector((state) => state.checkoutOrderReducer);
    const { success, error, loading } = orderState;
    const dispatch = useDispatch();
    const tokenHandler = (token) => {
        dispatch(checkoutOrderAction(token, toplamfiyat));
        if (!error) {
            Swal.fire({
                position: "center",
                icon: "success",
                title: "Ödeme Başarılı",
                showConfirmButton: false,
                timer: 1500,
            });
        }
    };
    return (
        <div>
            <StripeCheckout
                amount={toplamfiyat * 100}
                stripeKey="pk_test_51OBIl9BuNN2GghdEsYqAtrL9Z8hkyCvIHoWNSso8tZNOLBPChExg7f9SM9r2PH7FdaFLJpC9ar15t4zTk7IDWZ7L00cZrxgxj5"
                currency="TRY"
                shippingAddress
                billingAddress
                token={tokenHandler}
            >
                <button className="btn btn-outline-danger mb-3 w-25">HEMEN ÖDE!</button>
            </StripeCheckout>
        </div>
    );
}

export default Checkout;
