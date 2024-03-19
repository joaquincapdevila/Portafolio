import logojoa from "../../../public/logojoa.svg";
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
    <footer className="w-full absolute inset-x-0 dark:text-white bg-black-600 flex justify-center px-6 lg:px-8 py-6 shadow-2xl ">
      <div className="flex-1 flex flex-col justify-center md:flex-row md:justify-around items-start">
        <NavLink to="/" className="">
          <img
            className="h-10 w-auto self-center"
            src={logojoa}
            alt="logojoa"
          />
        </NavLink>

        <p className="mt-8 md:mt-0 md:self-center flex items-center">
          © Copyright 2023
          <span>
            <svg
              width="2"
              height="2"
              aria-hidden="true"
              fill="currentColor"
              className="mx-3 text-slate-300 self-center hidden md:block">
              <circle cx="1" cy="1" r="1" />
            </svg>
          </span>
          <span className="hidden md:block">
            {" "}
            I invite you to have a great colaboration.
          </span>
        </p>
        <ul className="flex list-none gap-5 mt-8 md:mt-0 md:self-center">
          {contacto.map((a) => (
            <li key={a.nombre}>
              <a
                href={a.href}
                className="hover:scale-110 transition-transform"
                target="_blank"
                rel="noopener noreferrer">
                <img
                  src={a.svg}
                  alt={a.nombre}
                  className="h-6 hover:scale-110 transition-transform"
                />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
