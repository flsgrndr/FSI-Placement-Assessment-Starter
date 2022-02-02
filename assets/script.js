// Defines what my name is for crediting purposes
let yourName = "Jason Marshall"

let gb = 0 // Gingerbread Cookies
let cc = 0 // Chocolate Chip Cookies
let sugar = 0 // Sugar Cookies

// Defines where on the page it will be credited to its designer
let credit = document.querySelector('#credit')

// Defining the Gingerbread Cookie Plus or Minus buttons
let gbPlusBtn = document.querySelector('#add-gb')
let gbMinusBtn = document.querySelector('#minus-gb')

// Defining the Chocolate Chip Cookie Plus of Minus buttons
let ccPlusBtn = document.querySelector('#add-cc')
let ccMinusBtn = document.querySelector('#minus-cc')

// Defining the Sugar Cookie Plus or Minus buttons
let sugarPlusBtn = document.querySelector('#add-sugar')
let sugarMinusBtn = document.querySelector('#minus-sugar')

// Defining the Total Quantity of all items
let totalQuantity = document.querySelector('#qty-total')

// Function to update the visible quantity of Gingerbread Cookies
function updateGbQuantity(gb){

    let quantity = document.querySelector('#qty-gb')
        quantity.innerHTML = gb

}

// Function to update the visible quantity of Chocolate Chip Cookies
function updateCcQuantity(cc){

    let quantity = document.querySelector('#qty-cc')
        quantity.innerHTML = cc

}

// Function to update the visible quantity of Sugar Cookies
function updateSugarQuantity(sugar){

    let quantity = document.querySelector('#qty-sugar')
        quantity.innerHTML = sugar

}

// Function to update the visible total quantity of all items
function updateTotalQuantity(totalQuantity){

        totalQuantity.innerHTML = gb + cc + sugar

}

// Changes the "created by" text at the bottom to my name as defined above
credit.textContent = `Created by ${yourName}`

// Event listener to add to the Gingerbread Cookie total and the overall total
gbPlusBtn.addEventListener('click', function() {

    console.log('Gingerbread + button was clicked!')
    gb++
    updateGbQuantity(gb)
    updateTotalQuantity(totalQuantity)

})

// Event listener to subtract from the Gingerbread Cookie total and the overall total
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

// Event listener to add to the Chocolate Chip Cookie total and the overall total
ccPlusBtn.addEventListener('click', function() {

    console.log('Chocolate chip + button was clicked!')
    cc++
    updateCcQuantity(cc)
    updateTotalQuantity(totalQuantity)

})

// Event listener to subtract from the Chocolate Chip Cookie total and the overall total
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

// Event listener to add to the Sugar Cookie total and the overall total
sugarPlusBtn.addEventListener('click', function() {

    console.log('Sugar Sprinkle + button was clicked!')
    sugar++
    updateSugarQuantity(sugar)
    updateTotalQuantity(totalQuantity)

})

// Event listener to subtract from the Sugar Cookie total and the overall total
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