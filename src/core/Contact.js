import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { createContact } from "../auth/helper/index";
import Base from "../core/Base";

function Contact() {
    const [values, setValues] = useState({
        name: "",
        lname: "",
        desc: "",
        error: "",
        created: "",
        show: false,
        isError: false,
        email: "",
    });
    const { name, lname, desc, error, isError, email } = values;

    const successMessage = () => {
        return (
            <div
                className="alert alert-success mt-3"
                // style={{ display: createContact ? "orange" : "none" }}
            >
                <h4> {values.created}</h4>
            </div>
        );
    };
    const errorMessage = () => {
        if (isError) {
            return <h4 className="text-danger">Failed : {error}</h4>;
        }
    };

    const ContactForm = () => (
        <form style={{ padding: "1rem" }}>
            <div className="form-group">
                <input
                    onChange={handleChange("name")}
                    className="form-control"
                    placeholder="Your name..."
                    value={name}
                />
            </div>
            <div className="form-group">
                <input
                    onChange={handleChange("lname")}
                    className="form-control"
                    placeholder="Your last name..."
                    value={lname}
                />
            </div>

            <div className="form-group">
                <input
                    onChange={handleChange("email")}
                    type="email"
                    className="form-control"
                    placeholder="Email"
                    value={email}
                />
            </div>
            <div className="form-group">
                <textarea
                    onChange={handleChange("desc")}
                    name="desc"
                    className="form-control"
                    placeholder="Description"
                    value={desc}
                />
            </div>

            <button
                type="submit"
                onClick={onSubmit}
                className="btn btn-outline-success mb-3 rounded"
            >
                Comment Me 😊
            </button>
        </form>
    );

    const handleChange = (name) => (event) => {
        setValues({ ...values, [name]: event.target.value });
    };
    const onSubmit = (event) => {
        event.preventDefault();
        setValues({ ...values, error: "", loading: true });
        createContact({ name, lname, email, desc })
            .then((data) => {
                console.log(data);
                if (data.errors) {
                    console.log(data);
                    setValues({
                        ...values,
                        isError: data.errors,
                        success: false,
                    });
                } else {
                    setValues({
                        ...values,
                        name: "",
                        email: "",
                        lname: "",
                        desc: "",
                        error: "",
                        success: true,
                        created: "submit successfully",
                        show: true,
                    });
                    setTimeout(
                        () =>
                            setValues({
                                ...values,
                                name: "",
                                email: "",
                                lname: "",
                                desc: "",
                                error: "",
                                success: true,
                                created: "",
                                show: false,
                            }),
                        6000
                    );
                }
            })
            .catch((err) => console.log(err));
    };

    console.log(values);
    return (
        <Base
            title="Comment here !"
            description="Welcome to comment section"
            className="container  p-3"
        >
            <div className="row bg-dark text-white rounded">
                <div className="col-md-8 offset-md-2">
                    {values.show && successMessage()}
                    {errorMessage()}
                    {ContactForm()}
                </div>
            </div>
        </Base>
    );
}

export default Contact;
