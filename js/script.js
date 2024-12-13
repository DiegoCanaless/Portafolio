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


const btn = document.getElementById('button');

document.getElementById('form')
 .addEventListener('submit', function(event) {
   event.preventDefault();

   btn.value = 'Sending...';

   const serviceID = 'default_service';
   const templateID = 'template_0u4t3rp';

   emailjs.sendForm(serviceID, templateID, this)
    .then(() => {
      btn.value = 'Send Email';
      Toastify({
        text: "Se envio correctamente",
        duration: 2000,
        style: {
            background: "linear-gradient(to right,rgb(67, 184, 32), #96c93d)",
            
        },
        }).showToast();
    }, (err) => {
      btn.value = 'Send Email';
      Toastify({
        text: "Surgio un problema",
        duration: 2000,
        style: {
            background: "linear-gradient(to right,rgb(184, 55, 32),rgb(206, 53, 15))",
        },
        }).showToast();
    });
});