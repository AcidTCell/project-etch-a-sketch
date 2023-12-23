let container = document.querySelector('#container');
let newDiv = document.createElement('div');

let column = 4;
let row = 4;



for (let i = 1; i<=row; i++){
    let row = document.createElement('div');
    row.classList.add('row');
    container.appendChild(row);
    for (let j = 1; j<=column; j++){
        let box = document.createElement('div');
        box.classList.add('box');
        box.textContent= '<><>';
        row.appendChild(box);
        box.addEventListener('mouseover', mouseover, false);
        box.addEventListener('mouseout', mouseout, false);
        function mouseover()
        {   
        box.setAttribute("style", "background-color:blue;");
        }

        function mouseout()
        {  
        box.setAttribute("style", "background-color:white;");
        }

    }
}
