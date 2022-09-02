import React from "react"
import ReactDOM  from "react-dom"
import Nav from "./components/Nav"
import style from "./index.css"
import About from "./components/About"
import Hero from "./components/Hero"
import Socials from "./components/Socials"
import Projects from "./components/Projects"
import Footer from "./components/Footer"
import NavBack from "./components/Navback"
import Skill from "./components/Skill"
import Project from "./components/Project"
function App(){
    return(
    <div className="allContent">     
    <Nav />
    <NavBack />
    <div className="pageContent">
    <div className="mainContent">
    <Hero />
    <Skill />
    <Project />
    {/* <About />
    <Projects /> */}
    </div>
    <Socials />
    </div> 
    
   <Footer />
     </div>
)}

ReactDOM.render(<App />, document.getElementById('root'))