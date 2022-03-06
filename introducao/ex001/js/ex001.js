var a = 10
var b = 20

function soma() {
    return a + b
}

function subtracao() {
    return a - b
}

function multiplicacao() {
    return a * b

}
function divisao() {
    return a / b
}

//alert(soma(10, 20))
//alert(subtracao(50, 10))
//alert(multiplicacao(5, 5))
//alert(divisao(25, 5))


//confirm('Olá Mundo!')
//prompt('Digite alguma coisa!')

var nome = String
var idade = Number

nome = prompt('Seu nome')
idade = prompt('Sua idade')

// alert('Olá ' + nome + ', sua idade é ' + idade)
// alert(`Olá ${nome}, sua idade é ${idade}`)
// alert(`Olá ${nome.toUpperCase()}, sua idade é ${idade}`)

document.write(`<h1>Olá ${nome.toUpperCase()}, sua idade é ${idade}</h1>`)
novoNome = nome.replace('y', 'i').toLowerCase()
document.write(`<h1>Olá ${novoNome}, sua idade é ${idade}</h1>`)