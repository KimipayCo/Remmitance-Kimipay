import React from "react";

const RegistrationPage = () => {
    return ( 
        <div className="section page-background">
            <div className="row">
                <div className="col-md-6 reg-img">
                    <img
                            src="./register.svg"
                            alt="register"
                            className="register"
                        />
                </div>
                <div className="col-md-6 reg-form-container">
                    <form className="reg-form">
                        <div className="mb-3 d-flex justify-content-center">
                            <img
                            src="./logo22.png"
                            alt="logo"
                            className="logo"
                            />
                        </div>
                        <div className="mb-3">
                            <input
                            type="text"
                            className="form-control w-100"
                            id="fullName"
                            name="fullName"
                            placeholder="Full Name"
                            />
                        </div>
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
                            type="tel"
                            className="form-control w-100"
                            id="phone"
                            name="phone"
                            placeholder="Phone Number"
                            />
                        </div>
                        <div className="mb-3">
                            <select
                            className="form-select w-100"
                            id="country"
                            name="country"
                            >
                                <option value="" className="default"> Select Country</option>
                                <option value="usa">USA</option>
                                <option value="canada">Canada</option>
                                {/* Add more country options here */}
                            </select>
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
                        <div className="mb-3">
                            <input
                            type="password"
                            className="form-control w-100"
                            id="confirmPassword"
                            name="confirmPassword"
                            placeholder="Confirm Password"
                            />
                        </div>
                        <div className="form-check">
                            <input
                            type="checkbox"
                            className="form-check-input"
                            id="agreeCheckbox"
                            name="agree"
                            />
                            <label className="form-check-label" htmlFor="agreeCheckbox">
                                I have read and by registering, I agree to the <a href="/terms" className="external-link">Terms and Conditions</a> and <a href="/privacy" className="external-link">Privacy Policy</a>
                            </label>
                        </div>
                        <div className="mb-3 d-flex justify-content-center">
                            <button type="submit" className="rounded-pill register-btn">Register</button>
                        </div>
                        <div className="mb-3 d-flex justify-content-center redirect-link">
                            <label>
                                Already have an account? <a href="/login" className="login">Login</a>
                            </label>
                        </div>
                    </form>

                    </div>
                </div>
        </div>
    );
}

export default RegistrationPage;