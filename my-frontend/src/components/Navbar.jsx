import { useState, useEffect, useRef } from "react";
import Hamburger from "./Hamburger";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);

  const toggleMenu = () => setIsOpen(!isOpen);

  // Close menu on outside click
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  return (
    <nav className="fixed top-0 left-0 w-full z-30 bg-white/30 backdrop-blur-lg shadow-sm animate-fade-in">
      <div className="max-w-screen-xl mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <h1 className="text-xl font-bold text-black">Mudassir</h1>

          <div ref={menuRef} className="relative">
            <Hamburger isOpen={isOpen} toggle={toggleMenu} />

            <ul
              className={`
                ${isOpen ? "opacity-100 scale-100" : "opacity-0 scale-95 pointer-events-none"}
                md:opacity-100 md:scale-100 md:pointer-events-auto
                transition duration-300 ease-in-out
                md:flex md:space-x-4
                absolute md:static
                right-0 mt-2 md:mt-0
                bg-white/80 md:bg-transparent
                shadow-md md:shadow-none
                rounded-md md:rounded-none
                w-44 md:w-auto
                z-20
              `}
            >
              {["Home", "About", "Contact"].map((item) => (
                <li key={item}>
                  <a
                    href={`/${item.toLowerCase()}`}
                    className="block px-4 py-2 text-gray-900 hover:text-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-md transition-colors duration-200"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
