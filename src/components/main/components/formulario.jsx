const Formulario = (manejarCambio, enviodeDatos) => {
  return (
    <section className="relative px-6 pt-14 z-20 dark:text-white flex justify-center items-center h-screen">
      <div className="mx-auto z-20">
        <form
          method="post"
          className="px-6 pb-6 border border-viol bg-transparent rounded-3xl ">
          <div className="mt-10 mb-5 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            {/* NOMBRE INPUT */}

            <div className="sm:col-span-3">
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

            <div className="sm:col-span-3">
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

            <div className="sm:col-span-5">
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
            <div className="sm:col-span-6 pb">
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
