import { NavLink } from "react-router-dom";
import logojoa from "../../../../public/img_joaco.png";
import github from "../../../../public/github.svg";
import behance from "../../../../public/behance.svg";
import linkedin from "../../../../public/linkedin.svg";
import envelope from "../../../../public/envelope.svg";

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
    <aside className="bg-viol/20 p-3 h-screen rounded-xl relative col-start-1 row-start-1 lg:col-span-2 overflow-auto">
      <header className="flex flex-col h-full">
        <div>
          <h1 className="text-4xl sm:text-5xl font-bold leading-4 -tracking-tight text-gray-900 mt-5">
            <NavLink to="/" className="">
              Joaquin capdevila
            </NavLink>
          </h1>
          <h2 className="text-2xl font-semibold leading-6 text-gray-900 -tracking-tight mt-3">
            Lead Engineer at Upstatement
          </h2>
          <p className="mt-4 max-w-xs leading-normal">
            I build pixel-perfect, engaging, and accessible digital experiences.
          </p>
          <nav></nav>
        </div>
        <ul className="flex flex-col gap-1 mt-6">
          {rrss.map((a) => (
            <li
              className="w-full h-16 px-3 hover:bg-dark-blue/20 rounded-lg "
              key={a.nombre}>
              <a
                href={a.href}
                className="hover:scale-110 transition-transform"
                target="_blank"
                rel="noopener noreferrer">
                <div className="h-full w-full flex items-center gap-4">
                  <img
                    src={a.svg}
                    alt={a.nombre}
                    className="h-10 hover:scale-110 transition-transform"
                  />
                  <div>
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
