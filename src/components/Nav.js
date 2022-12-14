import { useState , useRef } from "react";
import style from "./style.css";
import Logo from "./logo192.png";





function Nav(){

    // const hamburger = document.querySelector(".hamburger");
    // const navLinks = document.querySelector(".nav-links");
    // const links = document.querySelectorAll(".nav-links li");
  //  const navLinks = useRef();
    // const navLinksLi = useRef();
    // const hamburger = useRef();
    // hamburger.addEventListener('click',
    // function hamburgerO (){
      
    //     navLinks.classList.toggle("open");
    //     navLinksLi.forEach(navLinksLi => {
    //         navLinksLi.classList.toggle("fade");
    //     });
    //     hamburger.classList.toggle("toggle");
    // };

const handleClick = event => {
  // event.currentTarget.classList.toggle('open');
  event.currentTarget.classList.toggle('toggle');
  // event.currentTarget.classList.toggle('fade');
}

    return(
        <nav>
          <div class="logo">
        <img src={Logo} alt="Logo Image" class="logoTop" />
      </div>
      <div onClick={handleClick}  class="hamburger">
        <div class="line1"></div>
        <div class="line2"></div>
        <div class="line3"></div>
      </div>

      <ul class="nav-links">
        <li><a href="">Home</a></li>
        <li><a href="">Dashboard</a></li>
        <li><a class="btn-project" href="">Sign In</a></li>
        <li><a class="btn-project" href="">Sign Up</a></li>
        <li></li>
      </ul>
  
        </nav>
    )
}

export default Nav;