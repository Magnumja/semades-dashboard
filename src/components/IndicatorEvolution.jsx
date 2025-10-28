import React from 'react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer
} from 'recharts';
import "../styles/IndicatorEvolution.css";

const data = [
  { month: 'Jan', empresas: 500, empregos: 700, mudas: 2700, sustentabilidade: 3000 },
  { month: 'Fev', empresas: 520, empregos: 750, mudas: 2900, sustentabilidade: 3200 },
  { month: 'Mar', empresas: 540, empregos: 780, mudas: 3100, sustentabilidade: 3400 },
  { month: 'Abr', empresas: 530, empregos: 760, mudas: 2800, sustentabilidade: 3100 },
  { month: 'Mai', empresas: 550, empregos: 800, mudas: 2900, sustentabilidade: 3300 },
  { month: 'Jun', empresas: 580, empregos: 820, mudas: 3000, sustentabilidade: 3400 },
  { month: 'Jul', empresas: 570, empregos: 810, mudas: 2800, sustentabilidade: 3200 },
  { month: 'Ago', empresas: 560, empregos: 790, mudas: 2700, sustentabilidade: 3100 },
  { month: 'Set', empresas: 540, empregos: 770, mudas: 2700, sustentabilidade: 3000 }
];

export default function IndicatorEvolution() {
  return (
    <div className="evolution-section">
      <h2 className="title">
        <span className="icon">📈</span> Evolução Mensal dos Indicadores
      </h2>
      <p className="subtitle">Tendências ao longo de 2025</p>
      
      <div className="chart-container">
        <ResponsiveContainer width="100%" height={400}>
          <LineChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 20 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
            <XAxis dataKey="month" stroke="#666" />
            <YAxis stroke="#666" />
            <Tooltip />
            <Line 
              type="monotone" 
              dataKey="empresas" 
              stroke="#1e88e5" 
              dot={{ r: 4 }}
              strokeWidth={2}
            />
            <Line 
              type="monotone" 
              dataKey="empregos" 
              stroke="#42a5f5" 
              dot={{ r: 4 }}
              strokeWidth={2}
            />
            <Line 
              type="monotone" 
              dataKey="mudas" 
              stroke="#43a047" 
              dot={{ r: 4 }}
              strokeWidth={2}
            />
            <Line 
              type="monotone" 
              dataKey="sustentabilidade" 
              stroke="#66bb6a" 
              dot={{ r: 4 }}
              strokeWidth={2}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}