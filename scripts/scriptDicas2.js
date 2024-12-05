const icone = document.getElementById("icone");
const header = document.querySelector("header");
const dropdowns = document.querySelector(".dropdown");
const dropdownM = document.querySelector(".dropdownM");
const drop = document.querySelector(".drop")
const dropM = document.querySelector(".dropM")
const boxes = document.querySelectorAll(".box");
const paiTitle = document.querySelector(".pai-title h1");
const linha = document.querySelector(".linha");
const seta = document.querySelector(".tips-arrow img");
const tips = document.querySelectorAll(".tip1 , .tip2 , .tip3");
const btnvideo = document.querySelector(".btn");
const btnvideo2 = document.querySelector(".btn2");
const btnvideo3 = document.querySelector(".btn3");

let modoNoturno = localStorage.getItem("modoNoturno") === "true";

// Função para aplicar o modo noturno
function aplicarmodoNoturno() {
    document.body.style.background = "#2F2F2F";
    document.body.style.color = "white";
    icone.src = "../imgHeader/diurno.png";
    header.style.background = "#8B0000";
    dropdowns.style.background = "#8B0000";
    dropdownM.style.background = "#8B0000";
    drop.style.background = "#8B0000";
    dropM.style.background = "#8B0000";

    boxes.forEach((box) => {
        box.style.background = "#111111";
        box.querySelectorAll("h2, p").forEach((element) => {
            element.style.color = "white";
        });
    });

    linha.style.borderBottom = "0.150rem solid white";
    paiTitle.style.color = "white";
    seta.src = "../imgDicas/seta-escuro2.png";

    tips.forEach((tip) => {
        tip.style.background = "#111111";
        tip.querySelectorAll("*").forEach((element) => {
            element.style.color = "white";
        });
    });
    btnvideo.style.background = "#8B0000";
    btnvideo2.style.background = "#8B0000";
    btnvideo3.style.background = "#8B0000";
}

// Função para remover o modo noturno
function removermodoNoturno() {
    document.body.style.background = "white";
    document.body.style.color = "black";
    icone.src = "../imgHeader/noturno.png";
    header.style.background = "";
    dropdowns.style.background = "";
    dropdownM.style.background = "";
    drop.style.background = "";
    dropM.style.background = "";

    boxes.forEach((box) => {
        box.style.background = "";
        box.querySelectorAll("h2, p").forEach((element) => {
            element.style.color = "";
        });
    });
    linha.style.borderBottom = "";
    paiTitle.style.color = "";
    seta.src = "../imgDicas/seta-direita.png";
    tips.forEach((tip) => {
        tip.style.background = "";
        tip.querySelectorAll("*").forEach((element) => {
            element.style.color = "black";
        });
    });
    btnvideo.style.background = "";
    btnvideo2.style.background = "";
    btnvideo3.style.background = "";
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
