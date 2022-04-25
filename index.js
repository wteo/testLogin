const body = document.querySelector("body");

function createForm() {
    const form = document.createElement("form");
    form.innerHTML = `
        <br/>
        <input id="email" name="email" placeholder="Enter email here..." />
        <br/>
        <input id="password" name="password" placeholder="Enter password here..." />
        <br/>
        <input id="passwordConfirmation" name="passwordConfirmation" placeholder="Confirm password here..." />
        <br/>
        <button type="submit">login</button>
        `;
    body.appendChild(form);
}

function fillForm(userId, pwd, pwd2) {
    const email = document.querySelector("#email");
    const password = document.querySelector("#password");
    const passwordConfirmation = document.querySelector("#passwordConfirmation");

    email.value = userId;
    password.value = pwd;
    passwordConfirmation.value = pwd2;
}

createForm();
