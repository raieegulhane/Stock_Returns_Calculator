const initialValueInput = document.querySelector('#initial-value');
const currentValueInput = document.querySelector('#current-value');
const stockQuantityInput = document.querySelector('#stock-quantity');
const checkButton = document.querySelector('#button-check');
const message = document.querySelector('#message');

function showMessage (text) {
    message.innerText = text;
}

function profitLossCalculator (initial, current, quantity) {
    if (initial < current) {
        // profit
        var profit = (current - initial) * quantity;
        var profitPercent = (profit / initial) * 100;

        message.style.color = 'green';
        showMessage (`You have made profit of ₹ ${profit}. Profit percentage is ${profitPercent}%`);
    } else if (initial > current) {
        // loss
        var loss = (initial - current) * quantity;
        var lossPercent = (loss / initial) * 100;

        message.style.color = 'red';
        showMessage (`You have made loss of ₹ ${loss}. Loss percentage is ${lossPercent}%`);
    } else {
        showMessage ("No profit or loss has occured.");
    }
}

function clickHandler() {
    if (initialValueInput.value && currentValueInput.value && stockQuantityInput.value) {
        profitLossCalculator(Number(initialValueInput.value), Number(currentValueInput.value), Number(stockQuantityInput.value));
    } else {
        showMessage ('Enter valid input to continue');
    }

    
}

checkButton.addEventListener('click', clickHandler);
