import Header from "@/components/Header";
import Projetos from "@/components/Projetos";
import { ibmSerif } from "./fonts";
import Sobre from "@/components/Sobre";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex flex-col gap-12 items-start w-full">
        <section
          className="grid gap-4 place-items-center h-[95vh] w-full pad-default"
          id="inicio"
        >
          <h1
            className={`font-bold italic text-2xl md:text-5xl tracking-wide ${ibmSerif.className}`}
          >
            Olá, <br />
            Eu sou <span className="text-blue-900">Kayro França</span>. <br />
            Um <span className="text-blue-900">desenvolvedor web</span> focado
            em <span className="text-blue-900">frontend</span>.
          </h1>
          {/* <h2 className="font-bold text-3xl"></h2> */}
        </section>
        <Sobre />
        <Projetos />
      </main>
    </>
  );
}
