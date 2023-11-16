import PageNav from "../components/PageNav";

const Product = () => {
  return (
    <main className="px-20 py-10 h-full bg-gray-800">
      <PageNav />
      <section className="grid grid-cols-2 gap-10 items-center mx-auto mt-24 max-w-4xl">
        <img
          src="img-1.jpg"
          alt="person with dog overlooking mountain with sunset"
        />
        <div className="space-y-8">
          <h2 className="text-5xl font-bold">About WorldWide.</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo est
            dicta illum vero culpa cum quaerat architecto sapiente eius non
            soluta, molestiae nihil laborum, placeat debitis, laboriosam at fuga
            perspiciatis?
          </p>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corporis
            doloribus libero sunt expedita ratione iusto, magni, id sapiente
            sequi officiis et.
          </p>
        </div>
      </section>
    </main>
  );
};

export default Product;
