import React, { useState } from "react";
import Info from "../assets/info.json";

export default function Project() {
  const [info, setInfo] = useState("");

  const handleOnClick = (event) => {
    setInfo(event);
  };

  return (
    <div className="project-items">
      <div className="project-list">
        <span>
          <a
            href="#projects"
            className="project-item"
            onClick={() => handleOnClick(Info["Formula 1"])}
          >
            formula 1 statistics
          </a>
        </span>
        <span>
          <a
            href="#projects"
            className="project-item"
            onClick={() => handleOnClick(Info["Url Shortener"])}
          >
            url shortener
          </a>
        </span>
        <span>
          <a
            href="#projects"
            className="project-item"
            onClick={() => handleOnClick(Info["Personal Website"])}
          >
            personal website
          </a>
        </span>
        <span>
          <a
            href="#projects"
            className="project-item"
            onClick={() => handleOnClick(Info["Zoom Chat"])}
          >
            zoom chat moderator
          </a>
        </span>
      </div>
      <div className="project-2">
        {info ? (
          <div className="project-info">
            {/* <span>
              <a href={info["githubUrl"]} className="project-item">
                Github
              </a>
            </span> */}
            <span className="project-name">{info["Name"]}</span>
            <span>{info["Desc"]}</span>
            <span>{info["Tech"]}</span>
            <span>
              You can find it{" "}
              <a href={info["URL"]} className="project-item">
                here
              </a>
            </span>
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
