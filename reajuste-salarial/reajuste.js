let genero = prompt("Qual é seu genero? (Homem ou Mulher)");
let tempo = prompt("Quanto tempo de empresa?");

let salarioAtual = prompt("Informe seu salario atual");

let reajuste;
let novoSalario;


if (isNaN(tempo) || isNaN(salarioAtual)) {
    alert("Insirá valores válidos por favor.");
} else if (genero == "Mulher") {

    if (tempo < 5) {
        reajuste = 4;
    } else if (tempo < 10) {
        reajuste = 7;
    } else if (tempo >= 15 && tempo <= 20) {
        reajuste = 12;
    } else if (tempo > 20) {
        reajuste = 23;
    } else {
        reajuste = 0;
    }

} else if (genero == "Homem") {
    if (tempo < 5) {
        reajuste = 3;
    } else if (tempo < 15) {
        reajuste = 8;
    } else if (tempo >= 20 && tempo <= 30) {
        reajuste = 14;
    } else if (tempo > 30) {
        reajuste = 25
    } else {
        reajuste = 0;
    }

}

novoSalario = salarioAtual * (1 + (reajuste / 100));
alert(`Reajuste aplicado: ${reajuste} % | Novo salário: ${novoSalario}`);

