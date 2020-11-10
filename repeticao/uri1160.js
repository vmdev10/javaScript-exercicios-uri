const numeroDeTestes = prompt('Digite o número de testes')

for(let contador = 1; contador <= numeroDeTestes; contador++) {
    let entrada = prompt().split(' ')
    let populacaoDaCidadeA = parseInt(entrada[0])
    let populacaoDaCidadeB = parseInt(entrada[1])
    let crescimentoDaPopulacaoA = parseFloat(entrada[2])
    let crescimentoDaPopulacaoB = parseFloat(entrada[3])
    console.log(populacaoDaCidadeA, populacaoDaCidadeB, crescimentoDaPopulacaoA, crescimentoDaPopulacaoB)


}