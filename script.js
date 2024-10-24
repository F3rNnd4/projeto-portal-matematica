document.addEventListener('DOMContentLoaded', (event) => {
    const toggleSwitch = document.getElementById('toggle');
    let darkMode = false;
  
    // Função para alternar entre modo claro e escuro
    function toggleDarkMode() {
        if (darkMode) {
            document.body.style.background = "white";
            document.body.style.color = "black";
            darkMode = false;
        } else {
            document.body.style.background = "#2e3e41ff";
            document.body.style.color = "white";
            darkMode = true;
        }
    }
  
    // Evento de mudança no botão on/off
    toggleSwitch.addEventListener('change', function() {
        toggleDarkMode();
    });
  });