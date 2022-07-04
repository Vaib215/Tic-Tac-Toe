const gridItems = document.querySelectorAll('.grid_item');
const heading = document.querySelector('h2')
const reset = document.querySelector('button')
let count = 0
let isOChance = true;

const checkInnerHTML = (x, y, z) => {
    if (gridItems[x].innerHTML !== "" && gridItems[x].innerHTML === gridItems[y].innerHTML && gridItems[y].innerHTML === gridItems[z].innerHTML) {
        heading.innerHTML = `${gridItems[x].innerHTML} won the game`;


        gridItems.forEach(item => {
            item.removeEventListener('click', addMark)
        })
        return
    }
    if(count == 9){
        heading.innerHTML = `The game is tie`
    }
    return
}

const checkWin = () => {
        checkInnerHTML(0, 1, 2) 
        checkInnerHTML(3, 4, 5) 
        checkInnerHTML(6, 7, 8) 
        checkInnerHTML(0, 3, 6) 
        checkInnerHTML(1, 4, 7) 
        checkInnerHTML(2, 5, 8) 
        checkInnerHTML(0, 4, 8) 
        checkInnerHTML(2, 4, 6)
}

const addMark = e => {
    if (e.target.classList.contains('selected')) {
        return;
    }
    count++
    e.target.classList.add('selected')
    e.target.innerHTML = (isOChance === true) ? 'O' : 'X'
    isOChance = !isOChance
    checkWin()
}
const startGame = () => {
    count = 0
    isOChance = true;

    gridItems.forEach(item => {
        item.innerHTML = ''
        item.classList.remove('selected')
        item.addEventListener('click', addMark);
    })
}

startGame()

reset.addEventListener('click', startGame)