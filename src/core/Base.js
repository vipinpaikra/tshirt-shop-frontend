import React from "react";
import { Link } from "react-router-dom";
import Footer from "./Footer";
import Menu from "./Menu";

const Base = ({
    title = "My title",
    description = "My description",
    className = " text-white p-4",
    children,
}) => {
    return (
        <div>
            <Menu />
            <div className="container-fluid" style={{ marginBottom: "10rem" }}>
                <div className="jombotron bg-dark text-white text-center">
                    <h2 className="display-5">{title}</h2>
                    <p className="lead">{description}</p>
                </div>
                <div className={className}>{children}</div>
            </div>

            <footer className="footer bg-dark mt-auto pb-2">
                <div className="contiainer-fluid bg-success text-white text-center py-3">
                    <h4>If you got any question , feel free to reach out!</h4>
                    <button className="btn btn-warning btn-ms rounded ">
                        <Link
                            style={{ textDecoration: "none", color: "white" }}
                            to="/contact-us"
                        >
                            <b>Contact Us</b>
                        </Link>
                    </button>
                    <button
                        className="btn btn-warning btn-ms rounded "
                        style={{ margin: "20px" }}
                    >
                        <Link
                            style={{
                                textDecoration: "none",
                                color: "white",
                            }}
                            to="/about"
                        >
                            <b>About</b>
                        </Link>
                    </button>
                </div>
                <div className="container ">
                    <span className="text-muted ">
                        An Amazing <span className="text-warning"> MERN </span>
                        shop.
                    </span>
                </div>
            </footer>
        </div>
    );
};
export default Base;
