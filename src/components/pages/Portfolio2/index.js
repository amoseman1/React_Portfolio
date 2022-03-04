import React from 'react'
import Button from 'react-bootstrap/Button'
import "./style.css"
import { Card } from "semantic-ui-react";
// import { Impress, Step } from 'react-impressjs';

function Portfolio2() {

    // function clickLeft(e) {
    //     var imp = impress();
    //     imp.prev();
    //     e.preventDefault();
    // };

    // function clickRight(e) {
    //     var imp = impress();
    //     imp.next();
    //     e.preventDefault();
    // };



    return (<>
        {/* <Impress >
            <Step className={'without_id_is_ok'}
                data={
                    {
                        x: 100,
                        y: -100,
                        scale: 2
                    }} />
            <Step duration={1500}>
                <h1>Any Element write in Step!</h1>
                <hr />
                <p>Made by your <b>Creativity</b> !!</p>
            </Step> */}
        {/* <!-- The first slide retains its default position. We could omit the data attributes --> */}
        {/* <div id="intro" class="step" data-x="0" data-y="0">
                <h2>Introducing Galaxy Nexus</h2>
                <p>Android 4.0<br /> Super Amoled 720p Screen<br /></p>
                <img src="assets/img/nexus_1.jpg" width="232" height="458" alt="Galaxy Nexus" />
            </div> */}

        {/* <!-- We are offsetting the second slide, rotating it and making it 1.8 times larger --> */}
        {/* <div id="simplicity" class="step" data-x="1100" data-y="1200" data-scale="1.8" data-rotate="190">
                <h2>Simplicity in Android 4.0</h2>
                <p>Android 4.0, Ice Cream Sandwich brings an entirely new look and feel..</p>
                <img src="assets/img/nexus_2.jpg" width="289" height="535" alt="Galaxy Nexus" />
            </div> */}

        {/* <!-- Same for the rest.. --> */}
        {/* <div id="connect" class="step" data-x="-300" data-y="600" data-scale="0.2" data-rotate="270">
                <h2>Connect &amp; Share</h2>
                <p>Real-life sharing is nuanced and rich. Galaxy Nexus makes sharing.. </p>
                <img src="assets/img/nexus_3.jpg" width="558" height="329" alt="Galaxy Nexus" />
            </div>

            <div id="upload" class="step" data-x="-200" data-y="1500" data-rotate="180">
                <h2>Instant Upload</h2>
                <p>Your photos upload themselves with Instant Upload, which makes ..</p>
                <img src="assets/img/nexus_4.jpg" width="248" height="510" alt="Galaxy Nexus" />
            </div>

            <div id="music" class="step" data-x="-1200" data-y="1000" data-scale="0.8" data-rotate="270">
                <h2>Jam on with Google Music</h2>
                <p>Google Music makes discovery, purchase, and listening effortless and..</p>
                <img src="assets/img/nexus_5.jpg" width="570" height="389" alt="Galaxy Nexus" />
            </div> */}
        {/* </Impress> */}
        {/* <a id="arrowLeft" class="arrow" onClick={clickLeft}>&lt;</a>
        <a id="arrowRight" class="arrow" onClick={clickRight}>&gt;</a> */}

        <br />
        <br />
        <br />
        <br />
        <br />
        <Card>
            <div className="row prow">
                <div className="col-md-6">
                    <img className="mobileImg" src="./snome1.png" alt="snome demo" />
                    <img className="mobileImg" src="./snome2.png" alt="snome demo" />
                    <img className="mobileImg" src="./snome3.png" alt="snome demo" />
                    <img className="mobileImg" src="./snome4.png" alt="snome demo" />
                    <img className="mobileImg" src="./snome6.png" alt="snome demo" />
                    <img className="mobileImg" src="./snome7.png" alt="snome demo" />
                </div>
                <div className="col-md-6 proDets flex-wrap" id="cardbody">
                    <h1 id="profIcon">
                        Snome
                        <a className="inline-link " href="https://github.com/Snome-Snow-Home/Snome" target="_blank" rel="noreferrer">
                            <i id="profIcon" className="fab fa-github"></i>
                        </a>
                    </h1>
                    <hr />
                    <p className="description">
                        Snome is a mobile application that is a home exchange platform for ski towns. Add your home, find a match, have a ski vacation getaway. This app is close to deployment as an MVP. This app is freelancing project being created through an agile team of engineers, UI/UX designers, and product managers. <strong> React Native </strong>, Expo, NodeJS, Express, Postgres, Async Storage and JWT authorization.
                    </p>
                    {/* <Button id="button" variant="secondary" href="https://boiling-plains-91409.herokuapp.com/" target="_blank" rel="noreferrer">Check it out!</Button> */}
                </div>
            </div>
        </Card>
        <Card>
            <div className="row prow">
                <div className="col-md-6">
                    <img className="projectImg" src="" alt="hobby drop" />
                </div>
                <div className="col-md-6 proDets flex-wrap" id="cardbody">
                    <h1 id="profIcon">
                        Sonny's
                        <a className="inline-link" href="https://github.com/amoseman1/sonnys" target="_blank" rel="noreferrer">
                            <i id="profIcon" className="fab fa-github"></i>
                        </a>
                    </h1>
                    <hr />
                    <p className="description">
                        This is a full stack website built for a client's catering company, Sonny's. This freelancing job was a solo mission from yours truely. I built the server, database, all the components and APIs. I even expanded into typgraphy, color theming, logo design and consulting.
                    </p>
                    <Button id="button" variant="secondary" href=" https://frozen-falls-56288.herokuapp.com" target="_blank" rel="noreferrer">Live Website!</Button>
                </div>
            </div>
        </Card>
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
