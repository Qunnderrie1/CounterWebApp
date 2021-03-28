const increase = document.getElementById('increaseBtn')
const reset = document.getElementById('resetBtn')
const decreaseBtn = document.getElementById('decreaseBtn')
let numberText = document.getElementById('numberCounter')

let counter = 0;

increase.addEventListener('click', function()
{

    counter
  numberText.textContent = counter++

  numberColor()

})
reset.addEventListener('click', function()
{
    counter = 0

  numberText.textContent = counter
  numberColor()

})
decreaseBtn.addEventListener('click', function()
{
    counter

  numberText.textContent = --counter
  numberColor()

})


function numberColor()
{
    if(counter < 0)
    {
        numberText.style.color = "Darkred"
    }
    else if(counter > 1)
    {
        numberText.style.color = "Darkgreen"
    }
    else if(counter == 0)
    {
        numberText.style.color = "white"
    }
}

