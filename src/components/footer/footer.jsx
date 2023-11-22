import logojoa from "../../../public/logojoa.svg";
import github from "../../../public/github.svg";
import behance from "../../../public/behance.svg";
import linkedin from "../../../public/linkedin.svg";
import envelope from "../../../public/envelope.svg";

const contacto = [
  {
    nombre: "Linkedin",
    svg: linkedin,
    href: "https://github.com/joaquincapdevila?tab=repositories",
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
  {
    nombre: "Envelope",
    svg: envelope,
    href: "https://github.com/joaquincapdevila?tab=repositories",
  },
];
const Footer = () => {
  return (
    <section className="w-full bg-dark-blue dark:text-white dark:bg-purple flex justify-center px-6 lg:px-8 pt-20 pb-9 shadow-2xl ">
      <div className="flex-1 flex flex-col justify-center items-start">
        <img className="h-10 w-auto" src={logojoa} alt="logojoa" />
        <p className="mt-8">Te invito que tengamos una gran colaboración.</p>
        <ul className="flex list-none gap-5 mt-8 ">
          {contacto.map((a) => (
            <label key={a.nombre} htmlFor={a.nombre}>
              <li key={a.nombre}>
                <a href={a.href} target="_blank" rel="noopener noreferrer">
                  <embed src={a.svg} alt={a.nombre} className="h-6" />
                </a>
              </li>
            </label>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Footer;
