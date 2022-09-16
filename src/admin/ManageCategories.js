import React, { useEffect } from "react";
import Base from "../core/Base";
import { Link } from "react-router-dom";
import { isAuthenticated } from "../auth/helper";
import { useState } from "react";
import { deleteCategory, getCategories } from "./helper/adminapicall";

const ManageCategories = () => {
    const [categories, setCategories] = useState([]);

    const { user, token } = isAuthenticated();

    const preload = () => {
        getCategories().then((data) => {
            if (data.error) {
                console.log(data.error);
            } else {
                setCategories(data);
            }
        });
    };
    useEffect(() => {
        preload();
    }, []);

    const deleteThisCategory = (categoryId) => {
        deleteCategory(categoryId, user._id, token).then((data) => {
            console.log(data);
            if (data.error) {
                console.log(data.error);
            } else {
                preload();
            }
        });
    };

    return (
        <Base title="Welcome admin" description="Manage Category here !">
            <h2 className="mb-4 ">All Categories</h2>
            <Link className="btn btn-info rounded" to={`/admin/dashboard`}>
                <span className="">Admin Home</span>
            </Link>
            <div className="row">
                <div className="col-12">
                    <h2 className="text-center text-white my-3">
                        Total {categories.length} categories
                    </h2>

                    {categories.map((category, index) => {
                        return (
                            <div key={index} className="row text-center mb-2 ">
                                <div className="col-4">
                                    <h3 className="text-white text-left">
                                        {category.name}
                                    </h3>
                                </div>
                                <div className="col-4">
                                    <Link
                                        className="btn btn-success rounded"
                                        to={`/admin/category/update/${category._id}`}
                                    >
                                        <span className="">Update</span>
                                    </Link>
                                </div>
                                <div className="col-4">
                                    <button
                                        onClick={() => {
                                            deleteThisCategory(category._id);
                                        }}
                                        className="btn btn-danger rounded"
                                    >
                                        Delete
                                    </button>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </Base>
    );
};

export default ManageCategories;
