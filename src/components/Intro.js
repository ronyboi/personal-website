import React from "react";
import Terminal from "react-animated-term";
import "react-animated-term/dist/react-animated-term.css";

const spinner = ["⠋", "⠙", "⠹", "⠸", "⠼", "⠴", "⠦", "⠧", "⠇", "⠏"];
const termLines = [
  {
    text: "ls",
    cmd: true,
  },
  {
    text: "index.js    package.json    node_modules",
    cmd: false,
  },
  {
    text: "npm run rohans-personal-website",
    cmd: true,
  },
  {
    text: "✔ Loaded app",
    cmd: false,
    repeat: true,
    repeatCount: 3,
    frames: spinner.map(function (spinner) {
      return {
        text: spinner + " Loading app",
        delay: 40,
      };
    }),
  },
];

export default function Intro() {
  return (
    <div>
      <div className="top-left">
        <span>About</span>
        <span>Skills</span>
        <span>Projects</span>
        <span>Resume</span>
        <span>Socials</span>
      </div>
      <div className="bottom-right">
        Rohan Agarwal - Personal Website Computer Science Student @ McGill
        University Looking for Summer 2022 Internships
      </div>
    </div>
  );
}
