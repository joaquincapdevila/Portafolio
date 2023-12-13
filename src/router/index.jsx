import Inicio from "../components/main/components/inicio";
import Proyectos from "../components/sections/main/pages/Productos";
import { NotFound } from "../components/sections/main/pages/ErrorNotFound";
import App from "../App";
import { createBrowserRouter } from "react-router-dom";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <NotFound />,
    children: [
      {
        index: true,
        element: <Inicio />,
      },
      {
        path: "/productos",
        element: <Proyectos />,
      },
    ],
  },
]);
