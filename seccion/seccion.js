import { obtenerProductos, guardarProducto, eliminarProducto } from "../control/localStorage.js";

let total = 0;

function seccion() {
    const seccion = document.createElement('div');
    seccion.className = 'seccion-productos';
    seccion.id = 'seccion-productos';

    // Mostrar total
    const precioTotal = document.createElement('div');
    precioTotal.className = 'precio';
    precioTotal.textContent = 'Q 0.00';
    seccion.precioTotal = precioTotal;
    seccion.appendChild(precioTotal);

    document.body.appendChild(seccion);

    // ✅ Cargar productos guardados en localStorage
    const productosGuardados = obtenerProductos();
    productosGuardados.forEach(p => {
        agregarProductoSeccion(p.nombre, p.precio, false); // false para no duplicar en localStorage
    });

    return seccion;
}

function agregarProductoSeccion(nombre, precio, guardar = true) {
    const seccion = document.querySelector('.seccion-productos');

    const producto = document.createElement('div');
    producto.className = 'producto';
    producto.textContent = `${nombre} - Q${precio.toFixed(2)} `;

    // Botón de eliminar
    const botonEliminar = document.createElement('button');
    botonEliminar.textContent = 'X';
    botonEliminar.style.marginLeft = '10px';
    botonEliminar.style.backgroundColor = 'red';
    botonEliminar.style.color = 'white';

    // Eliminar producto
    botonEliminar.addEventListener('click', () => {
        seccion.removeChild(producto);
        total -= precio;
        const precioTotal = document.querySelector('.precio');
        precioTotal.textContent = `Q ${total.toFixed(2)}`;

        // ❌ Eliminar también del localStorage
        eliminarProducto(nombre);
    });

    producto.appendChild(botonEliminar);
    seccion.appendChild(producto);

    // ✅ Guardar en localStorage solo si viene de agregar manual
    if (guardar) {
        guardarProducto({ nombre, precio });
    }

    // Actualizar total
    total += precio;
    const precioTotal = document.querySelector('.precio');
    precioTotal.textContent = `Q ${total.toFixed(2)}`;
}

export { seccion, agregarProductoSeccion };



seccion.id