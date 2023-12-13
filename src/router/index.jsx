import App from "../App";
import { createBrowserRouter } from "react-router-dom";
// import Main from "../components/main";
import Inicio from "../components/main/pages/inicio";
import Error from "../components/main/components/error";
import Proyecto from "../components/main/pages/proyectos";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Inicio />,
      },
      {
        path: "/proyectos",
        element: <Proyecto />,
      },
    ],
  },
]);
export default Router;
