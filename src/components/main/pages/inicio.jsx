import Proyecto from "../components/proyecto";
import Start from "../components/start";

function Inicio() {
  return (
    <div className="transition-all duration-500 ease-in-out md:rounded-xl relative p-3 col-start-1 row-start-1 sm:col-start-2 sm:col-span-7 md:col-start-3 md:col-span-4 lg:col-span-6 lg:col-start-3 md:overflow-auto scrollbar-none">
      <Start />
      <section className="mt-16 px-4 sm:p-6 md:px-8 m-auto">
        <div className="max-w-4xl lg:max-w-5xl mx-auto">
          ¡Hola! Mi nombre es Joaquín Capdevila. Soy un individuo comprometido y
          dedicado, siempre buscando oportunidades para crecer y aprender.
          Actualmente, estoy cursando estudios en ingeniería y estoy en busca de
          un empleo que me permita continuar con mi formación académica.. <br />{" "}
          <br /> Creo firmemente en la responsabilidad y la ética en el trabajo,
          y me esfuerzo por incorporar estos valores en todas las tareas que
          realizo. Soy consciente de que cada experiencia laboral es una
          oportunidad para adquirir nuevas habilidades y conocimientos, y estoy
          dispuesto a asumir cualquier desafío que se presente. <br />
          <br /> Mi objetivo es encontrar un lugar de trabajo que valore la
          innovación y el crecimiento personal y profesional. Un lugar donde
          pueda aplicar mis habilidades y conocimientos actuales, al mismo
          tiempo que me brinde la oportunidad de aprender y desarrollarme aún
          más...
        </div>
      </section>
      {/* <section className=" py-16 px-4 sm:p-6 md:px-8 m-auto">
        experience
      </section> */}
      <Proyecto />
    </div>
  );
}

export default Inicio;
