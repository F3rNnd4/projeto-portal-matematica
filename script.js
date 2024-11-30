const icone = document.getElementById("icone");
const header = document.querySelector("header");
const dropdowns = document.querySelector(".dropdown")
const dropdownM = document.querySelector(".dropdownM")
const titulo = document.querySelector(".tituloMat")
const calculadora = document.querySelector(".calculadora")
const moreNews = document.querySelector(".more-news");
const tituloCalendar = document.querySelector(".tituloCalendar");
const linha = document.querySelector(".linha");
const calendario = document.querySelector(".calendario");

let modoNoturno = localStorage.getItem("modoNoturno") === "true";

// Função para aplicar o modo noturno
function aplicarmodoNoturno() {
    document.body.style.background = "#2F2F2F";
    document.body.style.color = "white";
    icone.src = "./imgHeader/diurno.png"
    icone.style.height = "4rem"
    header.style.background = "#8B0000";
    dropdowns.style.background = "#8B0000";
    dropdownM.style.background = "#8B0000";
    titulo.style.color = "white";
    calculadora.src = "./imgHome/calculadoraEscura.jpg"
    moreNews.style.background = "#8B0000";
    tituloCalendar.style.color = "white";
    linha.style.borderBottom = "0.150rem solid white";
    calendario.src = "./imgHome/calendarioEscuro.png";

}

// Função para remover o modo noturno
function removermodoNoturno() {
    document.body.style.background = "white";
    document.body.style.color = "black";
    icone.src ="./imgHeader/noturno.png"
    icone.style.height = "3rem"
    header.style.background = "";
    dropdowns.style.background = "";
    dropdownM.style.background = "";
    titulo.style.color = "";
    calculadora.src = "./imgHome/calculadora.png"
    moreNews.style.background = "";
    tituloCalendar.style.color = "";
    linha.style.borderBottom = "";
    calendario.src = "./imgHome/calendario.png";
}

// Verifica o estado do modo noturno ao carregar/recarregar a página
if (modoNoturno) {
    aplicarmodoNoturno();
} else {
    removermodoNoturno();
}

icone.addEventListener("click", function () {
    modoNoturno = !modoNoturno;
    localStorage.setItem("modoNoturno", modoNoturno);
    if (modoNoturno) {
        aplicarmodoNoturno();
    } else {
        removermodoNoturno();
    }
});
