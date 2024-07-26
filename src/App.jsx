import "./App.css";
import Main from "./pages/main";
// import Header from "./components/header/header";
import AsideLeft from "./pages/aside/aside_left";
import Header from "./pages/header/header";

function App() {
  return (
    <div className="relative gap-2 grid grid-flow-col bg-white-200 overflow-auto px-4 py-2 h-screen w-screen">
      <Header />
      <Main />
      <AsideLeft />
    </div>
  );
}

export default App;
