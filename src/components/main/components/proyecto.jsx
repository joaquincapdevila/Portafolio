// import portafolioimage from "../../../../public/works/portafolio.png";
// import portafolio2 from "../../../../public/works/portafolio2.png";
// import portafolio3 from "../../../../public/works/portafolio_contact.png";
// import weatherImage from "../../../../public/works/weather.png";
// import weatherImage2 from "../../../../public/works/weather2.png";
// import weatherImage3 from "../../../../public/works/weather3.png";
// import javaScript from "../../../../public/skills/js.png";
// import react from "../../../../public/skills/react.png";
// import tailwind from "../../../../public/skills/tailwind.png";

const Proyecto = () => {
  let hoy = new Date();
  let dd = String(hoy.getDate()).padStart(2, "0");
  let mm = String(hoy.getMonth() + 1).padStart(2, "0"); // Enero es 0!
  let yyyy = hoy.getFullYear();

  hoy = mm + "/" + dd + "/" + yyyy;

  const proyect = [
    {
      idioma: "en",
      key: "function",
      titulo: "Introducing Animaginary: High performance web animations",
      desc: "A web application that shows the weather in real time from anywhere in the world. Allows you to search by name, coordinates. It uses the OpenWeatherMap API to get the weather data and the Geolocation. It is developed with HTML, CSS and JavaScript, using the async/await method for asynchronous requests.",
      //   imagen: weatherImage,
      //   imagen2: weatherImage2,
      //   imagen3: weatherImage3,
      //   lenguajes: [javaScript, react, tailwind],
      date: hoy,
    },
    {
      idioma: "en",
      key: "webs",
      titulo: "Crafting a design system for a multiplanetary future",
      desc: "A web portfolio that shows my projects, skills and contact. It has a responsive, modern and attractive design, with animation and transition effects. It uses HTML, CSS and Tailwind for layout, JavaScript for interactivity, and PHP and MySQL for the backend and database.",
      //   imagen: portafolioimage,
      //   imagen2: portafolio2,
      //   imagen3: portafolio3,
      //   lenguajes: [javaScript, react, tailwind],
      date: hoy,
    },
  ];
  return (
    <section className="min-h-screen py-16 px-4 sm:p-6 md:px-8 m-auto">
      <ul className="flex flex-col gap-8">
        {proyect.map((datos) => (
          <div
            key={datos.titulo}
            className="max-w-4xl mx-auto grid grid-cols-1 lg:max-w-5xl dark:text-white rounded-xl px-5 py-7  transition-colors bg-white/5 hover:bg-white/10">
            <div className="relative p-3 col-start-1 row-start-1 flex flex-col-reverse rounded-lg bg-gradient-to-t from-black/75 via-black/0 sm:bg-none  sm:p-0 lg:row-start-1">
              <h2 className="mt-4 text-lg font-semibold text-white sm:text-slate-900 md:text-xl dark:sm:text-white">
                {datos.titulo}
              </h2>
              <p className="text-sm leading-4 font-medium text-white sm:text-slate-500 dark:sm:text-slate-400 flex items-center">
                <span className="text-white mr-2">|</span> {datos.date}
              </p>
            </div>
            <p className="mt-1 text-sm leading-6 col-start-1 sm:col-span-2 lg:mt-3 lg:row-start-4 lg:col-span-1 dark:text-slate-400">
              {datos.desc}
            </p>
          </div>
        ))}
      </ul>
    </section>
  );
};

export default Proyecto;
