import Image from "next/image";

export default function PersonalProjects() {
  return (
    <div className="mt-20 mb-36">
      <h2 className="mb-20 text-2xl font-light">Projects</h2>
      <div>
        <div className="relative w-full h-96">
          <Image
            src="/images/portfolio-projects/portfolio-project-3.png"
            layout="fill"
            objectFit="contain"
          />
        </div>
      </div>
    </div>
  );
}
