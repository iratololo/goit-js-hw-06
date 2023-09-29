const input = document.querySelector("#name-input");
const result = document.querySelector("#name-output");

input.addEventListener("input",handlerInput);

function handlerInput() {
    if (input.value ==="") {
       result.textContent = "Anonymous"
    } else {
        result.textContent = input.value;
    }
}