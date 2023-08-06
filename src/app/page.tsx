import Header from "@/components/Header";
import Projetos from "@/components/Projetos";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex flex-col items-start w-full py-24 px-16 md:p-40 md:px-64">
        <section className="grid gap-4 place-items-start h-[85vh] w-full">
          <h1 className="font-extrabold text-2xl md:text-5xl tracking-wide">
            Olá, <br />
            Eu sou <span className="text-blue-900">Kayro França</span>. <br />
            Um <span className="text-blue-900">desenvolvedor web</span> focado
            em <span className="text-blue-900">frontend</span>.
          </h1>
          {/* <h2 className="font-bold text-3xl"></h2> */}
        </section>
        <Projetos />
      </main>
    </>
  );
}
