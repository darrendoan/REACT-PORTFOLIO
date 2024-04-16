import React from "react";
import "./Hero.css"
import hero from "../../assets/hero-image.jpg"

const Hero = () => {
    return (
        <div className="hero">
            <img src= { hero } alt="hero image" />
            <h1>Hello! I'm Darren, full stack developer based in Australia.</h1>
            <p>I am currently a student of the Usyd Coding Bootcamp from Sydney, with 6 months experience in all aspects of full stack development.</p>
            <div className="hero-connect">Connect With Me</div>
            <div className="hero-resume">My Resume</div>
        </div>
    )
}

export default Hero