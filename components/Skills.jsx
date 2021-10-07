export default function SkillSection() {
  return (
    <div id="about" className="flex flex-col mt-36 mb-36 ">
      <h2 className="text-4xl font-medium">Skills</h2>
      <div className="mt-5 lg:w-3/5">
        <p className="text-xl ">
          I'm passionate about technologies and tools with big communities and
          high satisfaction rates.
        </p>
      </div>

      <div className="grid items-center grid-cols-2 mt-10 font-semibold text-center text-gray-800 lg:w-4/5 lg:grid-cols-3 gap-x-10 gap-y-5 ">
        <div className="skills-block">
          <img src="images/js.png" className="skills-image"></img>
          <p>Javascript</p>
        </div>
        <div className="skills-block">
          <img src="images/react.png" className="skills-image"></img>
          <p>React</p>
        </div>
        <div className="skills-block">
          <img src="images/next.png" className="skills-image"></img>
          <p>Next.js</p>
        </div>
        <div className="skills-block">
          <img src="images/node.png" className="skills-image"></img>
          <p>Node</p>
        </div>
        <div className="skills-block">
          <img src="images/figma.png" className="skills-image"></img>
          <p>Figma</p>
        </div>
        <div className="skills-block">
          <img src="images/tailwindcss.svg" className="skills-image"></img>
          <p>Tailwind</p>
        </div>
      </div>
    </div>
  );
}
