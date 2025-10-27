import React from "react";
import "../styles/GraphicsSection.css";

export default function GraphicsSection() {
  return (
    <section className="graphics-container">
      <div className="graphics-card data-card">
        <h3 className="graphics-title">Desenvolvimento Econômico</h3>
        <p className="graphics-period">Janeiro - Setembro 2025</p>

        <div className="graphics-item">
          <div className="graphics-info">
            <span className="graphics-icon">🏢</span>
            <span className="graphics-label">Empresas Abertas</span>
          </div>
          <span className="graphics-value">4.000</span>
        </div>

        <div className="graphics-item">
          <div className="graphics-info">
            <span className="graphics-icon">👥</span>
            <span className="graphics-label">Empregos Formais</span>
          </div>
          <span className="graphics-value">7.000</span>
        </div>
      </div>

      <div className="graphics-card chart-card">
        <h3 className="graphics-title">Visualização Econômica</h3>
        <p className="graphics-subtitle">Comparativo de indicadores</p>

        <div className="chart">
          <div className="chart-bar">
            <div className="bar empresas"></div>
            <p>Empresas</p>
          </div>
          <div className="chart-bar">
            <div className="bar empregos"></div>
            <p>Empregos</p>
          </div>
        </div>
      </div>
    </section>
  );
}
