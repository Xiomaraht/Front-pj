import React, { useState } from "react";
import "../../styles/PaymentMethod_Xh.css";

export default function FormPaymentMethod({ onSave }) {
  const [formData, setFormData] = useState({
    nombre: "",
    apellido: "",
    numero: "",
    marca: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (onSave) {
      onSave(formData);
    }
    setFormData({ nombre: "", apellido: "", numero: "", marca: "" }); // limpiar
  };

  return (
    <form className="form-payment" onSubmit={handleSubmit}>
      <h2>Agregar Método de Pago</h2>

      <label>Nombre</label>
      <input
        type="text"
        name="nombre"
        value={formData.nombre}
        onChange={handleChange}
        required
      />

      <label>Apellido</label>
      <input
        type="text"
        name="apellido"
        value={formData.apellido}
        onChange={handleChange}
        required
      />

      <label>Número de tarjeta</label>
      <input
        type="text"
        name="numero"
        value={formData.numero}
        onChange={handleChange}
        maxLength={16}
        required
      />

      <label>Marca</label>
      <select
        name="marca"
        value={formData.marca}
        onChange={handleChange}
        required
      >
        <option value="">Selecciona una marca</option>
        <option value="Visa">Visa</option>
        <option value="Mastercard">Mastercard</option>
        <option value="American Express">American Express</option>
        <option value="Diners Club">Diners Club</option>
      </select>

      <button type="submit">Guardar</button>
    </form>
  );
}


