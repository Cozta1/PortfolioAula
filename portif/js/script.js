const hamburguer = document.querySelector(".hamburguer")  
const cabecalhoMobile = document.querySelector(".cabecalho__menu")

hamburguer.addEventListener("click", () => {
    hamburguer.classList.toggle("active");
    cabecalhoMobile.classList.toggle("active");
})

document.querySelectorAll(".cabecalho__menu__link__mobile").forEach(n => n.addEventListener("click", () => {
    hamburguer.classList.remove("active")
    cabecalhoMobile.classList.remove("active")
}))