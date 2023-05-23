import Swal from 'sweetalert2';

export const alertaCrearEditarEquipo = async () => {
  return Swal.fire({
    title: '¿Los datos escritos son correctos?',
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    cancelButtonText: 'Cancelar',
    confirmButtonText: 'Sí, son correctos',
  }).then((resultado) => resultado);
};

export const alertaEquipoCreado = async () => {
  Swal.fire('Equipo creado', 'Haz creado con éxito un equipo', 'success');
};

export const alertaEquipoEditado = async () => {
  Swal.fire('Equipo editado', 'Haz editado con éxito un equipo', 'success');
};

export const alertaEquipoEliminado = async () => {
  Swal.fire('Equipo eliminado', 'Haz eliminado con éxito un equipo', 'success');
};
