// App.jsx
import { useState, useEffect } from "react";
import FormularioMetodoPago from "./Components/MetodoPago/FormPaymentMethod";
import {
  crearUnMetodoNuevo,
  obtenerMetodosPago,
  eliminarMetodoPago,
} from "./Api/PaymentMethodApi";


function App() {
  const [metodos, setMetodos] = useState([]);
  const [cargando, setCargando] = useState(true);

  // cargar métodos al inicio
  useEffect(() => {
    (async () => {
      try {
        const lista = await obtenerMetodosPago();
        setMetodos(lista);
      } catch (error) {
        console.error("Error cargando métodos:", error);
        // ⚠️ Datos de prueba mientras no hay backend
        setMetodos([
          { id: 1, marca: "VISA", nombre: "Juan", apellido: "Pérez", ultimos4: "1234" },
          { id: 2, marca: "MasterCard", nombre: "Ana", apellido: "Gómez", ultimos4: "5678" },
        ]);
      } finally {
        setCargando(false);
      }
    })();
  }, []);

  // crear
  const handleCrear = async (nuevoMetodo) => {
    try {
      const creado = await crearUnMetodoNuevo(nuevoMetodo);
      setMetodos([...metodos, creado]);
    } catch (error) {
      console.error("Error creando método:", error);
      // simular creación local
      const fakeId = Date.now();
      setMetodos([
        ...metodos,
        { ...nuevoMetodo, id: fakeId, ultimos4: "9999", marca: "VISA" },
      ]);
    }
  };

  // eliminar
  const handleEliminar = async (id) => {
    try {
      await eliminarMetodoPago(id);
      setMetodos(metodos.filter((m) => m.id !== id));
    } catch (error) {
      console.error("Error eliminando método:", error);
      // eliminar localmente de todas formas
      setMetodos(metodos.filter((m) => m.id !== id));
    }
  };

  return (
    <div className="metodos-container">
      <div className="metodos-header">
        <h2>Métodos de Pago</h2>
      </div>

      {/* formulario */}
      <FormularioMetodoPago onSubmit={handleCrear} />

      {/* lista */}
      {cargando ? (
        <p>Cargando...</p>
      ) : metodos.length === 0 ? (
        <p>No hay métodos guardados.</p>
      ) : (
        <div className="tarjetas-guardadas">
          {metodos.map((m) => (
            <div className="tarjeta" key={m.id}>
              <div className="chip"></div>
              <div>
                <div className="numero">**** **** **** {m.ultimos4}</div>
                <div className="nombre">
                  {m.nombre} {m.apellido}
                </div>
              </div>
              <button
                className="btn-eliminar"
                onClick={() => handleEliminar(m.id)}
              >
                Eliminar
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default App;


