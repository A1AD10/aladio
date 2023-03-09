const urlAluraBook = 'https://a1ad10.github.io/alurabook/'
const urlAnalisador = 'https://a1ad10.github.io/analisador-de-numeros/'
const urlNumero = 'https://jogo-numero-secreto-a1ad10.vercel.app/'

const box1 = document.querySelector('.box-1')

box1.addEventListener('click', function() {
    // alert('OK!')
    const win = window.open(urlAluraBook, '_blank')
    win.focus()
})

const box2 = document.querySelector('.box-2')

box2.addEventListener('click', function() {
    const win = window.open(urlAnalisador, '_blank')
    win.focus()
})

const box3 = document.querySelector('.box-3')

box3.addEventListener('click', function() {
    const win = window.open(urlNumero, '_blank')
    win.focus()
})