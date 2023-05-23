import axios from 'axios';

async function crearEquipo(URLServicio, formData) {
  const respuesta = await axios.post(
    `${URLServicio}/equipo/crear-equipo`,
    formData,
    {
      headers: { 'Content-Type': 'multipart/form-data' },
    }
  );
  return respuesta.data;
}

export default crearEquipo;
