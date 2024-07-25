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

// ESTA LINEA DEL TIMEPO TIENE QUE IR

{
  /* <ol class="relative border-s border-gray-200 dark:border-gray-700">                  
    <li class="mb-10 ms-4">
        <div class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
        <time class="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">February 2022</time>
        <h3 class="text-lg font-semibold text-gray-900 dark:text-white">Application UI code in Tailwind CSS</h3>
        <p class="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">Get access to over 20+ pages including a dashboard layout, charts, kanban board, calendar, and pre-order E-commerce & Marketing pages.</p>
        <a href="#" class="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-100 focus:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-700">Learn more <svg class="w-3 h-3 ms-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
  </svg></a>
    </li>
    <li class="mb-10 ms-4">
        <div class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
        <time class="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">March 2022</time>
        <h3 class="text-lg font-semibold text-gray-900 dark:text-white">Marketing UI design in Figma</h3>
        <p class="text-base font-normal text-gray-500 dark:text-gray-400">All of the pages and components are first designed in Figma and we keep a parity between the two versions even as we update the project.</p>
    </li>
    <li class="ms-4">
        <div class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
        <time class="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">April 2022</time>
        <h3 class="text-lg font-semibold text-gray-900 dark:text-white">E-Commerce UI code in Tailwind CSS</h3>
        <p class="text-base font-normal text-gray-500 dark:text-gray-400">Get started with dozens of web components and interactive elements built on top of Tailwind CSS.</p>
    </li>
</ol> */
}
