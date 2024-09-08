function calcularAmor() {
    const nome1 = document.getElementById('nome1').value.trim();
    const nome2 = document.getElementById('nome2').value.trim();

    if (nome1 === "" || nome2 === "") {
        alert("Por favor, preencha ambos os nomes!");
        return;
    }

    // Gerar um valor aleatório entre 0 e 100
    const percentualAmor = Math.floor(Math.random() * 101);

    // Exibir o resultado na tela
    const resultado = document.getElementById('resultado');
    resultado.textContent = `${percentualAmor}% de amor verdadeiro entre ${nome1} e ${nome2}!`;
}
