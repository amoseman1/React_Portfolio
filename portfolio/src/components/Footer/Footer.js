import React from 'react'
import './footerstyle.css'

function Footer() {
    return (<>
        <div className="social-menu">
            <ul className="list">

                <li className="listli"><a href="https://www.facebook.com/Amoseman18/" target="_blank" rel="noreferrer"><i className="fab fa-facebook" id="icon1"></i></a></li>

                <li className="listli"><a href="https://github.com/amoseman1" target="_blank" rel="noreferrer"><i className="fab fa-github" id="icon2"></i></a></li>

                <li className="listli"><a href="https://www.linkedin.com/in/amy-moseman-7867a9158" target="_blank" rel="noreferrer"><i className="fab fa-linkedin" id="icon3"></i></a></li>
            </ul>

        </div>
        {/* <p id="copywright">&copy;Amy Moseman 2021</p> */}
    </>
    )
}

export default Footer