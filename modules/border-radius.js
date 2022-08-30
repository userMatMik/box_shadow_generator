import { handleDoubleInputs } from "./handleDoubleInputs.js";


function updateBorderRadius() {
    const topLeft = document.querySelector('#top-left-input').value;
    const topRight = document.querySelector('#top-right-input').value
    const bottomRight = document.querySelector('#bottom-right-input').value
    const bottomLeft = document.querySelector('#bottom-left-input').value
    
}

function updateBox() {
    const boxWidth = document.querySelector('#box-width-input').value;
    const boxHeight = document.querySelector('#box-height-input').value;
}

const topLeftInputs = document.querySelectorAll('input[name=top-left]');

handleDoubleInputs(topLeftInputs, updateBorderRadius);

const topRightInputs = document.querySelectorAll('input[name=top-right]');

handleDoubleInputs(topRightInputs, updateBorderRadius);

const bottomRightInputs = document.querySelectorAll('input[name=bottom-right]');
handleDoubleInputs(bottomRightInputs, updateBorderRadius);

const bottomLeftInputs = document.querySelectorAll('input[name=bottom-left]');
handleDoubleInputs(bottomLeftInputs, updateBorderRadius);

const boxWidthInputs = document.querySelectorAll('input[name=box-width]');
handleDoubleInputs(boxWidthInputs, updateBox);

const boxHeightInputs = document.querySelectorAll('input[name=box-height]');
handleDoubleInputs(boxHeightInputs, updateBox);


