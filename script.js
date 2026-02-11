const noBtn = document.getElementById("noBtn");
const yesBtn = document.getElementById("yesBtn");
const gif = document.getElementById("gif");
const question = document.getElementById("question");

// Move the "No" button whenever the mouse enters its area
noBtn.addEventListener("mouseover", () => {
    const wrapper = document.body;
    const wrapperRect = wrapper.getBoundingClientRect();
    const noBtnRect = noBtn.getBoundingClientRect();

    // Calculate max positions so button stays on screen
    const maxX = wrapperRect.width - noBtnRect.width;
    const maxY = wrapperRect.height - noBtnRect.height;

    const randomX = Math.floor(Math.random() * maxX);
    const randomY = Math.floor(Math.random() * maxY);

    noBtn.style.left = randomX + "px";
    noBtn.style.top = randomY + "px";
});

// What happens when they click "Yes"
yesBtn.addEventListener("click", () => {
    question.innerHTML = "I love you! See you then! ❤️";
    gif.src = "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExOHp1eXp1eXp1eXp1/l0HlIDueXKHuVUsTe/giphy.gif";
    noBtn.style.display = "none"; // Remove the No button
});
