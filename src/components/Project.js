import React, { useState } from "react";
import Info from "../assets/info.json";
import Github from "../assets/svgs/github.svg";
import Formula1 from "../assets/imgs/formula1.jpeg";
import TinyUrl from "../assets/imgs/tinyurl.jpeg";
import PersonalWeb from "../assets/imgs/personalwebsite.png";
import ZoomAuto from "../assets/imgs/zoomautobot.png";
import AutoFile from "../assets/imgs/autofilesorter.png";

export default function Project() {
  const [info, setInfo] = useState("");

  const handleOnClick = (event) => {
    setInfo(event);
    //console.log(event);
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
            Formula 1 Statistics
          </a>
        </span>
        <span>
          <a
            href="#projects"
            className="project-item"
            onClick={() => handleOnClick(Info["Url Shortener"])}
          >
            URL Shortener
          </a>
        </span>
        <span>
          <a
            href="#projects"
            className="project-item"
            onClick={() => handleOnClick(Info["Personal Website"])}
          >
            Personal Website
          </a>
        </span>
        <span>
          <a
            href="#projects"
            className="project-item"
            onClick={() => handleOnClick(Info["Zoom Chat"])}
          >
            Zoom Chat Moderator Bot
          </a>
        </span>
      </div>
      <div className="project-2">
        {info ? (
          <div className="project-info">
            <div>
              <img className="project-github" src={Github} />
            </div>
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
