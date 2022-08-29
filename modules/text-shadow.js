import { hexToRGB } from "./hextorgb.js";

const textPreview = document.querySelector('.text-preview');

//text-shadow: h-shadow v-shadow blur-radius color|none|initial|inherit;

function updateTextShadow() {
    const hOffset = document.querySelector('#text-horizontal').value;
    const vOffset = document.querySelector('#text-vertical').value;
    const blur = document.querySelector('#text-blur').value;
    const textShadowOpacity = document.querySelector('#text-shadow-opacity').value;
    const color =  document.querySelector('#text-shadow-color').value;

    
    const textShadowCode = `${hOffset}px ${vOffset}px ${blur}px rgba(${hexToRGB(color)}, ${textShadowOpacity})`
    
    textPreview.style.textShadow = textShadowCode;
    
    const textShadowGeneratedCode = document.querySelector("#text-Shadow-Code");

    const strCode = `
                    text-shadow: ${textShadowCode};
                    `
    textShadowGeneratedCode.textContent = strCode;

}

function updateText(event) {
    textPreview.textContent = event.target.value;

}

const textInputEl = document.querySelector('#text-input');

textInputEl.addEventListener('input', updateText)

const textHorInputs = document.querySelectorAll('input[name=text-horizontal]');

textHorInputs.forEach((input, i) => {
    input.addEventListener('input', () => {
        textHorInputs[1-i].value = textHorInputs[i].value;
        updateTextShadow();
    })
})

const textVertInputs = document.querySelectorAll('input[name=text-vertical]');

textVertInputs.forEach((input, i) => {
    input.addEventListener('input', () => {
        textVertInputs[1-i].value = textVertInputs[i].value;
        updateTextShadow();
     })
})

const textBlurInputs = document.querySelectorAll('input[name=text-blur]');

const textOpacityInputs = document.querySelectorAll('input[name=text-opacity]')

function handleInputs(inputs) {
    inputs.forEach((input, i) => {
        input.addEventListener('input', () => {
            inputs[1-i].value = inputs[i].value
            updateTextShadow();
        })
    })
}

document.querySelector('#text-shadow-color').addEventListener('change', updateTextShadow);
handleInputs(textBlurInputs);
handleInputs(textOpacityInputs);




