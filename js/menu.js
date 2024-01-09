const menu = document.querySelector(".menu");
const abrirMenu = document.querySelector(".abrir-menu");
const cerrarMenu = document.querySelector(".cerrar-menu");
const enlacesMenu = document.querySelectorAll(".menuTexto");
const contenedorBotonEnviar = document.querySelector(".contenedor-boton-enviar");

function usarMenu() {
    menu.classList.toggle("menu-abierto");
    
    // Cambia la lógica para agregar/quitar la clase ocultar-botones
    if (menu.classList.contains("menu-abierto")) {
        contenedorBotonEnviar.classList.add("ocultar-botones");
    } else {
        contenedorBotonEnviar.classList.remove("ocultar-botones");
    }
}

abrirMenu.addEventListener("click", usarMenu);
cerrarMenu.addEventListener("click", usarMenu);

enlacesMenu.forEach((enlace) => {
    enlace.addEventListener("click", () => {
        usarMenu();
    });
});
