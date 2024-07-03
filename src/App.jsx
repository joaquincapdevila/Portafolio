import "./App.css";
import Main from "./pages/main";
// import Header from "./components/header/header";
import AsideLeft from "./pages/aside/aside_left";

function App() {
  return (
    <div className="relative h-full w-full gap-2 grid grid-flow-col bg-white-200 overflow-auto sm:px-3 sm:pt-16 sm:pb-2 sm:h-screen sm:w-screen">
      <Main />
      <AsideLeft />
    </div>
  );
}

export default App;
