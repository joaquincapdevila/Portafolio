import github from "../../../public/github.svg";
import behance from "../../../public/behance.svg";
import linkedin from "../../../public/linkedin.svg";
import envelope from "../../../public/envelope.svg";

const rrss = [
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
const iconColors = [
  "fill-accentBlue",
  "fill-accentPurple",
  "fill-accentPink",
  "fill-accentGreen",
  "fill-primaryYellow",
];

const Footer = () => {
  return (
    <footer className="md:fixed max-w-5xl left-0 top-1/2 -translate-y-1/2 bg-transparent text-white py-4 flex justify-start items-center">
      <ul className="flex md:flex-col w-full justify-center items-center gap-6 bg-white/20 backdrop-blur-xl border border-royal rounded-xxl shadow-lg shadow-white/10 text-white/80 hover:bg-white/40 px-4 m-4 md:py-4">
        {rrss.map(({ nombre, svg, href }, idx) => (
          <li key={nombre}>
            <a
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={nombre}
              className="hover:opacity-80 transition-all rounded-full p-2">
              <img
                src={svg}
                alt={nombre}
                className={`w-6 h-6 hover:scale-110 transition-all ${
                  iconColors[idx % iconColors.length]
                } `}
                style={{ filter: "invert(1)" }}
              />
            </a>
          </li>
        ))}
      </ul>
    </footer>
  );
};

export default Footer;
