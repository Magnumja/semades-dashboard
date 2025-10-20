# 🌎 SEMADES Dashboard  

Portal interativo para **visualização de indicadores da SEMADES (Secretaria Municipal de Meio Ambiente e Desenvolvimento Sustentável)**, integrando painéis do **Observatório Econômico** em um ambiente **React + Vite** leve, moderno e responsivo.  

O objetivo é centralizar os relatórios do **Looker Studio** em um único site, facilitando o acesso a informações estratégicas da gestão municipal.  

---

## ⚙️ Tecnologias Utilizadas  
- ⚛️ **React 18 + Vite** — estrutura moderna para desenvolvimento rápido e modular  
- 🧭 **React Router DOM** — gerenciamento de rotas e navegação entre páginas  
- 🖥️ **JavaScript (ES6+)**, **HTML5**, **CSS3**  
- 📦 **Node.js + npm** — para instalação e execução do ambiente  

---

## 🧩 Estrutura do Projeto  

semades-dashboard/
├── public/
│   └── prefcg1.png       ← favicon
├── src/
│   ├── main.jsx          ← inicia o React
│   ├── App.jsx           ← estrutura principal
│   ├── Root.jsx          ← pode ser o layout base (opcional)
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── BIIndicadores.jsx
│   │   └── BIProjetos.jsx
│   └── styles/
├── index.html            ← ponto de entrada do site
├── package.json
└── vite.config.js



📁 **Resumo da estrutura:**  
- `index.html` → base do site e ponto de entrada do Vite  
- `main.jsx` → inicializa o React e injeta o app no DOM  
- `App.jsx` → estrutura principal da aplicação  
- `router.jsx` → define as rotas e páginas  
- `pages/` → páginas principais (Home, Indicadores, Projetos)  
- `components/` → componentes reutilizáveis (botões, cards, header, etc.)  
- `data/` → arquivos com links e dados dos painéis Looker Studio  
- `styles/` → arquivos CSS globais  

---

## 🚀 Como Executar o Projeto  
do seu cmd, rode no terminal do seu projeto

--npm install
e logo em seguida
--npm run dev


### 1️⃣ Clonar o repositório  
```bash
git clone https://github.com/<usuario>/semades-dashboard.git
cd semades-dashboard

