import React from 'react'
import Jumbotron from 'react-bootstrap/Jumbotron'
import Image from 'react-bootstrap/Image'
import "./style.css"

function Contact() {
    return (
        <Jumbotron id="jumbo">
            <Image id="image" src="https://images.unsplash.com/photo-1504624244670-373b7257e140?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8bW91bnQlMjBwcmluY2V0b24lMjBjb2xvcmFkb3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" ></Image>
            <h1 id="header">Lets Connect!</h1>
            <div id="contact">
                {/* <p id="info">
                     <i id="contact" className="fas fa-mobile-alt"></i>
                    </p>  */}
                <p id="info">
                    <i id="contact" className="far fa-envelope"> </i> amoseman18@gmail.com </p>
            </div>
        </Jumbotron>
    )
}

export default Contact
