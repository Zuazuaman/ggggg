const yesButton = document.getElementById("yesButton");
const noButton = document.getElementById("noButton");
const resultContainer = document.querySelector(".result-container");
const resultText = document.getElementById("resultText");
const resultImage = document.getElementById("resultImage");

noButton.addEventListener("mouseover", () => {
    const maxX = window.innerWidth - noButton.offsetWidth;
    const maxY = window.innerHeight - noButton.offsetHeight;
    const randomX = Math.random() * maxX;
    const randomY = Math.random() * maxY;
    
    noButton.style.left = randomX + "px";
    noButton.style.top = randomY + "px";
});

noButton.addEventListener("click", () => {
    resultContainer.style.display = "block";
    resultText.textContent = "Anda memilih No!";
    resultImage.src = "no_result_image.jpg"; // Ganti dengan URL gambar No
});

yesButton.addEventListener("click", () => {
    resultContainer.style.display = "block";
    resultText.textContent = "Selamat! Anda memilih Yes!";
    resultImage.src = "yes_result_image.jpg"; // Ganti dengan URL gambar Yes
});
