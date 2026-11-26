// Muestra el año actual en el pie de página
document.getElementById('anio').textContent = new Date().getFullYear();

// Muestra el boton al bajar mas de 300 pixeles
const botonArriba = document.getElementById('volver-arriba');

function actualizarBoton() {
  botonArriba.hidden = window.scrollY <= 300;
}

window.addEventListener('scroll', actualizarBoton);
actualizarBoton();

// Regresa al inicio de la pagina
botonArriba.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});
