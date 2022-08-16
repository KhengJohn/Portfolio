import React from "react"
import ReactDOM  from "react-dom"
import Nav from "./components/Nav"
import style from "./index.css"
import Hero from "./components/Hero"
import Socials from "./components/Socials"


function App(){
    return(
    <div className="allContent">
         <Nav />
    <div className="pageContent">
   <div className="mainContent">
    <Hero />
    <Hero />
    <Hero />
    <Hero />
    <Hero />

    </div>
    
        <Socials />
    
    </div>
    </div>
)}

ReactDOM.render(<App />, document.getElementById('root'))