import "./App.css";
import Main from "./components/main";
import Header from "./components/header/header";
import AsideLeft from "./components/aside/aside_left";

function App() {
  return (
    <div className="relative h-full w-full gap-2 grid grid-flow-col dark:text-white bg-white dark:bg-black-600 overflow-auto sm:px-3 sm:pt-16 sm:pb-2 sm:h-screen sm:w-screen">
      <Header />
      <Main />
      <AsideLeft />
    </div>
  );
}

export default App;
