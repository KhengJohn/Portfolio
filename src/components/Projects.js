import style from "./style.css"
import PCard from "./ProectCardContent.js"
import projectdata from "./projectdata";

function Projects(){ 
    const projectElements = projectdata.map(project => {
        return <PCard   Title={project.projectTitle} 
                        description={project.description} 
                        lang1={project.lang1}
                        lang2={project.lang2} 
                        lang3={project.lang3} 
                        lang4={project.lang4} 
                        livelink={project.livelink} 
                        gitlink={project.gitlink} />
    })
    return(
        <section className="projects-section">
           <h1 className="head">Other Projects</h1>
             <div className="project-cards">
       
             {projectElements }
          
            </div>
        </section>
    )   
}

export default Projects;
