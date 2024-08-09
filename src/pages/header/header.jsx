import { useState } from "react";
import { Dialog } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import logojoa from "../../../public/logojoa.svg";
import { NavLink } from "react-router-dom";
import casa from "../../../public/casa.svg";
import contacto from "../../../public/contacto.svg";
import proyectos from "../../../public/proyectos.svg";
const navigation = [
  { nombre: "Home", href: "/", svg: casa },
  { nombre: "Proyects", href: "/proyects", svg: proyectos },
  { nombre: "Contact", href: "/contact", svg: contacto },
];

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const handlerNav = () => {
    mobileMenuOpen !== true
      ? setMobileMenuOpen(true)
      : setMobileMenuOpen(false);
  };

  return (
    <header className="fixed z-50 md:relative flex justify-center items-center transition-all duration-500 ease-in-out rounded-xl row-start-1 sm:col-start-3 md:col-span-1   md:max-w-fit justify-self-end">
      <div
        className="w-full flex items-center justify-center md:bg-blue rounded-xl px-3 md:py-8"
        aria-label="Global">
        <div className="w-full">
          {/* BOTON DE MENU EN CELULAR */}
          <div className="flex md:hidden">
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
              onClick={handlerNav}>
              <span className="sr-only">Open main menu</span>
              <Bars3Icon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          {/* LINKS DE NAVEGACIÓN */}
          <div className="hidden md:flex md:flex-col md:gap-y-12 md:h-full transition-colors md:justify-center">
            <ul className="flex sm:flex-col gap-3 sm:mt-6 justify-center items-center">
              {navigation.map((item) => (
                <li key={item.nombre}>
                  <NavLink
                    to={item.href}
                    className={`group relative flex justify-center rounded px-1 py-1.5 text-gray-500 hover:bg-gray-50 hover:text-gray-700 ${
                      item.nombre === "Contact" ? "hidden" : ""
                    }`}>
                    <img src={item.svg} alt={item.nombre} />
                    <span className="invisible absolute end-full top-1/2 me-4 -translate-y-1/2 rounded bg-gray-900 px-2 py-1.5 text-xs font-medium text-white group-hover:visible">
                      {item.nombre}
                    </span>
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <Dialog
        as="div"
        className="md:hidden animate-fade"
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}>
        <div className="fixed inset-0 z-50 bg-royal" />
        <Dialog.Panel className="fixed inset-y-0 top-0 right-0 z-50 w-screen overflow-y-auto bg-gradient-to-t from-purple/50 to-black-300 text-white px-6 py-6 max-h-72 overflow-auto">
          <div className="flex items-center justify-between">
            <a href="/" className="-m-1.5 p-1.5">
              <span className="sr-only">Logo Personal</span>
              <img className="h-10 w-auto" src={logojoa} alt="logojoa" />
            </a>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
              onClick={handlerNav}>
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
                    onClick={handlerNav}
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50 underline decoration-porcelian">
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
