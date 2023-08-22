import React from "react";
import About from "../components/pages/home/About";
import Hero from "../components/pages/home/Hero";
import Socials from "../components/pages/home/Socials";
import Projects from "../components/pages/home/Projects";
import NavBack from "../components/navbar/Navback";
import Skill from "../components/pages/home/Skill";
import Project from "../components/pages/home/Project";
import Nav from "../components/navbar/Nav";
import "../components/styles/home/style.css";
import ContactMe from "../components/pages/home/ContactMe";
const Home = () => {
  return (
    <div className="allContent">
       <Nav />
     <NavBack />
      <div className="pageContent">
        <div className="mainContent">
          <Hero />
          <Skill />
          <Project />
          {/* <About /> */}
          {/* <Projects /> */}
          <ContactMe />
        </div>
        {/* <Socials /> */}
      </div>
    </div>
  );
};

export default Home;
