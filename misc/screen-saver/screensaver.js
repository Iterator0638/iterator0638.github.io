
let xAngle = 1;
let yAngle = 1;
const speed = 3;

function move() {
    let logo = document.getElementById("logo");
    let rect = logo.getBoundingClientRect();

    let left = rect.left + (xAngle * speed);
    let right = rect.right + (xAngle * speed);
    let bottom = rect.bottom + (yAngle * speed);
    let top = rect.top + (yAngle * speed);

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

    requestAnimationFrame(move);
}

function start() {
    let logo = document.getElementById("logo");
    logo.style.position = "absolute";
}

function randomColor() {
    const colors = ["red", "yellow", "lime", "aqua", "blue", "fuchsia"];
    return colors[Math.floor(Math.random() * colors.length)];
}

start()
requestAnimationFrame(move);