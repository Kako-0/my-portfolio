import Blobs from "@/components/Blobs";
import Header from "@/components/Header";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex min-h-screen flex-col items-center p-24">
        <Blobs />
        <div className="grid gap-4 place-items-center">
          <h1 className=" font-extrabold text-5xl text-clip bg-clip-text mix-blend-difference invert tracking-wide text-center">
            Olá, meu nome é Kayro França.
          </h1>
          <h2 className=" font-bold text-3xl text-clip bg-clip-text text-center mix-blend-difference invert">
            Um desenvolvedor web focado em frontend.
          </h2>
        </div>
      </main>
    </>
  );
}
