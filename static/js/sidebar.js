// Script para cambiar el modo claro/oscuro
const toggleButton = document.getElementById('toggle-mode');

toggleButton.addEventListener('click', () => {
  // Cambia el modo oscuro/claro en el body
  document.body.classList.toggle('dark-mode');
  
  // Cambia el ícono del botón dependiendo del modo
  if (document.body.classList.contains('dark-mode')) {
    toggleButton.innerHTML = '<i class="fa fa-sun-o" aria-hidden="true"></i>';  // Ícono de sol en modo oscuro
  } else {
    toggleButton.innerHTML = '<i class="fa fa-moon-o" aria-hidden="true"></i>';  // Ícono de luna en modo claro
  }
});
