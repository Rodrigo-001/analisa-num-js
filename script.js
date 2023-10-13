listaAux = []

function verificarNum(num) {
    // verfica se o numero está contido na lista, retorna true ou false
    for (let i = 0; i < listaAux.length; i++) {
        if (listaAux[i] == num) {
            return true;
        }
    };
    return false;
}

function obterDados() {
    /**Obtém os dados como quantidade, maior e menor número, soma dos valores e média.     
     * @returns {number} - retorna a quantidade de números digitados.
     * @returns {number} - retorna o maior número digitado.
     * @returns {number} - retorna o menor número digitado.
     * @returns {number} - retorna a soma dos números digitados.
     * @returns {number} - retorna a média dos números digitados.
    */

    let qtd = listaAux.length;
    let maior = listaAux[0];
    let menor = listaAux[0];
    let soma = 0;
    let media = 0;

    // verifica se lista está vazia
    if (listaAux.length == 0) {
        alert('Adicione valores antes de finalizar');
    } else {
        // obtém maior e menor numero digitado
        for (let i = 0; i < listaAux.length; i++) {
            if (listaAux[i] > maior) {
                maior = listaAux[i];
            }
            if (listaAux[i] < menor) {
                menor = listaAux[i];
            }
            soma += listaAux[i];
        }
        //obtém média dos valores digitados 
        media = soma / qtd;        
    }
    return {
        qtd: qtd,
        maior: maior,
        menor: menor,
        soma: soma,
        media: media
    };
}

function adicionarNum() {
    /*Adiciona um número na lista e mostra na tela. */
    let inputnum = Number(document.querySelector('input#inputnum').value);
    let selectnum = document.querySelector('select#flista');

    // verifica se valor não é um número
    if (Number.isNaN(inputnum) || inputnum < 1 || inputnum > 100) {
        alert('Digite um número entre 1 e 100');

        // verifica se valor já está na lista
    } else if (verificarNum(inputnum) == true) {
        alert('Valor já digitado, tente outro!');
    }
    else {
        listaAux.push(inputnum);
        selectnum.innerHTML += `<option value="${inputnum}">Valor ${inputnum} adicionado</option>`;
    }
}
function mostrarDados() {
    /*Mostra os dados na tela. 
    Chama a função obterDados e exibe dados formatados na tela
    */
    let resultado = document.querySelector('div#resultado');
    let { qtd, maior, menor, soma, media } = obterDados();

    // mostra resultado na tela
    resultado.style.fontSize = '14px';
    // mostrar o resultado na tela formatado como lista 

    resultado.innerHTML = '<strong>RESULTADO</strong>';

    resultado.innerHTML += `<ul>`;

    resultado.innerHTML += `<br><li>Ao todo, temos ${qtd} números cadastrados;</li><br>`;

    resultado.innerHTML += `<li>O maior valor informado foi ${maior};</li><br>`;

    resultado.innerHTML += `<li>O menor valor informado foi ${menor};</li><br>`;

    resultado.innerHTML += `<li>Soma dos números: ${soma};</li><br>`

    resultado.innerHTML += `<li>A média dos números digitados é ${media}.</li></ul>`;

    resultado.innerHTML += '';

}