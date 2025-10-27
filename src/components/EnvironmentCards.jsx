import React from "react";
import "../styles/EnvironmentCards.css";

const forestData = [
  { icon: "\u{1F331}", label: "Mudas Doadas", value: 25261 },
  { icon: "\u{1F33F}", label: "Mudas Plantadas", value: 5577 },
];

const plantingRate = 22.1;
const sectionTitle = "\u{1F333} Sustentabilidade e Meio Ambiente";
const sectionPeriod = "Janeiro - Setembro 2025";

export default function EnvironmentCards() {
  return (
    <section className="env-container">
      <div className="env-header">
        <h2 className="env-title">{sectionTitle}</h2>
        <p>{sectionPeriod}</p>
      </div>

      <div className="env-card">
        {forestData.map((item) => (
          <div key={item.label} className="card-row">
            <div className="left">
              <span className="item-icon" aria-hidden="true">
                {item.icon}
              </span>
              <span>{item.label}</span>
            </div>
            <span className="value">{item.value.toLocaleString("pt-BR")}</span>
          </div>
        ))}

        <div className="card-footer">
          <span className="taxa-titulo">Taxa de plantio:</span>{" "}
          <span className="taxa-texto">
            {plantingRate}% das mudas doadas foram plantadas
          </span>
        </div>
      </div>
    </section>
  );
}
