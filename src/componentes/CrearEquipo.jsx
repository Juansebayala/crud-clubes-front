import Input from './Input';

function CrearEquipo() {
  return (
    <div className="w-75 m-auto">
      <h1 className="text-center">Crear equipo</h1>
      <form
        id="crear-equipo"
        action="http://localhost:8080/equipo/crear-equipo"
        method="POST"
        encType="multipart/form-data"
      >
        <div className="w-50 m-auto">
          <div className="mb-3">
            <label htmlFor="nombre-input" className="form-label d-block">
              Nombre
            </label>
            <Input type="text" id="nombre-input" name="nombre" required />
          </div>
          <div className="mb-3">
            <label htmlFor="pais-input" className="form-label d-block">
              País
            </label>
            <Input type="text" id="pais-input" name="pais" required />
          </div>
          <div className="mb-3">
            <label htmlFor="fundacion-input" className="form-label d-block">
              Fundación
            </label>
            <Input type="text" id="fundacion-input" name="fundacion" required />
          </div>
          <div className="mb-3">
            <label htmlFor="estadio-input" className="form-label d-block">
              Estadio
            </label>
            <Input type="text" id="estadio-input" name="estadio" required />
          </div>
          <div className="mb-3">
            <label htmlFor="direccion-input" className="form-label d-block">
              Dirección
            </label>
            <Input type="text" id="direccion-input" name="direccion" required />
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
            value="Crear Equipo"
          />
        </div>
      </form>
    </div>
  );
}

export default CrearEquipo;
