var opnd1 = 0;
var opnd2 = 0;
var res = 0;
var sign = "";
var displaynum = "";
var punto = true;
var op = true;

function clearDisplay() {
    document.getElementById('display').value = "0";
    opnd1 = opnd2 = res = 0.0;
    punto = op = true;
}

function btnOpera(value) {
    if(op) {
        sign = value;
        opnd1 = Number.parseFloat(document.getElementById('display').value);
        op = false;
    }
    document.getElementById('display').value = "0";
    punto = true;
}

function btnIgual() {
    if (!op) {
        opnd2 = Number.parseFloat( document.getElementById('display').value);
        switch (sign) {
            case '+': res = opnd1 + opnd2; break;
            case '-': res = opnd1 - opnd2; break;
            case '*': res = opnd1 * opnd2; break;
            case '/': res = opnd1 / opnd2; break;
        }
        document.getElementById('display').value = res;
        punto = op = true;
        opnd1 = opnd2 = 0;
    }
}

function btnNumero(value) {
    displaynum = document.getElementById('display').value;
    if (displaynum == '0') {
        displaynum = "";
    }
    displaynum = displaynum + value;
    document.getElementById('display').value = displaynum;
}

function btnPunto() {
    if(punto) {
        displaynum = document.getElementById('display').value;
        displaynum = displaynum + '.';
        document.getElementById('display').value = displaynum;
        punto = false;
    }
}