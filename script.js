function generatePin() {
    const pin = Math.round(Math.random() * 10000);
    const pinString = pin + '';
    if (pinString.length == 4) {
        document.getElementById('display-pin').value=pin;
    }
    else{
        return generatePin;
    }
}

document.getElementById('keypad').addEventListener('click', function (event) {
    const number = event.target.innerText;
    const displayNumber = document.getElementById('display-number');
    if (isNaN(number)) {
        if (number == 'C') {
            displayNumber.value = '';
        }
    }
    else {
        const previousNumber = displayNumber.value;
        const newNumber = previousNumber + number;
        displayNumber.value = newNumber;
    }
})

document.getElementById('submit-btn').addEventListener('click', function () {
    const displayGeneratePin = document.getElementById('display-pin').value;
    const displayNumber = document.getElementById('display-number').value;
    
    const successMassage = document.getElementById('notify-success');
    const failedMassage = document.getElementById('notify-failed');

    if (displayGeneratePin == displayNumber) {
        successMassage.style.display = "block";
        failedMassage.style.display = "none";
    }
    else {
        failedMassage.style.display = "block";
        successMassage.style.display = "none";
    }
    
    document.getElementById('display-number').value = "";
})