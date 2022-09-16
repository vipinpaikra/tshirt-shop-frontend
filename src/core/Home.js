import React, { useState, useEffect } from "react";
import "../style.css";

import Base from "./Base";
import Card from "./Card";
import { getProducts } from "./helper/coreapicalls";

const Home = () => {
    const [products, setProducts] = useState([]);
    const [error, setError] = useState(false);
    const loadAllProduct = () => {
        getProducts().then((data) => {
            if (data.error) {
                setError(data.error);
            } else {
                setProducts(data);
            }
        });
    };
    useEffect(() => {
        loadAllProduct();
    }, []);
    return (
        <Base
            className="text-white"
            title="Home Page"
            description="Welcome to the T-shirt Store"
        >
            <div className="row text-center">
                <h3 className="text-info">All of T-shirt</h3>
                <div className="row">
                    {products.map((product, index) => {
                        return (
                            <div key={index} className="col-4 mb-4">
                                <Card product={product} />
                            </div>
                        );
                    })}
                </div>
            </div>
        </Base>
    );
};

export default Home;
