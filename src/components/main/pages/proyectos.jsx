function Proyecto() {
  const proyects = [
    {
      key: "weather",
      titulo: "Weather App",
      desc: "Una aplicación web que muestra el clima en tiempo real de cualquier lugar del mundo. Permite buscar por nombre, coordenadas o ubicación actual del usuario. Usa la API de OpenWeatherMap para obtener los datos meteorológicos y la API de Geolocation para obtener la posición del usuario. Está desarrollada con HTML, CSS y JavaScript, usando el método async/await para las peticiones asíncronas.",
      imagen: "",
    },
    {
      key: "webs",
      titulo: "Desarrollo Web",
      desc: "Un portfolio web que muestra mis proyectos, habilidades y contacto. Tiene un diseño responsive, moderno y atractivo, con efectos de animación y transición. Usa HTML, CSS y Bootstrap para el maquetado, JavaScript y jQuery para la interactividad, y PHP y MySQL para el backend y la base de datos.",
      imagen: "",
    },
    {
      key: "estudios",
      titulo: "Estudios",
      desc: "Una aplicación web que ayuda a los estudiantes a organizar sus tareas, exámenes y horarios. Permite crear, editar y eliminar asignaturas, tareas y exámenes, así como ver un calendario y un cronograma con las fechas y horas de cada actividad. Usa HTML, CSS y React para el frontend, Node.js y Express para el backend, y MongoDB para la base de datos.",
      imagen: "",
    },
  ];
  return (
    <section className="h-screen w-screen relative isolate px-6 pt-20 lg:px-8 flex justify-center">
      <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-11/12  mt-6 justify-items-center">
        {proyects.map((datos) => (
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
