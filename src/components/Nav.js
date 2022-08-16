import style from "./style.css"

function Nav(){
    return(
        <nav>
            <img src="" />
            <div className="hamburger">
                <div className="line1"></div>
                <div className="line2"></div>
                <div className="line3"></div>         
            </div>
                <ul className="nav-links">
                   <li><a href="#">Home</a></li> 
                   <li><a href="">Projects</a></li>
                   <li><a href="">Services</a></li>
                   <li><a href="">Contact</a></li>
                </ul>
  
        </nav>
    )
}

export default Nav;