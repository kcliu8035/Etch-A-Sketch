
const board = document.querySelector('.board');
const reset = document.getElementById('reset');
const black = document.getElementById('black');
const red = document.getElementById('red');
const eraser = document.getElementById('eraserBTN');
const random = document.getElementById('randomBTN');

//Drawing size
const small = document.getElementById('small');
const medium = document.getElementById('medium');
const large = document.getElementById('large');
const custom = document.getElementById('custom');


let color = 'black';
let click = false;

function makeDivs(size) {
    board.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    board.style.gridTemplateColumns = `repeat(${size}, 1fr)`;

// To remove any existing divs if board is going to change
    let existingDivs = board.querySelectorAll('div');
    existingDivs.forEach((div) => div.remove())

    for (let i = 0; i < (size * size); i++) {
        const div = document.createElement('div'); 
        board.insertAdjacentElement("beforeend", div);

    // Create separate function to input here than changes color by setting input to user choice
        div.addEventListener("mouseover", (e) => {
            div.style.backgroundColor = color
            document.body.style.cursor = 'eraser.png'
        })
    }
}
makeDivs(36);


reset.addEventListener('click', () => {
    let divs = board.querySelectorAll('div');
    divs.forEach((div) => div.style.backgroundColor = '#c0c0c0');
})


//Changes color
document.addEventListener('coloris:pick', event => {
    color = event.detail.color;
});

eraser.addEventListener('click', () => {
    color = "#c0c0c0"; 
})
   

random.addEventListener('click', () => {
    color = `hsl(${Math.random() * 360}, 100%, 50%)`
})

//Board sizes
small.addEventListener('click', () => {
    makeDivs(64);
})

medium.addEventListener('click', () => {
    makeDivs(36);
})

large.addEventListener('click', () => {
    makeDivs(16);
})
custom.addEventListener('click', () => {
    let input = prompt('Enter a value between 10 and 100');
    if (input < 10 || input > 100) {
        alert('Invalid input');
    } else {
        makeDivs(input);
    }
})



// NOTES:
// - (DONE) Find out how to switch color of divs when "div" is not global variable 
// - (DONE) Create pallette or selection for colors
// - (DONE) Allow user to change size of board
// - Drawing activated/deactivated with click
// - Change cursor to eraser when it is chosen
// - Create shake animation when resetting board
// - Optional: Move sketch board knobs when mouse moves. 
// - Optional: Change size of board without having to erase previous drawings.

