import React from "react"
import ReactDOM  from "react-dom"
import Nav from "./components/Nav"
import style from "./index.css"
import About from "./components/About"
import Hero from "./components/Hero"
import Socials from "./components/Socials"
import Projects from "./components/Projects"
import By from "./components/By"
function App(){
    return(
    <div className="allContent">
         <Nav />
    <div className="pageContent">
   <div className="mainContent">
    <Hero />
    <About />
    <Projects />
    </div>
        <Socials />
        <By />
    </div>
    </div>
)}

ReactDOM.render(<App />, document.getElementById('root'))