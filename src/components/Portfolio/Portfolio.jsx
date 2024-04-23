import React from "react"
import "./Portfolio.css"
import  logo  from "../../assets/logo.jpg";
import quizSS from "../../assets/coding-quiz-SS.png"
import WorkDay from "../../assets/work-day-scheduler.png"
import NoteTaker from "../../assets/Note-taker.png"
import SocialNetworkApi from "../../assets/Social-network-api.png"
import GamingUniversity from "../../assets/Gaming-university.png"
import Spawnpoint from "../../assets/Spawnpoint.png"

import { styled } from '@mui/material/styles';

const Portfolio = () => {
    return (
        <div className="portfolio">
            <div className="portfolio-title">
                <h1>My Portfolio</h1>
            </div>
            <div>
            <p>I have extensive experience developing a diverse array of digital projects, from straightforward static websites to sophisticated web applications. My technical toolkit encompasses a broad spectrum of technologies, including HTML, CSS, JavaScript, React, Node.js, Express, MongoDB, among others. Below, you'll find a list of my most recent projects. To explore further details, please hover over each project and click on the corresponding icons.</p>
            </div>
            <section className="portfolio-container">
                <div className="portfolio-cards">
                    <div className="portfolio-projects">
                        <h2><a href="https://github.com/darrendoan/JavaScript-Quiz?tab=readme-ov-file">Coding Quiz</a></h2>
                        <h3>Frontend</h3>
                        <h4>A simple coding quiz built using HTML, CSS and JavaScript</h4>
                        <div><a href="https://darrendoan.github.io/JavaScript-Quiz/">
                            <img src= { quizSS }/>
                        </a></div>
                    </div>

                    <div className="portfolio-projects">
                        <h2><a href="https://github.com/darrendoan/Work-Day-Planner">Workday Planner</a></h2>
                        <h3>Frontend</h3>
                        <h4>A simple planner built using HTML, CSS and JavaScript</h4>
                        <div><a href="https://darrendoan.github.io/Work-Day-Planner/">
                            <img src= { WorkDay }/>
                        </a></div>
                    </div>

                    <div className="portfolio-projects">
                        <h2><a href="https://github.com/darrendoan/express-note-taker?tab=readme-ov-file">Express note taker</a></h2>
                        <h3>Backend</h3>
                        <h4>Simple note taker built using Express.js</h4>
                        <div><a href="https://shrouded-fjord-07146-0342a75c2501.herokuapp.com/">
                            <img src= { NoteTaker }/>
                        </a></div>
                    </div>
                    
                    <div className="portfolio-projects">
                        <h2><a href="https://github.com/darrendoan/Social-Network-API-NoSQL?tab=readme-ov-file">Social Network API</a></h2>
                        <h3>Backend</h3>
                        <h4>RESTful API built using Node.js and Moongoose.</h4>
                        <div><a href="https://app.screencastify.com/v3/watch/nyYstOm4aZXTRhHxcBPR">
                            <img src= { SocialNetworkApi }/>
                        </a></div>
                    </div>

                    <div className="portfolio-projects">
                        <h2><a href="https://github.com/Yukitoshi12345/The-University-of-Gaming">The University of Gaming</a></h2>
                        <h3>Frontend</h3>
                        <h4>A gaming website built with HTML, CSS and Javascript.</h4>
                        <div><a href="https://yukitoshi12345.github.io/The-University-of-Gaming/">
                            <img src= { GamingUniversity }/>
                        </a></div>
                    </div>

                    <div className="portfolio-projects">
                        <h2><a href="https://github.com/darrendoan/Group-5-Project-2">Spawnpoint.io</a></h2>
                        <h3>Full Stack</h3>
                        <h4>A gaming website that incorporates both front and back end technologies</h4>
                        <div><a href="https://spawnpoint.tech/">
                            <img src= { Spawnpoint }/>
                        </a></div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Portfolio