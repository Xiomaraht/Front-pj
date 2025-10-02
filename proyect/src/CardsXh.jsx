import { Link } from 'react-router-dom';
import '../styles/CardsXh.css';

export default function CardsXh({ mascota }) {
  return (
    <div className="cardXh_1">
      <div className="Img_Xh1" />
      <p className="nombre">{mascota.nombre}</p>
      <p className="detalle">{mascota.raza}</p>
      <p className="detalle">{mascota.edad}</p>
      <p className="detalle">{mascota.genero}</p>
      <div className="botones_Xh"> 
        <button className="bton_1">Editar</button>
        <Link to={'/historial'} state={{mascota : mascota}} ><button className="bton_2">Historial</button></Link>
      </div>
    </div>
  );
}
