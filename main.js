import { header } from './header/header.js';
import { formulario } from './formulario/formulario.js';
import { seccion } from './seccion/seccion.js';
import { descargar } from './control/descargar.js';

header();
seccion();
formulario();
descargar();


// Agrega un contenedor para capturar
const contenido = document.createElement('div');
contenido.id = 'seccion-productos'; 

contenido.style.padding = '20px';
document.body.appendChild(contenido);
