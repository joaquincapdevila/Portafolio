import { Outlet } from "react-router-dom";

const Main = () => {
  return (
    <main className="transition-all duration-500 ease-in-out rounded-xl bg-gradient-to-tr from-purple/60 to-black-300 relative overflow-auto  md:col-start-2 md:col-span-6 row-start-1 scrollbar-none">
      <Outlet />
    </main>
  );
};
export default Main;
