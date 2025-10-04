const Proyecto = () => {
  const proyect = [
    {
      idioma: "en",
      key: "function",
      href: "https://estacionculturalbouwer.vercel.app/",
      titulo:
        "🚂 Bouwer Cultura: Una web cultural basada en la estética del pueblo",
      desc: "Una aplicación web que se centra en la difusión de la cultura local en tiempo real. Permite a los usuarios explorar y descubrir diversas formas de arte, literatura, música, historia y más, de todas partes del mundo. Utiliza la API de OpenCultureMap para obtener datos culturales y la Geolocalización para sugerir contenido basado en la ubicación del usuario.",
      date: "10/03/24",
      desde: "",
      estado: "Realizado",
    },
    {
      idioma: "es",
      key: "powerbi",
      href: "#",
      titulo: "📊 Tablero de Control de Ventas en Power BI",
      desc: "Desarrollo de indicadores clave (KPIs) para ventas, con visualización interactiva de métricas de rentabilidad.\n🔧 Tecnologías: Power BI, Excel.\n📂 [Repositorio / Demo]",
      date: "En proceso",
      desde: "",
      estado: "En proceso",
    },
    {
      idioma: "es",
      key: "lienzo",
      href: "#",
      titulo: "📈 Lienzo de Modelo de Negocios",
      desc: "Análisis integral de la propuesta de valor, flujo de operaciones y optimización de recursos para un emprendimiento de ingeniería.\n🔧 Tecnologías: Excel, Canva, herramientas de gestión.\n📂 [Documento / Presentación]",
      date: "En proceso",
      desde: "",
      estado: "En proceso",
    },
    {
      idioma: "es",
      key: "portfolio",
      href: "https://github.com/joaquincapdevila/Portafolio",
      titulo: "🌐 Portfolio Web Personal",
      desc: "Sitio web desarrollado con React y Tailwind para mostrar proyectos y experiencia profesional.\n🔧 Tecnologías: React, Vite, Tailwind, GitHub Pages/Deno Deploy.\n📂 Ver en GitHub",
      date: "10/01/24",
      desde: "",
      estado: "Realizado",
    },
  ];
  const colors = [
    "border-b-accentPurple border-r-accentPurple",
    "border-b-accentBlue border-r-accentBlue",
    "border-b-accentPink border-r-accentPink",
    "border-b-accentGreen border-r-accentGreen",
    "border-b-primaryYellow border-r-primaryYellow",
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
      {proyect.map((datos, index) => (
        <li
          key={datos.titulo}
          className={`max-w-4xl w-full mx-auto grid grid-cols-1 lg:max-w-5xl 
        dark:text-white bg-white-200 backdrop-blur-xl 
        border border-b-8 border-r-8 border-white/30 
        rounded-xxl shadow-[20px_20px_20px_-15px_rgba(0,0,0,0.5)] 
        text-white/80 hover:bg-white/40 hover:text-gray-900 
        transition duration-300 p-8 
        ${colors[index % colors.length]}`}>
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
