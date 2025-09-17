import { agregarProductoSeccion } from '../seccion/seccion.js';

function formulario() {
    const formulario = document.createElement('div');
    formulario.className = 'formulario-producto';

    const inputNombre = document.createElement('input');
    inputNombre.type = 'text';
    inputNombre.placeholder = 'Producto';

    const inputPrecio = document.createElement('input');
    inputPrecio.type = 'number';
    inputPrecio.placeholder = 'Q 00.00';

    const boton = document.createElement('button');
    boton.textContent = 'Carrito';
    boton.style.backgroundColor = 'green';
    boton.style.color = 'white';

    boton.addEventListener('click', () => {
        const nombre = inputNombre.value.trim();
        const precio = parseFloat(inputPrecio.value);

        if (nombre && !isNaN(precio)) {
            agregarProductoSeccion(nombre, precio); 
            inputNombre.value = '';
            inputPrecio.value = '';
        }
    });

    formulario.appendChild(inputNombre);
    formulario.appendChild(inputPrecio);
    formulario.appendChild(boton);

    document.body.appendChild(formulario);
}

export { formulario };