// pega os botões com os dias da semana e armazena os valores em constantes
const tercaButton = document.getElementById("terca");
const quartaButton = document.getElementById("quarta");
const sextaButton = document.getElementById("sexta");

// pega a lista com os horários disponíveis em cada dia e armazena os valores em constantes
const horariosDisponiveis = document.getElementById("horarios-disponiveis");
const horariosTerca = document.getElementById("horarios-terca");
const horariosQuarta = document.getElementById("horarios-quarta");
const horariosSexta = document.getElementById("horarios-sexta");

// cria uma evento que tem início quando o usuário clicar no botão
tercaButton.addEventListener("click", function() {
    // mostra a div que contém o h3 e a lista de horários do dia
    horariosDisponiveis.style.display = "block";
    // remove a classe "hide" que possui "display: none" para poder mostrar a lista de horários
    horariosTerca.classList.remove("hide");
    // adiciona a classe "hide" para esconder a lista de horários dos outros dias
    horariosQuarta.classList.add("hide");
    horariosSexta.classList.add("hide");
});

quartaButton.addEventListener("click", function() {
    horariosDisponiveis.style.display = "block";
    horariosQuarta.classList.remove("hide");
    horariosTerca.classList.add("hide");
    horariosSexta.classList.add("hide");
});

sextaButton.addEventListener("click", function() {
    horariosDisponiveis.style.display = "block";
    horariosSexta.classList.remove("hide");
    horariosTerca.classList.add("hide");
    horariosQuarta.classList.add("hide");
});