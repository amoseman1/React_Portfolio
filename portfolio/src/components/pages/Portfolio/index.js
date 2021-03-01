import React from 'react';
import './style.css';

function Portfolio() {
    return (

        <>

            <br />
            <br />
            <br />
            <br />
            <br />

            {/* <nav class="uk-navbar-container uk-navbar-transparent" uk-navbar>
      <div class="uk-position-relative">
        <div class="uk-position-top">
           <nav class="uk-navbar-container uk-navbar-transparent" uk-navbar>
               <div class="uk-navbar-left">
                   <ul class="uk-navbar-nav">
                       <li class="uk-active"><a id="navList" href="index.html">Home</a></li>
                       <li><a id="navList" href="portfolio.html">Projects</a></li>
                       <li><a id="navList" href="contact.html">Contact</a></li>
                   </ul>
               </div>
            </nav> 
        </div>
      </div> 
     </nav>  */}

            <h1>Portfolio</h1>
            <ul>
                <i id="skills" className="fab fa-html5"></i>
                <i id="skills" className="fab fa-css3-alt"></i>
                <i id="skills" className="fab fa-js"></i>
                <i id="skills" className="fab fa-node-js"></i>
            </ul>


            <container className="row" id="row1">
                <div className="col-md-3"></div>
                <div id="border" class="col-md-3">
                    <div className="card" style={{ width: "18rem" }}>
                        <img id="images"
                            src="../../../assets/tasteTheMusic1 (1).gif"
                            className="card-img-top"
                            alt="Music for Your Tastebuds" />
                        <div className="card-body">
                            <h5 className="card-title"><strong>Pairing Recipes & Music</strong></h5>
                            <p className="card-text">APIs and event handlers allow you to randomly pair a song with a recipe with the click of a button</p>
                            <a id="projBtns" href="https://enevarez-ops.github.io/projectOne/" className="btn btn-primary">View My Work</a >
                            <a href=" https://github.com/enevarez-ops/projectOne"><i id="profIcon" className="fab fa-github"></i></a>
                        </div>
                    </div>
                </div>
                <div id="border" className="col-md-3">
                    <div className="card" style={{ width: "18rem" }}>
                        <img id="images"
                            src="../../../assets/keepDreamingSS.png"
                            className="card-img-top"
                            alt="Travel App Project" />
                        <div className="card-body">
                            <h5 className="card-title"><strong>Travel App Project</strong></h5>
                            <p className="card-text">This app quizzes you for your traveling preferences and chooses a destination for you!</p>
                            <a id="projBtns" href="https://warm-earth-65577.herokuapp.com/" className="btn btn-primary">Check It Out!</a>
                            <a href="https://github.com/amoseman1/Keep_Dreaming"><i id="profIcon" className="fab fa-github"></i></a>
                        </div>
                        <div className="col-md-3"></div>
                    </div>
                </div>
            </container>

            <container className="row">
                <div className="col-md-3"></div>
                <div id="border" className="col-md-3">
                    <div className="card" style={{ width: "18rem" }}>
                        <img id="images"
                            src="../../../assets/employeemanagerSS.png"
                            className="card-img-top"
                            alt="employee manager" />
                        <div className="card-body">
                            <h5 className="card-title"><strong>Employee Manager</strong></h5>
                            <p className="card-text">This is a back-end CLI that allows you to keep track of your team through prompted questions</p>
                            <a id="projBtns" href="https://drive.google.com/file/d/1ln3IedVVDCalSRFas2ydxZyAn1Xo69hc/view" className="btn btn-primary">Check It Out!</a>
                            <a href="https://github.com/amoseman1/employeeInfoGenerator"><i id="profIcon" className="fab fa-github"></i></a>
                        </div>
                    </div>
                </div>
                <div id="border" className="col-md-3">
                    <div className="card" style={{ width: "18rem" }}>
                        <img id="images"
                            src="../../../assets/screenshotDayScheduler.png"
                            className="card-img-top"
                            alt="Workday Planner" />
                        <div className="card-body">
                            <h5 className="card-title"><strong>Workday Scheduler</strong></h5>
                            <p className="card-text">jQuery and local storage make this useful for anyone with a busy day</p>
                            <a id="projBtns" href="https://amoseman1.github.io/dayScheduler/" className="btn btn-primary">Give it a try!</a>
                            <a href="https://github.com/amoseman1/dayScheduler"><i id="profIcon" className="fab fa-github"></i></a>
                        </div>
                        <div className="col-md-3"></div>
                    </div>
                </div>
            </container>

        </>
    )
}

export default Portfolio;