// import Contacto from "./components/contacto";

import { Outlet } from "react-router-dom";
// #7672f2 violeta
// #383673 medio
// #2d2f59 oscuro
// #6e7073 gris
// #f2f2f2 blanco

const Main = () => {
  return (
    <main className="flex flex-col justify-center items-stretch min-w-full bg-white dark:bg-dark-blue">
      <Outlet />
    </main>
  );
};
export default Main;
