import Blockquote from "../components/blockquote";
import Headings from "../components/heading";
import LineaTemporal from "../components/lineaTemporal";
import NormalText from "../components/normalText";
import Proyecto from "../components/proyectoCard";
import Experiencia from "./Experiencia";

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
      <section className="min-h-screen py-16 px-4 sm:p-6 md:px-8 m-auto">
        <div className="max-w-4xl mx-auto grid grid-cols-1 lg:max-w-5xl dark:text-white rounded-xl px-5 py-7  transition-colors bg-white/5 hover:bg-white/10 shadow-md">
          <h4 className="text-2xl font-bold dark:text-white mb-12">
            Experiencia
          </h4>
          <Experiencia />
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

      {/* Sección Contacto */}
      <section className="px-4 sm:p-6 md:px-8 m-auto">
        <div className="max-w-4xl mx-auto grid grid-cols-1 lg:max-w-5xl dark:text-white rounded-xl px-5 py-7 transition-colors bg-white/5 hover:bg-white/10 shadow-md">
          <h4 className="text-2xl font-bold dark:text-white mb-8">📞 Contacto</h4>
          <p className="mb-4 text-lg">¿Querés que trabajemos juntos? 🚀<br/>Podés escribirme por:</p>
          <ul className="space-y-2 text-base">
            <li>📧 <span className="font-semibold">Email:</span> <a href="mailto:joaquincapdevila4@gmail.com" className="underline hover:text-blue-400">joaquincapdevila4@gmail.com</a></li>
            <li>💼 <span className="font-semibold">LinkedIn:</span> <a href="https://linkedin.com/in/joaquincapdevila" target="_blank" rel="noopener noreferrer" className="underline hover:text-blue-400">linkedin.com/in/joaquincapdevila</a></li>
            <li>🖥️ <span className="font-semibold">GitHub:</span> <a href="https://github.com/joaquincapdevila" target="_blank" rel="noopener noreferrer" className="underline hover:text-blue-400">github.com/joaquincapdevila</a></li>
          </ul>
        </div>
      </section>
    </div>
  );
}

export default Inicio;
