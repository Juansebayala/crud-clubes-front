import { useContext, useEffect, useState } from 'react';
import { UrlContext } from '../contexto/UrlContext';

function useEquipo(tlaEquipo) {
  const [datos, setDatos] = useState(null);
  const { URLServicio } = useContext(UrlContext);

  useEffect(() => {
    const ignorar = false;

    const buscarEquipo = () => {
      fetch(`${URLServicio}/equipo/${tlaEquipo}`)
        .then((res) => {
          return res.json();
        })
        .then((equipo) => {
          setDatos(equipo);
        });
    };

    if (!ignorar) {
      buscarEquipo();
    }

    return () => {
      ignorar;
    };
  }, [tlaEquipo]);

  return datos;
}

export default useEquipo;
