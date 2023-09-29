const input = document.querySelector("#validation-input");
const inputValidLength = Number.parseInt(input.dataset.length);

input.addEventListener("blur", validationInput);

function validationInput(evt) {
    if (evt.currentTarget.value.length === inputValidLength) {
        input.classList.add("valid");
        input.classList.remove("invalid");
    } else {
        input.classList.add("invalid");
        input.classList.remove("valid");
    }
}




