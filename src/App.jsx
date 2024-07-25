import "./App.css";
import Main from "./pages/main";
// import Header from "./components/header/header";
import AsideLeft from "./pages/aside/aside_left";

function App() {
  return (
    <div className="relative gap-2 grid grid-flow-col bg-white-200 overflow-auto px-4 py-2 h-screen w-screen">
      <Main />
      <AsideLeft />
    </div>
  );
}

export default App;
