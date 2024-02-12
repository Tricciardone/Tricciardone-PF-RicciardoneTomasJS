// Array para almacenar los comentarios
let comentarios = [];

// Referencias a elementos del DOM
const form = document.getElementById('commentForm');
const inputComentario = document.getElementById('commentInput');
const listaComentarios = document.getElementById('commentList');

// Función para mostrar los comentarios en la lista
function mostrarComentarios() {
    listaComentarios.innerHTML = '';

    comentarios.forEach(comentario => {
        const listItem = document.createElement('li');
        listItem.textContent = comentario.contenido;

        // Añadir botón para eliminar
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Eliminar';
        deleteButton.addEventListener('click', () => eliminarComentario(comentario.id));
        listItem.appendChild(deleteButton);

        listaComentarios.appendChild(listItem);
    });
}

// Función para agregar un comentario
function agregarComentario(event) {
    event.preventDefault();

    const nuevoComentario = {
        id: Date.now(),
        contenido: inputComentario.value,
        completado: false
    };

    comentarios.push(nuevoComentario);
    mostrarComentarios();
    form.reset();
}

// Función para eliminar un comentario por ID
function eliminarComentario(id) {
    comentarios = comentarios.filter(comentario => comentario.id !== id);
    mostrarComentarios();
}

// Agregar event listener al formulario
form.addEventListener('submit', agregarComentario);
