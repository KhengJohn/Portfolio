import style from "./style.css"
import { useRef } from "react"
import { useState } from "react";
import Logo from "./logo192.png"




function Nav(){

    const [isNav, setIsNav] = useState(true);

    // const hamburger = document.querySelector(".hamburger");
    // const links = document.querySelectorAll(".nav-links li");
const navRef= useRef();
const ShowNavbar = ( )=> {
    navRef.current.classList.toggle("open");
 
    //  hamburger.classList.toggle("toggle");
}

const show = ()=>  { "nav-links"  }


    return(
        <nav>
          <div class="logo">
        <img src={Logo} alt="Logo Image" class="logoTop" />
      </div>
            <div onClick={show}  className="hamburger">
                <div className="line1"></div>
                <div className="line2"></div>
                <div className="line3"></div>         
            </div>
                <ul ref={navRef}  className={isNav ? "nav-links" : "fade" }>
                   <li><a href="">Home</a></li> 
                   <li><a href="">Projects</a></li>
                   <li><a href="">Services</a></li>
                   <li><a href="">Contact</a></li>
                </ul>
  
        </nav>
    )
}

export default Nav;