import ExperienciaCard from "../components/experienciaCard";

const Experiencia = () => {
  return (
    <div className="transition-all duration-500 ease-in-out h-screen rounded-xl relative p-3 col-start-1 row-start-1 sm:col-start-2 sm:col-span-7 md:col-start-3 md:col-span-4 lg:col-span-6 lg:col-start-3  scrollbar-none">
      <section className="min-h-screen py-16 px-4 sm:p-6 md:px-8 m-auto">
        <ExperienciaCard />
      </section>
    </div>
  );
};

export default Experiencia;
