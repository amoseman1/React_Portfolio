import React from 'react'
import Button from 'react-bootstrap/Button'
import "./style.css"
import { Card } from "semantic-ui-react";

function Portfolio2() {
    return (<>
        <br />
        <br />
        <br />
        <br />
        <br />
        <Card>
            <div className="row prow">
                <div className="col-md-6">
                    <img className="projectImg" src="./hobbyDrop.png" alt="hobby drop" />
                </div>
                <div className="col-md-6 proDets flex-wrap" id="cardbody">
                    <h1 id="profIcon">
                        Hobby Drop
                    <a className="inline-link " href="https://github.com/amoseman1/HobbyDrop" target="_blank" rel="noreferrer">
                            <i id="profIcon" className="fab fa-github"></i>
                        </a>
                    </h1>
                    <hr />
                    <p className="description">
                        MERN application with Firebase Auth and CRUD capabilities. User can make a post to get rid of unwanted hobby supplies. They can update or delete their posts. By scanning other posts they can quickly get into a new hobby!
                </p>
                    <Button id="button" variant="secondary" href="https://boiling-plains-91409.herokuapp.com/" target="_blank" rel="noreferrer">Check it out!</Button>
                </div>
            </div>
        </Card>
        <Card>
            <div className="row prow">
                <div className="col-md-6">
                    <img className="projectImg" src="./keepDreamingSS.png" alt="taste the music" />
                </div>
                <div className="col-md-6 proDets flex-wrap" id="cardbody">
                    <h1 id="profIcon">
                        Keep Dreaming
                    <a className="inline-link " href="https://github.com/amoseman1/Keep_Dreaming" target="_blank" rel="noreferrer">
                            <i id="profIcon" className="fab fa-github"></i>
                        </a>
                    </h1>
                    <hr />
                    <p className="description">
                        An application that quizzes the user for their traveling preferences and chooses a destination based off them. Sequelize, Javascript and Express are the bones of the operation.
                </p>
                    <Button id="button" variant="secondary" href="https://warm-earth-65577.herokuapp.com/" target="_blank" rel="noreferrer">Check it out!</Button>
                </div>
            </div>
        </Card>
        <Card>
            <div className="row prow">
                <div className="col-md-6">
                    <img className="projectImg" src="./tasteTheMusic1 (1).gif" alt="taste the music" />
                </div>
                <div className="col-md-6 proDets flex-wrap" id="cardbody">
                    <h1 id="profIcon">
                        Taste The Music
                    <a className="inline-link " href="https://github.com/enevarez-ops/projectOne" target="_blank" rel="noreferrer">
                            <i id="profIcon" className="fab fa-github"></i>
                        </a>
                    </h1>
                    <hr />
                    <p className="description">
                        APIs and event handlers allow you to randomly pair a song with a recipe on the click of a button. jQuery dynamic rendering handles the responses.
                </p>
                    <Button id="button" variant="secondary" href="https://enevarez-ops.github.io/projectOne/" target="_blank" rel="noreferrer">Check it out!</Button>
                </div>
            </div>
        </Card>
        <Card>
            <div className="row prow">
                <div className="col-md-6">
                    <img className="projectImg" src="./fitnessTracker.png" alt="taste the music" />
                </div>
                <div className="col-md-6 proDets flex-wrap" id="cardbody">
                    <h1 id="profIcon">
                        Fitness Tracker
                    <a className="inline-link " href="https://github.com/amoseman1/fitnessTracker" target="_blank" rel="noreferrer">
                            <i id="profIcon" className="fab fa-github"></i>
                        </a>
                    </h1>
                    <hr />
                    <p className="description">
                        Application that allows a user to keep track of workouts or continue an existing workout to stay organized and reach their goals faster. Uses graphing, MongoDB and Express.
                </p>
                </div>
            </div>
        </Card>
        <Card>
            <div className="row prow">
                <div className="col-md-6">
                    <img className="projectImg" src="./budget.png" alt="taste the music" />
                </div>
                <div className="col-md-6 proDets flex-wrap" id="cardbody">
                    <h1 id="profIcon">
                        Budget Tracker
                    <a className="inline-link " href="https://github.com/amoseman1/offline_budget_tracker" target="_blank" rel="noreferrer">
                            <i id="profIcon" className="fab fa-github"></i>
                        </a>
                    </h1>
                    <hr />
                    <p className="description">
                        PWA packages allows the user to tracker their budget even if offline. Graph allows visual of expenses and income.
                </p>
                </div>
            </div>
        </Card>
        <Card>
            <div className="row prow">
                <div className="col-md-6">
                    <img className="projectImg" src="./userDirectory.png" alt="taste the music" />
                </div>
                <div className="col-md-6 proDets flex-wrap" id="cardbody">
                    <h1 id="profIcon">
                        User Directory
                    <a className="inline-link " href="https://github.com/amoseman1/react_user_directory/tree/master/userdirectory" target="_blank" rel="noreferrer">
                            <i id="profIcon" className="fab fa-github"></i>
                        </a>
                    </h1>
                    <hr />
                    <p className="description">
                        An employee or manager can view all employees in a sleek list format. React and controlled form input adds the functionality of searching in the input box for a name, or sorting the list alphabetically by the employee's first name.
                </p>
                </div>
            </div>
        </Card>
    </>

    )
}

export default Portfolio2
