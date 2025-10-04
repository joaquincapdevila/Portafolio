import React from "react";
import { GraduationCap, PenTool, Volume2, Code2, Package } from "lucide-react";

const educacion = [
  {
    icon: <GraduationCap className="w-8 h-8 text-blue-500" />,
    titulo: "Ingeniería Industrial – UTN Córdoba",
    fecha: "Mayo 2022 – Actualidad",
    descripcion: [
      "Gestión de procesos, logística y mejora continua.",
      "Excel avanzado, Power BI, AutoCAD, Inventor.",
    ],
  },
  {
    icon: <Code2 className="w-8 h-8 text-blue-500" />,
    titulo: "FullStack Developer – Mundos E – UNC",
    fecha: "Abril 2023",
    descripcion: [
      "Desarrollo web con tecnologías modernas.",
      "Proyecto final: aplicación fullstack.",
    ],
  },
  {
    icon: <PenTool className="w-8 h-8 text-blue-500" />,
    titulo: "Diseño Gráfico – Universidad Provincial de Córdoba",
    fecha: "Mayo 2023 – Actualidad",
    descripcion: [
      "Principios de diseño visual, composición y teoría del color.",
      "Manejo de Photoshop, Illustrator y CorelDRAW.",
      "Proyectos gráficos para impresión y medios digitales.",
    ],
  },
  {
    icon: <Package className="w-8 h-8 text-blue-500" />,
    titulo: "Producción de Espectáculos – Instituto Cultura Contemporánea",
    fecha: "Noviembre 2022",
    descripcion: [
      "Diseño y dibujo técnico en AutoCAD.",
      "Coordinación de equipos para eventos como Cosquín Rock.",
      "Planificación de logística, montaje de sonido e iluminación.",
    ],
  },
  {
    icon: <Volume2 className="w-8 h-8 text-blue-500" />,
    titulo: "Auxiliar en Sonido – Córdoba Me Capacita",
    fecha: "Agosto 2025",
    descripcion: [
      "Técnicas de sonido profesional.",
      "Montaje y operación de equipos de audio.",
    ],
  },
];
const colors = [
  "border-b-accentPurple border-r-accentPurple",
  "border-b-accentBlue border-r-accentBlue",
  "border-b-accentPink border-r-accentPink",
  "border-b-accentGreen border-r-accentGreen",
  "border-b-primaryYellow border-r-primaryYellow",
];
const Educacion = () => {
  return (
    <div className="w-full flex justify-center items-center">
      <ol className="relative border-s border-gray-200 dark:border-gray-700">
        {educacion.map((item, idx) => (
          <li className="mb-10 ms-4" key={idx}>
            <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
            <div
              className={`flex items-center gap-3 mb-2 ${
                colors[idx % colors.length]
              }`}>
              {React.cloneElement(item.icon, {
                className: `w-8 h-8 ${
                  idx === 0
                    ? "text-accentPurple"
                    : idx === 1
                    ? "text-accentBlue"
                    : idx === 2
                    ? "text-accentPink"
                    : idx === 3
                    ? "text-accentGreen"
                    : "text-primaryYellow"
                }`,
              })}
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                {item.titulo}
              </h3>
            </div>
            <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
              {item.fecha}
            </time>
            <ul className="list-disc ml-8 text-base font-normal text-gray-500 dark:text-gray-400">
              {item.descripcion.map((desc, i) => (
                <li key={i}>{desc}</li>
              ))}
            </ul>
          </li>
        ))}
      </ol>
    </div>
  );
};

export default Educacion;
