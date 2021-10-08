import Image from "next/image";

export default function PersonalProjects() {
  return (
    <div className="mt-20 mb-36">
      <h2 className="pl-4 text-3xl font-light mb-14 lg:mb-20 lg:text-2xl">
        Projects
      </h2>
      <div>
        <div
          id="project-image"
          className="relative overflow-hidden h-52 lg:h-96 lg:w-full "
        >
          <Image
            src="/images/portfolio-projects/portfolio-project-3.png"
            layout="fill"
            objectFit="cover"
            alt="Ableton Remake Screenshot"
            className="object-top "
          />
        </div>
        <div className="flex items-center mb-5 mt-14 gap-x-4">
          <h3 className="text-4xl font-semibold tracking-tighter ">
            Ableton Remake
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
        <p className="text-lg font-medium leading-snug text-paragraph-gray lg:w-10/12 ">
          A live-chat widget that uses Discord as a backend. Customer's can add
          a snippet to their website and start having conversations with their
          visitors immediately
        </p>
      </div>
    </div>
  );
}
