
const icone = document.getElementById("icone");
const header = document.querySelector("header");
const dropdowns = document.querySelectorAll(".dropdown");
const boxes = document.querySelectorAll(".box");
const paiTitle = document.querySelector(".pai-title h1");
const linha = document.querySelector(".linha");
const seta = document.querySelector(".tips-arrow img");
const tips = document.querySelectorAll(".tips-section .tips1")

let modoNoturno = localStorage.getItem("modoNoturno") === "true";

// Função para aplicar o modo noturno
function aplicarmodoNoturno() {
    document.body.style.background = "#2F2F2F";
    document.body.style.color = "white";
    icone.src = "../imgHeader/diurno.png";
    header.style.background = "#8B0000";
    dropdowns.forEach(dropdown => dropdown.style.background = "#8B0000");
    boxes.forEach(box => {
        box.style.background = "#8B0000";
        box.querySelectorAll("h2, p").forEach(element => {
            element.style.color = "white";
        });
    });
    linha.style.borderBottom = "0.150rem solid white";
    paiTitle.style.color = "white";
    seta.src = "../imgDicas/seta-direita-branca.png"; 
    tips.forEach(tip => {
        tip.style.background = "#8B0000";
        tip.querySelectorAll("*").forEach(element => {
            element.style.color = "white"; 
        });
    });
}

// Função para remover o modo noturno
function removermodoNoturno() {
    document.body.style.background = "white";
    document.body.style.color = "black";
    icone.src = "../imgHeader/noturno.png";
    header.style.background = "";
    dropdowns.forEach(dropdown => dropdown.style.background = "");
    boxes.forEach(box => {
        box.style.background = "";
        box.querySelectorAll("h2, p").forEach(element => {
            element.style.color = ""; 
        });
    });
    linha.style.borderBottom = "";
    paiTitle.style.color = "";
    seta.src = "../imgDicas/seta-direita.png"; 
    tips.forEach(tip => {
        tip.style.background = ""; 
        tip.querySelectorAll("*").forEach(element => {
            element.style.color = "black"; 
        });
    });
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