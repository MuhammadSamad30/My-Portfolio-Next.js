"use client";
import Image from "next/image";
import "boxicons/css/boxicons.min.css";
import TypingEffect from "@/component/Typing";
import About1 from "@/component/About";
import Project1 from "@/component/Project";
import Skills1 from "@/component/Skills";

const Home = () => {
  return (
    <div id="full-container">
      <div id="container">
        <div id="content">
          <h3>Hey, It's me</h3>
          <h1>Muhammad Samad</h1>
          <h3>
            And I'm a{" "}
            <span id="multi-text">
              <TypingEffect />
            </span>
          </h3>
          <p>
            My name is Muhammad Samad, and I am a student enrolled in the
            Governor's Sindh IT Initiative. I am currently learning about
            Generative AI, full-stack development, the metaverse, and Web 3.0
            technologies. This comprehensive program is equipping me with
            cutting-edge skills to navigate and excel in the rapidly evolving
            digital landscape. I am eager to leverage this knowledge to
            contribute meaningfully to the tech industry.
          </p>
          <div id="social-media">
            <a
              href="https://github.com/MuhammadSamad30"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="bx bxl-github"></i>
            </a>
            <a
              href="https://www.linkedin.com/in/muhammad-samad-6b0190290/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="bx bxl-linkedin"></i>
            </a>
            <a
              href="https://www.instagram.com/s_a_m_a_d11/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="bx bxl-instagram"></i>
            </a>
          </div>
          <a href="" id="btn">
            Get Resume
          </a>
        </div>
        <div id="img">
          <Image
            src={"/home-pic.jpeg"}
            alt="Muhammad Samad"
            width={500}
            height={500}
          />
        </div>
      </div>
      <About1/>

      <h1 id="project-heading">Pro<span>ject</span></h1>
      <Project1/>


      <h1 id='skill-heading'><span>My</span>&nbsp;Expertise</h1>
      <Skills1/>
      </div>
  );
};

export default Home;
