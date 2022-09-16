import React, { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";

import { isAuthenticated } from "../auth/helper";
import Base from "../core/Base";
import { getCategory, updateCategory } from "./helper/adminapicall";

const UpdateCategory = ({ match }) => {
    const [name, setName] = useState("");
    const [myerror, setMyerror] = useState("");
    const [error, setError] = useState(false);
    const [success, setSuccess] = useState(false);

    const { user, token } = isAuthenticated();

    const goBack = () => {
        return (
            <div className="mt-5">
                <Link
                    className="btn btn-sm btn-info mb-3 rounded"
                    to="/admin/dashboard"
                >
                    Admin Home
                </Link>
            </div>
        );
    };

    const handleChange = (event) => {
        setError("");
        setName(event.target.value);
    };
    const preload = (categoryId) => {
        getCategory(categoryId)
            .then((data) => {
                if (data.error) {
                    setError(true);
                } else {
                    setName(data.name);
                }
            })
            .catch((err) => console.log(err));
    };
    useEffect(() => {
        preload(match.params.categoryId);
    }, []);

    const onSubmit = (event) => {
        event.preventDefault();
        setError("");
        setSuccess(false);

        // backend request fire
        updateCategory(match.params.categoryId, user._id, token, {
            name: name,
        })
            .then((data) => {
                if (data.errors) {
                    setError(true);
                    setMyerror(data.errors);
                } else {
                    setName("");
                    setSuccess(true);
                }
            })
            .catch((err) => console.log(err));
    };

    const successMessage = () => {
        if (success) {
            return (
                <h4 className="text-success">Category Updated successfully</h4>
            );
        }
    };
    const warningMessage = () => {
        if (error) {
            return <h4 className="text-danger">Failed to update category</h4>;
        }
    };

    const myCategoryForm = () => {
        return (
            <form>
                <div className="form-group">
                    <p className="lead">Enter the category</p>
                    <input
                        type="text"
                        className="form-control my-3"
                        onChange={handleChange}
                        value={name}
                        autoFocus
                        required
                        placeholder={name}
                    />
                    <button onClick={onSubmit} className="btn btn-outline-info">
                        Update Category
                    </button>
                </div>
            </form>
        );
    };

    return (
        <Base
            title="Update  category here"
            description="Add a new category for new tshirts"
            className="container bg-info p-4"
        >
            <div className="row bg-white rounded">
                <div className="col-md-8 offset-md-2">
                    {successMessage()}
                    {warningMessage()}
                    {myCategoryForm()}
                    {goBack()}
                </div>
            </div>
        </Base>
    );
};

export default UpdateCategory;
