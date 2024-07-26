import { useState } from "react";
import { Dialog } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import logojoa from "../../../public/logojoa.svg";
import { NavLink } from "react-router-dom";
import github from "../../../public/github.svg";
import behance from "../../../public/behance.svg";
import envelope from "../../../public/envelope.svg";

const navigation = [
  { nombre: "Home", href: "/", svg: envelope },
  { nombre: "Proyects", href: "/proyects", svg: behance },
  { nombre: "Contact", href: "/contact", svg: github },
];

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="transition-all duration-500 ease-in-out rounded-xl bg-gradient-to-tl from-purple/50 to-black-300 absolute z-50 p-6 right-0 md:top-1/2 md:h-3/6 md:transform md:-translate-y-1/2 md:px-3 md:bg-blue">
      <div
        className="w-full h-full flex items-center justify-center"
        aria-label="Global">
        <div className="flex w-full">
          {/* BOTON DE MENU EN CELULAR */}
          <div className="flex md:hidden">
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(true)}>
              <span className="sr-only">Open main menu</span>
              <Bars3Icon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          {/* LINKS DE NAVEGACIÓN */}
          <div className="hidden md:flex md:flex-col md:gap-x-12 bg-silver/5 rounded-2xl shadow-3xl text-center">
            {navigation.map((item) => (
              <NavLink
                key={item.nombre}
                to={item.href}
                className="group relative flex justify-center rounded px-2 py-1.5 text-gray-500 hover:bg-gray-50 hover:text-gray-700">
                <img src={item.svg} alt={item.nombre} />
                <span className="invisible absolute start-full top-1/2 me-4 translate-y-1/2 rounded bg-gray-900 px-2 py-1.5 text-xs font-medium text-white group-hover:visible">
                  {item.nombre}
                </span>
              </NavLink>
            ))}
          </div>
        </div>
      </div>

      <Dialog
        as="div"
        className="md:hidden animate-fade"
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}>
        <div className="fixed inset-0 z-50 bg-sky" />
        <Dialog.Panel className="fixed inset-y-0 top-0 right-0 z-50 w-screen overflow-y-auto bg-gradient-to-t from-purple/50 to-black-300 text-white px-6 py-6 max-h-72 overflow-auto">
          <div className="flex items-center justify-between">
            <a href="/" className="-m-1.5 p-1.5">
              <span className="sr-only">Logo Personal</span>
              <img className="h-10 w-auto" src={logojoa} alt="logojoa" />
            </a>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(false)}>
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6 text-center">
                {navigation.map((item) => (
                  <NavLink
                    key={item.nombre}
                    to={item.href}
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">
                    {item.nombre}
                  </NavLink>
                ))}
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  );
};
export default Header;
