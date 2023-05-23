import axios from 'axios';

async function editarEquipo(URLServicio, tlaEquipo, formData) {
  const respuesta = await axios.put(
    `${URLServicio}/equipo/${tlaEquipo}/editar`,
    formData,
    {
      headers: { 'Content-Type': 'multipart/form-data' },
    }
  );
  return respuesta.data;
}

export default editarEquipo;
