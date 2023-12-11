import React from "react";

const UserManualSection = () => {
    return ( 
        <div className="user-manual">
            <div className="row">
                <div className="col-md-6">
                    <h2 className="heading">User Guide</h2>
                    <h2 className="ligher-heading">Manual</h2>
                    <p className="description header-description">Discover seamless internation remittancewith KimiPay through
                    our User Guide Manual. Whetehr you are a beginner or an expert, ourguides cover everything from secing and 
                    recieving money to ensuring secure transactions. Explre now for a smooth experience.</p>
                    <div className="hyperlink">
                        <a href="https://www.google.com/">Explore our User Manual Guide</a>
                        <i className="bi bi-box-arrow-up-right"></i>
                    </div>
                </div>
                <div className="col-md-6 user-manual-img">
                    <img
                        src="../../user-manual-img.png"
                        alt="remmitance mockup"
                        className="remmitance-mockup"
                    />
                </div>
            </div>
        </div>
    );
}

export default UserManualSection;