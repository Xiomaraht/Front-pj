import React, { useState } from 'react';
import CambiarContra_Xh from './CambiarContra_Xh';
import '../styles/Configuracion_Xh.css';

export default function Configuracion_Xh() {
  const [mostrarCambio, setMostrarCambio] = useState(false);
  const [foto, setFoto] = useState(null);

  const handleImagen = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFoto(URL.createObjectURL(file));
    }
  };

  return (
    <div className="configuracion-container">
      {!mostrarCambio ? (
        <div className="config-form">
          <h2 className="config-title">Información Personal</h2>

          {/* 📷 Imagen de perfil */}
          <div className="perfil-foto-section">
            <div className="perfil-foto-wrapper">
              {foto ? (
                <img src={foto} alt="Perfil" className="perfil-foto" />
              ) : (
                <span className="sin-foto">+</span>
              )}
              <input
                type="file"
                accept="image/*"
                onChange={handleImagen}
                className="input-foto"
              />
            </div>
            <p className="perfil-text">Haz clic para cambiar tu foto de perfil</p>
          </div>

          {/* Campos */}
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="nombre">Nombre</label>
              <input id="nombre" type="text" placeholder="Nombre" />
            </div>
            <div className="form-group">
              <label htmlFor="apellido">Apellido</label>
              <input id="apellido" type="text" placeholder="Apellido" />
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label htmlFor="correo">Correo Electrónico</label>
              <input id="correo" type="email" placeholder="correo@ejemplo.com" />
            </div>
            <div className="form-group">
              <label htmlFor="telefono">Teléfono</label>
              <input id="telefono" type="text" placeholder="Número de teléfono" />
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label htmlFor="fecha">Fecha de Nacimiento</label>
              <input id="fecha" type="date" />
            </div>
            <div className="form-group">
              <label htmlFor="direccion">Dirección</label>
              <input id="direccion" type="text" placeholder="Dirección" />
            </div>
          </div>

          {/* Botones */}
          <div className="btn-actions">
            <button 
              className="btn-cambiar" 
              onClick={() => setMostrarCambio(true)}
            >
              Cambiar Contraseña
            </button>
            <button className="btn-guardar">
              Guardar Cambios
            </button>
          </div>
        </div>
      ) : (
        <CambiarContra_Xh volver={() => setMostrarCambio(false)} />
      )}
    </div>
  );
}

