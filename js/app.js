/*Formulario de sección de contacto */

document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("contactForm");

  form.addEventListener("submit", function (event) {
    event.preventDefault(); // Evita el envío del formulario

    const nombre = document.getElementById("nombre").value.trim();
    const email = document.getElementById("email").value.trim();
    const mensaje = document.getElementById("mensaje").value.trim();

    if (nombre === "" || email === "" || mensaje === "") {
      alert("Por favor, completa todos los campos.");
      return;
    }

    // Validar formato de correo
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailPattern.test(email)) {
      alert("Por favor, ingresa un correo electrónico válido.");
      return;
    }

    alert("Formulario enviado correctamente.");
    window.location.href = "../html/gracias.html";
  });
});

/* Formulario de Página de Contacto */

document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("formContact");

  form.addEventListener("submit", function (event) {
    event.preventDefault();

    const nombre = document.getElementById("nombre").value.trim();
    const email = document.getElementById("email").value.trim();
    const mensaje = document.getElementById("mensaje").value.trim();

    if (nombre === "" || email === "" || mensaje === "") {
      alert("Por favor, completa todos los campos.");
      return;
    }

    // Validar formato de correo
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailPattern.test(email)) {
      alert("Por favor, ingresa un correo electrónico válido.");
      return;
    }

    alert("Formulario enviado correctamente.");
    window.location.href = "../html/gracias-contact.html";
  });
});
