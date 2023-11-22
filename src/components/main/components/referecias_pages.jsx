import code from "../../../../public/code.svg";

const Fortalezas = () => {
  return (
    <section className="relative px-6 pt-14 z-20 dark:text-white">
      <div className="mx-auto max-w-4xl py-24 flex justify-center lg:justify-between flex-wrap sm:flex-nowrap items-center gap-x-12">
        <img
          src={code}
          alt="foto de joaquin"
          className="w-[30%] hidden lg:block mix-blend-multiply"
        />
        <div className="py-16 mx-auto">
          <h3 className="text-4xl font-bold tracking-tight text-gray-900 underline-offset-4">
            About Me
          </h3>
          <p className="mt-6 text-sm md:text-base leading-8 text-gray-600">
            Soy una persona analítica y detallista, lo que me permite
            identificar problemas y encontrar soluciones creativas de manera
            efectiva. Me gusta trabajar en equipo, compartir conocimientos y
            aprender de mis colegas, ya que creo que la colaboración es
            fundamental para el éxito de cualquier proyecto.
          </p>
        </div>
      </div>
    </section>
  );
};
export default Fortalezas;
