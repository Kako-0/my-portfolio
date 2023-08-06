"use client";

export default function Item() {
  return (
    <div className="flex flex-col md:flex-row w-full items-start justify-around gap-10 md:gap-32">
      <div className="flex flex-col gap-2 max-w-xl order-last md:order-none text-justify">
        <p className=" text-xl font-bold">Nome do projeto 01</p>
        <p>
          Sou um parágrafo. Aqui você pode adicionar e editar seu próprio texto.
          Basta clicar em &quot;Editar texto&quot; ou clicar duas vezes sobre
          mim. Você também pode alterar a fonte e mais. Sou um ótimo lugar para
          você compartilhar a sua história com os visitantes.
        </p>
        <div className="mt-6 flex gap-4">
          <button
            type="button"
            className="text-white bg-blue-900 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 focus:outline-none"
          >
            Github
          </button>
          <button
            type="button"
            className="text-white bg-blue-900 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 focus:outline-none"
          >
            Website
          </button>
        </div>
      </div>
      <div className="w-[300px] h-[300px] bg-slate-800" />
    </div>
  );
}
