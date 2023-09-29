let counter = document.querySelector("#value");
const decrement = document.querySelector("button[data-action='decrement']");
const increment = document.querySelector("button[data-action='increment']");

let counterValue = 0;

decrement.addEventListener("click", countResult);
increment.addEventListener("click", countResult);


function countResult(event) {
    // console.log(event.currentTarget);
    // console.log(event.currentTarget.dataset.action);
    switch (event.currentTarget.dataset.action) {
        case "decrement":
            counterValue -= 1;
            counter.textContent = counterValue;
            break;
        case "increment":
            counterValue += 1;
            counter.textContent = counterValue;
            break;
    }
}


// console.log(counterValue);
