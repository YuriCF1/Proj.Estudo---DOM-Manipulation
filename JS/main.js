//__________________________________ANOTAÇÕES GERAIS

//Toda vez que há uma operação matemática de valor, o JS transforma tudo em uma string, que é um tipo mais forte

//___________CHAMADAS________________
const robotron = document.querySelector('#robotron')
const subtrair = document.querySelector('#subtrair')
const somar = document.querySelector('#somar')
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
function manipulaDados(operacao) {
    if (operacao === '-') {
        braco.value = parseInt(braco.value) - 1;
    } else if (operacao === '+'){ //Coloquei o 'else if' em vez do 'else' para ser mais coonciso
        braco.value = parseInt(braco.value) + 1;
    }
}

//-Arrays
//Pegando todos
const controle = document.querySelectorAll('.controle-ajuste')
//Pegar a operação v2
controle.forEach((elemento) => {
    elemento.addEventListener('click', (evento) => { //Chamando uma faunção anômima, por padrão já passa dos eventos
        //-Pegar o ID do elemento
        //console.log(evento.target.id) //Quando é input, value. Texto,textContent
        manipulaDados(evento.target.textContent) //Quando é input, value. Texto,textContent
        console.log(evento.target.textContent) //Quando é input, value. Texto,textContent
    })
})



