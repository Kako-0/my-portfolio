import Blobs from "@/components/Blobs";
import Header from "@/components/Header";

export default function Home() {
  return (
    <>
      <Header />
      <Blobs />
      <main className="flex flex-col items-start w-full h-[85vh] relative p-40">
        <div className="grid gap-4 place-items-start p-8 bg-blue-200 rounded-xl bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-10 border border-gray-100">
          <h1 className=" font-extrabold text-5xl tracking-wide">
            Olá, <br />
            Eu sou <span className="text-blue-900">Kayro França</span>. <br />
            Um desenvolvedor web focado em frontend.
          </h1>
          <h2 className=" font-bold text-3xl text-clip bg-clip-text text-center mix-blend-difference invert"></h2>
        </div>
      </main>
    </>
  );
}
