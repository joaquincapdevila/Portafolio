import logojoa from "../../../public/logojoa.svg";
import github from "../../../public/github.svg";
import behance from "../../../public/behance.svg";
import linkedin from "../../../public/linkedin.svg";
import envelope from "../../../public/envelope.svg";

const contacto = [
  {
    nombre: "Linkedin",
    svg: linkedin,
    href: "https://www.linkedin.com/in/joaquincapdevila/",
  },
  {
    nombre: "Github",
    svg: github,
    href: "https://github.com/joaquincapdevila?tab=repositories",
  },
  {
    nombre: "behance",
    svg: behance,
    href: "https://github.com/joaquincapdevila?tab=repositories",
  },
];
const Footer = () => {
  return (
    <section className="w-full bg-dark-blue dark:text-white dark:bg-purple flex justify-center px-6 lg:px-8 pt-20 pb-9 shadow-2xl ">
      <div className="flex-1 flex flex-col justify-center items-start">
        <img className="h-10 w-auto" src={logojoa} alt="logojoa" />
        <p className="mt-8">
          Te invito que tengamos una gran colaboración. Copyright 2023©
        </p>
        <ul className="flex list-none gap-5 mt-8 ">
          {contacto.map((a) => (
            <label key={a.nombre} htmlFor={a.nombre}>
              <li key={a.nombre}>
                <a
                  href={a.href}
                  className="hover:scale-110 transition-transform"
                  target="_blank"
                  rel="noopener noreferrer">
                  <embed src={a.svg} alt={a.nombre} className="h-6" />
                </a>
              </li>
            </label>
          ))}
          <li>
            <p className=" flex flex-nowrap gap-3">
              <span>
                <embed src={envelope} className="h-6" />
              </span>
              : joaquincapdeviladev@gmail.com
            </p>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Footer;
