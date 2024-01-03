let container = document.querySelector('#container');
let newDiv = document.createElement('div');
let gridButton = document.querySelector('#gridButton');
let clearButton = document.querySelector('#clearButton')


gridButton.addEventListener('click', getGridSize);
clearButton.addEventListener('click', clearGrid);


function getGridSize(){
    clearGrid();
    let gridSize = prompt('What dimensions are you seeking? ');
    let column = gridSize;
    let row = gridSize;
    if (gridSize > 100){
        alert('Value too high, please try again!');
        getGridSize();
    }
    else{
        createBlackGrid(column, row);
    }
}

function createBlackGrid(column, row){
    for (let i = 1; i<=row; i++){
        let row = document.createElement('div');
        row.classList.add('row');
        container.appendChild(row);
        for (let j = 1; j<=column; j++){
            let box = document.createElement('div');
            box.classList.add('box');
            row.appendChild(box);
            box.addEventListener('mousedown', function() {
                draw(box);
            });

            box.addEventListener('mouseover', function() {
                if (isDrawing) {
                    draw(box);
                }
            });

            box.addEventListener('mouseup', function() {
                isDrawing = false;
            });

            function draw(element) {
                element.style.backgroundColor = 'black';
                isDrawing = true;
            }
        }
    }
}

function clearGrid(){
    container.innerHTML = '';
}
