import App from "../App";
import { createBrowserRouter } from "react-router-dom";
import Inicio from "../components/main/pages/inicio";
import Error from "../components/main/components/error";
import Proyecto from "../components/main/pages/proyectos";
import Contacto from "../components/main/pages/contacto";

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
        path: "/proyects",
        element: <Proyecto />,
      },
      {
        path: "/contact",
        element: <Contacto />,
      },
    ],
  },
]);
export default Router;
