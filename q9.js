function resultSum() {
    let firstNumb =parseInt(document.querySelector("#first").value);
    let secondNumb = parseInt(document.querySelector("#second").value);

     let showResult = firstNumb + secondNumb;
     alert(showResult);

}

function resultDiff () {
    let firstNumb =parseInt(document.querySelector("#first").value);
    let secondNumb = parseInt(document.querySelector("#second").value);

    let showResult = firstNumb - secondNumb;
    alert(showResult);
}

function resultMulti() {
    let firstNumb =parseInt(document.querySelector("#first").value);
    let secondNumb = parseInt(document.querySelector("#second").value);

    let showResult = firstNumb * secondNumb;
    alert(showResult);
}

function resultDiv() {
    let firstNumb =parseInt(document.querySelector("#first").value);
    let secondNumb = parseInt(document.querySelector("#second").value);

    let showResult = firstNumb / secondNumb;
    alert(showResult);
}

function resultRem() {
    let firstNumb =parseInt(document.querySelector("#first").value);
    let secondNumb = parseInt(document.querySelector("#second").value);

    let showResult = firstNumb % secondNumb;
    alert(showResult);
}