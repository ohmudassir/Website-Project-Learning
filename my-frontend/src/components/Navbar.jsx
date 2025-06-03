import { useState } from "react";
import Hamburger from "./Hamburger";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav>
      <div className="max-w-screen-xl mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <h1>My Site</h1>

          {/* Wrap hamburger and menu in one container */}
          <div className="relative">
            <Hamburger isOpen={isOpen} toggle={toggleMenu} />

            <ul
              className={`
                ${isOpen ? "block" : "hidden"}
                md:flex md:space-x-4
                absolute md:static
                right-0 mt-2 md:mt-0
                bg-white md:bg-transparent
                shadow-md md:shadow-none
                rounded-md md:rounded-none
                w-40 md:w-auto
              `}
            >
              <li>
                <a className="block px-4 py-2 hover:text-blue-600" href="/">
                  Home
                </a>
              </li>
              <li>
                <a className="block px-4 py-2 hover:text-blue-600" href="/about">
                  About
                </a>
              </li>
              <li>
                <a className="block px-4 py-2 hover:text-blue-600" href="/contact">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
