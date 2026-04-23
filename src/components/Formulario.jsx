// Componente de formulario con funcionalidad básica
import { useState } from "react";

const Formulario = () => {
  const [datos, setDatos] = useState({
    nombre: "",
    correo: "",
    nivel: "Principiante",
    mensaje: ""
  });

  const handleChange = (e) => {
    setDatos({
      ...datos,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem("reserva", JSON.stringify(datos));
    console.log("Datos guardados:", datos);
  };

  return (
    <form onSubmit={handleSubmit} className="form-box">
      <label htmlFor="nombre">Nombre completo</label>
      <input
        type="text"
        name="nombre"
        placeholder="Tu nombre completo"
        onChange={handleChange}
      />

<label htmlFor="correo">Correo electrónico</label>
      <input
        type="email"
        name="correo"
        placeholder="Correo"
        onChange={handleChange}
      />

<label htmlFor="nivel">Nivel de experiencia</label>
        <select name="nivel" onChange={handleChange}>
        <option>Principiante (Nunca he tenido un Bonsái)</option>
        <option>Intermedio (tengo algunos árboles)</option>
        <option>Avanzado (Busco perfecionar técnicas)</option>
      </select>

<label htmlFor="mensaje">Mensaje (Opcional)</label>
      <textarea
        name="mensaje"
        placeholder="Mensaje"
        onChange={handleChange} />

      <button type="submit">Enviar Solicitud</button>

    </form>
  );
};

export default Formulario;
