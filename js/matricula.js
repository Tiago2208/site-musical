var totalCursos = document.querySelector(".js-total-de-cursos");
var totalHoras = document.querySelector(".js-total-de-horas");
var botaoConfirmar = document.querySelector(".js-botao-confirmar");

var quantidadeCursos = 0;
var quantidadeHoras = 0;

function adicionaCurso(checkbox) {
    if (checkbox.checked) {
        quantidadeCursos++;
        quantidadeHoras += parseInt(checkbox.value);
    } else {
        quantidadeCursos--;
        quantidadeHoras -= parseInt(checkbox.value);
    }
    habilitarBotao();
    
    totalCursos.textContent = quantidadeCursos + " curso(s)";
    totalHoras.textContent = quantidadeHoras + "h";
    
}

function habilitarBotao() {
    if (quantidadeCursos > 0) {
        botaoConfirmar.classList.remove("disabled");
    } else {
        botaoConfirmar.classList.add("disabled");
        
    }
    
}
