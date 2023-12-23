let container = document.querySelector('#container');
let newDiv = document.createElement('div');

let column = 32;
let row = 32;



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
