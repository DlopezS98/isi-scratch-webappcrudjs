function crearMenuAdmistrador() {
    const rutaActiva = (ruta) => {
        const rutaActual = window.location.pathname;
        return ruta === rutaActual;
    };
    
    const rutaProductos = "/admin/products/index.html";
    const rutaCategorias = "/admin/categories/index.html";
    const rutas = [
        { nombre: "Productos", ruta: rutaProductos, activo: rutaActiva(rutaProductos) },
        { nombre: "Categorias", ruta: rutaCategorias, activo: rutaActiva(rutaCategorias) },
    ];

    const sidebarMenu = document.getElementById("admin-sidebar-menu");
    for (const ruta of rutas) {
        const li = document.createElement("li");
        li.className = "nav-item";
        li.innerHTML = `
            <a class="nav-link ${ruta.activo ? 'active' : ''}" href="${ruta.ruta}">
                <span data-feather="file"></span>
                ${ruta.nombre}
            </a>
        `;
        sidebarMenu.appendChild(li);
    }
}

crearMenuAdmistrador();