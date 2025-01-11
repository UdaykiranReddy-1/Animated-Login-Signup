const login = document.querySelector(".loginsection");
const loginlink = document.querySelector(".loginlink");
const registerlink = document.querySelector(".registerlink");
const setTitle = document.querySelector("#setTitle");

registerlink.addEventListener("click", () => {
  console.log(setTitle);
  setTitle.innerText = setTitle.value == "Sign In" ? "Sign In" : "Login";
  login.classList.add("active");
});
loginlink.addEventListener("click", () => {
  login.classList.remove("active");
});

document.querySelectorAll(".inputbox input").forEach((input) => {
  input.addEventListener("input", () => {
    if (input.value.trim() !== "") {
      input.classList.add("has-content");
    } else {
      input.classList.remove("has-content");
    }
  });
});

function togglePassword(fieldId, element) {
  const input = document.getElementById(fieldId);
  const icon = element.querySelector("i");
  if (input.type === "password") {
    input.type = "text";
    icon.classList.replace("bxs-show", "bxs-hide");
  } else {
    input.type = "password";
    icon.classList.replace("bxs-hide", "bxs-show");
  }
}
