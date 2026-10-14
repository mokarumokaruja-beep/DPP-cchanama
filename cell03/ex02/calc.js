const button = document.getElementById("button");

function isPositiveInteger(text) {
    return /^[0-9]+$/.test(text);
}

button.addEventListener("click", function () {
    const leftText = document.getElementById("left").value;
    const rightText = document.getElementById("right").value;
    const operator = document.getElementById("operator").value;

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