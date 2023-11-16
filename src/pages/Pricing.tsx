import PageNav from "../components/PageNav";

const Pricing = () => {
  return (
    <main className="px-20 py-10 h-full bg-gray-800">
      <PageNav />
      <section className="grid grid-cols-2 gap-10 items-center mx-auto mt-24 max-w-4xl">
        <div className="space-y-8">
          <h2 className="text-5xl font-bold">
            Simple pricing.
            <br />
            Just $9/month.
          </h2>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corporis
            doloribus libero sunt expedita ratione iusto, magni, id sapiente
            sequi officiis et.
          </p>
        </div>
        <img src="img-2.jpg" alt="overview of a large city with skyscrapers" />
      </section>
    </main>
  );
};

export default Pricing;
