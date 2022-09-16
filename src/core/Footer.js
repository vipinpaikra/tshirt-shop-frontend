import React from "react";
import "./about.css";
import { Link } from "react-router-dom";
function Footer() {
    return (
        <div>
            {" "}
            <div style={{ backgroundColor: "#198754" }}>
                <h4 style={{ textAlign: "center", paddingTop: "10px" }}>
                    If you got any question , feel free to reach out!
                </h4>
                <div style={{ display: "flex", justifyContent: "center" }}>
                    <button
                        className="btn btn-warning btn-ms rounded "
                        style={{ margin: "20px" }}
                    >
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
            </div>
            <div className="container " style={{ backgroundColor: "#212529" }}>
                <span className="text-muted ">
                    An Amazing <span className="text-warning"> MERN </span>
                    shop.
                </span>
            </div>
        </div>
    );
}

export default Footer;
