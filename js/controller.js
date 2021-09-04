
var pacientes = [];
var botao = document.getElementById("calcular");
botao.addEventListener('click', function(){
    var paciente = lePaciente();
    pacientes.push (paciente);
    mostraPaciente (paciente);
});

var botaoRelatorio = document.getElementById("relatorio");
botaoRelatorio.addEventListener('click', function() {
    geraRelatorio (pacientes);
});

// var paciente = {
//     nome: "Renato Oliveira",
//     peso: 76.00,
//     altura: 1.78
// }
// mostraPaciente(paciente);

// console.log(nome);
// console.log(`Peso: ${peso} - Altura: ${altura}`);
// console.log(`Calculo do IMC: ${imc.toFixed(2)}`);

