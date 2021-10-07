import Head from "next/head";
import Image from "next/image";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import HeroSection from "../components/Hero";
import SkillSection from "../components/Skills";
import Projects from "../components/Projects";
import Contact from "../components/Contact";

export default function Home() {
  return (
    <div className=" dark:bg-gray-800 dark:text-gray-200">
      <Head>
        <title>Cesar Camacho - Frontend Developer</title>
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
      <main className="px-4 mx-auto lg:max-w-4xl ">
        <HeroSection />
        <SkillSection />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
