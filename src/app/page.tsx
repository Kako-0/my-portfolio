import Header from "@/components/Header";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex flex-col items-start w-full h-[85vh] relative md:p-40 bg-transparent">
        <div className="grid gap-4 place-items-start p-8">
          <h1 className="font-extrabold text-4xl md:text-5xl tracking-wide">
            Olá, <br />
            Eu sou <span className="text-blue-900">Kayro França</span>. <br />
            Um desenvolvedor web focado em frontend.
          </h1>
          <h2 className="font-bold text-3xl"></h2>
        </div>
      </main>
    </>
  );
}
