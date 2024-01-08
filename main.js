
const board = document.querySelector('.board');
const reset = document.getElementById('reset');
const black = document.getElementById('black');
const red = document.getElementById('red');
const eraser = document.getElementById('eraser');
const custom = document.getElementById('custom');
const random = document.getElementById('randomBTN');
let color = 'black';
let click = false;

function makeDivs(size) {
    board.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    board.style.gridTemplateColumns = `repeat(${size}, 1fr)`;

// To remove any existing divs if board is going to change
    // let existingDivs = document.querySelectorAll('div');
    // existingDivs.forEach((div) => div.remove())

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

custom.addEventListener('click', () => {
    let input = prompt('Pick a value');
})

random.addEventListener('click', () => {
    color = `hsl(${Math.random() * 360}, 100%, 50%)`
})

// NOTES:
// - (DONE) Find out how to switch color of divs when "div" is not global variable 
// - Allow user to change size of board
// - Change cursor to eraser when it is chosen
// - Create pallette or selection for colors

