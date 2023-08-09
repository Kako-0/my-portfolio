import Header from "@/components/Header";
import Projetos from "@/components/Projetos";
import { ibmSerif } from "./fonts";
import Sobre from "@/components/Sobre";
import Footer from "@/components/Footer";
import Contato from "@/components/Contato";

export default function Home() {
	return (
		<>
			<Header />
			<main className="flex flex-col gap-12 items-start w-full">
				<section
					className="flex flex-col items-start justify-center gap-8 h-[95vh] w-full pad-default"
					id="inicio"
				>
					<h1
						className={`font-bold italic text-3xl md:text-5xl tracking-wide ${ibmSerif.className}`}
					>
						Olá, <br />
						Eu sou <span className="text-blue-900">Kayro França</span>. <br />
						Um <span className="text-blue-900">desenvolvedor web</span> focado
						em <span className="text-blue-900">frontend</span>.
					</h1>
					<h2 className="font-bold text-neutral-600 text-lg text-justify md:text-3xl md:max-w-5xl">
						Com a paixão pelo UX e front-end, estou sempre explorando soluções
						criativas e as melhores práticas para enfrentar desafios no mundo
						digital.
					</h2>
				</section>
				<Sobre />
				<Projetos />
				<Contato />
			</main>
			<Footer />
		</>
	);
}
