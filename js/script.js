let abrirMenu = document.getElementById("abrirMenu");
let menuAbierto = document.getElementById("linksNav");
let navbar = document.getElementById("navbar");
let links = document.querySelectorAll(".linksNav a");

let menu = false;

abrirMenu.addEventListener("click", () => {
    menu = !menu;

    if (menu) {
        abrirMenu.classList.remove("bi-list");
        abrirMenu.classList.add("bi-x-lg");
        
        navbar.style.height = "60vh";

        setTimeout(() => {
            menuAbierto.classList.add("menuAbierto");
        }, 250);

    } else {
        abrirMenu.classList.remove("bi-x-lg");
        abrirMenu.classList.add("bi-list");
        menuAbierto.classList.remove("menuAbierto");
        navbar.style.height = "10vh";

        links.forEach(link => link.classList.remove("mostrarLink"));
    }
});
