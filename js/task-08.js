const form = document.querySelector(".login-form");


form.addEventListener("submit", handlerForm);


function handlerForm(evt) {
    evt.preventDefault();
    const { email, password } = evt.currentTarget.elements;

    if (email.value === "" || password.value === "") {
        alert("All fields must be filled in!");
    } else {
        const login = {
            email: email.value,
            password: password.value,
        }
        console.log(login);
        evt.currentTarget.reset();
    }
}
