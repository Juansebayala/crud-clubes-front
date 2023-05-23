import axios from 'axios';

async function eliminarEquipo(URLServicio, tlaEquipo) {
  const respuesta = await axios.delete(
    `${URLServicio}/equipo/${tlaEquipo}/eliminar`
  );
  return respuesta.data;
}

export default eliminarEquipo;
