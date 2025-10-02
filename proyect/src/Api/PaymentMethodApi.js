

const STORAGE_KEY = "metodosPago";


export async function obtenerMetodosPago() {
  const data = localStorage.getItem(STORAGE_KEY);
  return data ? JSON.parse(data) : [];
}


export async function crearUnMetodoNuevo(nuevo) {
  const lista = await obtenerMetodosPago();
  const creado = {
    id: Date.now(), 
    ...nuevo,
  };
  const actualizada = [...lista, creado];
  localStorage.setItem(STORAGE_KEY, JSON.stringify(actualizada));
  return creado;
}


export async function eliminarMetodoPago(id) {
  const lista = await obtenerMetodosPago();
  const actualizada = lista.filter((m) => m.id !== id);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(actualizada));
  return true;
}
