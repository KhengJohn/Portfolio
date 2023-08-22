import skilldata from "../../data/skilldata";
import SkillCard from "../../cards/SkillCardContent";
import { useState } from "react";

const BS = `${process.env.PUBLIC_URL}./assets/images/bootstrapimg.png`;
const JS = `${process.env.PUBLIC_URL}./assets/images/javascriptimg.png`;
const RE = `${process.env.PUBLIC_URL}./assets/images/reactimg.png`;
const CS = `${process.env.PUBLIC_URL}./assets/images/cssimg.png`;
const HT = `${process.env.PUBLIC_URL}./assets/images/htmlimg.png`;
const TC = `${process.env.PUBLIC_URL}./assets/images/tailwindcssimg.png`;
const JQ = `${process.env.PUBLIC_URL}./assets/images/jqueryimg.png`;
const NJ = `${process.env.PUBLIC_URL}./assets/images/nodejsimg.png`;
const TS = `${process.env.PUBLIC_URL}./assets/images/typescriptimg.png`;
const NX = `${process.env.PUBLIC_URL}./assets/images/nextjsimg.png`;
const RD = `${process.env.PUBLIC_URL}./assets/images/reduximg.png`;
const MI = `${process.env.PUBLIC_URL}./assets/images/materialuiimg.png`;
const RN = `${process.env.PUBLIC_URL}./assets/images/reactnativeimg.png`;
const PS = `${process.env.PUBLIC_URL}./assets/images/photoshopimg.png`;
const CV = `${process.env.PUBLIC_URL}./assets/images/canvaimg.png`;
const CD = `${process.env.PUBLIC_URL}./assets/images/coreldrawimg.png`;
const FG = `${process.env.PUBLIC_URL}./assets/images/figmaimg.png`;
const WP = `${process.env.PUBLIC_URL}./assets/images/wordpressimg.png`;
const SP = `${process.env.PUBLIC_URL}./assets/images/shopifyimg.png`;
const WX = `${process.env.PUBLIC_URL}./assets/images/wiximg.png`;
const QS = `${process.env.PUBLIC_URL}./assets/images/qosstoreimg.png`;

const webtechnologyList = [
  { technology: "JavaScript", abbreviation: JS },
  { technology: "Bootstrap", abbreviation: BS },
  { technology: "React", abbreviation: RE },
  { technology: "CSS", abbreviation: CS },
  { technology: "HTML", abbreviation: HT },
  { technology: "Tailwind CSS", abbreviation: TC },
  { technology: "jQuery", abbreviation: JQ },
  { technology: "Node.js", abbreviation: NJ },
  { technology: "Next.js", abbreviation: NX },
  { technology: "Redux", abbreviation: RD },
  { technology: "Material UI", abbreviation: MI },
  { technology: "Wordpress", abbreviation: WP },
  { technology: "Shopify", abbreviation: SP },
  { technology: "WIX", abbreviation: WX },
  { technology: "QOS STORE", abbreviation: QS },
];

const apptechnologyList = [{ technology: "React Native", abbreviation: RN }];

const uitechnologyList = [{ technology: "Figma", abbreviation: FG }];
const graphicstechnologyList = [
  { technology: "Corel Draw", abbreviation: CD },
  { technology: "Photo Shop", abbreviation: PS },
  { technology: "Canva", abbreviation: CV },
];

const stackTechnology = ["Web", "App", "UI", "Graphics"];

const skillElement = skilldata.map((skill) => {
  return (
    <SkillCard
      Img={skill.skillImg}
      Title={skill.skillTitle}
      Body={skill.skillBody}
    />
  );
});

const Skill = () => {
  const [activeTab, setActiveTab] = useState(stackTechnology[0]);
  const displayTabContent = () => {
    switch (activeTab) {
      case "Web":
        return (
          <div className="stackicons">
            {webtechnologyList.map((item) => (
              <div className="tooltip" key={item.technology}>
                <img src={item.abbreviation} width="40px" />
                <span className="tooltiptext">{item.technology}</span>
              </div>
            ))}
          </div>
        );
      case "App":
        return (
          <div className="stackicons">
            {apptechnologyList.map((item) => (
              <div className="tooltip" key={item.technology}>
                <img src={item.abbreviation} width="40px" />
                <span className="tooltiptext">{item.technology}</span>
              </div>
            ))}
          </div>
        );
      case "UI":
        return (
          <div className="stackicons">
            {uitechnologyList.map((item) => (
              <div className="tooltip" key={item.technology}>
                <img src={item.abbreviation} width="40px" />
                <span className="tooltiptext">{item.technology}</span>
              </div>
            ))}
          </div>
        );
      case "Graphics":
        return (
          <div className="stackicons">
            {graphicstechnologyList.map((item) => (
              <div className="tooltip" key={item.technology}>
                <img src={item.abbreviation} width="40px" />
                <span className="tooltiptext">{item.technology}</span>
              </div>
            ))}
          </div>
        );
      default:
        break;
    }
  };
  return (
    <div id="section2">
      <h2 className="skill-head header-pill">My Skills</h2>
      <div className="skill-section">
        <div className="skill-card-grid">{skillElement}</div>
        <div className="skill-writeup">
          <h2 className="header-pill">About Me</h2>
          <p>
            John is an experienced, detail-oriented, web developer. Who is
            fervent about technology, and how it can be used to solve problems
            and integrate innovaton. He has hand-on experience in developing
            modern websites and web applications using modern languages.
          </p>
          <p>
            I build state-of-the-art, fully responsive, user-friendly and easy
            to use websites and web applications
          </p>
          <h2 className="header-pill">My Stack</h2>
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
          {displayTabContent()}
        </div>
      </div>
    </div>
  );
};
export default Skill;
