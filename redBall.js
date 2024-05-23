const ball = document.getElementById('ball');
document.addEventListener('keydown', handleKeyPress);
let positionTop = 0; // Position for the top
let positionLeft = 0; // Position for the left (optional if you want horizontal movement as well)

function handleKeyPress(e) {
    if (e.code === 'ArrowUp') {
        positionTop = positionTop - 10;
    }
    if (e.code === 'ArrowDown') {
        positionTop = positionTop + 10;
    }
    // Optional: Handle left and right movements as well
    if (e.code === 'ArrowLeft') {
        positionLeft = positionLeft - 10;
    }
    if (e.code === 'ArrowRight') {
        positionLeft = positionLeft + 10;
    }
    // Prevent the ball from moving out of the viewport (optional)
    if (positionTop < 0) {
        positionTop = 0;
    }
    if (positionLeft < 0) {
        positionLeft = 0;
    }
    refresh();
}

function refresh() {
    ball.style.top = positionTop + 'px';
    ball.style.left = positionLeft + 'px'; // Optional if you want horizontal movement
}
