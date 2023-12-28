import portafolioimage from "../../../../public/works/portafolio.png";
import portafolio2 from "../../../../public/works/portafolio2.png";
import portafolio3 from "../../../../public/works/portafolio_contact.png";
import weatherImage from "../../../../public/works/weather.png";
import weatherImage2 from "../../../../public/works/weather2.png";
import weatherImage3 from "../../../../public/works/weather3.png";
import javaScript from "../../../../public/skills/js.png";
import react from "../../../../public/skills/react.png";
import tailwind from "../../../../public/skills/tailwind.png";

const Proyecto = () => {
  const proyects = [
    {
      idioma: "en",
      key: "weather",
      titulo: "Weather App",
      desc: "A web application that shows the weather in real time from anywhere in the world. Allows you to search by name, coordinates. It uses the OpenWeatherMap API to get the weather data and the Geolocation. It is developed with HTML, CSS and JavaScript, using the async/await method for asynchronous requests.",
      imagen: weatherImage,
      imagen2: weatherImage2,
      imagen3: weatherImage3,
      lenguajes: [javaScript, react, tailwind],
    },
    {
      idioma: "en",
      key: "webs",
      titulo: "Portfolio",
      desc: "A web portfolio that shows my projects, skills and contact. It has a responsive, modern and attractive design, with animation and transition effects. It uses HTML, CSS and Tailwind for layout, JavaScript for interactivity, and PHP and MySQL for the backend and database.",
      imagen: portafolioimage,
      imagen2: portafolio2,
      imagen3: portafolio3,
      lenguajes: [javaScript, react, tailwind],
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
                {datos.idioma}
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

            {/* <dl className="mt-4 text-xs font-medium flex items-center row-start-2 sm:mt-1 sm:row-start-3 md:mt-2.5 lg:row-start-2">
              <dt className="sr-only">Reviews</dt>
              <dd className="text-indigo-600 flex items-center dark:text-indigo-400">
                <svg
                  width="24"
                  height="24"
                  fill="none"
                  aria-hidden="true"
                  className="mr-1 stroke-current dark:stroke-indigo-500">
                  <path
                    d="m12 5 2 5h5l-4 4 2.103 5L12 16l-5.103 3L9 14l-4-4h5l2-5Z"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </dd>
              <dt className="sr-only">Location</dt>
              <dd className="flex items-center">
                <svg
                  width="24"
                  height="24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="mr-1 text-slate-400 dark:text-slate-500"
                  aria-hidden="true">
                  <path d="M18 11.034C18 14.897 12 19 12 19s-6-4.103-6-7.966C6 7.655 8.819 5 12 5s6 2.655 6 6.034Z" />
                  <path d="M14 11a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z" />
                </svg>
              </dd>
            </dl> */}

            <dl className="mt-4 text-sm font-medium flex col-start-1 row-start-3 self-center sm:mt-0 sm:col-start-2 sm:row-start-2 sm:row-span-2 lg:mt-6 lg:col-start-1 lg:row-start-3 lg:row-end-4">
              <dt className="sr-only">leguajes1</dt>
              <dd className="flex items-center gap-12">
                {datos.lenguajes &&
                  datos.lenguajes.map((lenguaje, index) => {
                    return (
                      <img
                        className="h-4"
                        key={index}
                        src={lenguaje}
                        alt="svg lenguajes"
                      />
                    );
                  })}
              </dd>
            </dl>

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
