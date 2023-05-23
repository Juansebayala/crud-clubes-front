import { useParams } from 'react-router-dom';
import useEquipo from './servicios/useEquipo';
import styled from '@emotion/styled';
import Boton from './elementos/Boton';

const EscudoEquipo = styled.img`
  width: 25%;
  margin: 20px auto;
`;

const Titulo = styled.h1`
  margin-bottom: 20px;
  text-align: center;
`;

const ContenedorBotones = styled.div`
  margin-top: 1em;
  display: flex;
  justify-content: center;
  gap: 1rem;
`;

function VerEquipo() {
  const { tlaEquipo } = useParams();
  const equipo = useEquipo(tlaEquipo);
  return equipo ? (
    <div className="w-50 m-auto d-flex flex-column">
      <EscudoEquipo src={equipo.crestUrl} alt="" />
      <Titulo>{equipo.name}</Titulo>
      <table className="table table-bordered border-dark w-75 m-auto">
        <thead>
          <tr>
            <th>Información</th>
            <th>Valor</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Nombre</td>
            <td>{equipo.name}</td>
          </tr>
          <tr>
            <td>País</td>
            <td>{equipo.area.name}</td>
          </tr>
          <tr>
            <td>Fundación</td>
            <td>{equipo.founded}</td>
          </tr>
          <tr>
            <td>Estadio</td>
            <td>{equipo.venue}</td>
          </tr>
          <tr>
            <td>Dirección</td>
            <td>{equipo.address}</td>
          </tr>
        </tbody>
      </table>
      <ContenedorBotones>
        <Boton tlaEquipo={equipo.tla} accion="editar" estilo="primary">
          Editar
        </Boton>
        <Boton tlaEquipo={equipo.tla} accion="eliminar" estilo="danger">
          Eliminar
        </Boton>
      </ContenedorBotones>
    </div>
  ) : (
    <p className="text-center">Cargando...</p>
  );
}

export default VerEquipo;
