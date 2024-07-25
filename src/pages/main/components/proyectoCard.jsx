const Proyecto = () => {
  const proyect = [
    {
      idioma: "en",
      key: "function",
      href: "https://estacionculturalbouwer.vercel.app/",
      titulo:
        "Bouwer Cultura: Una web cultural basada en la estética del pueblo",
      desc: "Una aplicación web que se centra en la difusión de la cultura local en tiempo real. Permite a los usuarios explorar y descubrir diversas formas de arte, literatura, música, historia y más, de todas partes del mundo. Utiliza la API de OpenCultureMap para obtener datos culturales y la Geolocalización para sugerir contenido basado en la ubicación del usuario.",
      date: "10/03/24",
      desde: "",
      estado: "Realizado",
    },
    {
      idioma: "en",
      key: "webs",
      href: "#",
      titulo: "Red de Gestión Cultural",
      desc: "...",
      date: "En proceso",
      desde: "",
      estado: "En proceso",
    },
  ];

  // Calculamos la diferencia en días para cada proyecto
  proyect.forEach((p) => {
    const fechaCreacion = new Date(p.date);
    const estado = p.estado;
    const hoy = new Date();
    if (estado !== "Realizado") {
      p.desde = "En proceso";
    } else {
      const diferenciaMilisegundos = hoy - fechaCreacion;
      const dias = Math.abs(
        Math.floor(diferenciaMilisegundos / (1000 * 60 * 60 * 24))
      );
      p.desde = `Realizado hace ${dias} días`;
    }
  });

  return (
    <ul className="flex flex-col gap-8">
      {proyect.map((datos) => (
        <li
          key={datos.titulo}
          className="max-w-4xl w-full mx-auto grid grid-cols-1 lg:max-w-5xl dark:text-white rounded-xl px-5 py-7  transition-colors bg-white/5 hover:bg-white/10 shadow-md bg-royal/10">
          <a
            href={datos.href}
            rel="noreferrer"
            target="_blank"
            className="relative p-3 col-start-1 row-start-1 flex flex-col-reverse rounded-lg bg-gradient-to-t from-black/75 via-black/0 sm:bg-none  sm:p-0 lg:row-start-1">
            <h2 className="mt-4 text-lg font-semibold text-white sm:text-slate-900 md:text-xl dark:sm:text-white">
              {datos.titulo}
            </h2>
            <p className="text-sm leading-4 font-medium text-white sm:text-slate-500 dark:sm:text-slate-400 flex items-center">
              <span className="text-white mr-2">|</span> {datos.desde}
            </p>
          </a>
          <p className="mt-1 text-sm leading-6 col-start-1 sm:col-span-2 lg:mt-3 lg:row-start-4 lg:col-span-1 dark:text-slate-400">
            {datos.desc}
          </p>
        </li>
      ))}
    </ul>
  );
};

export default Proyecto;
