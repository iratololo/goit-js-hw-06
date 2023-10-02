const input = document.querySelector("#validation-input");
const inputValidLength = Number.parseInt(input.dataset.length);

input.addEventListener("blur", validationInput);

function validationInput(evt) {
    if (evt.currentTarget.value.length === inputValidLength) {
        updateClass("valid","invalid",evt);
    } else {
        updateClass("invalid","valid",evt);
    }
}

function updateClass(a, b, event) {
    event.currentTarget.classList.add(a);
    event.currentTarget.classList.remove(b);
}




