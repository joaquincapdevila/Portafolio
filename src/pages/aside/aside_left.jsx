import { NavLink } from "react-router-dom";

// import img_joaco from "../../../public/img_joaco.png";
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
    <aside className="transition-all duration-500 ease-in-out rounded-xl bg-gradient-to-tl from-purple/50 to-black-300 relative  row-start-2 sm:row-start-1 sm:col-start-1 md:col-start-1 md:col-span-1 px-3 bg-blue md:max-w-fit">
      <header className="flex flex-col h-full transition-colors justify-center ">
        <ul className="flex sm:flex-col gap-3 sm:mt-6 justify-center items-center">
          {rrss.map((a) => (
            <li key={a.nombre}>
              <NavLink
                to={a.href}
                className="group relative flex justify-center rounded px-2 py-1.5 text-gray-500 hover:bg-gray-50 hover:text-gray-700">
                <img src={a.svg} alt={a.nombre} />
                <span className="invisible absolute start-full top-1/2 ms-4 -translate-y-1/2 rounded bg-gray-900 px-2 py-1.5 text-xs font-medium text-white group-hover:visible">
                  {a.nombre}
                </span>
              </NavLink>
            </li>
          ))}
        </ul>
      </header>
    </aside>
  );
};

export default AsideLeft;
