const icone = document.getElementById("icone");
const header = document.querySelector("header");
const dropdowns = document.querySelectorAll(".dropdown");
const dropdownM = document.querySelectorAll(".dropdownM");
const drop = document.querySelectorAll(".drop");
const dropM = document.querySelectorAll(".dropM")
const titulo = document.querySelectorAll(".pai-title h1")
const linha = document.querySelector(".linha")
const titulo2 = document.querySelectorAll(".filho h1")
const quadrado1 = document.querySelector(".quadrado1")
const quadrado1T = document.querySelector(".quadrado1 h3")
const quadrado2 = document.querySelector(".quadrado2");
const quadrado2T = document.querySelector(".quadrado2 h3");
const quadrado3 = document.querySelector(".quadrado3");
const quadrado3T = document.querySelector(".quadrado3 h3");
const quadrado4 = document.querySelector(".quadrado4");
const quadrado4T = document.querySelector(".quadrado4 h3");
const quadrado5 = document.querySelector(".quadrado5");
const quadrado5T = document.querySelector(".quadrado5 h3");
const quadrado6 = document.querySelector(".quadrado6");
const quadrado6T = document.querySelector(".quadrado6 h3");
const quadrado7 = document.querySelector(".quadrado7");
const quadrado7T = document.querySelector(".quadrado7 h3");
const quadrado8 = document.querySelector(".quadrado8");
const quadrado8T = document.querySelector(".quadrado8 h3");
const quadrado9 = document.querySelector(".quadrado9");
const quadrado9T = document.querySelector(".quadrado9 h3");
const quadrado10 = document.querySelector(".quadrado10");
const quadrado10T = document.querySelector(".quadrado10 h3");
const quadrado11 = document.querySelector(".quadrado11");
const quadrado11T = document.querySelector(".quadrado11 h3");
const quadrado12 = document.querySelector(".quadrado12");
const quadrado12T = document.querySelector(".quadrado12 h3");
const quadrado13 = document.querySelector(".quadrado13");
const quadrado13T = document.querySelector(".quadrado13 h3");
const quadrado14 = document.querySelector(".quadrado14");
const quadrado14T = document.querySelector(".quadrado14 h3");
const quadrado15 = document.querySelector(".quadrado15");
const quadrado15T = document.querySelector(".quadrado15 h3");

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
    quadrado1.style.background = "#111111";
    quadrado1T.style.color = "white";
    quadrado2.style.background = "#111111";
    quadrado2T.style.color = "white";
    quadrado3.style.background = "#111111";
    quadrado3T.style.color = "white";
    quadrado4.style.background = "#111111";
    quadrado4T.style.color = "white";
    quadrado5.style.background = "#111111";
    quadrado5T.style.color = "white";
    quadrado6.style.background = "#111111";
    quadrado6T.style.color = "white";
    quadrado7.style.background = "#111111";
    quadrado7T.style.color = "white";
    quadrado8.style.background = "#111111";
    quadrado8T.style.color = "white";
    quadrado9.style.background = "#111111";
    quadrado9T.style.color = "white";
    quadrado10.style.background = "#111111";
    quadrado10T.style.color = "white";
    quadrado11.style.background = "#111111";
    quadrado11T.style.color = "white";
    quadrado12.style.background = "#111111";
    quadrado12T.style.color = "white";
    quadrado13.style.background = "#111111";
    quadrado13T.style.color = "white";
    quadrado14.style.background = "#111111";
    quadrado14T.style.color = "white";
    quadrado15.style.background = "#111111";
    quadrado15T.style.color = "white";

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
    titulo.forEach((titulo) => titulo.style.color = "");
    linha.style.borderBottom = "";
    titulo2.forEach((titulotwo) => (titulotwo.style.color = ""));
    quadrado1.style.background = "";
    quadrado1T.style.color = "";
    quadrado2.style.background = "";
    quadrado2T.style.color = "";
    quadrado3.style.background = "";
    quadrado3T.style.color = "";
    quadrado4.style.background = "";
    quadrado4T.style.color = "";
    quadrado5.style.background = "";
    quadrado5T.style.color = "";
    quadrado6.style.background = "";
    quadrado6T.style.color = "";
    quadrado7.style.background = "";
    quadrado7T.style.color = "";
    quadrado8.style.background = "";
    quadrado8T.style.color = "";
    quadrado9.style.background = "";
    quadrado9T.style.color = "";
    quadrado10.style.background = "";
    quadrado10T.style.color = "";
    quadrado11.style.background = "";
    quadrado11T.style.color = "";
    quadrado12.style.background = "";
    quadrado12T.style.color = "";
    quadrado13.style.background = "";
    quadrado13T.style.color = "";
    quadrado14.style.background = "";
    quadrado14T.style.color = "";
    quadrado15.style.background = "";
    quadrado15T.style.color = "";

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
