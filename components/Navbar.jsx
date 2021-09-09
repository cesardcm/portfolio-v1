import useDarkMode from "./Dark Mode/useDarkMode";

export default function Navbar() {
  const [colorTheme, setTheme] = useDarkMode();

  return (
    <header className="sticky top-0 z-50 py-4 mx-auto font-medium backdrop-blur-lg">
      <nav className="flex flex-row items-center justify-between max-w-4xl mx-auto mb-2 ">
        <div className="items-center text-2xl ">
          <h2 className="">César Camacho</h2>
        </div>
        <div className="flex items-center text-xl">
          <a className="ml-8 hover:underline" href="#about">
            About
          </a>
          <a className="ml-8 hover:underline" href="#contact">
            Contact
          </a>
          <div className="pl-8 text-4xl">
            {colorTheme === "light" ? (
              <button
                className="px-3 py-2 bg-gray-600 bg-opacity-50 rounded-lg backdrop-blur-lg "
                onClick={() => setTheme("light")}
              >
                💡
              </button>
            ) : (
              <button
                className="px-1 py-2 bg-gray-200 bg-opacity-50 rounded-lg backdrop-blur-lg "
                onClick={() => setTheme("dark")}
              >
                🌙
              </button>
            )}
          </div>
        </div>
      </nav>
    </header>
  );
}
