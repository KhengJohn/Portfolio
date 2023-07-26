const Linkedimg = `${process.env.PUBLIC_URL}./assets/images/linkedinimg.png`;
const Githubimg = `${process.env.PUBLIC_URL}./assets/images/githubimg.png`;
const Twitterimg = `${process.env.PUBLIC_URL}./assets/images/twitterimg.png`;
const Instagramimg = `${process.env.PUBLIC_URL}./assets/images/instagramimg.png`;

function Socials() {
  return (
    <div className="socials">
      <h1>Contact John</h1>
      <p>Get in touch with me</p>
      <div>
        <a href="https://github.com/KhengJohn">
          <img src={Githubimg} alt="" className="socials-img simg1" />
        </a>
        <a href="https://www.linkedin.com/in/john-idoko-474251218">
          <img src={Linkedimg} alt="" className="socials-img" />
        </a>
        <a href="https://twitter.com/KhengJohn?t=wAIeE-iZhmk8h4yUceXpSA&s=09">
          <img src={Twitterimg} alt="" className="socials-img" />
        </a>
        <a href="https://www.instagram.com/kheng_john">
          <img src={Instagramimg} alt="" className="socials-img" />
        </a>
      </div>
    </div>
  );
}

export default Socials;
