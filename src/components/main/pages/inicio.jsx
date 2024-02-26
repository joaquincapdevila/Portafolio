import Proyecto from "../components/proyecto";
import Start from "../components/start";

function Inicio() {
  return (
    <div className="bg-gradient-to-bl from-purple to-black-300 h-screen rounded-xl relative p-3 col-start-1 row-start-1 sm:col-start-2 sm:col-span-7 md:col-start-3 md:col-span-4 lg:col-span-6 lg:col-start-3 overflow-auto scrollbar-none">
      <Start />
      <section className="py-16 px-4 sm:p-6 md:px-8 m-auto">
        <div className="max-w-4xl lg:max-w-5xl mx-auto">
          Back in 2012, I decided to try my hand at creating custom Tumblr
          themes and tumbled head first into the rabbit hole of coding and web
          development. Fast-forward to today, and I’ve had the privilege of
          building software for an advertising agency, a start-up, a student-led
          design studio, and a huge corporation. <br /> <br /> My main focus
          these days is building products and leading projects for our clients
          at Upstatement. I most enjoy building software in the sweet spot where
          design and engineering meet — things that look good but are also built
          well under the hood. In my free time, Ive also released an online
          video course that covers everything you need to know to build a web
          app with the Spotify API. <br />
          <br /> When I’m not at the computer, I’m usually rock climbing,
          reading, hanging out with my wife and two cats, or running around
          Hyrule searching for Korok seeds K o r o k s e e d s .
        </div>
      </section>
      <section className=" py-16 px-4 sm:p-6 md:px-8 m-auto">
        experience
      </section>
      <Proyecto />
    </div>
  );
}

export default Inicio;
