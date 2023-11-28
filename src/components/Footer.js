import React from "react";

const FooterComponent = () => {
    return ( 
        <footer className="page-footer font-small blue pt-4">
            <div className="container-fluid text-center text-md-left">
                <div className="row">
                    <div className="col-md-4 mt-md-0 mt-3">
                        <h5 className="text-uppercase">Kimipay</h5>
                        <p>Your trusted partner for fast and secure international money transfers.
                            With a commitment to making cross-border transactions simple and efficient, we provide a seamless
                            experience for sending and receiving funds worldwide.</p>
                    </div>

                    <hr className="clearfix w-100 d-md-none pb-0"/>

                    <div className="col-md-4 mb-md-0 mb-3">
                        <h5 className="text-uppercase">Quick Links</h5>
                        <ul className="list-unstyled links">
                            <li><a href="/about">About Us</a></li>
                            <li><a href="#!">FAQs</a></li>
                            <li><a href="#!">Privacy Policy</a></li>
                            <li><a href="#!">Terms & Conditions</a></li>
                        </ul>
                    </div>

                    <div className="col-md-4 mb-md-0 mb-3">
                        <h5 className="text-uppercase">Follow us</h5>
                        <section className="mb-4">
                            <ul className="list-unstyled">
                            <a
                                className="btn text-white btn-floating m-1 facebook"
                                href="https://www.facebook.com/profile.php?id=100094387916963"
                                ><i className="bi bi-facebook"></i></a>

                            <a
                                className="btn text-white btn-floating m-1 twitter"
                                href="https://twitter.com/KimipayLtd"
                                role="button"
                                ><i className="bi bi-twitter-x"></i></a>

                            <a
                                className="btn text-white btn-floating m-1 youtube"
                                href="https://www.youtube.com/@Kimipay-Ltd"
                                role="button"
                                ><i className="bi bi-youtube"></i></a>

                            <a
                                className="btn text-white btn-floating m-1 instagram"
                                href="https://www.instagram.com/kimipayltd/"
                                role="button"
                                ><i className="bi bi-instagram"></i></a>

                            <a
                                className="btn text-white btn-floating m-1 linkedin"
                                href="https://ke.linkedin.com/company/kimipay"
                                role="button"
                                ><i className="bi bi-linkedin"></i></a>
                            </ul>
                        </section>
                    </div>
                </div>
            </div>

            <div className="footer-copyright text-center py-3">© 2023 Copyright:
                <a href="https://kimipay.com/"> KimiPay</a>
            </div>

        </footer>
    );
}

export default FooterComponent;