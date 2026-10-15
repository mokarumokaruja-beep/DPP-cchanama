$(document).ready(function () {
    function randomColor() {
        const red = Math.floor(Math.random() * 256);
        const green = Math.floor(Math.random() * 256);
        const blue = Math.floor(Math.random() * 256);
        return "rgb(" + red + ", " + green + ", " + blue + ")";
    }

    $("#colorButton").on("click", function () {
        $("body").css("background-color", randomColor());
    });
});