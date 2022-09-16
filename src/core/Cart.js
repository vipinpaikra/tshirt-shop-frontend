import React, { useState, useEffect } from "react";
import "../style.css";

import Base from "./Base";
import Card from "./Card";
import { loadCart } from "./helper/cartHelper";
import { getProducts } from "./helper/coreapicalls";
import StripeCheckout from "./StripeCheckout";

const Cart = () => {
    const [products, setProducts] = useState([]);
    const [reload, setReload] = useState(false);

    useEffect(() => {
        setProducts(loadCart());
    }, [reload]);

    const loadAllProducts = () => {
        return (
            <div>
                <h2>This section is to load products</h2>
                <h4>total products is {products.length}</h4>
                {products.map((product, index) => {
                    return (
                        <div
                            style={{
                                width: "30rem",

                                margin: "auto",
                            }}
                        >
                            <Card
                                key={index}
                                product={product}
                                removeFromCart={true}
                                addtoCart={false}
                                setReload={setReload}
                                reload={reload}
                            />
                        </div>
                    );
                })}
            </div>
        );
    };
    const loadCheckout = () => {
        return (
            <div>
                <StripeCheckout products={products} setReload={setReload} />
            </div>
        );
    };

    return (
        <Base
            className="text-white mb-5"
            title="Cart Page"
            description="Ready to checkout"
        >
            <div className="row text-center">
                <div className="col-6 pb-5 mb-5">{loadAllProducts()}</div>
                <div className="col-6">{loadCheckout()}</div>
            </div>
        </Base>
    );
};

export default Cart;
