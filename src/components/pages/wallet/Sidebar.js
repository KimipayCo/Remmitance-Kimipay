import React from "react";
import { NavLink } from "react-router-dom";

const Sidebar = ({ children }) => {
    const menuItem = [
        {
            path: "/dashboard",
            name: "Dashboard",
            icon: <i className="bi bi-speedometer"></i>
        },
        {
            path: "/sendFunds",
            name: "Send Funds",
            icon: <i className="bi bi-upload"></i>
        },
        {
            path: "/transactionHistory",
            name: "Transaction History",
            icon: <i className="bi bi-clock-history"></i>
        },
        {
            path: "/exchangeRates",
            name: "Exchange Rates",
            icon: <i className="bi bi-arrow-left-right"></i>
        },
        {
            path: "/feesAndTariffs",
            name: "Fees and Tariffs",
            icon: <i className="bi bi-tags"></i>
        },
    ];

    return (
        <div className="row">
            <div className="col-md-3 sidebar-container">
                <div className="sidebar">
                    <div className="mb-3 d-flex justify-content-center">
                        <img
                        src="./logo22.png"
                        alt="logo"
                        className="logo"
                        />
                    </div>
                    {
                        menuItem.map((item, index) => (
                            <NavLink to={item.path} key={index} className="link" activeclassname="active">
                                <div className="icon">{item.icon}</div>
                                <div className="link_text">{item.name}</div>
                            </NavLink>
                        ))
                    }
                    <a href="/login">Back</a>
                </div>
            </div>
            <div className="col">
                <main>{children}</main>
            </div>
        </div>
    );
}

export default Sidebar;
