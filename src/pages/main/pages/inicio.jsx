import Footer from "../../../components/footer/footer";
import Blockquote from "../components/blockquote";
import Headings from "../components/heading";
import LineaTemporal from "../components/lineaTemporal";
import NormalText from "../components/normalText";
import Proyecto from "../components/proyectoCard";

function Inicio() {
  return (
    <div className="transition-all duration-500 ease-in-out md:rounded-xl relative px-3 pt-3 col-start-1 row-start-1 sm:col-start-2 sm:col-span-7 md:col-start-3 md:col-span-4 lg:col-span-6 lg:col-start-3 md:overflow-auto scrollbar-none">
      <section className="py-16 px-4 sm:p-6 md:px-8 m-auto">
        <Headings />
        <NormalText />
      </section>
      <section className="py-16 px-4 sm:p-6 md:px-8 m-auto">
        <Blockquote />
      </section>
      <section className="min-h-screen py-16 px-4 sm:p-6 md:px-8 m-auto">
        <div className="max-w-4xl mx-auto grid grid-cols-1 lg:max-w-5xl dark:text-white rounded-xl px-5 py-7  transition-colors bg-white/5 hover:bg-white/10 shadow-md">
          <h4 className="text-2xl font-bold dark:text-white mb-12">
            Proyectos
          </h4>
          <Proyecto />
        </div>
      </section>
      <section className="px-4 sm:p-6 md:px-8 m-auto">
        <div className="max-w-4xl mx-auto grid grid-cols-1 lg:max-w-5xl dark:text-white rounded-xl px-5 py-7  transition-colors bg-white/5 hover:bg-white/10 shadow-md">
          <h4 className="text-2xl font-bold dark:text-white mb-12">
            Educación
          </h4>
          <LineaTemporal />
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default Inicio;
