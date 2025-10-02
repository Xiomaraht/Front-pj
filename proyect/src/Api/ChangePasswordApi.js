
const API_URL = "http://localhost:4000/api";


export async function actualizarPerfil(perfil) {
  const response = await fetch(`${API_URL}/usuarios/perfil`, {
    method: "PATCH",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(perfil),
  });

  if (!response.ok) throw new Error("Error al actualizar perfil");
  return response.json();
}


export async function cambiarContrasena({ actual, nueva }) {
  const response = await fetch(`${API_URL}/usuarios/cambiar-contrasena`, {
    method: "PATCH",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ contrasenaActual: actual, nuevaContrasena: nueva }),
  });

  if (!response.ok) throw new Error("Error al cambiar contraseña");
  return response.json();
}

