const form = document.querySelector(".login-form");


form.addEventListener("submit", handlerForm);


function handlerForm(evt) {
    evt.preventDefault();
    const { email, password } = evt.currentTarget.elements;

    if (email.value.trim() === "" || password.value.trim() === "") {
      return alert("All fields must be filled in!");
    } 
        const login = {
            email: email.value,
            password: password.value,
        }
        console.log(login);
        evt.currentTarget.reset();
}
