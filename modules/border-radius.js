import { handleDoubleInputs } from "./handleDoubleInputs.js";

const boxPreview = document.querySelector('#box');

function updateBorderRadius() {
    const topLeft = document.querySelector('#top-left-input').value;
    const topRight = document.querySelector('#top-right-input').value
    const bottomRight = document.querySelector('#bottom-right-input').value
    const bottomLeft = document.querySelector('#bottom-left-input').value
    const unitTest = unit

    console.log(unitTest)

    boxPreview.style['borderRadius'] = `${topLeft}${unitTest} ${topRight}${unitTest} ${bottomRight}${unitTest} ${bottomLeft}${unitTest}`
    
}

function updateBox() {
    const boxWidth = document.querySelector('#box-width-input').value;
    const boxHeight = document.querySelector('#box-height-input').value;

    boxPreview.style.width = `${boxWidth}px`;
    boxPreview.style.height = `${boxHeight}px`;

}

function handleOptionBtn() {
    
}

let unit = 'px';

const unitsOptions = document.querySelectorAll('.option-button');

const topLeft = document.querySelector('#top-left-input');
const topLeftRange = document.querySelector('#top-left-range');

unitsOptions.forEach((button) => {
    button.addEventListener('click', (e) => {
        // console.log(e.target.innerText)
        if(e.target.innerText === 'PX') {
            unit = 'px';
            
            
            topLeft.setAttribute("max", "200")
            topLeftRange.setAttribute("max", "200")
            topRightInputs.forEach((input) => {
                input.setAttribute('max', '200')
            })
        } else {
            unit = '%'
            topLeft.setAttribute("max", "100")
            topLeftRange.setAttribute("max", "100")
            topRightInputs.forEach((input) => {
                input.setAttribute('max', '100')
            })
        } 
        updateBorderRadius();
    })
    updateBorderRadius();
    return unit;
} )

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


