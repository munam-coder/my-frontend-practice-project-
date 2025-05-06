document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector(".forms");
    const thankYouSection = document.getElementById("thank-you");
    const continueBtn = document.getElementById("continue");
  
    const fields = {
      name: document.getElementById("cardholder-name"),
      number: document.getElementById("card-number"),
      mm: document.getElementById("MM"),
      yy: document.getElementById("YY"),
      cvc: document.getElementById("CVC")
    };
  
    function showError(input, message) {
      input.classList.add("error");
      if (
        !input.nextElementSibling ||
        !input.nextElementSibling.classList.contains("error-message")
      ) {
        const error = document.createElement("div");
        error.className = "error-message";
        error.innerText = message;
        input.parentNode.insertBefore(error, input.nextSibling);
      }
    }
  
    function clearError(input) {
      input.classList.remove("error");
      if (
        input.nextElementSibling &&
        input.nextElementSibling.classList.contains("error-message")
      ) {
        input.nextElementSibling.remove();
      }
    }
  
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      let isValid = true;
  
      Object.values(fields).forEach(clearError);
  
      if (fields.name.value.trim() === "") {
        showError(fields.name, "Can't be blank");
        isValid = false;
      }
  
      if (!/^\d{4} \d{4} \d{4} \d{4}$/.test(fields.number.value.trim())) {
        showError(fields.number, "Wrong format, numbers only");
        isValid = false;
      }
  
      if (!/^\d{2}$/.test(fields.mm.value.trim())) {
        showError(fields.mm, "Can't be blank");
        isValid = false;
      }
  
      if (!/^\d{2}$/.test(fields.yy.value.trim())) {
        showError(fields.yy, "Can't be blank");
        isValid = false;
      }
  
      if (!/^\d{3}$/.test(fields.cvc.value.trim())) {
        showError(fields.cvc, "Can't be blank");
        isValid = false;
      }
  
      if (isValid) {
        form.classList.add("hidden");
        thankYouSection.classList.remove("hidden");
      }
    });
  
    continueBtn.addEventListener("click", () => {
      form.reset();
      form.classList.remove("hidden");
      thankYouSection.classList.add("hidden");
      Object.values(fields).forEach(clearError);
    });
  });
  