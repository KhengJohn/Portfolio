import { Githubimg,Linkedimg,Twitterimg,Instagramimg } from "../../data/Image";

const socialData = [
  {
    image: Githubimg,
    link: "https://github.com/KhengJohn",
  },
  {
    image: Linkedimg,
    link: "https://www.linkedin.com/in/john-idoko-474251218",
  },
  {
    image: Twitterimg,
    link: "https://twitter.com/KhengJohn?t=wAIeE-iZhmk8h4yUceXpSA&s=09",
  },
  {
    image: Instagramimg,
    link: "https://www.instagram.com/kheng_john",
  },
];

function Socials() {
  return (
    <div className="socials">
      <h1>Contact John</h1>
      <p>Get in touch with me</p>
      <div>
        {socialData.map((item) => (
          <a href={item.link}>
            <img src={item.image} alt="" className="socials-img" />
          </a>
        ))}
      </div>
    </div>
  );
}

export default Socials;
