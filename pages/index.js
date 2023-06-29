import Head from "next/head";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import HeroSection from "../components/Hero";
import SkillSection from "../components/Skills";
import Projects from "../components/Projects";
import PersonalProjects from "../components/PersonalProjects";
import Contact from "../components/Contact";
import ProjectTitle from "../components/ProjectTitle";

export default function Home() {
  return (
    <div className="text-gray-200 bg-black ">
      <Head>
        <title>Cesar Camacho - Web Developer</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        ></link>
      </Head>
      <Navbar />
      <main className="px-6 mx-auto lg:px-0 lg:max-w-4xl ">
        <HeroSection />
        <ProjectTitle />
        <PersonalProjects
          projectNumber="3"
          title="Ableton Remake"
          projectLink="https://github.com/thejamdev/ableton-remake"
          projectDescription={
            <>
              A remake of the About Page of Ableton made with TailwindCSS &
              Next.js. Part of the challenges of
              <a
                className="text-white underline hover:text-paragraph-gray"
                href="https://www.frontendpractice.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                {" "}
                Front End Practice.
              </a>
            </>
          }
        />
        <PersonalProjects
          projectNumber="4"
          title="Trabaja en Startups"
          projectLink="https://trabajaenstartups.crd.co/"
          projectDescription="A tool focused on the no-code community. It helps people to find jobs in the tech industry without the need of learning to code. Built with Pory & Carrd."
        />
        <PersonalProjects
          projectNumber="5"
          projectLink="https://phonet.crd.co/"
          title={
            <>
              <div className="text-4xl font-semibold tracking-tighter line-through text-paragraph-gray hover:text-white ">
                Phonet
              </div>
            </>
          }
          projectDescription="Canceled | A marketplace for local photographers. Helping photographers land more gigs during the global pandemic was the goal of the project. Built with Carrd & Sharetribe"
        />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
