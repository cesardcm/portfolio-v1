import Image from "next/image";

export default function PersonalProjects(props) {
  return (
    <div className="mt-20 mb-36">
      <div>
        <div
          id="project-image"
          className="relative overflow-hidden h-52 lg:h-96 lg:w-full "
        >
          <Image
            src={`/images/portfolio-projects/portfolio-project-${props.projectNumber}.png`}
            layout="fill"
            objectFit="cover"
            alt="Ableton Remake Screenshot"
            className="object-top "
          />
        </div>
        <a href={props.projectLink} target="_blank" rel="noopener noreferrer">
          <div className="flex items-center mb-5 hover:text-paragraph-gray mt-14 gap-x-4 lg:w-5/12">
            <h3 className="text-4xl font-semibold tracking-tighter">
              {props.title}
            </h3>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-8 h-8 text-gray-500 "
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
              />
            </svg>
          </div>
        </a>
        <p className="text-lg font-medium leading-snug text-paragraph-gray lg:w-10/12 ">
          {props.projectDescription}
        </p>
      </div>
    </div>
  );
}
