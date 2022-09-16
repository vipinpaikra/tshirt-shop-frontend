import React from "react";
import Menu from "./Menu";
import "./about.css";
import Base from "./Base";
import { Link } from "react-router-dom";

function About() {
    const persons = [
        {
            name: "john",
            work: "designer",
            mail: "john@gmail.com",
            img: "https://image.shutterstock.com/mosaic_250/2780032/1667439913/stock-photo-headshot-portrait-of-smiling-millennial-male-employee-talk-on-video-call-or-web-conference-in-1667439913.jpg",
        },
        {
            name: "Mark",
            work: "Manager",
            mail: "mark@gmail.com",
            img: "https://expertphotography.b-cdn.net/wp-content/uploads/2020/08/social-media-profile-photos-3.jpg",
        },
        {
            name: "Jatin",
            work: "Programmer",
            img: "https://t4.ftcdn.net/jpg/03/64/21/11/360_F_364211147_1qgLVxv1Tcq0Ohz3FawUfrtONzz8nq3e.jpg",
            mail: "jatin@gmail.com",
        },
    ];
    return (
        <div>
            <Menu />
            <div className="aabout-section">
                <h1>About Us Page</h1>
                <p>Some text about who we are and what we do.</p>
                <p>
                    Resize the browser window to see that this page is
                    responsive by the way.
                </p>
            </div>

            <h2 style={{ textAlign: "center", color: "white" }}>Our Team</h2>
            <div className="arow">
                {persons.map((person, index) => {
                    return (
                        <div className="acolumn">
                            <div className="acard">
                                <img
                                    src={person.img}
                                    alt="John"
                                    style={{
                                        width: "100%",
                                        color: "white",
                                    }}
                                />
                                <div className="acontainer">
                                    <h2 style={{ color: "white" }}>
                                        {person.name}
                                    </h2>
                                    <p
                                        className="atitle"
                                        style={{ color: "white" }}
                                    >
                                        {person.work}
                                    </p>
                                    <p style={{ color: "white" }}>
                                        Some text that describes me lorem ipsum
                                        ipsum lorem.
                                    </p>
                                    <p style={{ color: "white" }}>
                                        {person.mail}
                                    </p>
                                    <p>
                                        <button className="abutton">
                                            Contact
                                        </button>
                                    </p>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
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

export default About;
