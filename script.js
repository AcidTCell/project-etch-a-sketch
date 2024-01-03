let container = document.querySelector('#container');
let newDiv = document.createElement('div');
let gridButton = document.querySelector('#gridButton');
let gridRainbowButton = document.querySelector('#gridRainbowButton');
let clearButton = document.querySelector('#clearButton')


gridButton.addEventListener('click', getGridSize);
gridRainbowButton.addEventListener('click', getRainbowGridSize);
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

function getRainbowGridSize(){
    clearGrid();
    let gridSize = prompt('What dimensions are you seeking? ');
    let column = gridSize;
    let row = gridSize;
    if (gridSize > 100){
        alert('Value too high, please try again!');
        getRainbowGridSize();
    }
    else{
        createRainbowGrid(column, row);
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

function createRainbowGrid(column, row){
    for (let i = 1; i<=row; i++){
        let row = document.createElement('div');
        row.classList.add('row');
        container.appendChild(row);
        for (let j = 1; j<=column; j++){
            let box = document.createElement('div');
            box.classList.add('box');
            row.appendChild(box);
            box.addEventListener('mousedown', function() {
                drawRgb(box);
            });

            box.addEventListener('mouseover', function() {
                if (isDrawing) {

                    drawRgb(box);
                }
            });

            box.addEventListener('mouseup', function() {
                isDrawing = false;
            });

            function randomRgb() {
                var o = Math.round, r = Math.random, s = 255;
                isDrawing = true;
                return 'rgba(' + o(r()*s) + ',' + o(r()*s) + ',' + o(r()*s) + ',' + r().toFixed(1) + ')';

            }
            function drawRgb(element) {
                let color = randomRgb();
                element.style.backgroundColor = color;
                isDrawing = true;
            }
        }
    }
}

function clearGrid(){
    container.innerHTML = '';
}
