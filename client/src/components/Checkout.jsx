import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { checkoutOrderAction } from '../actions/orderAction';
import StripeCheckout from "react-stripe-checkout";
import Swal from "sweetalert2";



function Checkout({ toplamFiyat }) {
    const orderState = useSelector(state => state.checkoutOrderReducer)
    const { success, error, loading } = orderState;
    const dispatch = useDispatch()
    const tokenHandler = (token) => {
        dispatch(checkoutOrderAction(token, toplamFiyat));
        if (!error) {
            Swal.fire({
                position: "center",
                icon: "success",
                title: "Ödeme Başarılı",
                showConfirmButton: false,
                timer: 1500,
            });
        }
    }
    return (
        <div>
            <StripeCheckout
                amount={toplamFiyat * 100}
                stripeKey="pk_test_51OBIl9BuNN2GghdEsYqAtrL9Z8hkyCvIHoWNSso8tZNOLBPChExg7f9SM9r2PH7FdaFLJpC9ar15t4zTk7IDWZ7L00cZrxgxj5"
                currency="TRY"
                shippingAddress
                billingAddress
                token={tokenHandler}
            >
                <button className="btn btn-outline-danger mb-3 w-25">HEMEN ÖDE!</button>
            </StripeCheckout>
        </div>
    )
}

export default Checkout