import { useState, useEffect, useRef } from "react";
import Hamburger from "./Hamburger";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);
  const firstMenuItemRef = useRef(null);
  const hamburgerRef = useRef(null);

  // Close menu if click outside
  function handleClickOutside(event) {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  }

  useEffect(() => {
    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  // Escape key closes menu
  useEffect(() => {
    function handleKeyDown(event) {
      if (event.key === "Escape") {
        setIsOpen(false);
        hamburgerRef.current?.focus(); // Return focus to hamburger
      }
    }
    if (isOpen) {
      document.addEventListener("keydown", handleKeyDown);
    } else {
      document.removeEventListener("keydown", handleKeyDown);
    }
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);

  // Focus management on open/close
  useEffect(() => {
    if (isOpen) {
      // Focus first menu item when menu opens
      firstMenuItemRef.current?.focus();
    } else {
      // Return focus to hamburger button when menu closes
      hamburgerRef.current?.focus();
    }
  }, [isOpen]);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav>
      <div className="max-w-screen-xl mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <h1>My Site</h1>

          {/* Wrap hamburger and menu in one container */}
          <div ref={menuRef} className="relative">
            {/* Pass ref to hamburger button */}
            <Hamburger
              isOpen={isOpen}
              toggle={toggleMenu}
              ariaControls="nav-menu"
              buttonRef={hamburgerRef}
            />

            <ul
              id="nav-menu"
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
                <a
                  ref={firstMenuItemRef}
                  tabIndex={isOpen ? 0 : -1} // only focusable when open
                  className="block px-4 py-2 hover:text-blue-600"
                  href="/"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  tabIndex={isOpen ? 0 : -1}
                  className="block px-4 py-2 hover:text-blue-600"
                  href="/about"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  tabIndex={isOpen ? 0 : -1}
                  className="block px-4 py-2 hover:text-blue-600"
                  href="/contact"
                >
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
