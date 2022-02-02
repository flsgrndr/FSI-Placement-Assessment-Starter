// HINT: You can delete this console.log after you no longer need it!
console.log('JavaScript code has loaded!')

let yourName = "Jason Marshall"

// We'll use these variables to track the counts of each cookie type
let gb = 0 // Gingerbread
let cc = 0 // Chocolate Chip
let sugar = 0 // Sugar Sprinkle

// selecting the element with an id of credit
let credit = document.querySelector('#credit')
// selecting the element with an id of add-gb
let gbPlusBtn = document.querySelector('#add-gb')
let gbMinusBtn = document.querySelector('#minus-gb')
let ccPlusBtn = document.querySelector('#add-cc')
let ccMinusBtn = document.querySelector('#minus-cc')
let sugarPlusBtn = document.querySelector('#add-sugar')
let sugarMinusBtn = document.querySelector('#minus-sugar')
let totalQuantity = document.querySelector('#qty-total')

function updateGbQuantity(gb){

    let quantity = document.querySelector('#qty-gb')
        quantity.innerHTML = gb

}

function updateCcQuantity(cc){

    let quantity = document.querySelector('#qty-cc')
        quantity.innerHTML = cc

}

function updateSugarQuantity(sugar){

    let quantity = document.querySelector('#qty-sugar')
        quantity.innerHTML = sugar

}

function updateTotalQuantity(totalQuantity){

        totalQuantity.innerHTML = gb + cc + sugar

}

// Code to update name display
credit.textContent = `Created by ${yourName}`

// Event listener for clicks on the "+" button for Gingerbread cookies
gbPlusBtn.addEventListener('click', function() {

    console.log('Gingerbread + button was clicked!')
    gb++
    updateGbQuantity(gb)
    updateTotalQuantity(totalQuantity)

})

gbMinusBtn.addEventListener('click', function() {

    console.log('Gingerbread -  button was clicked!')
    if(gb > 0){
        gb--
    } else {
        window.alert('No Gingerbread in order!')
    }
    updateGbQuantity(gb)
    updateTotalQuantity(totalQuantity)

})

ccPlusBtn.addEventListener('click', function() {

    console.log('Chocolate chip + button was clicked!')
    cc++
    updateCcQuantity(cc)
    updateTotalQuantity(totalQuantity)

})

ccMinusBtn.addEventListener('click', function() {

    console.log('Chocolate chip - button was clicked!')
    if(cc > 0){
        cc--
    } else {
        window.alert('No Chocolate Chip in order!')
    }
    updateCcQuantity(cc)
    updateTotalQuantity(totalQuantity)

})

sugarPlusBtn.addEventListener('click', function() {

    console.log('Sugar Sprinkle + button was clicked!')
    sugar++
    updateSugarQuantity(sugar)
    updateTotalQuantity(totalQuantity)

})

sugarMinusBtn.addEventListener('click', function() {

    console.log('Sugar Sprinkle - button was clicked!')
    if(sugar > 0){
        sugar--
    } else {
        window.alert('No Sugar Sprinkle in order!')
    }
    updateSugarQuantity(sugar)
    updateTotalQuantity(totalQuantity)

})

// TODO: Hook up event listeners for the rest of the buttons