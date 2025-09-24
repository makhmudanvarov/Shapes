const btn_shape = document.querySelectorAll(".btn_shape");
const colors = document.querySelectorAll(".color");
const shapes = document.querySelectorAll(".shape");

// const array = ['red', 'green', 'blue', 'grey', 'indigo', 'aqua', 'pink', 'black'];

// function rand() {
//     let i = Math.floor(Math.random() * array.length);
//     return array[i];
// }

colors.forEach((color) => {
  color.addEventListener("click", () => {
    const selectColor = color.classList[1];

    shapes.forEach((shape) => {
      shape.style.background = selectColor;
    });
  });
});

btn_shape.forEach((shape) => {
  shape.addEventListener("click", () => {
    const selectShape = shape.classList[1];

     shapes.forEach(shape => {
      shape.className = "shape";
      shape.classList.add(selectShape);
    });
  });
});

// shapes.forEach(shape => {
//     shape.addEventListener('click', () => {
//         shape.style = `background: ${rand()};`
//     })
// })