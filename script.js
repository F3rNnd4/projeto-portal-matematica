
//Preicso fazer a imagem do calendario mudar
// Melhorar os icones 
// Melhorar a cor do vermelho 
// Mudar a cor dos titulos e a logo do senai pra branco

const icone = document.getElementById("icone");
let modoNoturno = localStorage.getItem("modoNoturno") === "true";

// Função para aplicar o modo noturno
function aplicarmodoNoturno() {
    document.body.style.background = "#2F2F2F";
    document.body.style.color = "white";
    icone.src = "./imgHeader/diurno.png"
}

// Função para remover o modo noturno
function removermodoNoturno() {
    document.body.style.background = "white";
    document.body.style.color = "black";
    icone.src ="./imgHeader/noturno.png"
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
