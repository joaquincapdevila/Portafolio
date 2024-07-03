import { useState } from "react";
import { Dialog } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import logojoa from "../../../public/logojoa.svg";
import { NavLink } from "react-router-dom";

const navigation = [
  { name: "Home", href: "/" },
  { name: "Proyects", href: "/proyects" },
  { name: "Contact", href: "contact" },
];

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="absolute inset-x-0 top-0 z-50 dark:text-white">
      <div className="" aria-label="Global">
        <div className="pt-4 w-full flex items-center justify-center">
          <div className="w-11/12 flex justify-center">
            <div className="flex justify-between w-full">
              {/* LOGOTIPO PERSONAL */}
              <div className="flex lg:flex-1">
                <NavLink to="/" className="-m-1.5 p-1.5">
                  <span className="sr-only">My Brand</span>
                  <img className="h-8 w-auto" src={logojoa} alt="logojoa" />
                </NavLink>
              </div>
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
              <div className="hidden md:flex md:gap-x-12 px-6 py-1 bg-silver/5 rounded-2xl shadow-3xl">
                {navigation.map((item) => (
                  <NavLink
                    key={item.name}
                    to={item.href}
                    className={`text-sm font-semibold leading-6 text-gray-900 hover:scale-110 transition-transform
                    ${item.name === "Contact" ? "hidden" : "felx"}`}>
                    {item.name}
                  </NavLink>
                ))}
              </div>
              <div className="hidden md:flex lg:flex-1 lg:justify-end"></div>
            </div>
          </div>
        </div>
      </div>

      <Dialog
        as="div"
        className="md:hidden animate-fade"
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}>
        <div className="fixed inset-0 z-50" />
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
                    key={item.name}
                    to={item.href}
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">
                    {item.name}
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
