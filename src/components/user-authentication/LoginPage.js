import React from "react";
import { Link } from "react-router-dom";

const LoginPage = () => {
    return ( 
        <div className="section page-background">
            <div className="row">
                <div className="col-md-6">
                <img
                        src="./login.svg"
                        alt="login"
                        className="login"
                    />
                </div>
                <div className="col-md-6">
                    <form className="d-flex flex-column" style={{ width: '80vw' }}>
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
                        <Link to="/dashboard" className="remove-link-style">
                            <div className="mb-3 d-flex justify-content-center">
                                <button type="submit" className="rounded-pill register-btn">Login</button>
                            </div>
                        </Link>
                        <div className="mb-3 d-flex justify-content-center">
                            <label className="form-check-label" htmlFor="agreeCheckbox">
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