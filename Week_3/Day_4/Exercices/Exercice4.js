let form = document.getElementById("MyForm");
let radiusInput = document.getElementById("radius");
let volumeOutput = document.getElementById("volume");

form.addEventListener("submit", function (event) {
    event.preventDefault();

    let radius = parseFloat(radiusInput.value);

    if (!isNaN(radius) && radius > 0) {
        let volume = (4 / 3) * Math.PI * Math.pow(radius, 3);
        volumeOutput.value = volume.toFixed(2);
    }
});
