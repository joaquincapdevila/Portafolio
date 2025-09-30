const experiencias = [
  {
    titulo:
      "Producción de Eventos – Instituto Cultura Contemporánea (2024–2025)",
    actividades: [
      "Coordinación de equipos de 5 a 8 personas en eventos como Cosquín Rock y Jornadas Abiertas.",
      "Planificación logística, montaje de sonido e iluminación y control de cronogramas.",
      "Aplicación de métodos de mejora de procesos y optimización de recursos.",
    ],
  },
  {
    titulo: "Vendedor / Coordinador – Flecha Turismo Estudiantil (2022)",
    actividades: [
      "Organización de viajes estudiantiles y atención al cliente.",
      "Manejo de indicadores de ventas y control de stock de materiales.",
    ],
  },
];

const ExperienciaCard = () => {
  return (
    <ul className="flex flex-col gap-8">
      {experiencias.map((exp) => (
        <li
          key={exp.titulo}
          className="max-w-4xl w-full mx-auto grid grid-cols-1 lg:max-w-5xl dark:text-white rounded-xl px-5 py-7 transition-colors bg-white/5 hover:bg-white/10 shadow-md bg-royal/10">
          <h2 className="mt-4 text-lg font-semibold text-white sm:text-slate-900 md:text-xl dark:sm:text-white">
            {exp.titulo}
          </h2>
          <ul className="mt-2 list-disc list-inside text-slate-300 dark:text-slate-400">
            {exp.actividades.map((act, idx) => (
              <li key={idx}>{act}</li>
            ))}
          </ul>
        </li>
      ))}
    </ul>
  );
};

export default ExperienciaCard;
