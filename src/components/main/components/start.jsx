export const Start = () => {
  return (
    <div className="relative isolate px-6 pt-14 lg:px-8 dark:text-white">
      {/* PRIMER SVG DE FONDO */}
      <div
        className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
        aria-hidden="true">
        <div className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-viol to-vrac opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]" />
      </div>
      {/* TEXTO */}
      <div className="mx-auto max-w-4xl py-32 sm:py-48 ">
        <div className="hidden sm:mb-8 sm:flex sm:justify-center">
          <div className="relative rounded-full px-3 py-1 text-sm leading-6 text-gray-600 ring-1 ring-vrac hover:ring-gray-900/20 animate-fade2">
            Get to know my linkedin in this link.{" "}
            <a
              href="https://www.linkedin.com/in/joaquincapdevila/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-indigo-600">
              <span className="absolute inset-0" aria-hidden="true" />
              Show more <span aria-hidden="true">&rarr;</span>
            </a>
          </div>
        </div>
        <div className="text-center">
          <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-6xl animate-fade">
            Hi, I&apos;m Joaquin
          </h1>
          <h2 className="text-xl italic tracking-tight text-gray-900 sm:text-2xl animate-fade my-6">
            Full Stack Developer
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600 animate-fade1">
            ¿let&apos;s start the next project together?
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <a
              href="https://github.com/joaquincapdevila?tab=repositories"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold ">
              Github
            </a>
            <a
              href="https://www.linkedin.com/in/joaquincapdevila/"
              target="_blank"
              rel="noreferrer"
              className="text-sm font-semibold leading-6 text-gray-900">
              Linkedin<span aria-hidden="true">→</span>
            </a>
          </div>
        </div>
      </div>
      {/* SEGUNDO SVG DE FONDO */}
      <div
        className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
        aria-hidden="true">
        <div className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-viol to-vrac opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]" />
      </div>
    </div>
  );
};
export default Start;
