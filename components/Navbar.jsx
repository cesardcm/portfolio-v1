export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 px-4 py-4 mx-auto font-medium bg-black bg-opacity-25 lg:pt-6 backdrop-blur-sm ">
      <nav className="flex flex-row items-center justify-between max-w-sm mx-auto mb-2 sm:max-w-lg md:max-w-xl lg:max-w-4xl ">
        <div className="items-center text-xl font-bold text-white lg:text-2xl ">
          <a href="#">
            <h2 className="">César Camacho</h2>
          </a>
        </div>
        <div className="flex items-center text-xl">
          <div className="pr-4">
            {/* <a className="ml-8 hover:underline" href="#about">
              About
            </a> */}
            <a className="ml-8 hover:underline" href="#contact">
              Contact
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
}
