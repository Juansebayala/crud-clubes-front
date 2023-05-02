import { useParams } from 'react-router-dom';
import useEquipo from './servicios/useEquipo';
import Boton from './Boton';

function EliminarEquipo() {
  const { tlaEquipo } = useParams();
  const equipo = useEquipo(tlaEquipo);
  return equipo ? (
    <form action="/equipo/{{equipo.id}}/eliminar" method="POST">
      <p className="text-center">{`¿Estás seguro que quieres eliminar el equipo "${equipo.name}"?`}</p>
      <div className="d-flex justify-content-center">
        <Boton tlaEquipo={equipo.tla} accion="eliminar" estilo="danger">
          Si, eliminar equipo
        </Boton>
      </div>
    </form>
  ) : (
    <p className="text-center">Cargando...</p>
  );
}

export default EliminarEquipo;
