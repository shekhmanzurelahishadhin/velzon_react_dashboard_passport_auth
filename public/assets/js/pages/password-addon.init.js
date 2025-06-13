Array.from(document.querySelectorAll("form .auth-pass-inputgroup")).forEach(function (group) {
  const button = group.querySelector(".password-addon");
  const input = group.querySelector("input");

  if (button && input) {
    button.addEventListener("click", function () {
      input.type = input.type === "password" ? "text" : "password";

      // Optional: toggle icon
      const icon = button.querySelector("i");
      if (icon) {
        icon.classList.toggle("ri-eye-fill");
        icon.classList.toggle("ri-eye-off-fill");
      }
    });
  }
});
