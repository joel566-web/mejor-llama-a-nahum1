function toggleMenu() {
    const menu = document.getElementById("menu");

    // Alterna la clase 'menu-abierto' para activar la animación de despliegue
    menu.classList.toggle("menu-abierto");
}

// Función para manejar el envío del Gmail y mostrar el modal
function enviarGmail() {
    const campoGmail = document.getElementById("campoGmail").value;
    if (campoGmail) {
        console.log("Gmail enviado:", campoGmail);
        // Abre el modal para describir el problema
        document.getElementById('modalProblema').style.display = 'block';
    } else {
        alert("Por favor, ingresa un Gmail válido.");
    }
}

// Evento para el botón de enviar el Gmail
document.getElementById("botonEnviar").addEventListener("click", enviarGmail);

// Evento para detectar la tecla Enter en el campo Gmail
document.getElementById("campoGmail").addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        enviarGmail();
    }
});

// Función para cerrar el modal
function cerrarModal() {
    document.getElementById('modalProblema').style.display = 'none';
}

// Evento para el botón de cerrar la ventana modal
document.getElementById("cerrarModal").addEventListener("click", cerrarModal);

// Función para enviar la descripción del problema y el correo al backend
document.getElementById('botonEnviarProblema').addEventListener('click', function() {
    const email = document.getElementById('campoGmail').value;
    const problema = document.getElementById('campoProblema').value;

    if (email && problema) {
        // Hacer una solicitud POST al servidor para enviar el correo
        fetch('http://localhost:3000/send-email', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email: email, message: problema })
        })
        .then(response => response.json())
        .then(data => {
            alert('Tu solicitud fue enviada. ¡Gracias!');
            // Cerrar el modal
            document.getElementById('modalProblema').style.display = 'none';
        })
        .catch(error => {
            console.error('Error al enviar el correo:', error);
            alert('Hubo un error. Por favor, inténtalo más tarde.');
        });
    } else {
        alert('Por favor, completa todos los campos.');
    }
});

// Obtener el enlace "Nosotros" del menú
const botonNosotros = document.getElementById('nosotros');

// Obtener el div que contiene la imagen
const imagenNosotros = document.getElementById('imagenNosotros');

// Agregar un evento de clic al botón "Nosotros"
botonNosotros.addEventListener('click', function(event) {
    event.preventDefault(); // Evita que el enlace recargue la página

    // Alternar la visibilidad de la imagen
    if (imagenNosotros.style.display === 'none') {
        imagenNosotros.style.display = 'block'; // Mostrar la imagen
    } else {
        imagenNosotros.style.display = 'none'; // Ocultar la imagen
    }
});

function toggleMenu() {
    const menu = document.getElementById("menu");
    menu.classList.toggle("menu-abierto");
}

function abrirModal() {
    document.getElementById("miModal").style.display = "block";
}

function cerrarModal() {
    document.getElementById("miModal").style.display = "none";
}


