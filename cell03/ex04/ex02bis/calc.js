$(document).ready(function () {
    function isPositiveInteger(text) {
        return /^[0-9]+$/.test(text);
    }

    $("#button").on("click", function () {
        const leftText = $("#left").val();
        const rightText = $("#right").val();
        const operator = $("#operator").val();

        if (!isPositiveInteger(leftText) || !isPositiveInteger(rightText)) {
            alert("Error :(");
            return;
        }

        const left = Number(leftText);
        const right = Number(rightText);

        if ((operator === "/" || operator === "%") && right === 0) {
            alert("It's over 9000!");
            console.log("It's over 9000!");
            return;
        }

        let result;
        if (operator === "+") {
            result = left + right;
        } else if (operator === "-") {
            result = left - right;
        } else if (operator === "*") {
            result = left * right;
        } else if (operator === "/") {
            result = left / right;
        } else {
            result = left % right;
        }

        alert(result);
        console.log(result);
    });

    setInterval(function () {
        alert("Please, use me...");
    }, 30000);
});