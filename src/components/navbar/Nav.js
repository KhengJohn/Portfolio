import { useState, useRef } from "react";

const Logo = `${process.env.PUBLIC_URL}/assets/images/logo192.png`;

function Nav() {
  const [toggle, setToggle] = useState(false);

  const handleClick = (event) => {
    setToggle(!toggle);
  };

  const scrollToSection = (sectionId) => {
    setToggle(!toggle);
    const section = document.getElementById(sectionId);
    section.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <nav>
      <div className="navii">
        <div className="logo">
          <img src={Logo} alt="Logo Image" className="logoTop" />
        </div>
        <div
          onClick={handleClick}
          className={toggle ? `hamburger toggle ` : `hamburger`}
        >
          <div className="line1 "></div>
          <div className="line2"></div>
          <div className="line3"></div>
        </div>

        <ul className={toggle ? `nav-links open fade` : `nav-links`}>
          <li>
            <a onClick={() => scrollToSection("section1")} href="#section1">
              Home
            </a>
          </li>
          <li>
            <a onClick={() => scrollToSection("section2")} href="#section2">
              About
            </a>
          </li>
          <li>
            <a onClick={() => scrollToSection("section3")} href="#section3">
              Work
            </a>
          </li>
          <li>
            <a
              className="btn-project"
              target="_blank"
              href="https://drive.google.com/file/d/1kPu3t_0rYlQxIA94fG7au_TS3fEigcox/view?usp=drivesdk"
            >
              Resume
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Nav;
