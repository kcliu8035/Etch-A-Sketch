
const board = document.querySelector('.board');
const reset = document.getElementById('reset');
const black = document.getElementById('black');
const red = document.getElementById('red');
const eraser = document.getElementById('eraser');

function makeDivs(size) {
    board.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    board.style.gridTemplateColumns = `repeat(${size}, 1fr)`;

    // To remove any existing divs if board is going to change
    let existingDivs = document.querySelectorAll('div');
    existingDivs.forEach((div) => div.remove())

    for (let i = 0; i < (size * size); i++) {
        const div = document.createElement('div'); 
        board.insertAdjacentElement("beforeend", div);


        div.addEventListener("mouseover", (e) => {
            div.style.backgroundColor = 'black';
        })
    }
}
makeDivs(36);


reset.addEventListener('click', () => {
    board.innerHTML = '';
})


eraser.addEventListener('click', () => {
    div.style.backgroundColor = 'white';
})



// NOTES:
// - Find out how to switch color of divs when "div" is not global variable 

