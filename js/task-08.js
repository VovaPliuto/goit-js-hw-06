const loginForm = document.querySelector(".login-form");

loginForm.addEventListener("submit", onFormSubmit);

function onFormSubmit(event) {
  event.preventDefault();

  const {
    elements: { email, password },
  } = event.currentTarget;

  if (email.value === "" || password.value === "") {
    return alert("All fields must be filled");
  }

  const formData = {
    [email.name]: email.value,
    [password.name]: password.value,
  };

  console.log(formData);
  event.currentTarget.reset();
}
