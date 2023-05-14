let hex = [0,1,2,3,4,5,6,8,9, 'A','B','C','D','E','F'];

const color = document.querySelector('.color');
const btn = document.querySelector('.btn');
const box = document.querySelector('.color-box');

document.body.style.backgroundColor = "aliceblue"

btn.addEventListener('click', function() {
    let hexColor = '#';
    for(let i = 0; i<6; i++) {
        hexColor += hex[changeColors()];
    }

    color.textContent = hexColor;
    box.style.backgroundColor = hexColor;
    
});

function changeColors() {
    return Math.floor(Math.random() * hex.length);
}