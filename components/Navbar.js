export default function Navbar() {
  return (
    <header className="font-medium">
      <nav className="container flex flex-row items-center justify-between max-w-6xl px-40 mx-auto mt-4 mb-2 ">
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
