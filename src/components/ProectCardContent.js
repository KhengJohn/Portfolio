import style from "./style.css"
import Projectimg from "./projectimg.png"
import Linkimg from "./linkimg.png"
import Githubimg from "./githubimg.png"

function PCard(props){
    return(
        <div className="projectcard">
            <div className="project-content">
            <div className="projectcard-top">
               <img src={Projectimg} className="project-img" alt="" />     
            </div>
            <div className="projectcard-body">
                <h2>{props.Title}</h2>
                <p className="description">{props.description}</p>
            </div>
            {/* <div className="projectcard-footer">
                <p>{props.lang1}</p>
                <p>{props.lang2}</p>
                <p>{props.lang3}</p>
                {props.lang4 && <p>{props.lang4}</p>}
            </div> */}
            </div>
            <div className="linkBar">
                <a href={props.livelink}><img src={Linkimg} className="linkimg" /></a>
                <a href={props.gitlink}><img src={Githubimg} className="linkimg" /></a>
            </div>
        </div>
    )
}

export default PCard;