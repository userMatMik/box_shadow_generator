export function handleDoubleInputs(inputs, updatePrev) {
    inputs.forEach((input, i) => {
        input.addEventListener('input', () => {
            inputs[1-i].value = inputs[i].value

            updatePrev();
        })
    })
}