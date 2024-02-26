// import Contacto from "./components/contacto";

import { Outlet } from "react-router-dom";
import AsideLeft from "./components/aside_left";
import AsideRight from "./components/aside_right";
// #7672f2 violeta
// #383673 medio
// #2d2f59 oscuro
// #6e7073 gris
// #f2f2f2 blanco

const Main = () => {
  return (
    <main className="max-w-4xl mx-auto pt-20 pb-6 grid grid-cols-1 sm:grid-cols-8 md:grid-cols-6 lg:max-w-5xl lg:gap-x-2 lg:grid-cols-8 lg:px-4 dark:text-white gap-5 min-w-full bg-white dark:bg-black-600 overflow-hidden">
      <AsideLeft />
      <Outlet />
      <AsideRight />
    </main>
  );
};
export default Main;
