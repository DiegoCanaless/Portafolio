const menu = document.querySelector(".menu");
const abrirMenu = document.querySelector(".abrir-menu");
const cerrarMenu = document.querySelector(".cerrar-menu");

function usarMenu(){
    menu.classList.toggle("menu-abierto");
}

abrirMenu.addEventListener("click", usarMenu);
cerrarMenu.addEventListener("click", usarMenu);
