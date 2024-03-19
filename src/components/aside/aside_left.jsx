import { NavLink } from "react-router-dom";

import github from "../../../public/github.svg";
import behance from "../../../public/behance.svg";
import linkedin from "../../../public/linkedin.svg";
import envelope from "../../../public/envelope.svg";

const rrss = [
  {
    nombre: "Linkedin",
    svg: linkedin,
    href: "https://www.linkedin.com/in/joaquincapdevila/",
    span: "Playlist",
  },
  {
    nombre: "email",
    svg: envelope,
    href: "mailto:joaquincapdeviladev@gmail.com",
    span: "Artista",
  },
  {
    nombre: "Github",
    svg: github,
    href: "https://github.com/joaquincapdevila?tab=repositories",
    span: "Playlist • 9 canciones",
  },
  {
    nombre: "behance",
    svg: behance,
    href: "https://www.behance.net/joaquncapdevila",
    span: "Álbum • 3 canciones",
  },
];

const AsideLeft = () => {
  return (
    <aside className="transition-all duration-500 ease-in-out rounded-xl bg-gradient-to-tl from-purple/50 to-black-300 relative overflow-auto row-start-2 sm:row-start-1 sm:col-start-1 md:col-start-1 md:col-span-2 px-3">
      <header className="flex flex-col h-full transition-colors">
        <div className="sm:hidden md:block">
          <h1 className="text-4xl md:text-5xl  font-bold leading-4 -tracking-tight text-gray-900 mt-5">
            <NavLink to="/" className="flex flex-col lg:flex-row">
              <span className="leading-10">Full</span>
              <span>Stack</span>
            </NavLink>
          </h1>
          <h2 className="text-2xl font-semibold text-gray-900 mt-5 md:mt-3">
            Lead Engineer at Upstatement
          </h2>
          <p className="mt-4 max-w-xs leading-normal">
            I build pixel-perfect, engaging, and accessible digital experiences.
          </p>
        </div>
        <nav className="h-9 bg-white/5 hover:bg-white/10 mt-6 flex items-center rounded-3xl sm:rounded-full md:rounded-3xl">
          <div className="flex items-center justify-between sm:justify-center md:justify-between w-full px-2 gap-3 sm:gap-0 md:gap-3 sm:p-0 md:px-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6 p-1 bg-white/10 rounded-full hover:bg-white/20 self-center">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
              />
            </svg>
            <input
              type="text"
              className="sm:hidden md:block text-xs py-1 px-2 bg-white/5 border border-spacing-1 border-viol rounded-full w-4/5"
            />
            <h5 className="sm:hidden md:block text-sm mr-2">Redes</h5>
          </div>
        </nav>
        <ul className="flex flex-col gap-1 mt-6">
          {rrss.map((a) => (
            <li
              className="w-full h-16 px-3 sm:px-1 md:px-3 hover:bg-white/10 rounded-lg "
              key={a.nombre}>
              <a
                href={a.href}
                className="hover:scale-110 transition-transform"
                target="_blank"
                rel="noopener noreferrer">
                <div className="h-full w-full flex items-center gap-4 sm:gap-0 md:gap-4">
                  <img
                    src={a.svg}
                    alt={a.nombre}
                    className="h-10 min-w-[40px] hover:scale-110 transition-transform"
                  />
                  <div className="sm:hidden md:flex flex-col">
                    <h6 className="text-sm">{a.nombre}</h6>
                    <span className="text-xs">{a.span}</span>
                  </div>
                </div>
              </a>
            </li>
          ))}
        </ul>
      </header>
    </aside>
  );
};

export default AsideLeft;
