const html = document.documentElement;
const canvas = document.getElementById("hero-lightpass");
const context = canvas.getContext("2d");

const navButtonTop = document.getElementById("to-blog-top");
const navButtonBottom = document.getElementById("to-blog-bottom");

let framePrevious = 1;
const frameCount = 190;
const currentFrame = (index) =>
    `./images/introduce.${index.toString().padStart(4, "0")}.png`;

const preloadImages = () => {
    for (let i = 1; i < frameCount; i++) {
        const img = new Image();
        img.src = currentFrame(i);
    }
};

const img = new Image();
img.src = currentFrame(1);
canvas.width = 1920;
canvas.height = 1080;
img.onload = function () {
    context.drawImage(img, 0, 0);
};

const updateImage = (index) => {
    img.src = currentFrame(index);
    context.drawImage(img, 0, 0);
};

window.addEventListener("scroll", () => {
    const scrollTop = html.scrollTop;
    const maxScrollTop = html.scrollHeight - window.innerHeight;
    const scrollFraction = scrollTop / maxScrollTop;
    const frameIndex = Math.min(
        frameCount - 1,
        Math.ceil(scrollFraction * frameCount)
    );

    if (frameIndex !== framePrevious) {
        framePrevious = frameIndex;
        requestAnimationFrame(() => updateImage(frameIndex + 1));
        navButtonTop.style.display = frameIndex > 2 ? "none" : "block";
        navButtonBottom.style.display = frameIndex < 189 ? "none" : "block";
    }
});

if (window.innerWidth > 640) {
    navButtonTop.style.marginTop =
        Math.ceil(window.innerHeight / 2 + window.innerWidth / 12).toString() +
        "px";
}

preloadImages();
