let currentInput = '';
let currentOperacao = '';
let previousInput = '';

function addNum(number) {
    currentInput += number; 
    updateDisplay(currentInput); 
}

function setOperacao(operador) {
    if (currentInput === '') return; 
    if (previousInput !== '') {
        calcular();
    }
    currentOperacao = operador;
    previousInput = currentInput;
    currentInput = '';
}

function calcular() {
    if (previousInput === '' || currentInput === '') return;
    let result;
    const prev = parseFloat(previousInput);
    const current = parseFloat(currentInput);

    switch (currentOperacao) {
        case '+':
            result = prev + current;
            break;
        case '-':
            result = prev - current;
            break;
        case '*':
            result = prev * current;
            break;
        case '/':
            if (current === 0) {
                alert("Erro: Divisão por zero!");
                result = '';
            } else {
                result = prev / current;
            }
            break;
        default:
            return;
    }

    currentInput = result.toString();
    currentOperacao = '';
    previousInput = '';
    updateDisplay(currentInput);
}

function limpar() {
    currentInput = '';
    previousInput = '';
    currentOperacao = '';
    updateDisplay('0');
}

function updateDisplay(value) {
    document.getElementById('display').value = value;
}
