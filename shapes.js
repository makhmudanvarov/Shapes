const btn_shape = document.querySelectorAll(".btn-shape");
const colors = document.querySelectorAll(".color");
const shapes = document.querySelectorAll(".shape");
console.log(shapes)

// const array = ['red', 'green', 'blue', 'grey', 'indigo', 'aqua', 'pink', 'black'];

// function rand() {
//     let i = Math.floor(Math.random() * array.length);
//     return array[i];
// }

colors.forEach(color => {
  color.addEventListener('click', () => {
    const selectColor = color.classList[1];

    shapes.forEach(shape => {
      shape.style.background = selectColor;
    })
  })
});

btn_shape.forEach(btn => {
  btn.addEventListener('click', () => {
    const selectColor = btn.classList[1];

    shapes.forEach(shape => {
      shape.style.background = selectColor;
    })
  })
});


// shapes.forEach(shape => {
//     shape.addEventListener('click', () => {
//         shape.style = `background: ${rand()};`
//     })
// })
