import Image from "next/image"

const About1 = () => {
  return (
    <div id="about-container">
    <div id="about">
      <div id="left">
        <Image
          src={"/about-pic.png"}
          alt="Muhammad Samad"
          width={500}
          height={500}
        />
      </div>
      <div id="right">
        <h2>About Me</h2>
        <h1>
          I am <span>Muhammad Samad</span>
        </h1>
        <p>
          Aspiring developer learning TypeScript, Next.js, and Python to
          build scalable, dynamic web applications and strengthen
          full-stack programming skills. Passionate about coding and
          continuously exploring new technologies.
        </p>
      </div>
    </div>
  </div>
  )
}

export default About1