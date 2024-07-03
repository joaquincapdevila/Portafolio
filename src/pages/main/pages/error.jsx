import { Link, useRouteError } from "react-router-dom";

function Error() {
  const error = useRouteError();
  console.log(error);
  return (
    <section
      id="error"
      className="w-screen h-screen min-h-screen bg-dark-blue text-center flex justify-center items-center flex-col">
      <h1 className="text-4xl font-bold leading-10 text-white">
        Opps!! Lo siento algo a salido mal
      </h1>
      <Link className="text-purple mt-11" to="/">
        &larr; back
      </Link>
    </section>
  );
}
export default Error;
