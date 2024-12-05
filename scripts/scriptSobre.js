const icone = document.getElementById("icone");
const header = document.querySelector("header");
const dropdowns = document.querySelectorAll(".dropdown");
const dropdownM = document.querySelectorAll(".dropdownM");
const drop = document.querySelectorAll(".drop");
const dropM = document.querySelectorAll(".dropM");
const titulo = document.querySelector(".titulo h1");
const card1 = document.querySelector(".card-Fernanda");
const card2 = document.querySelector(".card-Vinicius");
const seta = document.querySelector(".arrow");

let modoNoturno = localStorage.getItem("modoNoturno") === "true";

// Função para aplicar o modo noturno
function aplicarmodoNoturno() {
    document.body.style.background = "#2F2F2F";
    document.body.style.color = "white";
    icone.src = "../imgHeader/diurno.png";
    icone.style.height = "4rem";
    header.style.background = "#8B0000";
    dropdowns.forEach((dropdown) => (dropdown.style.background = "#8B0000"));
    dropdownM.forEach((dropdown) => (dropdown.style.background = "#8B0000"));
    drop.forEach((dropdown) => (dropdown.style.background = "#8B0000"));
    dropM.forEach((dropdown) => (dropdown.style.background = "#8B0000"));
    titulo.style.color = "#ffffff";
    card1.style.background = "#111111";
    card2.style.background = "#111111";
    seta.src = "../imgDicas/seta-direita-branca.png";
}

// Função para remover o modo noturno
function removermodoNoturno() {
    document.body.style.background = "white";
    document.body.style.color = "black";
    icone.src = "../imgHeader/noturno.png";
    icone.style.height = "3rem";
    header.style.background = "";
    dropdowns.forEach((dropdown) => (dropdown.style.background = ""));
    dropdownM.forEach((dropdown) => (dropdown.style.background = ""));
    drop.forEach((dropdown) => (dropdown.style.background = ""));
    dropM.forEach((dropdown) => (dropdown.style.background = ""));
    titulo.style.color = "";
    card1.style.background = "";
    card2.style.background = "";
    seta.src = "";

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
