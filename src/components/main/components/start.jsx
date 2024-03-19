import img_joaco from "../../../../public/img_joaco.png";

export const Start = () => {
  return (
    <div className="relative isolate dark:text-white t-16 px-4 sm:p-6 md:px-8 mx-auto">
      <div className="max-w-4xl lg:max-w-5xl mx-auto overflow-hidden">
        {/* IMAGEN */}
        <div className="max-w-fit sm:shrink-0 h-48 w-48 overflow-hidden rounded-xl bg-gradient-to-br from-dark-blue via-midnight to-purple row-start-1 col-span-2 sm:col-span-1">
          <img src={img_joaco} alt="joaquin" className=" object-cover" />
        </div>
        {/* TITULO */}
        <div className="flex items-end row-start-2 sm:row-start-1 sm:col-start-2 col-span-2">
          <h1 className="mt-3 leading-tight tracking-wide text-5xl flex-1 text-indigo-500 font-semibold">
            Sobre mí
          </h1>
        </div>
        {/* TEXTO */}
        <div className="text-sm grid gap-3 row-start-3 col-span-3 lg:col-span-4 max-w-fit min-w-max">
          <div className="row-start-1 col-start-1">
            <img
              src={img_joaco}
              alt="joaquin"
              className="h-6 w-6 object-cover rounded-full overflow-hidden"
            />
          </div>
          <span className="row-start-1 col-start-2 col-span-1">
            Joaquin Capdevila
          </span>
          <span className="row-start-1 col-start-3 col-span-1">•</span>
          <span className="row-start-1 col-start-4 col-span-1">
            220 me gusta
          </span>
          <span className="hidden sm:flex row-start-1 col-start-5 col-span-1">
            •
          </span>
          <span className="hidden sm:flex row-start-1 col-start-6 col-span-1">
            9 canciones
          </span>
          <span className="hidden sm:flex row-start-1 col-start-7 col-span-1">
            •
          </span>
          <span className="hidden sm:flex row-start-1 col-start-8 col-span-1">
            400 h 50 min
          </span>
        </div>
      </div>
    </div>
  );
};
export default Start;
