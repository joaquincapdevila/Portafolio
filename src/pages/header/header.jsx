import { useState } from "react";
import { Dialog } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import logojoa from "../../../public/logojoa.svg";
import casa from "../../../public/casa.svg";
import contacto from "../../../public/contacto.svg";
import proyectos from "../../../public/proyectos.svg";

const navigation = [
  { nombre: "Home", href: "#inicio", svg: casa },
  { nombre: "Proyectos", href: "#proyecto", svg: proyectos },
  { nombre: "Experiencia", href: "#experiencia", svg: contacto },
  { nombre: "Contacto", href: "#contacto", svg: contacto },
];

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const handlerNav = () => setMobileMenuOpen(!mobileMenuOpen);

  return (
    <header className="fixed top-0 z-50 w-full flex items-center bg-transparent">
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between p-4 lg:px-8 bg-transparent"
        aria-label="Global">
        {/* MENU ICON MOBILE */}
        <div className="absolute right-4 top-4 lg:hidden">
          <button
            type="button"
            className="inline-flex items-center justify-center rounded-md p-2 text-gray-700 hover:bg-gray-100"
            onClick={handlerNav}>
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>

        {/* NAV LINKS DESKTOP */}
        <div className="hidden lg:flex lg:gap-6 lg:items-center bg-white/20 backdrop-blur-xl border border-grey/30 rounded-xxl">
          {navigation.map((item) => (
            <a
              key={item.nombre}
              href={item.href}
              className="flex items-center gap-2 px-3 py-2 rounded-lg text-sm font-medium transition-all hover:scale-110">
              <img src={item.svg} alt={item.nombre} className="h-4 w-4" />
              {item.nombre}
            </a>
          ))}
        </div>
      </nav>

      {/* MENU MOBILE */}
      <Dialog
        as="div"
        className="lg:hidden transition-all"
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}>
        <div className="fixed inset-0 z-40 bg-black/30" aria-hidden="true" />
        <Dialog.Panel className="fixed top-0 right-0 z-50 w-64 h-full bg-white/20 backdrop-blur-xl border border-grey/30 hover:bg-white/40 shadow-lg p-6">
          <div className="flex items-center justify-between mb-6">
            <img className="h-8 w-auto" src={logojoa} alt="logojoa" />
            <button
              type="button"
              className="rounded-md p-2 text-gray-700 hover:bg-gray-100"
              onClick={handlerNav}>
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="space-y-4">
            {navigation.map((item) => (
              <a
                key={item.nombre}
                href={item.href}
                onClick={handlerNav}
                className="block rounded-lg px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-100 hover:text-blue-600">
                {item.nombre}
              </a>
            ))}
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  );
};

export default Header;
