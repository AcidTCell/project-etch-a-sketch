let container = document.querySelector('#container');
let newDiv = document.createElement('div');
let gridButton = document.querySelector('#gridButton');


gridButton.addEventListener('click', getGridSize);

function getGridSize(){
    clearGrid();
    let gridSize = prompt('What dimensions are you seeking? ');
    let column = gridSize;
    let row = gridSize;
    createGrid(column, row);
}

function createGrid(column, row){
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

            // Add mouseover event listener to continue drawing while dragging
            box.addEventListener('mouseover', function() {
                if (isDrawing) {
                    draw(box);
                }
            });

            // Add mouseup event listener to stop drawing
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
