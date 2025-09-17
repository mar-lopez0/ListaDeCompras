let total = 0;

function seccion() {
    const seccion = document.createElement('div');
    seccion.className = 'seccion-productos';

    // Mostrar total
    const precioTotal = document.createElement('div');
    precioTotal.className = 'precio';
    precioTotal.textContent = 'Q 0.00';

    // Guardamos referencias para actualizar
    seccion.precioTotal = precioTotal;

    document.body.appendChild(precioTotal); // Primero el total
    document.body.appendChild(seccion);     // Después los productos

    return seccion;
}

function agregarProductoSeccion(nombre, precio) {
    const seccion = document.querySelector('.seccion-productos');

    // Contenedor del producto
    const producto = document.createElement('div');
    producto.className = 'producto';
    producto.textContent = `${nombre} - Q${precio.toFixed(2)} `;

    // Botón de eliminar
    const botonEliminar = document.createElement('button');
    botonEliminar.textContent = 'X';
    botonEliminar.style.marginLeft = '10px';
    botonEliminar.style.backgroundColor = 'red';
    botonEliminar.style.color = 'white';

    // Evento para eliminar producto
    botonEliminar.addEventListener('click', () => {
        seccion.removeChild(producto);
        total -= precio; // restamos el precio
        const precioTotal = document.querySelector('.precio');
        precioTotal.textContent = `Q ${total.toFixed(2)}`;
    });

    // Agregamos el botón al producto
    producto.appendChild(botonEliminar);

    // Agregamos el producto a la sección
    seccion.appendChild(producto);

    // Actualizar total
    total += precio;
    const precioTotal = document.querySelector('.precio');
    precioTotal.textContent = `Q ${total.toFixed(2)}`;
}

export { seccion };
export { agregarProductoSeccion };

