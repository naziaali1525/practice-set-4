let maths;
let english;
let computerSkills;

    function showResult() {
        maths = parseInt(document.querySelector("#first").value);
        english = parseInt(document.querySelector("#second").value);
        computerSkills = parseInt(document.querySelector("#third").value);

        if (maths > 20 && english > 10 && computerSkills > 50) {
           alert("pass")
        } else {
           alert("fail");
        }
    }