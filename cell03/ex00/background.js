const button = document.getElementById("colorButton");

function randomColor() {
    const red = Math.floor(Math.random() * 256);
    const green = Math.floor(Math.random() * 256);
    const blue = Math.floor(Math.random() * 256);
    return "rgb(" + red + ", " + green + ", " + blue + ")";
}

button.addEventListener("click", function () {
    document.body.style.backgroundColor = randomColor();
});