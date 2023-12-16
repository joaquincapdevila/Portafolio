import portafolioimage from "../../../../public/works/portafolio.png";
import portafolio2 from "../../../../public/works/portafolio_proyects.png";
// import portafolioimage from "../../../../public/works/portafolio.png";
import weatherImage from "../../../../public/works/weather.png";
import weatherImage2 from "../../../../public/works/weather2.png";
import weatherImage3 from "../../../../public/works/weather3.png";

const Proyecto = () => {
  const proyects = [
    {
      key: "weather",
      titulo: "Weather App",
      desc: "Una aplicación web que muestra el clima en tiempo real de cualquier lugar del mundo. Permite buscar por nombre, coordenadas o ubicación actual del usuario. Usa la API de OpenWeatherMap para obtener los datos meteorológicos y la API de Geolocation para obtener la posición del usuario. Está desarrollada con HTML, CSS y JavaScript, usando el método async/await para las peticiones asíncronas.",
      imagen: weatherImage,
      imagen2: weatherImage2,
      imagen3: weatherImage3,
    },
    {
      key: "webs",
      titulo: "Desarrollo Web",
      desc: "Un portfolio web que muestra mis proyectos, habilidades y contacto. Tiene un diseño responsive, moderno y atractivo, con efectos de animación y transición. Usa HTML, CSS y Bootstrap para el maquetado, JavaScript y jQuery para la interactividad, y PHP y MySQL para el backend y la base de datos.",
      imagen: portafolioimage,
      imagen2: portafolio2,
      imagen3: "",
    },
    {
      key: "estudios",
      titulo: "Estudios",
      desc: "Una aplicación web que ayuda a los estudiantes a organizar sus tareas, exámenes y horarios. Permite crear, editar y eliminar asignaturas, tareas y exámenes, así como ver un calendario y un cronograma con las fechas y horas de cada actividad. Usa HTML, CSS y React para el frontend, Node.js y Express para el backend, y MongoDB para la base de datos.",
      imagen: "",
      imagen2: "",
      imagen3: "",
    },
  ];
  return (
    <section className="min-h-screen py-28 px-4 sm:p-6 md:py-28 md:px-8 m-auto">
      <ul className="flex flex-col gap-28">
        {proyects.map((datos) => (
          <div
            key={datos.titulo}
            className="max-w-4xl mx-auto grid grid-cols-1 lg:max-w-5xl lg:gap-x-20 lg:grid-cols-2 dark:text-white">
            <div className="relative p-3 col-start-1 row-start-1 flex flex-col-reverse rounded-lg bg-gradient-to-t from-black/75 via-black/0 sm:bg-none sm:row-start-2 sm:p-0 lg:row-start-1">
              <h2 className="mt-1 text-lg font-semibold text-white sm:text-slate-900 md:text-2xl dark:sm:text-white">
                {datos.titulo}
              </h2>
              <p className="text-sm leading-4 font-medium text-white sm:text-slate-500 dark:sm:text-slate-400">
                Api
              </p>
            </div>
            <div className="grid gap-4 col-start-1 col-end-3 row-start-1 sm:mb-6 sm:grid-cols-4 lg:gap-6 lg:col-start-2 lg:row-end-6 lg:row-span-6 lg:mb-0">
              <img
                src={datos.imagen}
                alt=""
                className="w-full h-60 object-cover rounded-lg sm:h-52 sm:col-span-2 lg:col-span-full"
                loading="lazy"
              />
              <img
                src={datos.imagen2}
                alt=""
                className="hidden w-full h-52 object-cover rounded-lg sm:block sm:col-span-2 md:col-span-1 lg:row-start-2 lg:col-span-2 lg:h-32"
                loading="lazy"
              />
              <img
                src={datos.imagen3}
                alt=""
                className="hidden w-full h-52 object-cover rounded-lg md:block lg:row-start-2 lg:col-span-2 lg:h-32"
                loading="lazy"
              />
            </div>

            <div className="mt-4 text-sm col-start-1 row-start-3 self-center sm:mt-0 sm:col-start-2 sm:row-start-2 sm:row-span-2 lg:mt-6 lg:col-start-1 lg:row-start-3 lg:row-end-4">
              algo
            </div>
            <p className="mt-4 text-sm leading-6 col-start-1 sm:col-span-2 lg:mt-6 lg:row-start-4 lg:col-span-1 dark:text-slate-400">
              {datos.desc}
            </p>
          </div>
        ))}
      </ul>
    </section>
  );
};

export default Proyecto;
