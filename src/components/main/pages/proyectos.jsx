function Proyecto() {
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
  return (
    <section className="h-screen w-screen relative isolate px-6 pt-20 lg:px-8 flex justify-center">
      <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-11/12  mt-6 justify-items-center">
        {descripciones.map((datos) => (
          <li
            key={datos.key}
            className="max-w-sm max-h-72 rounded-2xl overflow-hidden shadow-lg flex flex-col mt-4 bg-white col-span-1">
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">{datos.titulo}</div>
              <p className="text-gray-700 text-sm md:text-base">{datos.desc}</p>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Proyecto;
