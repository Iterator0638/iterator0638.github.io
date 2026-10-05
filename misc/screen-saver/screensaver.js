
let xAngle = 1;
let yAngle = 1;
const speed = 3;
let isWindowBigEnough = true;

function move() {
    let logo = document.getElementById("logo");
    if (isWindowBigEnough) {
        const rect = logo.getBoundingClientRect();

        const left = rect.left + (xAngle * speed);
        const right = rect.right + (xAngle * speed);
        const bottom = rect.bottom + (yAngle * speed);
        const top = rect.top + (yAngle * speed);

        let changeColor = false;

        if (left < 0) {
            xAngle = -xAngle;
            changeColor = true;
        } else if (right > window.innerWidth) {
            xAngle = -xAngle;
            changeColor = true;
        } else if (bottom > window.innerHeight) {
            yAngle = -yAngle;
            changeColor = true;
        } else if (top < 0) {
            yAngle = -yAngle;
            changeColor = true;
        }

        logo.style.left = rect.left + (xAngle * speed) + "px";
        logo.style.top = rect.top + (yAngle * speed) + "px";

        if (changeColor) {
            document.getElementsByClassName("logo_color")[0].style.setProperty("background-color", randomColor());
        }
    }
    requestAnimationFrame(move);
}

function start() {
    let logo = document.getElementById("logo");
    logo.style.position = "absolute";
    checkWindowSize();

    window.addEventListener("resize", () => {
        checkWindowSize();

    });
}

function checkWindowSize() {
    isWindowBigEnough = window.innerWidth > 384 && window.innerHeight > 384;
    if (isWindowBigEnough) {
        document.getElementById("tips").style.visibility = "hidden";
    } else {
        document.getElementById("tips").style.visibility = "visible";
    }
    xAngle = 1;
    yAngle = 1;
    logo.style.left = "32px";
    logo.style.top = "32px";

}

function randomColor() {
    const colors = ["red", "yellow", "lime", "aqua", "blue", "fuchsia"];
    return colors[Math.floor(Math.random() * colors.length)];
}

start()
requestAnimationFrame(move);