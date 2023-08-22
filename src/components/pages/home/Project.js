import { useState } from "react";
import ProjectSection from "../../tabs/sections/ProjectSection";
import {
  webProjectData,
  appProjectData,
  uiProjectData,
} from "../../data/ProjectSectionData";

const stackTechnology = ["Web", "App", "UI", "Graphics"];

const Project = () => {
  const [activeTab, setActiveTab] = useState(stackTechnology[0]);

  const displayTabContent = () => {
    switch (activeTab) {
      case "Web":
        return <ProjectSection appProjectData={webProjectData} />;
      case "App":
        return <ProjectSection appProjectData={appProjectData} />;
      case "UI":
        return <ProjectSection appProjectData={uiProjectData} />;
      case "Graphics":
        return <div className="stackicons">Coming Soon...</div>;
      default:
        break;
    }
  };
  return (
    <>
      <div className="project-section" id="section3">
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
              ))}
            </div>
          </div>
        </div>
        {displayTabContent()}
      </div>
    </>
  );
};
export default Project;
