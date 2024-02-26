const Formulario = (manejarCambio, enviodeDatos) => {
  return (
    <section className="bg-gradient-to-bl from-purple to-black-300 h-screen rounded-xl relative p-3 col-start-1 row-start-1 sm:col-start-2 sm:row-start-1 lg:col-span-6 lg:col-start-3 overflow-auto scrollbar-none flex justify-center items-center">
      <div className="z-20 w-11/12">
        <form
          method="post"
          className="px-6 pb-6 border border-viol bg-transparent rounded-3xl ">
          <div className="py-10 m-auto grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* NOMBRE INPUT */}
            <div className="md:col-span-1">
              <label
                htmlFor="name"
                className=" text-sm font-medium leading-6 text-gray-900">
                Nombre de contacto
              </label>
              <div className="mt_2">
                <input
                  id="name"
                  type="text"
                  onChange={manejarCambio}
                  className=" w-full rounded-md  py-1.5 px-2 text-black-300 shadow-sm focus:ring-viol"
                />
              </div>
            </div>

            {/* APODO INPUT */}

            <div className="md:col-span-1">
              <label
                htmlFor="nickname"
                className=" text-sm font-medium leading-6 text-gray-900">
                Apodo
              </label>
              <div className="mt_2">
                <input
                  id="nickname"
                  type="text"
                  onChange={manejarCambio}
                  className=" w-full rounded-md  py-1.5 px-2 text-black-300 shadow-sm focus:ring-viol"
                />
              </div>
            </div>

            {/* EMAIL INPUT */}

            <div className="md:col-span-2">
              <label
                htmlFor="email"
                className=" text-sm font-medium leading-6 text-gray-900">
                Email
              </label>
              <div className="mt_2">
                <input
                  id="email"
                  type="email"
                  onChange={manejarCambio}
                  placeholder="sunombre@gmail.com"
                  className=" w-full rounded-md  py-1.5 px-2 text-black-300 shadow-sm focus:ring-viol"
                />
              </div>
            </div>
            {/* TEXT AREA INPUT */}
            <div className="md:col-span-2 pb">
              <label
                htmlFor="bodyMessage"
                className=" text-sm font-medium leading-6 text-gray-900">
                Cuentame un poco sobre tu proyecto
              </label>
              <div className="mt_2">
                <textarea
                  id="bodyMessage"
                  type="text"
                  onChange={manejarCambio}
                  rows={3}
                  className=" w-full rounded-md  py-1.5 px-2 text-black-300 shadow-sm focus:ring-viol"
                />
              </div>
            </div>
          </div>
          <div className="flex justify-end items-center gap-4">
            <button
              type="button"
              className="rounded-md  px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-gris">
              Cancelar
            </button>
            <button
              type="submit"
              onClick={enviodeDatos}
              className="rounded-md bg-purple px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-viol">
              Ennviar
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Formulario;
