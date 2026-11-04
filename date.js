// گرفتن المنت‌ها
let noButton = document.getElementById("no");
let yesButton = document.getElementById("yes");
let titleText = document.getElementById("title");

let titlePhrases = [
    "Are you sure?",
    "Think again!",
    "Really? Not even a little?",
    "Pleeease? 🥺",
    "Come on, say yes!",
    "But i need my fav snack",
    "My lovely Sparkle"
];

let noTexts = [
    "No 😢",
    "Nope",
    "Are you sure?",
    "Wrong button!",
    "Try again 😏",
    "Hell nah",
    "I said no"
];

function getRandomItem(list) {
    let index = Math.floor(Math.random() * list.length);
    return list[index];
}

function moveButton(event) {
    event.preventDefault();

    titleText.textContent = getRandomItem(titlePhrases);
    noButton.textContent = getRandomItem(noTexts);

    noButton.style.position = "fixed";

    let margin = 10;
    let maxX = window.innerWidth - noButton.offsetWidth - margin * 2;
    let maxY = window.innerHeight - noButton.offsetHeight - margin * 2;

    let x = margin + Math.random() * maxX;
    let y = margin + Math.random() * maxY;

    noButton.style.left = x + "px";
    noButton.style.top = y + "px";
}

noButton.addEventListener("mouseover", moveButton);
noButton.addEventListener("touchstart", moveButton, { passive: false });

yesButton.addEventListener("click", function () {
    titleText.textContent = "Yay! See you on Thursday! 🎉";
    noButton.style.display = "none";
});

let hearts = ["💖", "💕", "💗", "💓", "❤️"];

function createHeart() {
    let heart = document.createElement("span");
    heart.classList.add("floating-heart");
    heart.textContent = getRandomItem(hearts);

    heart.style.left = Math.random() * 95 + "vw";
    heart.style.fontSize = 16 + Math.random() * 24 + "px";

    let duration = 4 + Math.random() * 4;
    heart.style.animationDuration = duration + "s";

    document.body.appendChild(heart);

    setTimeout(function () {
        heart.remove();
    }, duration * 1000);
}

setInterval(createHeart, 300);


let heartAnim = lottie.loadAnimation();