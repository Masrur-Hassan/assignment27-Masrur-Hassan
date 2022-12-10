/* banking page css */

/* catch the Number */
document.getElementById('deposit-button').addEventListener('click', function () {
    const getInputNumber = document.getElementById('inputYourDipositAmmount');
    const getInput = getInputNumber.value;
    const getInputAmmout = parseFloat(getInput);
    //console.log(getInput);

    //add input numberwith depostit total
    const depositToatal = document.getElementById('deposit-total');


    //  previous and next number add
    const previousNumber = depositToatal.innerText;
    const previousNumberAmmount = parseFloat(previousNumber);
    const adWithPreviousNumber = previousNumberAmmount + getInputAmmout;
    depositToatal.innerText = adWithPreviousNumber;

    //clear input
    getInputNumber.value = '';

    //update balance

    const updateTotal = document.getElementById('total');
    const updateTotalText = updateTotal.innerText;
    const updateTotalAmmout = parseFloat(updateTotalText);
    const balanceTotal = updateTotalAmmout + getInputAmmout;
    updateTotal.innerText = balanceTotal;

})



/* banking page css */

/* catch the Number */
document.getElementById('widraw-button').addEventListener('click', function () {
    const getWidrawInputNumber = document.getElementById('inputYourWidrawAmmount');
    const getWidrawInput = getWidrawInputNumber.value;
    const getWidrawInputAmmout = parseFloat(getWidrawInput);
    //console.log(getInput);

    //add input number with  depostit total
    const widrawToatal = document.getElementById('widraw-total');


    //  previous and next number add
    const previousWidrawNumber = widrawToatal.innerText;
    const previousWidrawNumberAmmount = parseFloat(previousWidrawNumber);
    const adWithPreviousWidrawNumber = previousWidrawNumberAmmount + getWidrawInputAmmout;
    widrawToatal.innerText = adWithPreviousWidrawNumber;

    //clear input
    getWidrawInputNumber.value = '';

    //update balance

    const updateWidrawTotal = document.getElementById('total');
    const updateWidrawTotalText = updateWidrawTotal.innerText;
    const updateWidrawTotalAmmout = parseFloat(updateWidrawTotalText);
    const balanceTotal = updateWidrawTotalAmmout - getWidrawInputAmmout;
    updateWidrawTotal.innerText = balanceTotal;

})