const icone = document.getElementById("icone");
const header = document.querySelector("header");
const dropdowns = document.querySelectorAll(".dropdown");
const dropdownM = document.querySelectorAll(".dropdownM");
const drop = document.querySelectorAll(".drop");
const dropM = document.querySelectorAll(".dropM");
const titulo = document.querySelectorAll(".pai-title h1");
const linha = document.querySelector(".linha");
const titulo2 = document.querySelectorAll(".filho h1");
const analistas = document.querySelectorAll(".main-analista");
const analistaTs = document.querySelectorAll(".main-analista h3");
const analistaTPs = document.querySelectorAll(".main-analista p");

let modoNoturno = localStorage.getItem("modoNoturno") === "true";

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
    titulo.forEach((titulo) => titulo.style.color = "#ffffff");
    linha.style.borderBottom = "0.150rem solid white";
    titulo2.forEach((titulo2) => (titulo2.style.color = "#ffffff"));
    analistas.forEach((analista) => analista.style.background = "#111111");
    analistaTs.forEach((analistaT) => analistaT.style.color = "#ffffff");
    analistaTPs.forEach((analistaTP) => analistaTP.style.color = "#ffffff");
}

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
    titulo.forEach((titulo) => titulo.style.color = "");
    linha.style.borderBottom = "";
    titulo2.forEach((titulotwo) => (titulotwo.style.color = ""));
    analistas.forEach((analista) => analista.style.background = "");
    analistaTs.forEach((analistaT) => analistaT.style.color = "");
    analistaTPs.forEach((analistaTP) => analistaTP.style.color = "");
}

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