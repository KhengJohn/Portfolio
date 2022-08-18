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
                        "I'm a Graphic Designer",
                        "I'm a Tech Enthusiast",
                    ]

                }} />
            </h2>
            <div className="p2">
            <p className="p2p">Welcome to my portfolio, feel free to look around and contact me, as i look forward to hearing from you.</p>
            {/* <p>On Here i have placed my Projects, Social Media Links and Previous Experiences</p> */}
            <a onClick={"location.href='my-app/src/components/Idoko Johns Resume.pdf'"} href="my-app\src\components\Idoko John's Resume.pdf"  className="btn-cv">View CV</a>
            </div>
            </div>
            
        </section>
    )
}

export default Hero;