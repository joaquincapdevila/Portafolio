import App from "../App";
import { createBrowserRouter } from "react-router-dom";
import Inicio from "../components/main/pages/inicio";
import Error from "../components/main/components/error";
import Contacto from "../components/main/pages/contacto";
import Proyectos from "../components/main/pages/proyectos";

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
