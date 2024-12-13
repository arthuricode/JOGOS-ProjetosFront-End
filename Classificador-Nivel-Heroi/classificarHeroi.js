// Importando o pacote readline para interagir com o usuário
const readline = require('readline');

// Criando interface para entrada e saída de dados
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Função para classificar o herói com base na quantidade de XP
function classificarHeroi(nome, xp) {
    let nivel;

    if (xp < 1000) {
        nivel = 'Ferro';
    } else if (xp <= 2000) {
        nivel = 'Bronze';
    } else if (xp <= 5000) {
        nivel = 'Prata';
    } else if (xp <= 7000) {
        nivel = 'Ouro';
    } else if (xp <= 8000) {
        nivel = 'Platina';
    } else if (xp <= 9000) {
        nivel = 'Ascendente';
    } else if (xp <= 10000) {
        nivel = 'Imortal';
    } else {
        nivel = 'Radiante';
    }

    console.log(`O Herói de nome ${nome} está no nível de ${nivel}`);
}

// Perguntando o nome do herói
rl.question('Digite o nome do Herói: ', (nome) => {
    // Perguntando a quantidade de XP do herói
    rl.question('Digite a quantidade de experiência (XP): ', (xpInput) => {
        const xp = parseInt(xpInput);

        // Validando se o XP é um número válido
        if (isNaN(xp)) {
            console.log('Por favor, insira um número válido para o XP.');
        } else {
            // Classificando o herói
            classificarHeroi(nome, xp);
        }

        // Encerrando a interface
        rl.close();
    });
});
