const box = document.querySelector('#box');


//! box-shadow: none|h-offset v-offset blur spread color |inset|initial|inherit;
//! document.getElementById("shadow").style["boxShadow"] = "0 0 5px #999999";



function updateShadow(hOffset, vOffset, blur) {
    console.log(vOffset)
    console.log(hOffset)
    console.log(blur)

    box.style['boxShadow'] = `${hOffset}px 0px 5px #999999`
}


const horizontalInputs = document.querySelectorAll('input[name=horizontal]');

horizontalInputs.forEach((input, i) => {
    input.addEventListener('input', () => {
        // console.log(input.getAttribute('type'))
        // console.log(horizontalInputs[i])
        horizontalInputs[1-i].value = horizontalInputs[i].value;

        const hOffset = input.value;
        
        updateShadow(hOffset);
    })
})


const verticalInputs = document.querySelectorAll('input[name=vertical]');

verticalInputs.forEach((input, i) => {
    input.addEventListener('input', () => {
        verticalInputs[1-i].value = verticalInputs[i].value; 
        const vOffset = input.value;
        console.log(vOffset)
        updateShadow(vOffset);
    })
})

const blurInputs = document.querySelectorAll('input[name=blur]');

blurInputs.forEach((input, i) => {
    input.addEventListener('input', () => {
        blurInputs[1-i].value = blurInputs[i].value;

        const blur = input.value        
        updateShadow(blur);
    })
})

const spreadInputs = document.querySelectorAll('input[name=spread]');

spreadInputs.forEach((input, i) => {
    input.addEventListener('input', () => {
        spreadInputs[1-i].value = spreadInputs[i].value;
        console.log(input.value)
        updateShadow(input.value);
    })
})

const opacityInputs = document.querySelectorAll('input[name=opacity]');
console.log(opacityInputs)

opacityInputs.forEach((input, i) => {
    input.addEventListener('input', () => {
        opacityInputs[1-i].value = opacityInputs[i].value;
        updateShadow(input.value);
    })
    
})

console.log(horizontalInputs)

