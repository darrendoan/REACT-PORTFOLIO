import React from "react"
import "./Portfolio.css"
import  logo  from "../../assets/logo.jpg";

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
                    <div>
                        <h2>Coding Quiz</h2>
                        <h3>Frontend</h3>
                        <h4>A simple coding quiz built using HTML, CSS and JavaScript</h4>
                        <div>
                            <img src= { logo }/>
                        </div>
                    </div>
                    <div>
                        <h2>Workday Planner</h2>
                        <h3>Frontend</h3>
                        <h4>A simple planner built using HTML, CSS and JavaScript</h4>
                        <div>
                            <img src= { logo }/>
                        </div>
                        <h2>Express note taker</h2>
                        <h3>Backend</h3>
                        <h4>Simple note taker built using Express.js</h4>
                        <div>
                            <img src= { logo }/>
                        </div>
                        <h2>Social Network API</h2>
                        <h3>Backend</h3>
                        <h4>RESTful API built using Node.js and Moongoose.</h4>
                        <div>
                            <img src= { logo }/>
                        </div>
                        <h2>The University of Gaming</h2>
                        <h3>Frontend</h3>
                        <h4>A gaming website built with HTML, CSS and Javascript.</h4>
                        <div>
                            <img src= { logo }/>
                        </div>
                        <h2>Spawnpoint.io</h2>
                        <h3>Full Stack</h3>
                        <h4>A gaming website that incorporates both front and back end technologies</h4>
                        <div>
                            <img src= { logo }/>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Portfolio