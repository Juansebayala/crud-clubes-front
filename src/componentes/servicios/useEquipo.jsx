import { useEffect, useState } from 'react';

function useEquipo(tlaEquipo) {
  const [datos, setDatos] = useState(null);

  useEffect(() => {
    const ignorar = false;

    const buscarEquipo = async () => {
      fetch(`http://localhost:8080/equipo/${tlaEquipo}`)
        .then((res) => {
          return res.json();
        })
        .then((res) => setDatos(res));
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
