let pageX = 0,
    pageY = 0;
let targetX = 0,
    targetY = 0;
let speed = 0.03;

const imgAll = document.querySelectorAll(".test > img");

let i = 0;
const img1 = imgAll[i++];

window.addEventListener("mousemove", (e) => {
    pageX = e.pageX - window.innerWidth / 2;
    pageY = e.pageY - window.innerWidth / 2;
});

const mouseMoveFunc = () => {
    // img.style.transform = `rotateY(${targetX}deg) rotateX(${targetY}deg)`;
    img1.style.transform = `translate(${-targetX / 20}px, ${-targetY / 20}px)`;
};

const loop = () => {
    targetX += (pageX - targetX) * speed;
    targetY += (pageY - targetY) * speed;

    mouseMoveFunc();
    window.requestAnimationFrame(loop);
};

loop();
