import { useContext, useEffect, useState } from 'react';
import { UrlContext } from '../contexto/UrlContext';

function useEquipos() {
  const [datos, setDatos] = useState(null);
  const { URLServicio } = useContext(UrlContext);

  useEffect(() => {
    const ignorar = false;

    const buscarEquipos = () => {
      fetch(`${URLServicio}/equipos`)
        .then((res) => {
          return res.json();
        })
        .then((res) => setDatos(res));
    };

    if (!ignorar) {
      buscarEquipos();
    }

    return () => {
      ignorar;
    };
  }, []);

  return datos;
}

export default useEquipos;
