import React from "react";
import './homestyle.css';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
// import Container from 'react-bootstrap/Container'
import Image from 'react-bootstrap/Image'




function Home() {
    return (
        <>
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />

            <Row className="justify-content-lg-center">
                {/* <Container> */}
                <Col lg={3}>
                    <Image id="photo" src="./IMG_1911.jpg" alt="author"></Image></Col>
                <Col lg={9}> <main id="about">Adventurer by heart, leader and problem solver by nature. I’ve worn many
                hats in my life which have given me the life lessons and experiences to mold
                me into a very adaptable and hard-working individual. Spending most of my
                working life in the hospitality industry, I know what is to be punctual,
                energizing, polite, calm, a multitasker and flexible. My work in the outdoor
                industry has given me the title of teacher, leader, steward, athlete,
                competitor, and risk manager. The volunteering work I do has taught me how
                to be an influencer with integrity, an enthusiastic motivator, and an organized
                and dependable communicator. All of these traits have made my transition
                into a web developer much smoother. The daily collaboration is a crucial part
                of the experience. I can't wait to build some amazing things together.</main></Col>

                {/* </Container> */}
            </Row>
            <Row className="justify-content-lg-center">
                <Col>
                    <Image src="https://upload.wikimedia.org/wikipedia/commons/9/94/MERN-logo.png" id="mern" alt="mern"></Image>
                </Col>
            </Row>
        </>
    );
}

export default Home;