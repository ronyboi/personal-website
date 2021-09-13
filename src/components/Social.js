import React from "react";

export default function Social() {
  return (
    <div className="social-list">
      <span className="social-item link">
        <a href="https://www.linkedin.com/in/ragrwal/">
          {/* <img className="social-icon linkedin" src={linkedin} /> */}
          <span>linkedin</span>
        </a>
      </span>
      <span className="social-item link">
        <a href="https://www.github.com/ronyboi/">
          {/* <img className="social-icon github" src={github} /> */}
          <span>github</span>
        </a>
      </span>
      <span className="social-item link">
        <a href="mailto:arohan2907@gmail.com">
          {/* <img className="social-icon email" src={email} /> */}
          <span>email</span>
        </a>
      </span>
    </div>
  );
}
