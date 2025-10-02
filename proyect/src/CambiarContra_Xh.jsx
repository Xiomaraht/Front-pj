import React from 'react';
import '../styles/CambiarContra_Xh.css'

export default function CambiarContra({ volver }) {
  return (
    <div className="cambiar-contra">
      <h3>Cambiar Contraseña</h3>
      <input type="password" placeholder="Contraseña Actual" />
      <input type="password" placeholder="Nueva Contraseña" />
      <input type="password" placeholder="Confirmar Nueva Contraseña" />
      <p className="nota-seguridad">
        Para mayor seguridad, se recomienda usar una contraseña única con símbolos y números. (# , . -)
      </p>
      <div className="acciones">
        <button className='btn-cancelar' onClick={volver}>Cancelar</button>
        <button className="btn-guardar">Guardar Cambios</button>
      </div>
    </div>
  );

}
