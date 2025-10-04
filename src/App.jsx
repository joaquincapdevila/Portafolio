import "./App.css";
import Main from "./pages/main";
import Header from "./pages/Header/header";
import Footer from "./pages/Footer/Footer";

function App() {
  return (
    <div className="App flex flex-col gap-4 p-4 md:p-8 lg:p-12 h-screen bg-background scrollbehavior-smooth transition-all">
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
