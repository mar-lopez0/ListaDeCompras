import { precio } from "seccion/seccion.js";

const formulario = document.getElementById('formulario-producto');

// Campo de texto
const inputNombre = document.createElement('input');
inputNombre.type = 'text';
inputNombre.placeholder = 'Producto';
inputNombre.id = 'nombre-producto';

// Campo de número
const inputPrecio = document.createElement('input');
inputPrecio.type = 'number';
inputPrecio.placeholder = 'Q 00.00';
inputPrecio.id = 'precio-producto';

// Botón
const boton = document.createElement('button');
boton.textContent = 'Carrito';
boton.id = 'agregar-btn';
boton.style.backgroundColor = 'green';
boton.style.color = 'white';

// Evento
boton.addEventListener('click', () => {
    const nombre = inputNombre.value.trim();
    const precio = parseFloat(inputPrecio.value);

    if (nombre && !isNaN(precio)) {
        agregarProducto(nombre, precio);
        inputNombre.value = '';
        inputPrecio.value = '';
    }
});

// Añadir al DOM
formulario.appendChild(inputNombre);
formulario.appendChild(inputPrecio);
formulario.appendChild(boton);