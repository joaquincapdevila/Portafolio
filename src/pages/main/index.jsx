import { Outlet } from "react-router-dom";

const Main = () => {
  return (
    <main className="transition-all duration-500 ease-in-out rounded-xl bg-gradient-to-tr from-purple/60 to-black-300 relative overflow-auto sm:col-start-2 md:col-start-2 md:col-span-7">
      <Outlet />
    </main>
  );
};
export default Main;
