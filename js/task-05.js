const input = document.querySelector("#name-input");
const result = document.querySelector("#name-output");

input.addEventListener("input",handlerInput);

function handlerInput() {
    const inputVal = input.value;
    if (inputVal.trim() ==="") {
       result.textContent = "Anonymous"
    } else {
        result.textContent = inputVal;
    }
}
