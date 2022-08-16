import style from "./style.css"
import Linkedimg from "./linkedinimg.png"
import Githubimg from "./githubimg.png"
import Twitterimg from "./twitterimg.png"
import Instagramimg from "./instagramimg.png"

function Socials() {
    return(
        <div className="socials">
        <div>
            <a href="https://github.com/KhengJohn"><img src={Githubimg} alt="" className="socials-img simg1" /></a>
            <a href="https://www.linkedin.com/in/john-idoko-474251218"><img src={Linkedimg} alt="" className="socials-img"  /></a>
            <a href="https://twitter.com/KhengJohn?t=wAIeE-iZhmk8h4yUceXpSA&s=09"><img src={Twitterimg} alt="" className="socials-img"  /></a>
            <a href="https://www.instagram.com/kheng_john"><img src={Instagramimg} alt="" className="socials-img" /></a>
            </div> 
        </div> 
    )
}

export default Socials;