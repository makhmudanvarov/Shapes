const shapes = document.querySelectorAll('.shape');

const array = ['red', 'green', 'blue', 'grey', 'indigo', 'aqua', 'pink', 'black'];

function rand() {
    let i = Math.floor(Math.random() * array.length);
    return array[i];
}

shapes.forEach(shape => {
    shape.addEventListener('click', () => {
        shape.style = `background: ${rand()};
        -webkit-clip-path: polygon(
        25% 0%,
        75% 0%,
        100% 50%,
        75% 100%,
        25% 100%,
        0% 50%
      );
      clip-path: polygon(
        25% 0%,
        75% 0%,
        100% 50%,
        75% 100%,
        25% 100%,
        0% 50%
      );`
    })
})