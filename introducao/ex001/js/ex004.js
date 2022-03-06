function somar() {

    var txtn1 = window.document.getElementById('txtn1')
    var txtn2 = window.document.getElementById('txtn2')
    var result = window.document.getElementById('result')

    var n1 = Number(txtn1.value)
    var n2 = Number(txtn2.value)
    var resultado = n1 + n2

    result.innerHTML = resultado
}