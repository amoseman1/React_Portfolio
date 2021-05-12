import React from 'react'
import './style.css'

function Footer() {
    return (<>
        <div className="social-menu">
            <ul>

                <li><a href="https://www.facebook.com/Amoseman18/"><i id="icons" className="fab fa-facebook"></i></a></li>

                <li><a href="https://github.com/amoseman1"><i id="icons" className="fab fa-github"></i></a></li>

                <li><a href="https://www.linkedin.com/in/amy-moseman-7867a9158"><i id="icons" className="fab fa-linkedin"></i></a></li>
                <i id="icons" className="far fa-copyright">Amy Moseman</i>
            </ul>
        </div>
    </>
    )
}

export default Footer