import { Link } from "react-router-dom";
import PageNav from "../components/PageNav";

const Homepage = () => {
  return (
    <main
      className="h-full px-20 py-10 bg-cover bg-center
      bg-[linear-gradient(rgba(49,84,44,0.8),rgba(16,71,52,0.8)),url('bg.jpg')]
    "
    >
      <PageNav />
      <section className="h-[85%] flex flex-col items-center justify-center gap-10 text-center">
        <h1 className="text-5xl font-bold text-white">
          You travel the world.
          <br />
          WorldWise keeps track of your adventures.
        </h1>
        <h2 className="text-xl text-neutral-400 font-bold mb-10">
          A world map that tracks your footsteps into every city you can think
          of. Never forget your wonderful experiences, and show your friends how
          you have wandered the world.
        </h2>
        <Link
          className="bg-green-500 px-6 py-4 rounded-md text-black text-lg uppercase transition hover:bg-green-600"
          to="/login"
        >
          Start tracking now
        </Link>
      </section>
    </main>
  );
};

export default Homepage;
