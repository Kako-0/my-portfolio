"use client";

export default function Item() {
	return (
		<div className="flex flex-col md:flex-row w-full items-start justify-around gap-10 md:gap-32">
			<div className="flex flex-col gap-2 max-w-sm md:max-w-xl order-last md:order-none text-justify">
				<p className=" text-xl font-bold">Nome do projeto 01</p>
				<p>
					Sou um parágrafo. Aqui você pode adicionar e editar seu próprio texto.
					Basta clicar em &quot;Editar texto&quot; ou clicar duas vezes sobre
					mim. Você também pode alterar a fonte e mais. Sou um ótimo lugar para
					você compartilhar a sua história com os visitantes.
				</p>
				<div className="mt-6 flex gap-4">
					<a
						href="http://github.com"
						target="_blank"
						rel="noopener noreferrer"
						className="btn-outlined"
					>
						Github
					</a>
					<a
						href=""
						target="_blank"
						rel="noopener noreferrer"
						className="btn-filled"
					>
						Website
					</a>
				</div>
			</div>
			<div className="w-[300px] h-[300px] bg-slate-800" />
		</div>
	);
}
