import '../styles/MascotasXh.css'
import CardsXh from './CardsXh'
import MascotasMq from '../Data/MascotasMq.json'


export default function MascotasXh() {
    return (
    <div className='Mascota_1'>
        <div className='Mascota_2'>
            <h2>Mis Mascotas</h2>
            <button className='Bton_1'>
                Agregar Mascota
            </button>
        </div>
        <div className='List_1'>
            {MascotasMq.map(mascota => (
                <CardsXh key ={mascota.id}
                mascota ={mascota} />
            ))}
        </div>
    </div>
  );
}