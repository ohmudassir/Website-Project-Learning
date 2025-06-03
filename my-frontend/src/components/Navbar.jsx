import { useState } from "react"

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav>
      <div className="max-w-screen-xl mx-auto px-4">
        {/* Top Row: Site Title and Hamburger */}
        <div className="flex justify-between items-center py-4">
          <h1>My Site</h1>

          {/* Hamburger/X Button */}
          <button
            className="md:hidden relative w-6 h-6"
            onClick={() => setIsOpen(!isOpen)}
          >
            {/* Line 1 */}
            <span
              className={`absolute top-1/2 left-0 w-6 h-0.5 bg-black transition-transform duration-300 ${
                isOpen ? "rotate-45" : "-translate-y-2"
              }`}
            />
            {/* Line 2 */}
            <span
              className={`absolute top-1/2 left-0 w-6 h-0.5 bg-black transition-opacity duration-300 ${
                isOpen ? "opacity-0" : "opacity-100"
              }`}
            />
            {/* Line 3 */}
            <span
              className={`absolute top-1/2 left-0 w-6 h-0.5 bg-black transition-transform duration-300 ${
                isOpen ? "-rotate-45" : "translate-y-2"
              }`}
            />
          </button>
        </div>

        {/* Menu */}
        <div className={`${isOpen ? "block" : "hidden"} md:hidden`}>
          <ul className="flex flex-col space-y-2 pb-4">
            <li>
              <a className="hover:text-blue-600" href="/">Home</a>
            </li>
            <li>
              <a className="hover:text-blue-600" href="/about">About</a>
            </li>
            <li>
              <a className="hover:text-blue-600" href="/contact">Contact</a>
            </li>
          </ul>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-4">
          <li>
            <a className="hover:text-blue-600" href="/">Home</a>
          </li>
          <li>
            <a className="hover:text-blue-600" href="/about">About</a>
          </li>
          <li>
            <a className="hover:text-blue-600" href="/contact">Contact</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
