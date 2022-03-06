var area = window.document.getElementById('area')

area.addEventListener('click', clicar)
area.addEventListener('mouseenter', mouseEnter)
area.addEventListener('mouseout', mouseOut)

function clicar() {
    area.innerText = 'clicou!'
    area.style.background = 'blue'
}
function mouseEnter() {
    area.innerText = 'Colocou o mouse!'
    area.style.background = 'red'
}
function mouseOut() {
    area.innerText = 'Retirou o mouse!'
    area.style.background = 'blue'
}

