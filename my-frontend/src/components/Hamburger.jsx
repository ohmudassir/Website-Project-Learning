import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";

function Hamburger({ isOpen, toggle }) {
  return (
    <button onClick={toggle} className="md:hidden">
      {isOpen ? (
        <XMarkIcon className="h-6 w-6 text-black" />
      ) : (
        <Bars3Icon className="h-6 w-6 text-black" />
      )}
    </button>
  );
}

export default Hamburger;
