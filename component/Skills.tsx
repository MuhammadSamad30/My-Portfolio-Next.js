"use client";
import { useEffect, useRef } from "react";

const Skills1: React.FC = () => {
  const skillRefs = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    skillRefs.current.forEach((ref) => {
      if (ref) {
        const percentage = ref.getAttribute("data-percentage");
        ref.style.width = "0%";

        setTimeout(() => {
          ref.style.transition = "width 2s ease-in-out";
          ref.style.width = percentage || "0%";
        }, 100);
      }
    });
  }, []);

  return (
    <div id="skillsContainer">
      <div id="skillItem">
        <i className="bx bxl-html5 icon"></i>
        <div id="skillInfo">
          <span id="skillName">HTML</span>
          <div id="skillBar">
            <div
              id="skillLevel"
              ref={(el) => {
                if (el) skillRefs.current[0] = el;
              }}
              data-percentage="100%"
            ></div>
          </div>
          <span id="skillPercentage">100%</span>
        </div>
      </div>

      <div id="skillItem">
        <i className="bx bxl-css3 icon"></i>
        <div id="skillInfo">
          <span id="skillName">CSS</span>
          <div id="skillBar">
            <div
              id="skillLevel"
              ref={(el) => {
                if (el) skillRefs.current[1] = el;
              }}
              data-percentage="100%"
            ></div>
          </div>
          <span id="skillPercentage">100%</span>
        </div>
      </div>

      <div id="skillItem">
        <i className="bx bxl-javascript icon"></i>
        <div id="skillInfo">
          <span id="skillName">JavaScript</span>
          <div id="skillBar">
            <div
              id="skillLevel"
              ref={(el) => {
                if (el) skillRefs.current[2] = el;
              }}
              data-percentage="90%"
            ></div>
          </div>
          <span id="skillPercentage">90%</span>
        </div>
      </div>

      <div id="skillItem">
        <i className="bx bxl-typescript icon"></i>
        <div id="skillInfo">
          <span id="skillName">TypeScript</span>
          <div id="skillBar">
            <div
              id="skillLevel"
              ref={(el) => {
                if (el) skillRefs.current[3] = el;
              }}
              data-percentage="90%"
            ></div>
          </div>
          <span id="skillPercentage">90%</span>
        </div>
      </div>

      <div id="skillItem">
        <i className="bx bxl-nodejs icon"></i>
        <div id="skillInfo">
          <span id="skillName">Node.js</span>
          <div id="skillBar">
            <div
              id="skillLevel"
              ref={(el) => {
                if (el) skillRefs.current[4] = el;
              }}
              data-percentage="35%"
            ></div>
          </div>
          <span id="skillPercentage">35%</span>
        </div>
      </div>

      <div id="skillItem">
      <i className='bx bxl-react'></i>
        <div id="skillInfo">
          <span id="skillName">Next.js</span>
          <div id="skillBar">
            <div
              id="skillLevel"
              ref={(el) => {
                if (el) skillRefs.current[5] = el;
              }}
              data-percentage="40%"
            ></div>
          </div>
          <span id="skillPercentage">40%</span>
        </div>
      </div>
    </div>
  );
};

export default Skills1;
