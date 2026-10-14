const balloon = document.getElementById("balloon");
const colors = ["red", "green", "blue"];
let size = 200;
let colorIndex = 0;

function updateBalloon() {
    balloon.style.width = size + "px";
    balloon.style.height = size + "px";
    balloon.style.backgroundColor = colors[colorIndex];
}

balloon.addEventListener("click", function () {
    size = size + 10;
    colorIndex = (colorIndex + 1) % colors.length;
    if (size > 420) {
        size = 200;
        colorIndex = 0;
    }
    updateBalloon();
});

balloon.addEventListener("mouseleave", function () {
    size = size - 5;
    if (size < 200) {
        size = 200;
    }
    colorIndex = (colorIndex - 1 + colors.length) % colors.length;
    updateBalloon();
});