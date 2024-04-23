import React from "react";
import "./About.css"
import hero from "../../assets/hero-image.jpg"

const About = () => {
    return (
        <div className="about">
            <div className="about-title">
                <h1>About Me</h1>
            </div>
            <div className="about-sections">
                <div className="about-left">
                    <img src={ hero } alt="profile picture" />
                </div>
                <div className="about-right">
                    <div className="about-paragraphs">
                        <p>Hello, my name is Darren. I was born and raised in NSW Sydney. Currently I am 22 years old and I am still unsure of what to do with my life. I enjoy coding as it is fun, challenging and new for me. When I'm not coding, I can be found in the gym, at BJJ or going on a run. At the moment, I am a pick packer at Coles CDC, where I work full time.</p>
                        <p>Currently, I am enrolled in a Coding Bootcamp at USYD in collaboration with edX. I am adept at full stack development, with knowlegde and experience in both Frontend and Backend development.</p>
                    </div>
                    <div className="skills">
                        <div className="dev-skills"><p>Frontend</p><hr style={{width: "70%"}}></hr></div>
                        <div className="dev-skills"><p>Backend</p><hr style={{width: "70%"}}></hr></div>
                        <div className="dev-skills"><p>FullStack</p><hr style={{width: "60%"}}></hr></div>
                    </div>
                </div>
            </div>
        </div>       
    )
}

export default About