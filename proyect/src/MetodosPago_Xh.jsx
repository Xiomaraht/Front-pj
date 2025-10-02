import React from 'react';
import '../styles/MetodosPago_Xh.css';

export default function MetodosPago_Xh() {
  return (
    <div className="metodos-container">
      <div className="metodos-header">
        <h2>Métodos de Pago</h2>
        <button>Agregar</button>
      </div>
      <div className="tarjetas-guardadas">
        <div className="tarjeta">
          <div className="chip" />
          <div className="numero">**** **** **** 4322</div>
          <div className="nombre">Manuel Quiazua</div>
        </div>
        <div className="tarjeta">
          <div className="chip" />
          <div className="numero">**** **** **** 7601</div>
          <div className="nombre">Usuario 01</div>
        </div>
      </div>
    </div>
  );
}
