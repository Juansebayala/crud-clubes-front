import styled from '@emotion/styled';
import Navbar from './componentes/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import TablaEquipos from './componentes/TablaEquipos';
import VerEquipo from './componentes/VerEquipo';
import EditarEquipo from './componentes/EditarEquipo';
import EliminarEquipo from './componentes/EliminarEquipo';
import CrearEquipo from './componentes/CrearEquipo';
import EquipoCreado from './componentes/EquipoCreado';

const ContenedorApp = styled.div`
  font-size: 22px;
`;

function App() {
  return (
    <ContenedorApp>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<TablaEquipos />} />
          <Route path="/equipo/crear-equipo" element={<CrearEquipo />} />
          <Route
            path="/equipo/crear-equipo/creado"
            element={<EquipoCreado />}
          />
          <Route path="/equipo/:tlaEquipo/ver" element={<VerEquipo />} />
          <Route path="/equipo/:tlaEquipo/editar" element={<EditarEquipo />} />
          <Route
            path="/equipo/:tlaEquipo/eliminar"
            element={<EliminarEquipo />}
          />
        </Routes>
      </Router>
    </ContenedorApp>
  );
}

export default App;
