import React from "react";
import { Link, useLocation } from "react-router-dom";
import DownloadLink from './DownloadLink'

function Navbar() {
    // This allows the component to check the route any time the user uses a link to navigate.
    const location = useLocation();


    return (

        <>
            <nav className="uk-navbar-container uk-navbar-transparent" uk-navbar>
                <div className="uk-position-relative">
                    <div className="uk-position-top">
                        <nav className="uk-navbar-container uk-navbar-transparent" uk-navbar>
                            <div className="uk-navbar-left">
                                <ul className="uk-navbar-nav">
                                    <li className="uk-active">
                                        {/* <a id="navList" href="index.html">Home</a> */}
                                        <Link to="/" id="navList" className={location.pathname === "/" ? "nav-link active" : "nav-link"}>  Home
                                        </Link>
                                    </li>
                                    <li>
                                        {/* <a id="navList" href="portfolio.html">Portfolio</a> */}
                                        <Link to="/portfolio" className={location.pathname === "/portfolio" ? "nav-link active" : "nav-link"}>Portfolio
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/contact" className={location.pathname === "/contact" ? "nav-link active" : "nav-link"}>Contact
                                       </Link>
                                    </li>

                                    {/* just put this in to see if it works need to ttest!!!! */}
                                    <li><a href="https://docs.google.com/document/d/1tbBlPYtNdwyHWxWVoBnkWIAG3jI65zqGx4CuFJDmJd4/edit?usp=sharing" rel="noreferrer" target="_blank">Resume</a></li>

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
