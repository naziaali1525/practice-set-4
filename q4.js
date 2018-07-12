let appleCost = 10;
let bananaCost = 15;
let mangoCost = 8;

let apple;
let banana;
let mango;

    function totalCost() {
        apple = parseInt(document.querySelector("#first").value);
        banana = parseInt(document.querySelector("#second").value);
        mango = parseInt(document.querySelector("#third").value);

        let fruitsAmount = apple * appleCost + banana * bananaCost + mango * mangoCost;
        alert(fruitsAmount);
    }
