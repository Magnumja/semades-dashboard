import React from "react";
import "../styles/GraphicsSection.css";

export default function GraphicsSection() {
  return (
    <section className="graphics-section">
      <div className="graphics-wrapper">
        
        <div className="graphics-card economia-card">
          <h3 className="graphics-title">Desenvolvimento Econômico</h3>
          <p className="graphics-period">Janeiro - Setembro 2025</p>

          <div className="graphics-item">
            <div className="graphics-item-info">
              <span className="graphics-icon">🏢</span>
              <span className="graphics-label">Empresas Abertas</span>
            </div>
            <span className="graphics-value">4.000</span>
          </div>

          <div className="graphics-item">
            <div className="graphics-item-info">
              <span className="graphics-icon">👥</span>
              <span className="graphics-label">Empregos Formais</span>
            </div>
            <span className="graphics-value">7.000</span>
          </div>
        </div>

        
        <div className="graphics-card chart-card">
          <h3 className="graphics-title-sec">Visualização Econômica</h3>
          <p className="graphics-subtitle">Comparativo de indicadores</p>

          <div className="graphics-chart">
            <div className="bar">
              <div className="bar-fill empresas"></div>
              <p>Empresas</p>
            </div>
            <div className="bar">
              <div className="bar-fill empregos"></div>
              <p>Empregos</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
