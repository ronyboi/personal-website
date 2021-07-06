import React from "react";

export default function Footer() {
  return (
    <div className="footer">
      {/* <div className="footer-inspired">
        Website design inspired by{" "}
        <a href="https://works.pm/" target="_blank" rel="noreferrer">
          works.pm
        </a>
      </div> */}
      <div className="footer-tag">
        Made with &#128154; by{" "}
        <a
          href="https://www.github.com/ronyboi/personal-website/"
          target="_blank"
          rel="noreferrer"
          className="footer-name"
        >
          Rohan Agarwal
        </a>
      </div>
    </div>
  );
}
