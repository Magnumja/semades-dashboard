import React from "react";
import "./styles/Root.css";

const indicadores = [
  {
    icone: "🏢",
    cor: "economia",
    titulo: "EMPRESAS",
    fonte: "PLANURB, 2025",
    subtitulo: "Crescimento e número de estabelecimentos ativos",
    posicao: "1º",
  },
  {
    icone: "💼",
    cor: "economia",
    titulo: "EMPREGOS",
    fonte: "CAGED, 2025",
    subtitulo: "Geração de empregos formais e informais",
    posicao: "1º",
  },
  {
    icone: "🐄",
    cor: "sustentabilidade",
    titulo: "AGRONEGÓCIO: PECUÁRIA",
    fonte: "IBGE, 2024",
    subtitulo: "Produção e movimentação de rebanhos",
    posicao: "1º",
  },
  {
    icone: "🌾",
    cor: "sustentabilidade",
    titulo: "AGRONEGÓCIO: AGRICULTURA",
    fonte: "IBGE, 2024",
    subtitulo: "Produção e área plantada das principais culturas",
    posicao: "1º",
  },
  {
    icone: "🚢",
    cor: "inovacao",
    titulo: "Comércio Exterior Exportação",
    fonte: "COMEXTAT, 2025",
    subtitulo: "Principais produtos exportados pelo município",
    posicao: "1º",
  },
  {
    icone: "📦",
    cor: "inovacao",
    titulo: "Comércio Exterior Importação",
    fonte: "COMEXTAT, 2025",
    subtitulo: "Principais produtos importados pelo município",
    posicao: "1º",
  },
];

export default function Root() {
  return (
    <div className="dashboard-container">
      <header className="dashboard-header">
        <h1 className="titulo-degrade">Dashboard de Indicadores</h1>
        <p>Desenvolvimento Urbano e Sustentabilidade • Janeiro - Setembro 2025</p>
        <div className="legenda">
          <span className="tag economia">Economia</span>
          <span className="tag sustentabilidade">Sustentabilidade</span>
          <span className="tag inovacao">Inovação</span>
        </div>
      </header>

      <main className="card-grid">
        {indicadores.map((item, index) => (
          <div key={index} className={`card ${item.cor}`}>
            <div className="icone">{item.icone}</div>
            <div className="posicao">{item.posicao}</div>
            <h2>{item.titulo}</h2>
            <p className="fonte">{item.fonte}</p>
            <p className="subtitulo">{item.subtitulo}</p>
          </div>
        ))}
      </main>
    </div>
  );
}
