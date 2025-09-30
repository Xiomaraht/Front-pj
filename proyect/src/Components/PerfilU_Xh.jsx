import React from 'react';
import '../styles/PerfilU_Xh.css';

export default function PerfilU({ seccionActiva, setSeccionActiva }) {
  const items = [
    { key: 'mascotas', label: 'Mis Mascotas' },
    { key: 'historialPe', label: 'Historial de Pedidos' },
    { key: 'metodos', label: 'Métodos de Pago' },
    { key: 'config', label: 'Configuración' }
  ];

  return (
    <div className='Perf_1Xh'>
      <div className='ImgXh_1'></div>
      <h4 className='NomXh_1'>Manuel Quiazua</h4>
      <p className='CorreoXh_1'>cliente1@gmail.com</p>
      <ul className='Menu_1'>
        {items.map(item => (
          <li
            key={item.key}
            className={seccionActiva === item.key ? 'active' : ''}
            onClick={() => setSeccionActiva(item.key)}
          >
            {item.label}
          </li>
        ))}
        <li className='cerrar-sesion'>Cerrar Sesión</li>
      </ul>
    </div>
  );
}



