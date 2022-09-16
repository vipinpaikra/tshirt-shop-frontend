import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Base from "../core/Base";
import {
    getProduct,
    getCategories,
    updateProduct,
} from "./helper/adminapicall";
import { isAuthenticated } from "../auth/helper/index";

function UpdateProduct({ match }) {
    const { user, token } = isAuthenticated();
    const [values, setValues] = useState({
        name: "",
        description: "",
        price: "",
        stock: "",
        photo: "",
        categories: [],
        category: "",
        loading: false,
        error: "",
        isError: false,
        createdProduct: "",
        getaRedirect: false,
        formData: "",
    });
    const {
        name,
        description,
        price,
        stock,
        photo,
        categories,
        category,
        loading,
        error,
        isError,
        createdProduct,
        getaRedirect,
        formData,
    } = values;

    const preload = (productId) => {
        getProduct(productId).then((data) => {
            console.log(data.category.name);
            // console.log(data);
            // preloadCategories();
            if (data.error) {
                setValues({ ...values, error: data.error });
            } else {
                setValues({
                    ...values,
                    name: data.name,
                    description: data.description,
                    price: data.price,
                    categories: [data.category.name],
                    category: data.category._id,
                    stock: data.stock,
                    formData: new FormData(),
                });
                preloadCategories();
            }
        });
    };
    const preloadCategories = () => {
        getCategories().then((data) => {
            console.log(data);
            if (data.error) {
                setValues({ ...values, error: data.error });
            } else {
                setValues({
                    categories: data,
                    formData: new FormData(),
                });
            }
        });
    };

    useEffect(() => {
        preload(match.params.productId);
    }, []);

    const successMessage = () => {
        return (
            <div
                className="alert alert-success mt-3"
                style={{ display: createdProduct ? "" : "none" }}
            >
                <h4>{createdProduct} updated successfully</h4>
            </div>
        );
    };
    const errorMessage = () => {
        if (isError) {
            return (
                <h4 className="text-danger">
                    Failed to update product : {error}
                </h4>
            );
        }
    };

    const updateProductForm = () => (
        <form>
            <span>Post photo</span>
            <div className="form-group">
                <label className="btn btn-block btn-success">
                    <input
                        onChange={handleChange("photo")}
                        type="file"
                        name="photo"
                        accept="image"
                        placeholder="choose a file"
                    />
                </label>
            </div>
            <div className="form-group">
                <input
                    onChange={handleChange("name")}
                    name="photo"
                    className="form-control"
                    placeholder="Name"
                    value={name}
                />
            </div>
            <div className="form-group">
                <textarea
                    onChange={handleChange("description")}
                    name="photo"
                    className="form-control"
                    placeholder="Description"
                    value={description}
                />
            </div>
            <div className="form-group">
                <input
                    onChange={handleChange("price")}
                    type="number"
                    className="form-control"
                    placeholder="Price"
                    value={price}
                />
            </div>
            <div className="form-group">
                <select
                    onChange={handleChange("category")}
                    className="form-control"
                    placeholder="Category"
                >
                    <option>Select</option>
                    {categories &&
                        categories.map((cate, index) => {
                            return (
                                <option key={index} value={cate._id}>
                                    {cate.name}
                                </option>
                            );
                        })}
                </select>
            </div>
            <div className="form-group">
                <input
                    onChange={handleChange("stock")}
                    type="number"
                    className="form-control"
                    placeholder="Quantity"
                    value={stock}
                />
            </div>

            <button
                type="submit"
                onClick={onSubmit}
                className="btn btn-outline-success mb-3 rounded"
            >
                Update Product
            </button>
        </form>
    );

    const handleChange = (name) => (event) => {
        const value =
            name === "photo" ? event.target.files[0] : event.target.value;
        formData.set(name, value);
        setValues({ ...values, [name]: value });
    };

    const onSubmit = (event) => {
        event.preventDefault();
        setValues({ ...values, error: "", loading: true });
        updateProduct(match.params.productId, user._id, token, formData).then(
            (data) => {
                if (data.error) {
                    setValues({
                        ...values,
                        error: data.error,
                        isError: true,
                    });
                } else {
                    setValues({
                        ...values,
                        name: "",
                        description: "",
                        price: "",
                        photo: "",
                        stock: "",
                        isError: false,
                        loading: false,
                        createdProduct: data.name,
                    });
                }
            }
        );
    };

    return (
        <Base
            title="Update a product here !"
            description="Welcome to product update section"
            className="container bg-white p-3"
        >
            <Link
                to="/admin/dashboard"
                className="btn btn-sb btn-success  mb-3 rounded"
            >
                Admin Home
            </Link>
            <div className="row bg-dark text-white rounded">
                <div className="col-md-8 offset-md-2">
                    {successMessage()}
                    {errorMessage()}
                    {updateProductForm()}
                </div>
            </div>
        </Base>
    );
}

export default UpdateProduct;
