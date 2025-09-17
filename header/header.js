function header() {
    const header = document.createElement('header');
    header.textContent = 'Compras';
    header.className = 'compras';
    document.body.appendChild(header);
}

export { header };