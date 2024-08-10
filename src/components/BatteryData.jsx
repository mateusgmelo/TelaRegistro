import React from 'react';
import './BatteryData.css';

const BatteryData = () => {
  return (
    <div className="battery-data-container">
      <header className="header">
        <img src="public/monstack2.png" alt="Monstack Logo" className="logo" />
      </header>
      <main className="content">
        <h1></h1>
        <h2>DADOS ATUAIS DAS BATERIAS</h2>
        <button className="update-button">Atualizar Dados</button>
        <div className="data-info">
          <div className="data-item">Data:</div>
          <div className="data-item">Dia:</div>
          <div className="data-item">Hora:</div>
        </div>
        <div className="data-details">
          <div className="data-row">
            <div className="data-cell">Temperatura B1 (°C)</div>
            <div className="data-cell">Temperatura B2 (°C)</div>
            <div className="data-cell">Temperatura B3 (°C)</div>
          </div>
          <div className="data-row">
            <div className="data-cell">Tensão B1 (V)</div>
            <div className="data-cell">Tensão B2 (V)</div>
            <div className="data-cell">Tensão B3 (V)</div>
          </div>
        </div>
      </main>
      <footer className="footer">
        <p>contatos@monstack.tech</p>
        <p>BR 232 | Km 214 | Loteamento Redenção | Prado, Pesqueira-PE, 55200-000 | Brasil</p>
      </footer>
    </div>
  );
};

export default BatteryData;
