import React from 'react'
// import Jumbotron from 'react-bootstrap/Jumbotron'
// import Image from 'react-bootstrap/Image'
// import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import CardDeck from "react-bootstrap/CardDeck"
import Button from 'react-bootstrap/Button'
import "./style.css"

function Portfolio2() {
    return (<>
        <br />
        <br />
        <br />
        <br />
        <br />
        <CardDeck>
            <Card className="card">
                <Card.Img variant="top" src="./hobbyDrop.png" />
                <Card.Body className="cardbody">
                    <Card.Title>Hobby Drop</Card.Title>
                    <Card.Text>
                        MERN application with Firebase Auth and CRUD capabilities. User can make a post to get rid of unwanted hobby supplies. They can update or delete their posts. By scanning other posts they can quickly get into a new hobby!
            </Card.Text>
                </Card.Body>
                <Card.Footer>
                    <Button variant="secondary" href="https://boiling-plains-91409.herokuapp.com/" target="_blank" rel="noreferrer">Check it out!</Button>
                    <a href="https://github.com/amoseman1/HobbyDrop" target="_blank" rel="noreferrer"><i id="profIcon" className="fab fa-github"></i></a>
                </Card.Footer>
            </Card>
            <Card className="card">
                <Card.Img variant="top" src="./keepDreamingSS.png" />
                <Card.Body className="cardbody2">
                    <Card.Title>Keep Dreaming</Card.Title>
                    <Card.Text>
                        An application that quizzes the user for their traveling preferences and chooses a destination based off them. Sequelize, Javascript and Express are the bones of the operation.
                    </Card.Text>
                </Card.Body>
                <Card.Footer>
                    <Button variant="secondary" href="https://warm-earth-65577.herokuapp.com/" target="_blank" rel="noreferrer">Check it out!</Button>
                    <a href="https://github.com/amoseman1/Keep_Dreaming" target="_blank" rel="noreferrer"><i id="profIcon" className="fab fa-github"></i></a>

                </Card.Footer>
            </Card>
            <Card className="card">
                <Card.Img variant="top" src="./tasteTheMusic1 (1).gif" />
                <Card.Body className="cardbody">
                    <Card.Title>Taste The Music</Card.Title>
                    <Card.Text>
                        APIs and event handlers allow you to randomly pair a song with a recipe on the click of a button. jQuery dynamic rendering handles the responses.
            </Card.Text>
                </Card.Body>
                <Card.Footer>
                    <Button variant="secondary" href="https://enevarez-ops.github.io/projectOne/" target="_blank" rel="noreferrer">Check it out!</Button>
                    <a href="https://github.com/enevarez-ops/projectOne" target="_blank" rel="noreferrer"><i id="profIcon" className="fab fa-github"></i></a>
                </Card.Footer>
            </Card>
        </CardDeck>
    </>

    )
}

export default Portfolio2
