import { useState } from "react";

const WebProjectimg1 = `${process.env.PUBLIC_URL}./assets/images/desalproject.jpg`;
const WebProjectimg2 = `${process.env.PUBLIC_URL}./assets/images/minervahubproject.jpg`;
const WebProjectimg3 = `${process.env.PUBLIC_URL}./assets/images/qosstoreproject.jpg`;
const Projectimg2 = `${process.env.PUBLIC_URL}./assets/images/moviesearchproject.jpg`;
const Projectimg3 = `${process.env.PUBLIC_URL}./assets/images/smsproject.jpg`;
const Linkimg = `${process.env.PUBLIC_URL}./assets/images/linkimg.png`;
const Githubimg = `${process.env.PUBLIC_URL}./assets/images/githubimg.png`;

const AppProject1 = `${process.env.PUBLIC_URL}./assets/images/jobsearchproject.jpg`;

const UIProject1 = `${process.env.PUBLIC_URL}./assets/images/cashmoovproject.jpg`;

const stackTechnology = ["Web", "App", "UI", "Graphics"];

const webProjectData = {
  project1: {
    name: "DESAL MSC Website",
    image: WebProjectimg1,
    link: "https://desalmsc.netlify.app/",
  },
  project2: {
    name: "MinervaHub Website",
    image: WebProjectimg2,
    link: "https://glistening-phoenix-ea62c8.netlify.app/",
  },
  project3: {
    name: "QOS Store",
    image: WebProjectimg3,
    link: "https://store.qosic.com",
  },
};

const otherProjectData = [
  {
    name: "QOS Admin Dashboard",
    image: WebProjectimg1,
    link: "https://desalmsc.netlify.app/",
  },
  {
    name: "Movie Search App",
    image: WebProjectimg2,
    link: "https://glistening-phoenix-ea62c8.netlify.app/",
  },
  {
    name: "Payment Flow",
    image: WebProjectimg3,
    link: "https://store.qosic.com",
  },
  {
    name: "Talent Naija Hunt",
    image: WebProjectimg3,
    link: "https://store.qosic.com",
  },  {
    name: " Minervahub School Management App",
    image: WebProjectimg3,
    link: "https://store.qosic.com",
  },  {
    name: "Gashina Hair",
    image: WebProjectimg3,
    link: "https://store.qosic.com",
  },
];

const appProjectData = {
  project1: { name: "Job Search App", image: AppProject1 },
  project2: { name: null, image: null },
  project3: { name: null, image: null },
};

const uiProjectData = {
  project1: { name: "Cash Moov App UI Design", image: UIProject1 },
  project2: { name: null, image: null },
  project3: { name: null, image: null },
};
const ProjectSection = ({ appProjectData }) => {
  return (
    <div>
      <div className="project-bg">
        <div className="proj-container proj1">
          <div className="projectImgdiv">
            <img src={appProjectData.project1.image} className="projectImg" />
          </div>
          <div className="projtitle">
            <div className="project-links">
              <img src={Githubimg} className="PL-img" />
              <a href={appProjectData.project1.link}>
                <img src={Linkimg} className="PL-img" />
              </a>
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
              <img src={Githubimg} className="PL-img" />
              <a href={appProjectData.project2.link}>
                <img src={Linkimg} className="PL-img" />
              </a>
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
              <img src={Githubimg} className="PL-img" />
              <a href={appProjectData.project3.name}>
                <img src={Linkimg} className="PL-img" />
              </a>
            </div>
            <p>#3</p>
            <h2>{appProjectData.project3.name}</h2>
          </div>
        </div>
      )}
      <a className="btn btn-project" href="">
        View More
      </a>
    </div>
  );
};

export default function Project() {
  const [activeTab, setActiveTab] = useState(stackTechnology[0]);
  const displayTabContent = () => {
    switch (activeTab) {
      case "Web":
        return (
          //   <div>
          //     <div className="project-bg">
          //       <div className="proj-container proj1">
          //         <div className="projectImgdiv">
          //           <img src={WebProjectimg1} className="projectImg" />
          //         </div>
          //         <div className="projtitle">
          //           <div className="project-links">
          //             <img src={Githubimg} className="PL-img" />
          //             <a href="https://desalmsc.netlify.app/">
          //               <img src={Linkimg} className="PL-img" />
          //             </a>
          //           </div>
          //           <p>#1</p>
          //           <h2>DESAL MSC Website</h2>
          //         </div>
          //       </div>
          //     </div>
          //     <div className="proj-container2">
          //       <div className="projtitle2">
          //         <div className="project-links">
          //           <img src={Githubimg} className="PL-img" />
          //           <a href="https://apimoviesearchapp.netlify.app/">
          //             <img src={Linkimg} className="PL-img" />
          //           </a>
          //         </div>

          //         <p>#2</p>
          //         <h2>Movie Search App</h2>
          //       </div>
          //       <div className="projectImgdiv2">
          //         <img src={Projectimg2} className="projectImg2" />
          //       </div>
          //     </div>
          //     <div className="proj-container proj1">
          //       <div className="projectImgdiv">
          //         <img src={Projectimg3} className="projectImg" />
          //       </div>
          //       <div className="projtitle">
          //         <div className="project-links">
          //           <img src={Githubimg} className="PL-img" />
          //           <a href="https://minervahubschoolmanagementsystem.netlify.app/">
          //             <img src={Linkimg} className="PL-img" />
          //           </a>
          //         </div>
          //         <p>#3</p>
          //         <h2>School Management System</h2>
          //       </div>
          //     </div>
          //     <a className="btn btn-project" href="">
          //       View More
          //     </a>
          //   </div>
          <ProjectSection appProjectData={webProjectData} />
        );
      case "App":
        return <ProjectSection appProjectData={appProjectData} />;
      case "UI":
        return <ProjectSection appProjectData={uiProjectData} />;
      case "Graphics":
        return <div className="stackicons">Hello</div>;
      default:
        break;
    }
  };
  return (
    <>
      <div className="project-section">
        <div className="PJ-head">
          <h2 className="header-pill">My Work</h2>
          <div className="PJ-tabs">
            <div className="stack-tab">
              {stackTechnology.map((item) => (
                <div
                  onClick={() => setActiveTab(item)}
                  className={
                    item === activeTab
                      ? "stack-btn stack-btn_active"
                      : "stack-btn"
                  }
                >
                  <span>{item}</span>
                </div>
              ))}{" "}
            </div>
          </div>
        </div>
        {displayTabContent()}
        <div className="other-projects-container">
         {otherProjectData.map((item) => (
          <div className="other-projects">
            <div className="OP-image-div">
              <img src={Projectimg2} alt="img" className="OP-image" />
            </div>
            <div className="OP-content-div">
              <div className="OP-content-top">
                <div class="OP-text-container">
                  <h2>{item.name}</h2>
                  <p>Project Type</p>
                </div>
                <div className="GL">
                  <img src={Githubimg} alt="img" className="GL-img" />
                  <img src={Linkimg} alt="img" className="GL-img" />
                </div>
              </div>
              <div className="OP-content-bottom">
                {" "}
                <p>Javascript</p> <p>Javascript</p> <p>Javascript</p>
              </div>
            </div>
          </div>  
         )) }
        </div>
      </div>
    </>
  );
}
