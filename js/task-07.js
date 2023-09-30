const input = document.querySelector("#font-size-control");
const result = document.querySelector("#text");
input.addEventListener("input", hendlerText);

function hendlerText(evt) {
    result.style.fontSize = `${evt.currentTarget.value}px`;
}