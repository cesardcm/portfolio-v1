export default function SkillSection() {
  return (
    <div id="about" className="flex flex-col mx-auto mt-36 mb-36 ">
      <h2 className="text-4xl font-medium">Skills</h2>
      <div className="w-3/5 mt-5">
        <p className="text-xl ">
          I'm passionate about technologies and tools with big communities and
          high satisfaction rates.
        </p>
      </div>

      <div className="grid items-center w-4/5 grid-cols-3 mt-10 font-semibold text-center gap-x-10 gap-y-5 dark:text-gray-800 ">
        <div className="flex flex-col p-6 overflow-hidden bg-gray-200 rounded-3xl justify-items-center ">
          <img src="images/js.png" className="object-contain w-full h-12"></img>
          <p>Javascript</p>
        </div>
        <div className="flex flex-col p-6 overflow-hidden bg-gray-200 rounded-3xl justify-items-center ">
          <img
            src="images/react.png"
            className="object-contain w-full h-12"
          ></img>
          <p>React</p>
        </div>
        <div className="flex flex-col p-6 overflow-hidden bg-gray-200 rounded-3xl justify-items-center ">
          <img
            src="images/next.png"
            className="object-contain w-full h-12"
          ></img>
          <p>Next.js</p>
        </div>
        <div className="flex flex-col p-6 overflow-hidden bg-gray-200 rounded-3xl justify-items-center ">
          <img
            src="images/node.png"
            className="object-contain w-full h-12"
          ></img>
          <p>Node</p>
        </div>
        <div className="flex flex-col p-6 overflow-hidden bg-gray-200 rounded-3xl justify-items-center ">
          <img
            src="images/figma.png"
            className="object-contain w-full h-12"
          ></img>
          <p>Figma</p>
        </div>
        <div className="flex flex-col p-6 overflow-hidden bg-gray-200 rounded-3xl justify-items-center ">
          <img
            src="images/webflow.png"
            className="object-contain w-full h-12"
          ></img>
          <p>Webflow</p>
        </div>
      </div>
    </div>
  );
}
