const noBtn = document.getElementById("noBtn");
const yesBtn = document.getElementById("yesBtn");
const gif = document.getElementById("gif");
const question = document.getElementById("question");
const card = document.querySelector(".card"); // We target the card

noBtn.addEventListener("mouseover", () => {
    // Get the dimensions of the card
    const cardRect = card.getBoundingClientRect();
    const noBtnRect = noBtn.getBoundingClientRect();

    // Calculate the maximum allowed movement within the card boundaries
    // We subtract a bit (50px) to keep it from hitting the very edge
    const maxX = cardRect.width - noBtnRect.width - 20;
    const maxY = cardRect.height - noBtnRect.height - 20;

    // Generate random positions relative to the card's center
    const randomX = Math.floor(Math.random() * maxX) - (maxX / 2);
    const randomY = Math.floor(Math.random() * maxY) - (maxY / 2);

    // Apply the movement
    noBtn.style.transform = `translate(${randomX}px, ${randomY}px)`;
});

// Celebration logic
yesBtn.addEventListener("click", () => {
    question.innerHTML = "I love you! See you then! ❤️";
    gif.src = "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExOHp1eXp1eXp1eXp1/l0HlIDueXKHuVUsTe/giphy.gif";
    noBtn.style.display = "none"; 
});
