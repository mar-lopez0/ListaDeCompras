function descargar(nombreContenedor) {
    const div = document.getElementById(nombreContenedor);

    html2canvas(div).then(canvas => {
        const enlace = document.createElement('a');
        enlace.href = canvas.toDataURL("descargas.png");
        enlace.download = 'descargar.png';
        enlace.click();
    });
}

export { descargar };
