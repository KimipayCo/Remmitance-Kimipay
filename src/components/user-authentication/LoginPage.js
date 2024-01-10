import React from "react";
import { Link } from "react-router-dom";

const LoginPage = () => {
    return ( 
        <div className="section page-background">
            <div className="row">
                <div className="col-md-6 log-img">
                <img
                        src="./login.svg"
                        alt="login"
                        className="login"
                    />
                </div>
                <div className="col-md-6 log-form-container">
                    <form className="d-flex flex-column log-form">
                        <div className="mb-3 d-flex justify-content-center">
                            <img
                            src="./logo22.png"
                            alt="logo"
                            className="logo"
                            />
                        </div>
                        <div>
                            <div className="mb-3">
                                <input
                                type="email"
                                className="form-control w-100"
                                id="email"
                                name="email"
                                placeholder="Email Address"
                                />
                            </div>
                            <div className="mb-3">
                                <input
                                type="password"
                                className="form-control w-100"
                                id="password"
                                name="password"
                                placeholder="Password"
                                />
                            </div>
                        </div>
                        <Link to="/username/dashboard" className="remove-link-style">
                            <div className="mb-3 d-flex justify-content-center">
                                <button type="submit" className="rounded-pill register-btn">Login</button>
                            </div>
                        </Link>
                        <div className="mb-3 d-flex justify-content-center redirect-link">
                            <label>
                                Need an account? <a href="/registration" className="login">Create one</a>
                            </label>
                        </div>
                </form>

                </div>
                </div>
        </div>
    );
}

export default LoginPage;