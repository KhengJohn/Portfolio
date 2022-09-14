import style from "./style.css";
import Projectimg1 from "./desalproject.jpg"
import Projectimg2 from "./moviesearchproject.jpg"
import Projectimg3 from "./smsproject.jpg"
export default function Project(){
    return(
        <div className="project-section">
            <div className="proj-container proj1">
                <div className="projectImgdiv">
                <img src={Projectimg1} className="projectImg"/>
                </div>
                <div className="projtitle">
                <p>#1</p>
                <h2>DESAL MSC Website</h2>
                <a href="https://desalmsc.netlify.app/">Live</a>
                </div>
            </div>
            <div className="proj-container2">                
                <div className="projtitle">
                <p>#2</p>
                <h2>Movie Search App</h2>
                <a href="https://apimoviesearchapp.netlify.app/">Live</a>
                </div>
                <div className="projectImgdiv2">
                <img src={Projectimg2} className="projectImg2"/>
                </div>
            </div>
            <div className="proj-container proj1">
                <div className="projectImgdiv">
                <img src={Projectimg3} className="projectImg"/>
                </div>
                <div className="projtitle">
                <p>#3</p>
                <h2>School Management System</h2>
<<<<<<< HEAD
                <a href="https://minervahubschoolmanagementsystem.netlify.app">Live</a>
=======
                <a href="https://minervahubschoolmanagementsystem.netlify.app/">Live</a>
>>>>>>> ff30d4dbbd895e32ef368bb59c414cb740288586
                </div>
            </div>   
            <a className="btn btn-project"  href="">View More</a>     
        </div>
    )
}
