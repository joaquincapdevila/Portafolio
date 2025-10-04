import Blockquote from "../../../components/blockquote";
import Education from "../../../components/educacion";
import Headings from "../../../components/heading";
import NormalText from "../../../components/normalText";
import Proyecto from "../../../components/proyectoCard";
import Experiencia from "./Experiencia";

function Inicio() {
  return (
    <div className="transition-all duration-500 ease-in-out md:rounded-xl relative px-3 pt-3 col-start-1 row-start-1 sm:col-start-2 sm:col-span-7 md:col-start-3 md:col-span-4 lg:col-span-6 lg:col-start-3 md:overflow-auto scrollbar-none">
      <section id="inicio" className="py-16 px-4 sm:p-6 md:px-8 m-auto">
        <Headings />
        <NormalText />
      </section>
      <section className="py-16 px-4 sm:p-6 md:px-8 m-auto">
        <Blockquote />
      </section>
      <section
        id="proyecto"
        className="min-h-screen py-16 px-4 sm:p-6 md:px-8 m-auto">
        <div className="max-w-4xl mx-auto lg:max-w-5xl dark:text-white rounded-xl px-5 py-7   bg-white/5 hover:bg-white/10 ">
          <h4 className="text-2xl font-bold dark:text-white mb-12">
            Proyectos
          </h4>
          <Proyecto />
        </div>
      </section>
      <section
        id="experiencia"
        className="min-h-screen py-16 px-4 sm:p-6 md:px-8 m-auto">
        <div className="max-w-4xl mx-auto lg:max-w-5xl dark:text-white rounded-xl px-5 py-7   bg-white/5 hover:bg-white/10 ">
          <h4 className="text-2xl font-bold dark:text-white mb-12">
            Experiencia
          </h4>
          <Experiencia />
        </div>
      </section>
      <section className="px-4 sm:p-6 md:px-8 m-auto">
        <div className="max-w-4xl mx-auto lg:max-w-6xl dark:text-white rounded-xl px-5 py-7   bg-white/5 hover:bg-white/10 ">
          <h4
            id="educacion"
            className="text-2xl font-bold dark:text-white mb-12">
            Educación
          </h4>
          <Education />
        </div>
      </section>
    </div>
  );
}

export default Inicio;
