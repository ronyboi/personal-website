import React from "react";
import github from "../assets/svgs/github.svg";
import linkedin from "../assets/svgs/linkedin.svg";
import email from "../assets/svgs/email.svg";

export default function Social() {
  return (
    <div className="social-list">
      <span className="social-item">
        <a href="https://www.linkedin.com/in/ragrwal/">
          <img className="social-icon linkedin" src={linkedin} />
        </a>
        <span>Connect with me on Linkedin!</span>
      </span>
      <span className="social-item">
        <a href="https://www.github.com/ronyboi/">
          <img className="social-icon github" src={github} />
        </a>
        <span>Check out my other work!</span>
      </span>
      <span className="social-item">
        <a href="mailto:arohan2907@gmail.com">
          <img className="social-icon email" src={email} />
        </a>
        <span>Get in touch!</span>
      </span>
    </div>
  );
}
