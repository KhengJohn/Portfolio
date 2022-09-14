import style from "./style.css"
import skilldata from "./skilldata"
import SkillCard from "./SkillCardContent"
import JS from "./javascriptimg.png"
import RE from "./reactimg.png"
import CS from "./cssimg.png"
import HT from "./htmlimg.png"
import BS from "./bootstrapimg.png"
import TC from "./tailwindcssimg.png"
import JQ from "./jqueryimg.png"
import NJ from "./nodejsimg.png"


export default function Skill(){
    const skillElement = skilldata.map(skill=>{
   return     <SkillCard Img={skill.skillImg} 
                   Title={skill.skillTitle}
                   Body={skill.skillBody}
        />
    })
    return(
        <>
        <h2 className="skill-head">My Skills</h2>
        <div className="skill-section">
            
            <div className="skill-card-grid">
                {skillElement}  
            </div>  
            <div className="skill-writeup">
                <h2>About Me</h2>
                <p> John is an experienced, detail-oriented, web developer. 
                    Who is fervent about technology, and how it can be used to solve problems and integrate innovaton.
                    He has hand-on experience in developing modern websites and web applications using modern languages.
                </p>
                <p>
                    I build state-of-the-art, fully responsive, user-friendly and easy to use websites and web applications
                </p>
                <h2>My Stack</h2>
                <div className="stackicons">
                    <div className="tooltip">
                    <img src={JS}  width="40px" />
                    <span  className="tooltiptext">JavaScript</span>
                    </div>
                    <div className="tooltip">
                    <img src={RE} width="40px" />
                    <span  className="tooltiptext">ReactJs</span>
                    </div>
                    <div className="tooltip">
                    <img src={CS} width="40px" />
                    <span  className="tooltiptext">CSS</span>
                    </div>
                    <div className="tooltip">
                    <img src={HT} width="40px" />
                    <span  className="tooltiptext">HTML</span>
                    </div>
                    <div className="tooltip">
                    <img src={BS} width="40px" />
                    <span  className="tooltiptext">BootStrap</span>
                    </div>
                    <div className="tooltip">
                    <img src={TC} width="40px" />
                    <span  className="tooltiptext">TailwindCss</span>
                    </div>
                    <div className="tooltip">
                    <img src={JQ} width="40px" />
                    <span  className="tooltiptext">jQuery</span>
                    </div>
                    <div className="tooltip">
                    <img src={NJ} width="40px" />
                    <span  className="tooltiptext">NodeJs</span>
                    </div>
                </div>
            </div> 
        </div>
        </>
    )
}