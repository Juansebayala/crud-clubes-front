import useEquipos from './servicios/useEquipos';
import Boton from './Boton';
import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

const Cabecera = styled.tr`
  font-size: 24px;
`;
const EscudoEquipo = styled.img`
  width: 10%;
`;

const NombreEquipo = styled.span`
  margin-left: 1em;
`;

function TablaEquipos() {
  const equipos = useEquipos();
  return (
    <>
      <h1 className="text-center">Lista de equipos registrados</h1>
      {equipos && (
        <div className="text-center d-flex justify-content-center gap-3 align-items-center">
          <p>Hay {equipos.length} equipos</p>
          <Link className="btn btn-primary" to="/equipo/crear-equipo">
            Crear equipo
          </Link>
        </div>
      )}
      <table className="table table-bordered border-dark table-striped w-50 m-auto justify-content-center">
        <thead>
          <Cabecera>
            <th>Nombre equipo</th>
            <th>País</th>
            <th>Acción</th>
          </Cabecera>
        </thead>
        <tbody>
          {equipos?.map((equipo) => {
            return (
              <>
                <tr className="container">
                  <td className="col">
                    <div>
                      <EscudoEquipo src={equipo.crestUrl} alt="" />
                      <NombreEquipo>{equipo.name}</NombreEquipo>
                    </div>
                  </td>
                  <td className="col-2">{equipo.area.name}</td>
                  <td className="col-3">
                    <div className="d-flex justify-content-center gap-1">
                      <Boton
                        tlaEquipo={equipo.tla}
                        accion="ver"
                        estilo="primary"
                      >
                        Ver
                      </Boton>
                      <Boton
                        tlaEquipo={equipo.tla}
                        accion="editar"
                        estilo="secondary"
                      >
                        Editar
                      </Boton>
                      <Boton
                        tlaEquipo={equipo.tla}
                        accion="eliminar"
                        estilo="danger"
                      >
                        Eliminar
                      </Boton>
                    </div>
                  </td>
                </tr>
              </>
            );
          })}
        </tbody>
      </table>
    </>
  );
}

export default TablaEquipos;
