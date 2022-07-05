/*
 * javascript pocitadlo
 */

let pocitadlo = 0

document.getElementById("decreaseButton").onclick = function () {
    pocitadlo -= 1;
    document.getElementById("pocitadloLabel").innerHTML = pocitadlo;
}

document.getElementById("resetButton").onclick = function () {
    pocitadlo = 0 ;
    document.getElementById("pocitadloLabel").innerHTML = pocitadlo;
}

document.getElementById("increaseButton").onclick = function () {
    pocitadlo += 1;
    document.getElementById("pocitadloLabel").innerHTML = pocitadlo;
}
