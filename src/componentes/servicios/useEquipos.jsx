import { useEffect, useState } from 'react';

function useEquipos() {
  const [datos, setDatos] = useState(null);

  useEffect(() => {
    const ignorar = false;

    const buscarEquipos = async () => {
      fetch('http://localhost:8080/equipos')
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
