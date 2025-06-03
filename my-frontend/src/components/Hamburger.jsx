import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";

function Hamburger({ isOpen, toggle }) {
  return (
    <button
      onClick={toggle}
      className="md:hidden focus:outline-none focus:ring-2 focus:ring-blue-500 p-1 rounded"
      aria-label="Toggle menu"
      aria-expanded={isOpen}
    >
      {isOpen ? (
        <XMarkIcon className="h-6 w-6 text-black" />
      ) : (
        <Bars3Icon className="h-6 w-6 text-black" />
      )}
    </button>
  );
}

export default Hamburger;
