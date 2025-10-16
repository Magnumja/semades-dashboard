import React from "react";

const cards = [
  {
    titulo: "Indicadores Econômicos",
    descricao:
      "Acompanhe PIB, geração de empregos, renda média, movimentação empresarial e outros indicadores-chave do município.",
    link: "https://lookerstudio.google.com/reporting/indicadores-economicos"
  },
  {
    titulo: "Sustentabilidade Ambiental",
    descricao:
      "Dados de saneamento, qualidade hídrica, cobertura vegetal e iniciativas de preservação conduzidas pela SEMADES.",
    link: "https://lookerstudio.google.com/reporting/sustentabilidade-ambiental"
  },
  {
    titulo: "Projetos Prioritários",
    descricao:
      "Mapeamento dos projetos estruturantes, status de execução, investimento e parceiros estratégicos.",
    link: "https://lookerstudio.google.com/reporting/projetos-prioritarios"
  },
  {
    titulo: "Inovação e Tecnologia",
    descricao:
      "Visão geral de startups, hubs de inovação e programas de transformação digital apoiados pela secretaria.",
    link: "https://lookerstudio.google.com/reporting/inovacao-tecnologia"
  }
];

export default function Root() {
  return (
    <>
      <header className="site-header single-page">
        <div>
          <p className="site-tagline">Observatório Econômico • SEMADES</p>
          <h1 className="site-title">Portal de Dashboards</h1>
          <p className="site-description">
            Escolha um painel para abrir a visualização completa no Looker
            Studio. Os cards abaixo reúnem os principais eixos de atuação da
            secretaria.
          </p>
        </div>
      </header>
      <main className="cards-wrapper">
        {cards.map((card) => (
          <article className="dashboard-card" key={card.titulo}>
            <h2>{card.titulo}</h2>
            <p>{card.descricao}</p>
            <a className="dashboard-link" href={card.link} target="_blank" rel="noopener noreferrer">
              Abrir painel
            </a>
          </article>
        ))}
      </main>
      <footer>
        <small>
          Secretaria Municipal de Desenvolvimento Econômico e Sustentável —
          Acesso público aos indicadores oficiais.
        </small>
      </footer>
    </>
  );
}
