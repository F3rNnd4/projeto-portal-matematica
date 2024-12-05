document.querySelectorAll('.question-card').forEach((card) => {
    const options = card.querySelectorAll('input[type="radio"]');
    const correction = card.querySelector('.detalhes');

    options.forEach((option) => {
        option.addEventListener('change', () => {
            if (option.checked) {
                correction.style.display = 'block';
            }
        });
    });

    correction.style.display = 'none';
});

const icone = document.getElementById("icone");
const header = document.querySelector("header");
const dropdowns = document.querySelectorAll(".dropdown");
const dropdownM = document.querySelectorAll(".dropdownM");
const drop = document.querySelectorAll(".drop");
const dropM = document.querySelectorAll(".dropM");
const titulo = document.querySelectorAll(".pai-title h1");
const linha = document.querySelector(".linha");
const titulo2 = document.querySelectorAll(".filho h1");
const questionNumbers = document.querySelectorAll(".question-number");
const questionTexts = document.querySelectorAll(".question-text");
const optionTexts = document.querySelectorAll(".option-text");
const aviso = document.querySelector(".aviso h2");
const tituloDiv = document.querySelector(".titulo");
const subjectTitles = document.querySelectorAll(".subject-title");
const detalhes = document.querySelectorAll("details");
const detalhesQuestionNumbers = document.querySelectorAll("details .question-number");
const detalhesQuestionTexts = document.querySelectorAll("details .question-text");

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
    questionNumbers.forEach((number) => number.style.color = "white");
    questionTexts.forEach((text) => text.style.color = "white");
    optionTexts.forEach((text) => text.style.color = "white");
    aviso.style.color = "white";
    tituloDiv.style.color = "white";
    subjectTitles.forEach((title) => title.style.color = "white");
    detalhes.forEach((detail) => detail.style.color = "black");
    detalhesQuestionNumbers.forEach((number) => number.style.color = "black");
    detalhesQuestionTexts.forEach((text) => text.style.color = "black");
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
    questionNumbers.forEach((number) => number.style.color = "black");
    questionTexts.forEach((text) => text.style.color = "black");
    optionTexts.forEach((text) => text.style.color = "black");
    aviso.style.color = "black";
    tituloDiv.style.color = "black";
    subjectTitles.forEach((title) => title.style.color = "black");
    detalhes.forEach((detail) => detail.style.color = "black");
    detalhesQuestionNumbers.forEach((number) => number.style.color = "black");
    detalhesQuestionTexts.forEach((text) => text.style.color = "black");
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


