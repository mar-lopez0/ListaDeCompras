import { descargar } from '../control/descargar.js';

function header() {
    const header = document.createElement('header');
    
    header.className = 'compras';
    header.textContent = 'Compras';

    const botonDescarga = document.createElement('button');
    botonDescarga.textContent = 'Descargar';
    botonDescarga.className = 'btn-descargar';
    botonDescarga.addEventListener('click', () => {
        descargar('seccion-productos'); // ID del div a capturar
    });

    header.appendChild(botonDescarga);
    document.body.appendChild(header);
}

export { header };
