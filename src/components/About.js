import styles from "./style.css"
import Myimg from "./DSC_9194 - Copy.JPG"

function About(){
    return(
       <section className="about-section">
        <h1 className="head">About Me</h1>
        <div className="about">
        <div className="img-div">
        <img src={Myimg} className="myimg"  alt="" />
        </div>
        <div className="myinfo">
        
        <h1>Welcome to my portfolio</h1>
        <p>Im a Software Engineer, fervent about technology and how they can be used to solve problems and how it can be used to integrate innovaton. </p>
        <h3>My Tech Stacks</h3>
        <div className="mystack" >
            <ul>
                <li>Javascript</li>
                <li>React</li>
                <li>CSS</li>
                <li>Node.Js</li>
            </ul>
            <ul>
                <li>Bootstrap</li>
                <li>TailwindCss</li>
                <li>CSS</li>
                <li>HTML</li>
            </ul>
        </div>
        <h3>Other Tool</h3>
        <div className="mystack" >
            <ul>
                <li>Corel Draw</li>
                <li>Canva</li>           
            </ul>
            <ul>
                <li>Photoshop</li>
                <li>Figma</li>
            </ul>
        </div>
        </div>
        </div>
       </section> 
    )
}

export default About;