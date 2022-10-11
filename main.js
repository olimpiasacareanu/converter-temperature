let valueC = document.querySelector('.celsius input ')
let valueF = document.querySelector('.fahrenheit input ')

valueC.addEventListener('input', ()=>{
    let valueC = document.querySelector('.celsius input ')
    let fahrenheit = 1.8 * valueC.value + 32
    let valueF = document.querySelector('.fahrenheit input ')
    valueF.value = parseFloat(fahrenheit.toFixed(2))
})

valueF.addEventListener('input', ()=>{
    let valueF = document.querySelector('.fahrenheit input ')
    let celsius = (valueF.value-32)/1.8
    let valueC = document.querySelector('.celsius input ')
    valueC.value = parseFloat(celsius.toFixed(2))
})