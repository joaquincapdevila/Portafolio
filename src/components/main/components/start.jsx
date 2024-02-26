import img_joaco from "../../../../public/img_joaco.png";

export const Start = () => {
  return (
    <div className="relative isolate dark:text-white py-16 px-4 sm:p-6 md:px-8 m-auto">
      <div className="max-w-4xl lg:max-w-5xl mx-auto flex gap-4">
        {/* IMAGEN */}
        <div className="w-32 h-32 rounded-md self-end bg-gradient-to-br from-dark-blue via-midnight to-purple overflow-hidden">
          <img src={img_joaco} alt="joaquin" className="cover" />
        </div>
        {/* TEXTO */}
        <div className="flex-1 flex-col h-full justify-between animate-fade2">
          <h1 className="text-lg font-bold tracking-tight text-gray-900 sm:text-6xl mt-6">
            Sobre mí
          </h1>
          <div className="flex items-center gap-3 mt-4">
            <div className="w-6 h-6 rounded-full overflow-hidden bg-baige">
              <img src={img_joaco} alt="joaquin" className="cover" />
            </div>
            <h5 className="text-xs font-semibold tracking-tight text-gray-900 flex gap-2 flex-wrap">
              <span>Joaquin Capdevila</span> • <span>1 me gusta</span> •{" "}
              <span>9 canciones</span>, <span>400 h 50 min</span>
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Start;
