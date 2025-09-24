// control/localStorage.js
const KEY = "productos";

    export function obtenerProductos() {
    const data = localStorage.getItem(KEY);
    return data ? JSON.parse(data) : [];
    }

    export function guardarProducto(producto) {
    const productos = obtenerProductos();
    productos.push(producto);
    localStorage.setItem(KEY, JSON.stringify(productos));
    }

    export function eliminarProducto(nombre) {
    const productos = obtenerProductos().filter(p => p.nombre !== nombre);
    localStorage.setItem(KEY, JSON.stringify(productos));
    }
