const validationInput = document.querySelector("#validation-input");

const validCharsLength = Number(validationInput.dataset.length);

validationInput.addEventListener("blur", onValidInputBlur);

function onValidInputBlur(event) {
  if (event.currentTarget.value.length === validCharsLength) {
    if (event.currentTarget.classList.contains("invalid")) {
      event.currentTarget.classList.remove("invalid");
    }
    event.currentTarget.classList.add("valid");
  } else {
    if (event.currentTarget.classList.contains("valid")) {
      event.currentTarget.classList.remove("valid");
    }

    event.currentTarget.classList.add("invalid");
  }
}
