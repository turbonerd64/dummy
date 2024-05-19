document.getElementById('incrementButton').addEventListener('click', function() {
    const numberElement = document.getElementById('number');
    let currentNumber = parseInt(numberElement.textContent);
    numberElement.textContent = currentNumber + 1;
});
