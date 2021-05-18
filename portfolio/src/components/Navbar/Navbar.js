import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./navstyle.css"


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
                                    <li>
                                        <Link to="/" id="name" className={location.pathname === "/" ? "nav-link active" : "nav-link"}>Amy Moseman .
                                        </Link>
                                    </li>
                                    {/* <li className="uk-active">
                                        <Link to="/" id="navList" className={location.pathname === "/" ? "nav-link active" : "nav-link"}>  Home
                                        </Link>
                                    </li> */}
                                    <li>
                                        <Link to="/portfolio2" id="navList" className={location.pathname === "/portfolio2" ? "nav-link active" : "nav-link"}>Portfolio
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/contact" id="navList" className={location.pathname === "/contact" ? "nav-link active" : "nav-link"}>Contact
                                       </Link>
                                    </li>
                                    <li>
                                        <a href="https://docs.google.com/document/d/1tbBlPYtNdwyHWxWVoBnkWIAG3jI65zqGx4CuFJDmJd4/edit?usp=sharing" rel="noreferrer" target="_blank" id="navList">Resume</a>
                                    </li>
                                </ul>
                            </div>
                        </nav>
                    </div>
                </div>
            </nav>
        </>

    );
}

export default Navbar;
