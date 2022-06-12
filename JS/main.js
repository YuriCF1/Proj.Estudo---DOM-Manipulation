//__________________________________ANOTAÇÕES GERAIS

//Toda vez que há uma operação matemática de valor, o JS transforma tudo em uma string, que é um tipo mais forte

//___________CHAMADAS________________
const robotron = document.querySelector('#robotron')
// const subtrair = document.querySelector('#subtrair')
// const somar = document.querySelector('#somar')

//Forma Especifica
//const braco = document.querySelector('#braco')

//1--Forma Geral - Pegar a árvore
const braco = document.querySelector('#braco')


//-Funções anônimas
//--Modo 1 de declarar uma função anonima 
// robotron.addEventListener('click', function() {
//     console.log('CLiquei no robo')
// })

//--Modo 2 de declarar uma função anonima 
robotron.addEventListener('click', (evento) => {
    console.log('CLiquei no robo')
    console.log(evento)
})

function dizOi(nome) {
    console.log('Bem vindo ao Robotron 2000, ' + nome)
}

dizOi('Yuri')

//-Separando a responsidade_________________________________
//--Sem separar a responsabilidade

// somar.addEventListener('click', () => {
//     braco.value = parseInt(braco.value) + 1;
// })

// subtrair.addEventListener('click', (evento) => {
//     braco.value = parseInt(braco.value) - 1;
// })

//--Separando a responsbilidade

//Pegar a operação v1
// somar.addEventListener('click', () => {manipulaDados('somar')});
// subtrair.addEventListener('click', () => {manipulaDados('subtrair')});

//Executar a operação
function manipulaDados(operacao, controle) {
//Forma Geral - Pegar a árvore
// const contador = controle.querySelector('.controle-contador')
//     if (operacao === '-') {
//         contador.value = parseInt(contador.value) - 1;
//     } else if (operacao === '+'){ //Coloquei o 'else if' em vez do 'else' para ser mais coonciso
//         contador.value = parseInt(contador.value) + 1;
//     }

//Forma Geral - Pegar a árvore
const contador = controle.querySelector('[data-contador]') //Não prciso colocar valor na no data nesse caso
    if (operacao === '-') {
        contador.value = parseInt(contador.value) - 1;
    } else if (operacao === '+'){ //Coloquei o 'else if' em vez do 'else' para ser mais coonciso
        contador.value = parseInt(contador.value) + 1;
    }
}
// const peca = document.querySelector('#peca')
//     if (operacao === '-') {
//         peca.value = parseInt(peca.value) - 1;
//     } else if (operacao === '+'){ //Coloquei o 'else if' em vez do 'else' para ser mais coonciso
//         peca.value = parseInt(peca.value) + 1;
//     }

//
//2--Pegando todos pela classe
// const controle = document.querySelectorAll('.controle-ajuste')

//Pegar a operação v2
// controle.forEach((elemento) => {
//     elemento.addEventListener('click', (evento) => { //Chamando uma faunção anômima, por padrão já passa dos eventos
//         //-Pegar o ID do elemento
//         //console.log(evento.target.id) //Quando é input, value. Texto,textContent
//         manipulaDados(evento.target.textContent, evento.target.parentNode) //Quando é input, value. Texto,textContent
        
//         console.log(evento.target.textContent) //Quando é input, value. Texto,textContent
//         console.log(evento.target.parentNode) //Saber o elemento pai
//     })
// })




//3--Pegando todosMétodo usando data atributtes
const controle = document.querySelectorAll('[data-controle]');//Substitui a necessidade de procurar pelo 'textContent'. Agora busca pelo dataSet.controle
const estatistica = document.querySelectorAll('[data-estatistica]');//Substitui a necessidade de procurar pelo 'textContent'. Agora busca pelo dataSet.controle
console.log(estatistica)

//Pegar a operação v2
controle.forEach((elemento) => {
    elemento.addEventListener('click', (evento) => { //Chamando uma faunção anômima, por padrão já passa dos eventos
        //-Pegar o ID do elemento
        //console.log(evento.target.id) //Quando é input, value. Texto,textContent
        manipulaDados(evento.target.dataset.controle, evento.target.parentNode) //Quando é input, value. Texto,textContent
        atualizaEstatisticas(evento.target.dataset.peca)//Manda o tipo de peça

        // console.log(evento.target.textContent) //Quando é input, value. Texto,textContent
        // console.log(evento.target.parentNode) //Saber o elemento pai
    })
})

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
    "nucleos":{
        "forca": 0,
        "poder": 7,
        "energia": 48,
        "velocidade": -24
    },
    "pernas":{
        "forca": 27,
        "poder": 21,
        "energia": -32,
        "velocidade": 42
    },
    "foguetes":{
        "forca": 0,
        "poder": 28,
        "energia": 0,
        "velocidade": -2
    }
  }

function atualizaEstatisticas(peca) {
    //console.log(pecas[peca]) //Pega a peça, e busca o objeto [] com o nome dela dentro do objeto 'pecas'
    
    estatistica.forEach((elemento) => {
        console.log(elemento.dataset.estatistica)
        console.log(elemento.textContent)
        
        elemento.textContent = parseInt(elemento.textContent) + pecas[peca][elemento.dataset.estatistica]

    })
}