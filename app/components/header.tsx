export default function Header() {
  return (
    <section className="bg-stone-50 w-full pt-20" id="header">
      <div className=" container px-5 py-5 mx-auto text-center lg:px-40">
        <div className="flex flex-col w-full mb-10">
          <h1 className="title-font text-6xl lg:text-7xl mb-4 font-bold text-neutral-900">
            BENNY MANSELL
          </h1>
          <p className="text-xl lg:text-2xl">
            <a
              className="text-neutral-900 hover:text-cyan-600"
              href="mailto:bennymansell49@gmail.com"
            >
              bennymansell49@gmail.com
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
