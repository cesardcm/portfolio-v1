export default function Navbar() {
  return (
    <header className="max-w-4xl mx-auto font-medium">
      <nav className="flex flex-row items-center justify-between mt-4 mb-2 ">
        <div className="items-center text-2xl ">
          <h2 className="">César Camacho</h2>
        </div>
        <div className="text-xl">
          <a className="ml-8 hover:underline" href="#about">
            About
          </a>
          <a className="ml-8 hover:underline" href="#contact">
            Contact
          </a>
        </div>
      </nav>
    </header>
  );
}
