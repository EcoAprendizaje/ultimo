function toggleMenu() {
    const menu = document.querySelector('.menu');
    menu.classList.toggle('active');
  }

  window.addEventListener('scroll', () => {
    const menu = document.querySelector('.menu');
    if (menu.classList.contains('active')) {
      menu.classList.remove('active');
    }
  });






  document.addEventListener("DOMContentLoaded", () => {
    const servicios = document.querySelectorAll(".servicio");
  
    servicios.forEach((servicio) => {
      servicio.addEventListener("click", () => {
        const servicioNombre = servicio.querySelector("h3").innerText;
        mostrarModal(servicioNombre);
      });
    });
  
    // Función para mostrar el modal
    function mostrarModal(servicio) {
      const modal = document.createElement("div");
      modal.classList.add("modal");
      modal.innerHTML = `
        <div class="modal-contenido">
          <span class="cerrar-modal">&times;</span>
          <h2>${servicio}</h2>
          <p>Gracias por tu interés. Contáctanos para más información sobre este servicio.</p>
        </div>
      `;
  
      document.body.appendChild(modal);
  
      // Cerrar el modal al hacer clic en el botón X
      modal.querySelector(".cerrar-modal").addEventListener("click", () => {
        modal.remove();
      });
  
      // Cerrar modal al hacer clic fuera del contenido
      modal.addEventListener("click", (e) => {
        if (e.target === modal) {
          modal.remove();
        }
      });
    }
  });
  