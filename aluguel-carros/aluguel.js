// Declarações das variáveis
let diariaCarro;
let contaDiariaCarro;

let kmCarroPercorrido;
let contaKmCarroPercorrido;

let carroEscolhido = prompt("Qual é seu carro? (Popular - Luxo)");

// Verificação para saber se o carro escolhi é Popular
if (carroEscolhido == "Popular") {
    diariaCarro = parseInt(prompt("Quantos dias você ficou com o carro?"));
    contaDiariaCarro = diariaCarro * 90; // Realiza a operação da diária do carro

    alert(`Você ira gastar em diária: ${contaDiariaCarro.toFixed(2)} Reais`);
    
    kmCarroPercorrido = parseFloat(
        prompt("Quantos Kms você percorreu com o carro?")
    );
    // Realiza outra verificação para saber se o usuário andou menos que 100 kms
    if (kmCarroPercorrido <= 100) {
        contaKmCarroPercorrido = kmCarroPercorrido * 0.2; // Realiza a conta que o carro percorreu multiplicando por R$0,20
        alert(
            `Andando ${kmCarroPercorrido.toFixed(2)} Km, você terá gasto ${contaKmCarroPercorrido.toFixed(2)} Reais`
        );
    } else {
        contaKmCarroPercorrido = kmCarroPercorrido * 0.1; // Realiza a conta que o carro percorreu multiplicando por R$0,10
        alert(
            `Andando ${kmCarroPercorrido.toFixed(2)} Km, você terá gasto ${contaKmCarroPercorrido.toFixed(2)} Reais`
        );
    }

    total = contaDiariaCarro + contaKmCarroPercorrido;
    alert(`No total você ira gastar: ${total.toFixed(2)} Reais`);

// Verificação para saber se o carro escolhido é Luxo
} else if (carroEscolhido == "Luxo") {
    diariaCarro = parseInt(prompt("Quantos dias você ficou com o carro?"));
    contaDiariaCarro = diariaCarro * 150; // Realiza a operação da diária do carro

    alert(`Você ira gastar em diária: ${contaDiariaCarro.toFixed(2)} Reais`);

    kmCarroPercorrido = parseFloat(
        prompt("Quantos Kms você percorreu com o carro?")
    );
    // Realiza outra verificação para saber se o usuário andou menos que 200 kms
    if (kmCarroPercorrido <= 200) {
        contaKmCarroPercorrido = kmCarroPercorrido * 0.3; // Realiza a conta que o carro percorreu multiplicando por R$0,30
        alert(
            `Andando ${kmCarroPercorrido.toFixed(2)} Km, você terá gasto ${contaKmCarroPercorrido.toFixed(2)} Reais`
        );
    } else {
        contaKmCarroPercorrido = kmCarroPercorrido * 0.25; // Realiza a conta que o carro percorreu multiplicando por R$0,25
        alert(
            `Andando ${kmCarroPercorrido.toFixed(2)} Km, você terá gasto ${contaKmCarroPercorrido.toFixed(2)} Reais`
        );
    }

    total = contaDiariaCarro + contaKmCarroPercorrido;
    alert(`No total você ira gastar: ${total.toFixed(2)} Reais`);
}
