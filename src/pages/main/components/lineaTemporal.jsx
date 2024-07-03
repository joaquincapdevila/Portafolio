import check from "../../../../public/check.svg";
const educacion = [
  {
    Institucion: "Universidad Tecnológica Nacional",
    descripcion: "Ingeniería Industrial",
    estado: "(En curso)",
    date: "Mar 2022 - ",
  },
  {
    Institucion: "Universidad Nacional de Córdoba",
    descripcion: "Desarrollo FullStack Web",
    estado: "Completo",
    date: "",
  },
  {
    Institucion: "Universidad Provincial de Cordoba",
    descripcion: "Diseño Grafico",
    estado: " (En curso)",
    date: "Mar 2023 - ",
  },
];

const LineaTemporal = () => {
  return (
    <>
      <ol className="text-gray-500">
        {educacion.map((datos) => (
          <li className="mb-20 ms-6 flex gap-5" key={datos.Institucion}>
            <span className="flex rounded-full items-center justify-center w-8 h-8 bg-royal bg-green-rounded-full">
              <img
                src={check}
                alt=""
                className="w-3.5 h-3.5 text-green-500 dark:text-green-400"
              />
            </span>
            <div className="flex flex-col">
              <h3 className="font-medium leading-tight">{datos.Institucion}</h3>
              <p className="text-sm flex items-center">
                <span className="flex w-2.5 h-2.5 bg-china rounded-full me-1.5 flex-shrink-0"></span>
                {datos.descripcion}
              </p>
              <p className="text-sm flex items-center">
                <span className="flex w-2.5 h-2.5 bg-china rounded-full me-1.5 flex-shrink-0"></span>
                {datos.date}
                {datos.estado}
              </p>
            </div>
          </li>
        ))}
      </ol>
    </>
  );
};

export default LineaTemporal;
