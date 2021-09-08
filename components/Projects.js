export default function Projects() {
  return (
    <div id="Projects" className="mb-36">
      <h2 className="text-4xl font-medium">What I’ve been working on</h2>
      <div className="w-4/5 mt-5">
        <p className="text-xl">
          I give prority to projects that are free and useful for others. Here
          is a selection of my favorite ones.
        </p>
      </div>
      <div className="grid grid-cols-2 mt-20 gap-x-32 gap-y-20">
        <div>
          <div className="transform shadow-md ">
            <a target="_blank" href="https://mealticketguyana.com/">
              <img
                src="images/portfolio-projects/portfolio-project-1.png"
                className="object-cover rounded h-52 w-96 "
              ></img>
            </a>
          </div>
          <div className="pt-4">
            <h3 className="text-2xl font-semibold">Mealticket Guyana</h3>
            <p className="mt-2">
              A dedicated platform for all your Favourite Guyanese Foods
            </p>
          </div>
        </div>
        <div>
          <div className="shadow-md ">
            <a target="_blank" href="https://impactloopapp.com/">
              <img
                src="images/portfolio-projects/portfolio-project-2.png"
                className="object-cover rounded h-52 w-96"
              ></img>
            </a>
          </div>
          <div className="pt-4">
            <h3 className="text-2xl font-semibold">Impact Loop</h3>
            <p className="mt-2">
              Platform that connects Australian and African founders to business
              mentors and investors.
            </p>
          </div>
        </div>
        <div>
          <div className="shadow-md ">
            <img
              src="images/project3.png"
              className="object-cover rounded h-52 w-96 "
            ></img>
          </div>
          <div className="pt-4">
            <h3 className="text-2xl font-semibold">Notion Life Planner</h3>
            <p className="mt-2">
              Not your regular life planner. After years of trying to find it, I
              made a minimal planner that just works.
            </p>
          </div>
        </div>
        <div>
          <div className="shadow-md ">
            <img
              src="images/project4.png"
              className="object-cover rounded h-52 w-96 "
            ></img>
          </div>
          <div className="pt-4">
            <h3 className="text-2xl font-semibold">Top Resources</h3>
            <p className="mt-2">
              A list of sites and apps where I get my information from
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
