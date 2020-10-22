
let calc = document.createElement('div')
calc.setAttribute("class","calculator")
document.body.appendChild(calc)


let res = document.createElement('div')
res.setAttribute("class", "result")
res.innerHTML=`  <h1 id="output">0</h1>
<p id="input"></p>`

calc.appendChild(res)


let calckeys =  document.createElement('div')
calckeys.setAttribute("class", "calculator-keys")
calckeys.innerHTML=` <div class="row-1">
<button type="button" class="operator"  onclick="btnval('*')">*</button>
<button type="button" class="operator"  onclick="btnval('/')">/</button>
<button type="button" class="operator"  onclick="btnval('C')">C</button>

</div>
<div class="row-2">
<button type="button" class="numbers"  onclick="btnval('0')">0</button>
<button type="button" class="numbers"  onclick="btnval('1')">1</button>
<button type="button" class="numbers"  onclick="btnval('2')">2</button>
<button type="button" class="operator"  onclick="btnval('%')">%</button>
</div>
<div class="row-3">
<button type="button" class="numbers"  onclick="btnval('3')">3</button>
<button type="button" class="numbers"  onclick="btnval('4')">4</button>
<button type="button" class="numbers"  onclick="btnval('5')">5</button>
<button type="button" class="operator"  onclick="btnval('+')">+</button>
</div>
<div class="row-4">
<button type="button" class="numbers"  onclick="btnval('6')">6</button>
<button type="button" class="numbers"  onclick="btnval('7')">7</button>
<button type="button" class="numbers"  onclick="btnval('8')">8</button>
<button type="button" class="operator"  onclick="btnval('=')">-</button>

</div>

<div class="row-5">
<button type="button" class="numbers"  onclick="btnval('9')">9</button>
<button type="button" class="numbers"  onclick="btnval('.')">.</button>
<button type="button" class="numbers"  onclick="btnval('AC')">AC</button>

<button type="button" class="operator"  onclick="btnval('=')">=</button>
</div>`
calc.appendChild(calckeys)




let input = document.getElementById("input")
let output = document.getElementById("output")
function btnval(data) {


    switch (data) {
        case 'AC':
            input.innerHTML = ""
            output.innerHTML = 0;
            break;

        case 'C':
            input.innerHTML = input.innerHTML.slice(0, input.innerHTML.length - 1)
            output.innerHTML = eval(input.innerHTML) === undefined ? 0 : eval(input.innerHTML)
            break;

        case "=":
            output.innerHTML = eval(input.innerHTML) === undefined ? 0 : eval(input.innerHTML)
            break;

        default:
            input.innerHTML += data;
    }
}


window.onkeyup = function (key) {
    if (key.keyCode == 187 || key.keyCode == 13 || key.keyCode == 18) {
        btnval('=')
    }
    if (key.keyCode == 8) {
        btnval('C')
    }
    if ((key.key >= 0 && key.key <= 9) || key.key <= '%' || key.key <= '/' ||
        key.key <= '*' || key.key <= '-' ||
        key.key <= '+') {

        btnval(key.key)
    }

    else {
        alert('Only Numbers Allowed!')
    }

}