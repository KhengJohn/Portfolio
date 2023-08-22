import React, { useState, useEffect } from "react";
import "../../styles/home/style.css";
import Typewriter from "typewriter-effect";

const Myimg = `${process.env.PUBLIC_URL}./assets/images/DSC_9194 - Copy.JPG`;
const Instagramimg = `${process.env.PUBLIC_URL}./assets/images/javascriptimg.png`;
const Linkedimg = `${process.env.PUBLIC_URL}./assets/images/nodejsimg.png`;
const Githubimg = `${process.env.PUBLIC_URL}./assets/images/reactimg.png`;
const Twitterimg = `${process.env.PUBLIC_URL}./assets/images/cssimg.png`;

function Hero() {
  return (
    <section className="hero-section" id="section1">
      <div className="hero-section-intro">
        <p>Hey There, My Name is </p>
        <h1>John Idoko</h1>
        <h2 className="text">
          <Typewriter
            options={{
              autoStart: true,
              loop: true,
              delay: 40,
              strings: [
                "I'm a Web Developer",
                "I'm a Software Engineer",
                "I'm a Graphic Designer",
                "I'm a Tech Enthusiast",
              ],
            }}
          />
        </h2>
        <div className="p2">
          <h3>Welcome to my SPACE,</h3>
          <p className="p2p">
            feel free to look around and contact me, as i look forward to
            hearing from you.
          </p>
          {/* <p>On Here i have placed my Projects, Social Media Links and Previous Experiences</p> */}
          <a className="btn btn-project cv" href="#section5">Say Hi 👋</a>
          <a className="underlined-btn" href="#section2">Explore my universe</a>
        </div>
      </div>
      <div className="myheroimgdiv">
        <img src={Myimg} className="myheroimg" alt="" />
        <div className="rotation">
          <a href="https://www.linkedin.com/in/john-idoko-474251218">
            <img src={Linkedimg} alt="" className="float-img" />
          </a>
        </div>
        <div className="rotation2">
          <a href="https://www.instagram.com/kheng_john">
            <img src={Instagramimg} alt="" className="float-img" />
          </a>
        </div>
        <div className="rotation3">
          <a href="https://twitter.com/KhengJohn?t=wAIeE-iZhmk8h4yUceXpSA&s=09">
            <img src={Twitterimg} alt="" className="float-img" />
          </a>
        </div>
        <div className="rotation4">
          <a href="https://github.com/KhengJohn">
            <img src={Githubimg} alt="" className="float-img" />
          </a>
        </div>
      </div>
    </section>
  );
}

export default Hero;
