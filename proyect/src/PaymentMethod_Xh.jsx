import { useState, useEffect } from "react";
import FormPaymentMethod from "../Xiomara/MetodoPago/FormPaymentMethod";
import {
  obtenerMetodosPago,
  crearUnMetodoNuevo,
  eliminarMetodoPago,
} from "./api/PaymentMethodApi";
import "../styles/MetodosPago_Xh.css";

export default function PaymentMethod_Xh() {
  const [metodos, setMetodos] = useState([]);
  const [mostrarForm, setMostrarForm] = useState(false);

  useEffect(() => {
    (async () => {
      const lista = await obtenerMetodosPago();
      setMetodos(lista);
    })();
  }, []);

  const handleCrear = async (nuevo) => {
    const creado = await crearUnMetodoNuevo(nuevo);
    setMetodos([...metodos, creado]);
    setMostrarForm(false);
  };

  const handleEliminar = async (id) => {
    await eliminarMetodoPago(id);
    setMetodos(metodos.filter((m) => m.id !== id));
  };

  return (
    <div className="metodos-container">
      <div className="metodos-header">
        <h2>Métodos de Pago</h2>
        <button onClick={() => setMostrarForm(!mostrarForm)}>
          {mostrarForm ? "Cancelar" : "Agregar"}
        </button>
      </div>

      {mostrarForm && <FormPaymentMethod onSave={handleCrear} />}

      <div className="tarjetas-guardadas">
        {metodos.length === 0 && <p>No hay métodos guardados.</p>}
        {metodos.map((m) => (
          <div key={m.id} className="tarjeta">
            <div className="chip" />
            <div className="numero">**** **** **** {m.numero.slice(-4)}</div>
            <div className="nombre">
              {m.nombre} {m.apellido}
            </div>
            <div className="marca">{m.marca}</div>
            <button
              className="btn-eliminar"
              onClick={() => handleEliminar(m.id)}
            >
              Eliminar
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

