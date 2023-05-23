import { useParams } from 'react-router-dom';
import useEquipo from './servicios/useEquipo';
import Input from './elementos/Input';
import { useContext } from 'react';
import { UrlContext } from './contexto/UrlContext';
import {
  alertaCrearEditarEquipo,
  alertaEquipoEditado,
} from './elementos/alerta';
import editarEquipo from './servicios/editarEquipo';

function EditarEquipo() {
  const { URLServicio } = useContext(UrlContext);
  const { tlaEquipo } = useParams();

  const handleSubmit = async (event) => {
    event.preventDefault();
    const confirmacion = await alertaCrearEditarEquipo();
    if (confirmacion.isConfirmed) {
      const datos = event.target;
      const formData = new FormData(datos);
      const confirmacionEditado = await editarEquipo(
        URLServicio,
        tlaEquipo,
        formData
      );
      confirmacionEditado.exito && alertaEquipoEditado();
    }
  };

  const equipo = useEquipo(tlaEquipo);
  return (
    <div className="w-75 m-auto">
      <h1 className="text-center">Editar equipo</h1>
      {equipo ? (
        <form id="editar-equipo" onSubmit={handleSubmit}>
          <div className="w-50 m-auto">
            <div className="mb-3">
              <label htmlFor="nombre-input" className="form-label d-block">
                Nombre
              </label>
              <Input
                type="text"
                id="nombre-input"
                name="nombre"
                valueInicial={equipo.name}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="pais-input" className="form-label d-block">
                País
              </label>
              <Input
                type="text"
                id="pais-input"
                name="pais"
                valueInicial={equipo.area.name}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="fundacion-input" className="form-label d-block">
                Fundación
              </label>
              <Input
                type="text"
                id="fundacion-input"
                name="fundacion"
                valueInicial={equipo.founded}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="estadio-input" className="form-label d-block">
                Estadio
              </label>
              <Input
                type="text"
                id="estadio-input"
                name="estadio"
                valueInicial={equipo.venue}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="direccion-input" className="form-label d-block">
                Dirección
              </label>
              <Input
                type="text"
                id="direccion-input"
                name="direccion"
                valueInicial={equipo.address}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="input-escudo-equipo" className="form-label">
                Imagen escudo equipo
              </label>
              <Input
                type="file"
                id="input-escudo-equipo"
                name="imagen"
                required
              />
            </div>
          </div>
          <div className="d-flex justify-content-center">
            <input
              type="submit"
              className="btn btn-primary"
              value="Editar Equipo"
            />
          </div>
        </form>
      ) : (
        <p className="text-center">Cargando...</p>
      )}
    </div>
  );
}

export default EditarEquipo;
