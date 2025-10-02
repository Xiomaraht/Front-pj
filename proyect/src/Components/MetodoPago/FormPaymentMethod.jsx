import { useState } from "react";

function FormPaymentMethod({ onSubmit, onCancel }) {
  const [formData, setFormData] = useState({
    marca: "",
    nombre: "",
    apellido: "",
    ultimos4: ""
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
    setFormData({ marca: "", nombre: "", apellido: "", ultimos4: "" });
  };

  return (
    <div className="form-container">
      <h3>Agregar Método de Pago</h3>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="marca"
          placeholder="Visa, Mastercard"
          value={formData.marca}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="nombre"
          placeholder="Nombre"
          value={formData.nombre}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="apellido"
          placeholder="Apellido"
          value={formData.apellido}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="ultimos4"
          placeholder="Últimos 4 dígitos"
          value={formData.ultimos4}
          onChange={handleChange}
          required
          maxLength={4}
        />

        <div className="btns">
          <button type="submit">Guardar</button>
          <button type="button" onClick={onCancel}>Cancelar</button>
        </div>
      </form>
    </div>
  );
}

export default FormPaymentMethod;

    


