import github from "../../../public/github.svg";
import behance from "../../../public/behance.svg";
import linkedin from "../../../public/linkedin.svg";
import envelope from "../../../public/envelope.svg";
import { NavLink } from "react-router-dom";

const contacto = [
  {
    nombre: "Linkedin",
    svg: linkedin,
    href: "https://www.linkedin.com/in/joaquincapdevila/",
  },
  {
    nombre: "email",
    svg: envelope,
    href: "mailto:joaquincapdeviladev@gmail.com",
  },
  {
    nombre: "Github",
    svg: github,
    href: "https://github.com/joaquincapdevila?tab=repositories",
  },
  {
    nombre: "behance",
    svg: behance,
    href: "https://www.behance.net/joaquncapdevila",
  },
];
const Footer = () => {
  return (
    <footer className="rounded-lg shadow mx-auto shadow-md p-4 bg-royal/10 max-w-5xl ">
      <div className="w-full mx-auto max-w-screen-xl md:flex md:items-center md:justify-between">
        <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
          © 2023 . All Rights Reserved.
        </span>
        <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
          {contacto.map((datos) => (
            <li key={datos.nombre}>
              <NavLink
                href={datos.href}
                className="group relative flex justify-center rounded px-2 py-1.5 text-gray-500 hover:bg-gray-50 hover:text-gray-700">
                <img src={datos.svg} alt={datos.nombre} />
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
