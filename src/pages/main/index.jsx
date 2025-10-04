import { Outlet } from "react-router-dom";

const Main = () => {
  return (
    <main className="transition-all duration-500 ease-in-out relative overflow-auto  md:col-start-2 md:col-span-6 row-start-1 scrollbar-none scroll-behavior: smooth;">
      <Outlet />
    </main>
  );
};
export default Main;
