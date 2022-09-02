import style from "./style.css"


export default function SkillCardContent(props){
    return(
        <div className="skill-card">
            <img src={props.Img} className="skill-card-img"/>
            <h3 className="skill-card-title">{props.Title}</h3>
            <div className="skill-card-body">
                <p>{props.Body}</p>
            </div>
        </div> 
    )
}