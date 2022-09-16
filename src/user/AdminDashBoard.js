import React from "react";
import Base from "../core/Base";
import { isAuthenticated } from "../auth/helper";
import { Link } from "react-router-dom";

const AdminDashBoard = () => {
    const {
        user: { name, email, role },
    } = isAuthenticated();

    const adminLeftSide = () => {
        return (
            <div
                className="card"
                style={{
                    backgroundColor: "#343a40",
                    border: "1px solid white",
                }}
            >
                <h4 className="card-body bg-dark text-white text-center">
                    Admin Navigation
                </h4>
                <ul className="list-group text-center">
                    <li className="list-group-item">
                        <Link
                            to="/admin/create/category"
                            className="nav-link text-success"
                        >
                            Create Categories
                        </Link>
                    </li>
                    <li className="list-group-item">
                        <Link
                            to="/admin/categories"
                            className="nav-link text-success"
                        >
                            Manage Categories
                        </Link>
                    </li>
                    <li className="list-group-item">
                        <Link
                            to="/admin/create/product"
                            className="nav-link text-success"
                        >
                            Create Product
                        </Link>
                    </li>
                    <li className="list-group-item">
                        <Link
                            to="/admin/products"
                            className="nav-link text-success"
                        >
                            Manage Product
                        </Link>
                    </li>
                    <li className="list-group-item">
                        <Link
                            to="/admin/orders"
                            className="nav-link text-success"
                        >
                            Manage Order
                        </Link>
                    </li>
                </ul>
            </div>
        );
    };
    const adminRightSide = () => {
        return (
            <div
                className="card mb-4"
                style={{
                    backgroundColor: "#343a40",
                    border: "1px solid white",
                }}
            >
                <h4 className=" card-body text-white ">Admin Information</h4>
                <ul className="list-group">
                    <li
                        className="list-group-item"
                        style={{ textAlign: "left" }}
                    >
                        <span className="badge badge-success mr-2">Name:</span>
                        <span style={{ color: "black" }}>{name}</span>
                    </li>
                    <li
                        className="list-group-item"
                        style={{ textAlign: "left" }}
                    >
                        <span className="badge badge-success mr-2">Email:</span>
                        <span style={{ color: "black", textAlign: "left" }}>
                            {email}
                        </span>
                    </li>
                    <li
                        className="list-group-item"
                        style={{ textAlign: "left" }}
                    >
                        <span className="badge badge-danger mr-2">
                            Admin Area
                        </span>
                    </li>
                </ul>
            </div>
        );
    };

    return (
        <Base
            title="Welcome to admin area"
            description="Manage all of your products here"
            className="container bg-info p-3"
        >
            <div className="row">
                <div className="col-3">{adminLeftSide()}</div>
                <div className="col-9">{adminRightSide()}</div>
            </div>
        </Base>
    );
};

export default AdminDashBoard;
