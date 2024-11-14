const icone = document.getElementById("icone");
let darkMode = false;

icone.addEventListener("click", function() {
    if (darkMode) {
        document.body.style.background = "white";
        document.body.style.color = "black";
        darkMode = false;
    } else {
        document.body.style.background = "#191414";
        document.body.style.color = "white";
        darkMode = true;
    }
});
