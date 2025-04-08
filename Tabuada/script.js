var btn = document.querySelector("#btn")
var inputNum = document.querySelector("#num")

function tabuada() {
    var numTabuada = inputNum.value
    var res = document.querySelector(".res")
    res.innerHTML = ""

    for (var inicio = 1; inicio <= 10; inicio++) {
        res.innerHTML += `<p>${numTabuada} x ${inicio} = ${numTabuada * inicio}</p>`
    }
}
    btn.addEventListener("click", tabuada)