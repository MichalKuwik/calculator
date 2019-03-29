//Pobieranie przyciskow od 0-9
const zeroBtn = document.getElementById('calc-zero');
const oneBtn = document.getElementById('calc-one');
const twoBtn = document.getElementById('calc-two');
const threeBtn = document.getElementById('calc-three');
const fourBtn = document.getElementById('calc-four');
const fiveBtn = document.getElementById('calc-five');
const sixBtn = document.getElementById('calc-six');
const sevenBtn = document.getElementById('calc-seven');
const eightBtn = document.getElementById('calc-eight');
const nineBtn = document.getElementById('calc-nine');

// button .
const decimalBtn = document.getElementById('calc-decimal');
//button AC
const clearBtn = document.getElementById('calc-clear');
//button backspace
const backspaceBtn = document.getElementById('calc-backspace');
//display value on screen
const displayValElement = document.getElementById('calc-display-val');

//Pobieranie przyciskow numerow
const calcNumBtns = document.getElementsByClassName('calc-btn-num');
//Pobieranie operatorow
const calcOperatorsBtns = document.getElementsByClassName('calc-btn-operator');

//zmienne 

let displayVal = '0'; //poczatkowa wartosc;
let pendingVal;
let evalStringArray = [];

//funkcja updateDisplayVal

const updateDisplayVal = (clickObj) => {
    let btnText = clickObj.target.innerText;

    if (displayVal === '0')
        displayVal = '';

    displayVal += btnText;
    displayValElement.innerText = displayVal;

};

//funckja performOpertation

const performOperation = (clickObj) => {
    let operator = clickObj.target.innerText;

    switch (operator) {
        case '+':
            pendingVal = displayVal;
            displayVal = '0';
            displayValElement.innerText = displayVal;
            evalStringArray.push(pendingVal);
            evalStringArray.push('+');
            break;

        case '-':
            pendingVal = displayVal;
            displayVal = '0';
            displayValElement.innerText = displayVal;
            evalStringArray.push(pendingVal);
            evalStringArray.push('-');
            break;

            case 'x':
            pendingVal = displayVal;
            displayVal = '0';
            displayValElement.innerText = displayVal;
            evalStringArray.push(pendingVal);
            evalStringArray.push('*');
            break;

            case '/':
            pendingVal = displayVal;
            displayVal = '0';
            displayValElement.innerText = displayVal;
            evalStringArray.push(pendingVal);
            evalStringArray.push('/');
            break;

            case '=':
            evalStringArray.push(displayVal);
            let evaluation = eval(evalStringArray.join(' '));
            displayVal = evaluation + '';
            displayValElement.innerText = displayVal;
            evalStringArray = [];
            break;

        default:
            break;
    }
};

//Petla ustawiajaca nasluchiwanie na wsyzstkie przyciski z numerowe
for (let i = 0; i < calcNumBtns.length; i++) {
    calcNumBtns[i].addEventListener('click', updateDisplayVal, false);
}

//Pętla ustawiajaca nasluchiwacz do przyciskow operatorów
for (let i = 0; i < calcOperatorsBtns.length; i++) {
    calcOperatorsBtns[i].addEventListener('click', performOperation, false);
}

//dodawanie onclicka do przycisku clearBtn w funckji
clearBtn.onclick = () => {
    displayVal = '0';
    pendingVal = undefined;
    evalStringArray = [];
    displayValElement.innerHTML = displayVal;
};

//dodawanie onclicka do przycisku backspaceBtn w funckji
backspaceBtn.onclick = () => {
    let lengthOfDisplayVal = displayVal.length;
    displayVal = displayVal.slice(0, lengthOfDisplayVal - 1);

    if (displayVal === '')
        displayVal = '0';

    displayValElement.innerText = displayVal;
};
//kropka btn w funkcji
decimalBtn.onclick = () => {
    if (!displayVal.includes('.'))
        displayVal += '.';
    displayValElement.innerText = displayVal;
};