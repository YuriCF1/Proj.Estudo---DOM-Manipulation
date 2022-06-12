//__________________________________ANOTAÇÕES GERAIS

//Toda vez que há uma operação matemática de valor, o JS transforma tudo em uma string, que é um tipo mais forte


//__________________________________CÓDIGO
//1- Função de clique
const controle = document.querySelectorAll('[data-controle]');//Substitui a necessidade de procurar pelo 'textContent'. Agora busca pelo dataSet.controle
controle.forEach((elemento) => {
    elemento.addEventListener('click', (evento) => { //Chamando uma faunção anômima, por padrão já passa dos eventos
        //-Pegar o ID do elemento
        //console.log(evento.target.id) //Quando é input, value. Texto,textContent
        manipulaDados(evento.target.dataset.controle, evento.target.parentNode) //Saber o que está no data-controle (- ou +). E pegar o elemento pai de onde foi clicado
        atualizaEstatisticas(evento.target.dataset.peca)//Manda o tipo de peça
    })
})

//2- Adicionando quantas unidades de braço, perna...
function manipulaDados(operacao, controle) {
    const contador = controle.querySelector('[data-contador]') //Não prciso colocar valor na no data nesse caso
    if (operacao === '-') {
        contador.value = parseInt(contador.value) - 1;
    } else if (operacao === '+') { //Coloquei o 'else if' em vez do 'else' para ser mais coonciso
        contador.value = parseInt(contador.value) + 1;
    }
}

//3 - Pegando todosMétodo usando data atributtes
const estatistica = document.querySelectorAll('[data-estatistica]');
console.log(estatistica)

//4 - Definindo os status das peças
const pecas = {
    "bracos": {
        "forca": 29,
        "poder": 35,
        "energia": -21,
        "velocidade": -5
    },

    "blindagem": {
        "forca": 41,
        "poder": 20,
        "energia": 0,
        "velocidade": -20
    },
    "nucleos": {
        "forca": 0,
        "poder": 7,
        "energia": 48,
        "velocidade": -24
    },
    "pernas": {
        "forca": 27,
        "poder": 21,
        "energia": -32,
        "velocidade": 42
    },
    "foguetes": {
        "forca": 0,
        "poder": 28,
        "energia": 0,
        "velocidade": -2
    }
}

//5 - Atualizando o status das peças
function atualizaEstatisticas(peca) {
    //console.log(pecas[peca]) //Pega a peça, e busca o objeto [] com o nome dela dentro do objeto 'pecas'
    estatistica.forEach((elemento) => {
        console.log(elemento.dataset.estatistica)
        console.log(elemento.textContent)

        elemento.textContent = parseInt(elemento.textContent) + pecas[peca][elemento.dataset.estatistica]

    })
}

//6 - Definindo fonte das imagens 
const imageSrc = [
    'img/CoresDinamicas/amarelo.png',
    'img/CoresDinamicas/branco.png',
    'img/CoresDinamicas/preto.png',
    'img/CoresDinamicas/rosa.png',
    'img/CoresDinamicas/vermelho.png',
    'img/CoresDinamicas/azul.png',

]

//7 - Defininindo função de trocar cor do botão
const botao = document.querySelector('.botao')
const imgRobo = document.querySelector('.robo')
let i = 0;

botao.addEventListener('click', () => {
    if (i > imageSrc.length - 1) {
        i = 0;
    }
    imgRobo.setAttribute('src', imageSrc[i])
    i++

})
