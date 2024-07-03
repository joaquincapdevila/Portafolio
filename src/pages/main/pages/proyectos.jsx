// import portafolioimage from "../../../../public/works/portafolio.png";
// import portafolio2 from "../../../../public/works/portafolio2.png";
// import portafolio3 from "../../../../public/works/portafolio_contact.png";
// import weatherImage from "../../../../public/works/weather.png";
// import weatherImage2 from "../../../../public/works/weather2.png";
// import weatherImage3 from "../../../../public/works/weather3.png";
// import javaScript from "../../../../public/skills/js.png";
// import react from "../../../../public/skills/react.png";
// import tailwind from "../../../../public/skills/tailwind.png";
import Proyecto from "../components/proyectoCard";

const Proyectos = () => {
  return (
    <section className="transition-all duration-500 ease-in-out h-screen rounded-xl relative p-3 col-start-1 row-start-1 sm:col-start-2 sm:col-span-7 md:col-start-3 md:col-span-4 lg:col-span-6 lg:col-start-3 overflow-auto scrollbar-none">
      <Proyecto />
    </section>
  );
};

export default Proyectos;
