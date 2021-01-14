const idInput = document.getElementById('idInput')
const colorInput = document.getElementById('colorInput')

function setCard(){
    let card = document.getElementById(idInput.value)
    card.style.color = colorInput.value
    // console.log(card)
}

// document.getElementById('resetStyle').type = 'reset'
// const resetStyle = document.getElementById('resetStyle')

function reset() {
    let card = document.getElementById(resetStyle);
    card.style.color = grey;
  }