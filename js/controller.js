var botao = document.getElementById("calcular");
botao.addEventListener('click', function(){
    var paciente = lePaciente();
    mostraPaciente (paciente);
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

