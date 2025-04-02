let diariaCarro;
let contaDiariaCarro;

let kmCarroPercorrido;
let contaKmCarroPercorrido;

let carroEscolhido = prompt("Qual é seu carro? (Popular - Luxo)");

if (carroEscolhido == "Popular") {
    diariaCarro = parseInt(prompt("Quantos dias você ficou com o carro?"));
    contaDiariaCarro = diariaCarro * 90;

    alert(`Você ira gastar em diária: ${contaDiariaCarro} Reais`);

    kmCarroPercorrido = parseFloat(
        prompt("Quantos Kms você percorreu com o carro?")
    );

    if (kmCarroPercorrido <= 100) {
        contaKmCarroPercorrido = kmCarroPercorrido * 0.2;
        alert(
            `Andando ${kmCarroPercorrido} Km, você terá gasto ${contaKmCarroPercorrido} Reais`
        );
    } else {
        contaKmCarroPercorrido = kmCarroPercorrido * 0.1;
        alert(
            `Andando ${kmCarroPercorrido} Km, você terá gasto ${contaKmCarroPercorrido} Reais`
        );
    }

    total = contaDiariaCarro + contaKmCarroPercorrido;

    alert(`No total você ira gastar: ${total} Reais`);
} else if (carroEscolhido == "Luxo") {
    diariaCarro = parseInt(prompt("Quantos dias você ficou com o carro?"));
    contaDiariaCarro = diariaCarro * 150;

    alert(`Você ira gastar em diária: ${contaDiariaCarro} Reais`);

    kmCarroPercorrido = parseFloat(
        prompt("Quantos Kms você percorreu com o carro?")
    );

    if (kmCarroPercorrido <= 200) {
        contaKmCarroPercorrido = kmCarroPercorrido * 0.3;
        alert(
            `Andando ${kmCarroPercorrido} Km, você terá gasto ${contaKmCarroPercorrido} Reais`
        );
    } else {
        contaKmCarroPercorrido = kmCarroPercorrido * 0.25;
        alert(
            `Andando ${kmCarroPercorrido} Km, você terá gasto ${contaKmCarroPercorrido} Reais`
        );
    }

    total = contaDiariaCarro + contaKmCarroPercorrido;

    alert(`No total você ira gastar: ${total} Reais`);
}
