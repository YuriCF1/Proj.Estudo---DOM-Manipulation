const robotron = document.querySelector('#robotron')


//Modo 1 de declarar uma função anonima 
// robotron.addEventListener('click', function() {
//     console.log('CLiquei no robo')

// })


//Modo 2 de declarar uma função anonima 
robotron.addEventListener('click', (evento) => {
    console.log('CLiquei no robo')
    console.log(evento)

})

function dizOi(nome) {
    console.log('Bem vindo ao Robotron 2000, ' + nome)
}

dizOi('Yuri')
