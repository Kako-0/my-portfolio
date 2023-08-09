import React from "react";

export default function Footer() {
  const year = new Date();

  return (
    <footer>
      <div>
        <p>Kayro França</p>
        <p>
          Com a paixão pelo UX e front-end, estou sempre explorando soluções
          criativas e as melhores práticas para enfrentar desafios no mundo
          digital.
        </p>
      </div>
      <div>
        <p>Redes sociais</p>
        <ul>
          <li>
            <a
              href="http://linkeind.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Linkind
            </a>
          </li>
          <li>
            <a
              href="http://github.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Github
            </a>
          </li>
          <li>
            <a href="mailto:kayro.dev@gmail.com">Gmail</a>
          </li>
        </ul>
      </div>
      <p>© Copyright {year.getFullYear()}. Feito por Kayro França</p>
    </footer>
  );
}
