import React from "react";
import { Link, useLocation } from "react-router-dom";

function Navbar() {
    // This allows the component to check the route any time the user uses a link to navigate.
    const location = useLocation();


    return (

        <>
            <nav class="uk-navbar-container uk-navbar-transparent" uk-navbar>
                <div class="uk-position-relative">
                    <div class="uk-position-top">
                        <nav class="uk-navbar-container uk-navbar-transparent" uk-navbar>
                            <div class="uk-navbar-left">
                                <ul class="uk-navbar-nav">
                                    <li class="uk-active">
                                        {/* <a id="navList" href="index.html">Home</a> */}
                                        <Link to="/" id="navList" className={location.pathname === "/" ? "nav-link active" : "nav-link"}>  Home
                                        </Link>
                                    </li>
                                    <li>
                                        {/* <a id="navList" href="portfolio.html">Portfolio</a> */}
                                        <Link to="/portfolio" className={location.pathname === "/portfolio" ? "nav-link active" : "nav-link"}> Portfolio
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/contact" className={location.pathname === "/contact" ? "nav-link active" : "nav-link"}> Contact
                                       </Link>
                                    </li>
                                    <li><Link to="" id="navList" href="assets/amyresume.pdf" target="_blank">Resume </Link></li>
                                </ul>
                            </div>
                        </nav>
                    </div>
                </div>
            </nav>
        </>
        // <ul className="nav nav-tabs">
        //     <li className="nav-item">
        //         <Link to="/" className={location.pathname === "/" ? "nav-link active" : "nav-link"}>
        //             Home
        // </Link>
        //     </li>
        //     <li className="nav-item">
        //         <Link
        //             to="/portfolio"
        //             className={location.pathname === "/portfolio" ? "nav-link active" : "nav-link"}
        //         >
        //             Portfolio
        // </Link>
        //     </li>
        //     <li className="nav-item">
        //         <Link
        //             to="/resume"
        //             className={location.pathname === "/resume" ? "nav-link active" : "nav-link"}
        //         >
        //             Resume
        // </Link>
        //     </li>
        //     <li className="nav-item">
        //         <Link
        //             to="/contact"
        //             className={location.pathname === "/contact" ? "nav-link active" : "nav-link"}
        //         >
        //             Contact
        // </Link>
        //     </li>
        // </ul>
    );
}

export default Navbar;
