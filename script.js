const button = document.getElementById('movingButton');

button.addEventListener('mouseover', () => {
    moveButton();
});

button.addEventListener('click', () => {
    moveButton();
    alert('Hampir kena!');
});

function moveButton() {
    const body = document.body;
    const maxX = body.clientWidth - button.offsetWidth;
    const maxY = body.clientHeight - button.offsetHeight;

    const newX = Math.floor(Math.random() * maxX);
    const newY = Math.floor(Math.random() * maxY);

    button.style.position = 'absolute';
    button.style.left = `${newX}px`;
    button.style.top = `${newY}px`;
}
