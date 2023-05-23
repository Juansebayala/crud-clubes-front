import styled from '@emotion/styled';
import Navbar from './componentes/elementos/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import TablaEquipos from './componentes/TablaEquipos';
import VerEquipo from './componentes/VerEquipo';
import EditarEquipo from './componentes/EditarEquipo';
import EliminarEquipo from './componentes/EliminarEquipo';
import CrearEquipo from './componentes/CrearEquipo';
import { UrlProvider } from './componentes/contexto/UrlContext';

const ContenedorApp = styled.div`
  font-size: 22px;
  padding-bottom: 20px;
`;

function App() {
  return (
    <UrlProvider>
      <ContenedorApp>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<TablaEquipos />} />
            <Route path="/equipo/crear-equipo" element={<CrearEquipo />} />
            <Route path="/equipo/:tlaEquipo/ver" element={<VerEquipo />} />
            <Route
              path="/equipo/:tlaEquipo/editar"
              element={<EditarEquipo />}
            />
            <Route
              path="/equipo/:tlaEquipo/eliminar"
              element={<EliminarEquipo />}
            />
          </Routes>
        </Router>
      </ContenedorApp>
    </UrlProvider>
  );
}

export default App;
