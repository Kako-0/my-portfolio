import EmailIcon from "@/assets/icons/EmailIcon";
import GithubIcon from "@/assets/icons/GithubIcon";
import LinkedinIcon from "@/assets/icons/Linkedin";

export default function Footer() {
	const year = new Date();

	return (
		<footer className="w-full bg-slate-800 text-neutral-200 grid items-stretch justify-center md:grid-cols-2 py-24 px-12 md:p-8 md:px-64">
			<div className="flex flex-col md:mx-auto">
				<p className="font-bold text-xl">Kayro França</p>
				<p className="max-w-lg text-sm">
					Com a paixão pelo UX e front-end, estou sempre explorando soluções
					criativas e as melhores práticas para enfrentar desafios no mundo
					digital.
				</p>
			</div>
			<div className="flex flex-col items-center">
				<p className="font-bold text-xl">Redes sociais</p>
				<ul className="flex items-center gap-8">
					<li>
						<a
							href="http://linkedin.com"
							target="_blank"
							rel="noopener noreferrer"
							className="btn-text text-neutral-200 hover:text-neutral-900 flex gap-4 items-end"
						>
							<LinkedinIcon />
							LinkedIn
						</a>
					</li>
					<li>
						<a
							href="http://github.com"
							target="_blank"
							rel="noopener noreferrer"
							className="btn-text text-neutral-200 hover:text-neutral-900 flex gap-4 items-end"
						>
							<GithubIcon />
							Github
						</a>
					</li>
					<li>
						<a
							href="mailto:kayro.dev@gmail.com"
							className="btn-text text-neutral-200 hover:text-neutral-900 flex gap-4 items-end"
						>
							<EmailIcon />
							Gmail
						</a>
					</li>
				</ul>
			</div>
			<p className="col-span-full text-center border-neutral-200 border-t-[1px] w-full py-8 text-xs md:mt-16">
				© Copyright {year.getFullYear()}. Feito por Kayro França
			</p>
		</footer>
	);
}
