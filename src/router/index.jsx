import App from "../App";
import { createBrowserRouter } from "react-router-dom";
import Inicio from "../pages/main/pages/inicio";
import Error from "../pages/main/pages/error";
import Contacto from "../pages/main/pages/contacto";
import Proyectos from "../pages/main/pages/proyectos";

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
        element: <Proyectos />,
      },
      {
        path: "/contact",
        element: <Contacto />,
      },
    ],
  },
]);
export default Router;
