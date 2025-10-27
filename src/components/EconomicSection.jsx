import React from "react";
import "../styles/EconomicSection.css";

export default function EconomicSection() {
  return (
    <section className="economic-section">
      <div className="economic-grid">

        {/* === CARD DE DADOS === */}
        <div className="economic-card info-card">
          <h3 className="economic-title">Desenvolvimento Econômico</h3>
          <p className="economic-period">Acumulado: Ago/2024 - Jul/2025</p>

          <div className="economic-item">
            <div className="economic-info">
              <span className="economic-icon">🏢</span>
              <span className="economic-label">Empresas Abertas</span>
            </div>
            <span className="economic-value">4.000</span>
          </div>

          <div className="economic-item">
            <div className="economic-info">
              <span className="economic-icon">👥</span>
              <span className="economic-label">Empregos Formais (Saldo)</span>
            </div>
            <span className="economic-value">16.689</span>
          </div>

          <div className="economic-item">
            <div className="economic-info">
              <span className="economic-icon">📈</span>
              <span className="economic-label">Crescimento Percentual</span>
            </div>
            <span className="economic-value">+2,45%</span>
          </div>

          <div className="economic-item">
            <div className="economic-info">
              <span className="economic-icon">🏆</span>
              <span className="economic-label">Posição Nacional</span>
            </div>
            <span className="economic-value">20º (Saldo) | 26º (Crescimento)</span>
          </div>
        </div>

        {/* === CARD DO GRÁFICO === */}
        <div className="economic-card chart-card">
          <div className="chart-header">
            <h3 className="economic-title">Visualização Econômica</h3>
            <p className="economic-subtitle">Comparativo de Indicadores — MS</p>
          </div>

          <div className="chart-wrapper">
            <div className="chart-bar">
              <div className="bar empresas" style={{ height: "45%" }}></div>
              <p>Empresas</p>
            </div>
            <div className="chart-bar">
              <div className="bar empregos" style={{ height: "80%" }}></div>
              <p>Empregos</p>
            </div>
          </div>

          <div className="chart-footer">
            <p className="economic-source">
              Fonte: <a href="https://www.funtrab.ms.gov.br" target="_blank" rel="noopener noreferrer">FUNTRAB / CAGED</a> — Jul/2025
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
