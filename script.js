const box = document.querySelector('#box');


//! box-shadow: none|h-offset v-offset blur spread color |inset|initial|inherit;
//! document.getElementById("shadow").style["boxShadow"] = "0 0 5px #999999";

//? Get the 2 left digits of the hex color code and convert to decimal value to get the red color level.
//? Get the 2 middle digits of the hex color code and convert to decimal value to get the green color level.
//? Get the 2 right digits of the hex color code and convert to decimal value to get the blue color level


function hexToRGB(hex) {
    
    const r = parseInt(hex.replace('#', '').slice(0, 2), 16)
    const g = parseInt(hex.replace('#', '').slice(2, 4), 16)
    const b = parseInt(hex.replace('#', '').slice(4, 6), 16)
    
    
    return `${r}, ${g}, ${b}`

}

console.log(hexToRGB('#121111'));


function updateShadow() {
    const hOffset = document.querySelector('#horizontal').value;
    const vOffset = document.querySelector('#vertical').value;
    const blur = document.querySelector('#blur').value;
    const spread = document.querySelector('#spread').value;
    const opacity = document.querySelector('#opacity').value;
    const color = document.querySelector('#shadow-color').value;

    console.log(color);

    console.log(`${hOffset}px ${vOffset}px ${blur}px ${spread}px rgb${hexToRGB(color)}`)
    
    box.style['boxShadow'] = `${hOffset}px ${vOffset}px ${blur}px ${spread}px rgb(${hexToRGB(color)}, ${opacity})`
}


const horizontalInputs = document.querySelectorAll('input[name=horizontal]');

horizontalInputs.forEach((input, i) => {
    input.addEventListener('input', () => {
        // console.log(input.getAttribute('type'))
        // console.log(horizontalInputs[i])
        horizontalInputs[1-i].value = horizontalInputs[i].value;
        
        updateShadow();
    })
})


const verticalInputs = document.querySelectorAll('input[name=vertical]');

verticalInputs.forEach((input, i) => {
    input.addEventListener('input', () => {
        verticalInputs[1-i].value = verticalInputs[i].value; 
        
        updateShadow();
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
        updateShadow();
    })
})

const opacityInputs = document.querySelectorAll('input[name=opacity]');
console.log(opacityInputs)

opacityInputs.forEach((input, i) => {
    input.addEventListener('input', () => {
        opacityInputs[1-i].value = opacityInputs[i].value;
        updateShadow();
    })
    
})

document.querySelector('#shadow-color').addEventListener('change', updateShadow )

