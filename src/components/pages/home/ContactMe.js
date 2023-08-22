import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import Socials from "./Socials";
const ContactMe = () => {
  const form = useRef();
  const [loading, setLoading] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);
    emailjs
      .sendForm(
        "service_liqu84i",
        "template_xi7fiqv",
        form.current,
        "W28NM3hiWdGaWAFPI"
      )
      .then(
        (result) => {
          console.log(result.text);
          setLoading(false);
        },
        (error) => {
          console.log(error.text);
          setLoading(false);
        }
      );
  };

  return (
    <div className="Contact-Section" id="section5">
      <div className="Contact-info">
        <Socials />
        {/* <div className="contact-info-div">
          <div>Email</div> <p>idokojohn42@yahoo.com</p>
        </div>
        <div className="contact-info-div">
          <div>phone</div> <p>+2347036060982</p>
        </div> */}
      </div>
      <form className="Contact-form" ref={form} onSubmit={sendEmail}>
        <div className="input-div">
          <label>Name</label>
          <input type="text" name="from_name" placeholder="John Idoko" />
        </div>
        <div className="input-div">
          <label>Email</label>
          <input
            type="email"
            name="reply_to"
            placeholder="idokojohn42@yahoo.com"
          />
        </div>
        <div className="input-div">
          <label>Message</label>
          <textarea rows={4} name="message" placeholder="Say Hello to Me" />
        </div>
        {loading ? <div className="contact-btn">sending...</div> : <input className="contact-btn" type="submit" value="Send" />}
      </form>
    </div>
  );
};

export default ContactMe;
