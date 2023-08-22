import React, { useState } from "react";

const FG = `${process.env.PUBLIC_URL}./assets/images/figmaimg.png`;
const Linkimg = `${process.env.PUBLIC_URL}./assets/images/linkimg.png`;
const Githubimg = `${process.env.PUBLIC_URL}./assets/images/githubimg.png`;

const ProjectSection = ({ appProjectData }) => {
  const [viewOtherProjects, setViewOtherProject] = useState(false);
  const handleViewOtherProject = () => setViewOtherProject(!viewOtherProjects);
  return (
    <div>
      <div className="project-bg">
        <div className="proj-container proj1">
          <div className="projectImgdiv">
            <img src={appProjectData.project1.image} className="projectImg" />
          </div>
          <div className="projtitle">
            <div className="project-links">
              {appProjectData.project1.gitLink !== null && (
                <img src={Githubimg} className="PL-img" />
              )}
              {appProjectData.project1.liveLink !== null && (
                <a href={appProjectData.project1.liveLink}>
                  <img src={Linkimg} className="PL-img" />
                </a>
              )}
              {appProjectData.project1.figmaLink !== null && (
                <a href={appProjectData.project1.figmaLink}>
                  <img src={FG} className="PL-img" />
                </a>
              )}
            </div>
            <p>#1</p>
            <h2>{appProjectData.project1.name}</h2>
          </div>
        </div>
      </div>
      {appProjectData.project2.name !== null && (
        <div className="proj-container2">
          <div className="projtitle2">
            <div className="project-links">
              {appProjectData.project2.gitLink !== null && (
                <img src={Githubimg} className="PL-img" />
              )}
              {appProjectData.project2.liveLink !== null && (
                <a href={appProjectData.project2.liveLink}>
                  <img src={Linkimg} className="PL-img" />
                </a>
              )}
              {appProjectData.project2.figmaLink !== null && (
                <a href={appProjectData.project2.liveLink}>
                  <img src={FG} className="PL-img" />
                </a>
              )}
            </div>

            <p>#2</p>
            <h2>{appProjectData.project2.name}</h2>
          </div>
          <div className="projectImgdiv2">
            <img src={appProjectData.project2.image} className="projectImg2" />
          </div>
        </div>
      )}

      {appProjectData.project3.name !== null && (
        <div className="proj-container proj1">
          <div className="projectImgdiv">
            <img src={appProjectData.project3.image} className="projectImg" />
          </div>
          <div className="projtitle">
            <div className="project-links">
              {appProjectData.project3.gitLink !== null && (
                <img src={Githubimg} className="PL-img" />
              )}
              {appProjectData.project3.liveLink !== null && (
                <a href={appProjectData.project3.liveLink}>
                  <img src={Linkimg} className="PL-img" />
                </a>
              )}
              {appProjectData.project3.figmaLink !== null && (
                <a href={appProjectData.project3.liveLink}>
                  <img src={FG} className="PL-img" />
                </a>
              )}
            </div>
            <p>#3</p>
            <h2>{appProjectData.project3.name}</h2>
          </div>
        </div>
      )}
      {appProjectData.otherProjectData !== null && (
        <div>
          {viewOtherProjects && (
            <div className="other-projects-container">
              {appProjectData.otherProjectData.map((item) => (
                <div className="other-projects">
                  <div className="OP-image-div">
                    <img src={item.image} alt="img" className="OP-image" />
                  </div>
                  <div className="OP-content-div">
                    <div className="OP-content-top">
                      <div class="OP-text-container">
                        <h2>{item.name}</h2>
                        <p>{item.projectType}</p>
                      </div>
                      <div className="GL">
                        {item.gitLink !== null && (
                          <a href={item.gitLink}>
                            <img src={Githubimg} alt="img" className="GL-img" />
                          </a>
                        )}
                        {item.liveLink !== null && (
                          <a href={item.liveLink}>
                            <img src={Linkimg} alt="img" className="GL-img" />
                          </a>
                        )}
                        {item.figmaLink !== null && (
                          <a href={item.liveLink}>
                            <img src={FG} alt="img" className="GL-img" />
                          </a>
                        )}
                      </div>
                    </div>
                    <div className="OP-content-bottom">
                      {/* <p>Javascript</p> <p>Javascript</p> <p>Javascript</p> */}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
          <div className="view-more-btn">
            <span onClick={handleViewOtherProject} className="btn btn-project">
              {viewOtherProjects ? "View Less" : "View More"}
            </span>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProjectSection;
