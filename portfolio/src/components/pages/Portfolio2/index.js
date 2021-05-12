import React from 'react'
// import Jumbotron from 'react-bootstrap/Jumbotron'
// import Image from 'react-bootstrap/Image'
// import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
// import CardDeck from "react-bootstrap/CardDeck"
import CardColumns from 'react-bootstrap/CardColumns'
import Button from 'react-bootstrap/Button'
import "./style.css"

function Portfolio2() {
    return (<>
        <br />
        <br />
        <br />
        <br />
        <br />
        <CardColumns>
            {/* <CardDeck> */}
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
                <Card.Body className="cardbody2">
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
            {/* </CardDeck> */}

            <Card className="card">
                <Card.Img variant="top" src="./fitnessTracker.png" />
                <Card.Body className="cardbody">
                    <Card.Title>Fitness Tracker</Card.Title>
                    <Card.Text>
                        Application that allows a user to keep track of workouts or continue an existing workout to stay organized and reach their goals faster. Uses graphing, MongoDB and Express.
            </Card.Text>
                </Card.Body>
                <Card.Footer>
                    {/* <Button variant="secondary" href="https://enevarez-ops.github.io/projectOne/" target="_blank" rel="noreferrer">Check it out!</Button> */}
                    <a href="https://github.com/amoseman1/fitnessTracker" target="_blank" rel="noreferrer"><i id="profIcon" className="fab fa-github"></i></a>
                </Card.Footer>
            </Card>
            {/* <CardDeck> */}
            <Card className="card">
                <Card.Img variant="top" src="./budget.png" />
                <Card.Body className="cardbody">
                    <Card.Title>Budget Tracker</Card.Title>
                    <Card.Text>
                        PWA packages allows the user to tracker their budget even if offline. Graph allows visual of expenses and income.
                    </Card.Text>
                </Card.Body>
                <Card.Footer>
                    {/* <Button variant="secondary" href="https://boiling-plains-91409.herokuapp.com/" target="_blank" rel="noreferrer">Check it out!</Button> */}
                    <a href="https://github.com/amoseman1/offline_budget_tracker" target="_blank" rel="noreferrer"><i id="profIcon" className="fab fa-github"></i></a>
                </Card.Footer>
            </Card>
            <Card className="card">
                <Card.Img variant="top" src="./userDirectory.png" />
                <Card.Body className="cardbody2">
                    <Card.Title>User Directory</Card.Title>
                    <Card.Text>
                        An employee or manager can view all employees in a sleek list format. React and controlled form input adds the functionality of searching in the input box for a name, or sorting the list alphabetically by the employee's first name.
                    </Card.Text>
                </Card.Body>
                <Card.Footer>
                    {/* <Button variant="secondary" href="https://warm-earth-65577.herokuapp.com/" target="_blank" rel="noreferrer">Check it out!</Button> */}
                    <a href="https://github.com/amoseman1/react_user_directory/tree/master/userdirectory" target="_blank" rel="noreferrer"><i id="profIcon" className="fab fa-github"></i></a>

                </Card.Footer>
            </Card>
            {/* </CardDeck> */}
        </CardColumns>
    </>

    )
}

export default Portfolio2
