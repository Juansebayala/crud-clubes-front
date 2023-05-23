import { Link } from 'react-router-dom';

function Boton({ tlaEquipo, accion, estilo, children }) {
  const link = `/equipo/${tlaEquipo}/${accion}`;
  const estilos = `btn btn-${estilo}`;
  return (
    <Link to={link} className={estilos}>
      {children}
    </Link>
  );
}

export default Boton;
