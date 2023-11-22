const descripciones = [
  {
    key: "exp",
    titulo: "Experiencia",
    desc: "Cada uno de ellos me ha permitido crecer y desarrollar nuevas habilidades. Aquí puedes ver algunos de los proyectos más destacados en los que he trabajado.",
  },
  {
    key: "webs",
    titulo: "Desarrollo Web",
    desc: "El desarrollo web es mi pasión. Aquí puedes ver algunos de mis trabajos más recientes y los lenguajes de programación que más disfruto usar.",
  },
  {
    key: "estudios",
    titulo: "Estudios",
    desc: "Poseo una formación en Desarrollo FullStack Web. Actualmente, estoy cursando Ingeniería Industrial. Mi formación académica apunta hacia la tecnología y la lógica.",
  },
];

export const Works = () => {
  return (
    <section className="relative isolate px-6 pt-14 lg:px-8">
      <div
        className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
        aria-hidden="true">
        <div className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-viol to-vrac opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]" />
      </div>
      <div className="mx-auto max-w-4xl py-24 z-20">
        <h3 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white text-center pb-0 md:pb-5">
          Work
        </h3>
        <ul className="grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 mt-6 justify-items-center">
          {descripciones.map((datos) => (
            <li
              key={datos.key}
              className="max-w-sm rounded-2xl overflow-hidden shadow-lg flex flex-col flex-1 mx-4 mt-4 bg-white hover:scale-110 transition-transform">
              <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">{datos.titulo}</div>
                <p className="text-gray-700 text-sm md:text-base">
                  {datos.desc}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Works;
