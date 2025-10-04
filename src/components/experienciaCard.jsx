const experiencias = [
  {
    titulo:
      "Producción de Eventos – Instituto Cultura Contemporánea (2024–2025)",
    actividades: [
      "Coordinación y liderazgo de equipos de 5 a 8 personas en eventos de gran escala como Cosquín Rock y Jornadas Abiertas.",
      "Gestión logística integral: planificación de recursos, montaje técnico (sonido, iluminación) y supervisión de cronogramas.",
      "Implementación de mejoras en procesos operativos para optimizar tiempos, costos y eficiencia en la ejecución de eventos.",
    ],
  },
  {
    titulo: "Vendedor y Coordinador – Flecha Turismo Estudiantil (2022)",
    actividades: [
      "Organización y coordinación de viajes estudiantiles, incluyendo atención personalizada a clientes y resolución de incidencias.",
      "Gestión comercial con enfoque en indicadores de ventas, cumplimiento de objetivos y fidelización de clientes.",
      "Control de inventario y materiales promocionales, aplicando prácticas de seguimiento y optimización de stock.",
    ],
  },
];
const colors = [
  "border-b-accentBlue border-r-accentBlue",
  "border-b-accentPurple border-r-accentPurple",
  "border-b-accentPink border-r-accentPink",
  "border-b-accentGreen border-r-accentGreen",
  "border-b-primaryYellow border-r-primaryYellow",
];

const ExperienciaCard = () => {
  return (
    <ul className="flex flex-col gap-8">
      {experiencias.map((datos, index) => (
        <li
          key={datos.titulo}
          className={`max-w-4xl w-full mx-auto grid grid-cols-1 lg:max-w-5xl 
        dark:text-white bg-white/20 backdrop-blur-xl 
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
          </a>
          <p className="mt-1 text-sm leading-6 col-start-1 sm:col-span-2 lg:mt-3 lg:row-start-4 lg:col-span-1 dark:text-slate-400">
            {datos.actividades.map((actividad, idx) => (
              <li key={idx} className="list-disc ml-5 mb-2">
                {actividad}
              </li>
            ))}
          </p>
        </li>
      ))}
    </ul>
  );
};

export default ExperienciaCard;
