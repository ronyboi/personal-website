import React, { useState } from "react";
import Info from "../assets/info2.json";

export default function Skills() {
  const [info, setInfo] = useState("");

  const handleOnClick = (event) => {
    setInfo(event);
  };

  return (
    <div className="skill-items">
      <div className="skill-list">
        <span>
          <a
            href="#skills"
            className="skill-item"
            onClick={() => handleOnClick(Info["languages"])}
          >
            programming languages
          </a>
        </span>
        <span>
          <a
            href="#skills"
            className="skill-item"
            onClick={() => handleOnClick(Info["developer"])}
          >
            developer tools
          </a>
        </span>
        <span>
          <a
            href="#skills"
            className="skill-item"
            onClick={() => handleOnClick(Info["frameworks"])}
          >
            frameworks
          </a>
        </span>
      </div>
      <div className="skill-2">
        {info ? (
          <div className="skill-info">
            {info.map((item) => (
              <span>{item}</span>
            ))}
          </div>
        ) : (
          <div>
            <h1></h1>
          </div>
        )}
      </div>
    </div>
  );
}
