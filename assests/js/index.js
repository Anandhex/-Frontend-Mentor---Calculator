const btns = document.querySelectorAll(".btn");
const input = document.getElementById("input");

let previousValue = "";
let lastOperator = "";

const handleInputText = (element) => {
  console.log(element);
  if (element === "del") {
  } else if (element === "reset") {
    input.innerText = "";
  } else if (element === "=") {
    input.innerText = "";
  } else if (["x", "-", "+", "/"].includes(element)) {
    if (!previousValue) {
      previousValue = input.innerText;
      lastOperator = element;
    } else {
      if (element === "=") {
        lastOperator = "";
        previousValue = "";
      }
    }
    input.innerText = "";
  } else {
    input.innerText = `${input.innerText}${element}`;
  }
};

btns.forEach((btn) => {
  btn.addEventListener("click", (event) => {
    handleInputText(event.target.innerText.toLowerCase());
  });
});

handleChangeEvent = (event) => {
  if (event.target.value === "1") {
    document.body.classList.remove(...["theme2", "theme3"]);
  } else if (event.target.value === "2") {
    document.body.classList.remove("theme3");
    document.body.classList.add("theme2");
  } else if (event.target.value === "3") {
    document.body.classList.remove("theme2");
    document.body.classList.add("theme3");
  }
};
