import Image from "next/image";
import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <div id="Hero Section" className="container mx-auto mt-16 ">
      <div className="container flex flex-col-reverse max-w-4xl mx-auto lg:items-center lg:gap-x-44 lg:flex-shrink-0 lg:flex-row mt-9">
        <div id="Content" className="lg:w-3/6">
          <h1 className="mt-6 text-4xl font-bold tracking-tighter lg:leading-snug">
            Hey, I'm Cesar 👋
          </h1>
          <h2 className="mt-2 text-lg font-medium text-gray-100 ">
            UX designer & front-end web developer
          </h2>
          <p className="mt-3 text-xl font-medium text-paragraph-gray ">
            I build user friendly products for the web, using code and no-code
            tools. React with Next.js, Tailwind & Webflow.
          </p>
          <div id="icons" className="flex mt-5 gap-x-5 ">
            <motion.a
              id="GITHUB"
              href="https://github.com/thejamdev"
              target="_blank"
              rel="noreferrer"
              aria-label="Link to the author's Github Profile"
              whileHover={{ scale: 1.2, rotate: 360 }}
              whileTap={{ scale: 0.8, rotate: -90, borderRadius: "100%" }}
            >
              <svg
                className="text-white fill-current"
                id="github"
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 24 24"
              >
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
            </motion.a>
            <motion.a
              id="LINKEDIN"
              href="https://www.linkedin.com/in/cesar-cm/"
              target="_blank"
              rel="noopener"
              aria-label="Link to the author's LinkedIn Profile"
              whileHover={{ scale: 1.2, rotate: 360 }}
              whileTap={{ scale: 0.8, rotate: -90, borderRadius: "100%" }}
            >
              <svg
                className="text-white fill-current "
                id="linkedin"
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 24 24"
              >
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
              </svg>
            </motion.a>
          </div>
        </div>
        <div
          id="Image"
          className="relative rounded-full w-36 h-36 lg:mb-4 lg:h-52 lg:w-52 lg:max-w-xs"
        >
          <Image
            className="rounded-full"
            src="/images/profile.png"
            layout="fill"
            objectFit="cover"
            alt="Picture of the author"
          />
        </div>
      </div>
    </div>
  );
}
