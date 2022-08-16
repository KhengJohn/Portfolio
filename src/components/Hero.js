import React, {useState} from "react"
import style from "./style.css"
import Typewriter from "typewriter-effect"



function Hero(){

    return (
        <section className="hero-section">
            <div className="hero-section-intro">
            <p>Hey There, My Name is </p>
            <h1>John Idoko</h1>
            <h2 className="text">
                <Typewriter
                options={{
                    autoStart:true,
                    loop:true,
                    delay:40,
                    strings:[
                        "I'm a Web Developer",
                        "I'm a Software Engineer",
                        "I'm A Graphic Designer",
                        "I'm a Tech Enthusiast",
                    ]

                }} />
            </h2>
            <p>Im a software engineer who specializes on building webpages which solve human problems</p>
            <a className="btn">View CV</a>
            </div>
            
        </section>
    )
}

export default Hero;