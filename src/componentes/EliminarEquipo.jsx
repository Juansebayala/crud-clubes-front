import { useParams } from 'react-router-dom';
import useEquipo from './servicios/useEquipo';
import { useContext } from 'react';
import { UrlContext } from './contexto/UrlContext';
import eliminarEquipo from './servicios/eliminarEquipo';
import { alertaEquipoEliminado } from './elementos/alerta';

function EliminarEquipo() {
  const { tlaEquipo } = useParams();
  const { URLServicio } = useContext(UrlContext);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const tlaEquipo = event.target[0].dataset.tla;
    const confirmacionEliminado = await eliminarEquipo(URLServicio, tlaEquipo);
    confirmacionEliminado.exito && alertaEquipoEliminado();
  };

  const equipo = useEquipo(tlaEquipo);
  return equipo ? (
    <form onSubmit={handleSubmit}>
      <p className="text-center">{`¿Estás seguro que quieres eliminar el equipo "${equipo.name}"?`}</p>
      <div className="d-flex justify-content-center">
        <input
          type="submit"
          className="btn btn-danger"
          value="Si, eliminar equipo"
          data-tla={tlaEquipo}
        />
      </div>
    </form>
  ) : (
    <p className="text-center">Cargando...</p>
  );
}

export default EliminarEquipo;
