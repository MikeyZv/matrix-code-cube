const cube = document.querySelector(".cube");
let mouseX = 0;
let mouseY = 0;
let rotateX;
let rotateY;
const rotationValue = 360;

function start() {
    rotateX = 0;
    rotateY = 0;

    let rotations = [
        {transform: `rotate3d(1,0,0, ${rotateX}deg) rotate3d(0,1,0, ${rotateY}deg)`},
        {transform: `rotate3d(1,0,0, ${rotateX+360}deg) rotate3d(0,1,0, ${rotateY+360}deg)`}
    ];

    let rotationTiming = {
        duration: 5000,
        iterations: Infinity
    };

    cube.animate(rotations, rotationTiming);
}
const handleMouseDown = () => {
    window.addEventListener("mousemove", handleMouseMove);
}

const handleMouseMove = (event) => {
    mouseX = event.clientX;
    mouseY = event.clientY;
    rotateX = -(mouseY / window.innerHeight - 0.5) * rotationValue;
    rotateY = (mouseX / window.innerHeight - 0.5) * rotationValue;
    let rotations = [
        {transform: `rotate3d(1,0,0, ${rotateX}deg) rotate3d(0,1,0, ${rotateY}deg)`},
        {transform: `rotate3d(1,0,0, ${rotateX+360}deg) rotate3d(0,1,0, ${rotateY+360}deg)`},
    ];
    let rotationTiming = {
        duration: 10000,
        iterations: Infinity
    };
    cube.animate(rotations, rotationTiming);
}

const handleMouseUp = () => {
    window.removeEventListener("mousemove", handleMouseMove);
    let rotations = [
        {transform: `rotate3d(1,0,0, ${rotateX}deg) rotate3d(0,1,0, ${rotateY}deg)`},
        {transform: `rotate3d(1,0,0, ${rotateX+360}deg) rotate3d(0,1,0, ${rotateY+360}deg)`},
    ];

    let rotationTiming = {
        duration: 10000,
        iterations: Infinity
    };

    cube.animate(rotations, rotationTiming);
}

start();
window.addEventListener("mousedown", handleMouseDown);
window.addEventListener("mouseup", handleMouseUp);