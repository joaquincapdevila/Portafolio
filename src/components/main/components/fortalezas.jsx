import code from "../../../../public/code.svg";

import javaScript_logo from "../../../../public/skills/js.png";
import html5 from "../../../../public/skills/html.png";
import css from "../../../../public/skills/css.png";
import vite from "../../../../public/skills/vite.svg";
import node from "../../../../public/skills/nodejs.svg";
import react from "../../../../public/skills/react.png";
import git from "../../../../public/skills/git.png";
import tailwind from "../../../../public/skills/tailwind.png";

const skill = [
  {
    nombre: "css",
    svg: css,
  },
  {
    nombre: "Github",
    svg: html5,
  },
  {
    nombre: "html5",
    svg: javaScript_logo,
  },
  {
    nombre: "vite",
    svg: vite,
  },
  {
    nombre: "nodejs",
    svg: node,
  },
  {
    nombre: "react",
    svg: react,
  },
  {
    nombre: "git",
    svg: git,
  },
  {
    nombre: "tailwind",
    svg: tailwind,
  },
];

const Fortalezas = () => {
  return (
    <section className="relative px-6 z-20 dark:text-white">
      <div className="mx-auto max-w-4xl py-16 flex justify-center lg:justify-between flex-wrap sm:flex-nowrap items-center gap-x-12">
        <img
          src={code}
          alt="foto de joaquin"
          className="w-[30%] hidden lg:block mix-blend-multiply"
        />
        <div className="py-16 mx-auto">
          <h3 className="text-4xl font-bold tracking-tight text-gray-900 underline-offset-4">
            About Me
          </h3>
          <p className="mt-6 text-sm md:text-base text-gray-600 ">
            Soy una persona analítica y detallista, lo que me permite
            identificar problemas y encontrar soluciones creativas de manera
            efectiva. Me gusta trabajar en equipo, compartir conocimientos y
            aprender de mis colegas, ya que creo que la colaboración es
            fundamental para el éxito de cualquier proyecto.
          </p>

          <h4 className="my-6 text-2xl font-bold tracking-tight text-gray-900 underline-offset-4">
            Skills:
          </h4>
          <ul className="flex flex-wrap gap-12">
            {skill.map((a) => (
              <label key={a.nombre} htmlFor={a.nombre}>
                <li key={a.nombre}>
                  <a href={a.href} target="_blank" rel="noopener noreferrer">
                    <embed
                      src={a.svg}
                      alt={a.nombre}
                      className="h-6 mix-blend-color-burn aspect-square"
                    />
                  </a>
                </li>
              </label>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};
export default Fortalezas;
