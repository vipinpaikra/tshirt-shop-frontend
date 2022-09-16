import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { isAuthenticated } from "../auth/helper";
import { cartEmpty, loadCart } from "./helper/cartHelper";
import StripeCheckoutButton from "react-stripe-checkout";
import { API } from "../backend";
import { createOrder } from "./helper/orderHelper";

const StripeCheckout = ({
    products,
    setReload = (f) => f,
    reload = undefined,
}) => {
    const [data, setData] = useState({
        loading: false,
        success: false,
        error: "",
        address: "",
    });
    const token = isAuthenticated() && isAuthenticated().token;
    const userId = isAuthenticated() && isAuthenticated().user._id;

    const getFinalPrice = () => {
        let amount = 0;
        products.map((p) => {
            amount = amount + p.price;
        });
        return amount;
    };

    const showStripeButton = () => {
        return isAuthenticated() ? (
            <button className="btn btn-success">Pay with Stripe</button>
        ) : (
            <Link to="/signin">
                <button className="btn-warning">Signin</button>
            </Link>
        );
    };

    const makePayment = (token) => {
        const body = {
            token,
            products,
        };
        const headers = {
            "Content-Type": "application/json",
        };
        return fetch(`${API}/stripepayment`, {
            method: "POST",
            headers,
            body: JSON.stringify(body),
        })
            .then((response) => {
                console.log(response);
            })
            .catch((error) => console.log(error));
    };

    return (
        <div>
            <h3 className="">StripeCheckout loaded</h3>
            <h4>Total Price : ${getFinalPrice()}</h4>
            <StripeCheckoutButton
                stripeKey="pk_test_51KhrxtSFEvISu0b3OBLvfLBVgv0Xqb7M1fEctY5KfjC0Se60N71BUeZYnOlwzezrBFyPWR4e0xb3LslCLkeQVo0W00NfbFY7ey"
                token={makePayment}
                amount={getFinalPrice() * 100}
                name="Buy Tshirt"
                shippingAddress
                billingAddress
            >
                <h5>{showStripeButton()}</h5>
            </StripeCheckoutButton>
        </div>
    );
};

export default StripeCheckout;
