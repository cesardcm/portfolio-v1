import useDarkMode from "./Dark Mode/useDarkMode";

export default function Navbar() {
  const [colorTheme, setTheme] = useDarkMode();

  return (
    <header className="sticky top-0 z-50 pt-4 pb-1 mx-auto font-medium lg:pt-6 backdrop-blur-lg">
      <nav className="flex flex-row items-center justify-between max-w-sm mx-auto mb-2 sm:max-w-lg md:max-w-xl lg:max-w-4xl ">
        <div className="items-center text-2xl ">
          <h2 className="">César Camacho</h2>
        </div>
        <div className="flex items-center text-xl">
          <div className="pr-4">
            <a className="ml-8 hover:underline" href="#about">
              About
            </a>
            <a className="ml-8 hover:underline" href="#contact">
              Contact
            </a>
          </div>
          <div className="absolute hidden w-4 h-full pl-8 text-4xl lg:visible md:static ">
            {colorTheme === "light" ? (
              <button
                className="px-3 py-2 rounded-lg shadow-inner "
                onClick={() => setTheme("light")}
              >
                💡
              </button>
            ) : (
              <button
                className="px-1 py-2 rounded-lg shadow-inner "
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
