const icone = document.getElementById("icone");
const header = document.querySelector("header");
const dropdowns = document.querySelectorAll(".dropdown");
const dropdownM = document.querySelectorAll(".dropdownM");
const drop = document.querySelectorAll(".drop");
const dropM = document.querySelectorAll(".dropM");
const titulo = document.querySelector(".titulo h1");
const card3 = document.querySelector(".card-Pereira");
const card4 = document.querySelector(".card-Matheus");
const card5 = document.querySelector(".card-Jessica");
const card6 = document.querySelector(".card-Sara");
const seta = document.querySelector(".arrow2");


let modoNoturno = localStorage.getItem("modoNoturno") === "true";

// Função para aplicar o modo noturno
function aplicarmodoNoturno() {
    document.body.style.background = "#2F2F2F";
    document.body.style.color = "white";
    icone.src = "../imgHeader/seta-direita-branca.png";
    icone.style.height = "4rem";
    header.style.background = "#8B0000";
    dropdowns.forEach((dropdown) => (dropdown.style.background = "#8B0000"));
    dropdownM.forEach((dropdown) => (dropdown.style.background = "#8B0000"));
    drop.forEach((dropdown) => (dropdown.style.background = "#8B0000"));
    dropM.forEach((dropdown) => (dropdown.style.background = "#8B0000"));
    titulo.style.color = "#ffffff";
    card3.style.background = "#111111";
    card4.style.background = "#111111";
    card5.style.background = "#111111";
    card6.style.background = "#111111";
    seta.src = "../imgDicas/seta-esquerda-branca.png";
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
    card3.style.background = "";
    card4.style.background = "";
    card5.style.background = "";
    card6.style.background = "";
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
