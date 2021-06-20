const btns = document.querySelectorAll(".btn");
const input = document.getElementById("input");

document.getElementById("range").value = 1;

let values = [];

const transformString = () => {};

const performOperation = (val1, val2, op) => {
  const a = Number(val1.replace(/,/g, ""));
  const b = Number(val2.replace(/,/g, ""));
  if (val2) {
    switch (op) {
      case "+":
        return a + b;
      case "-":
        return a - b;
      case "x":
        return a * b;
      case "/":
        return a / b;
    }
  } else {
    return "ERROR";
  }
};

const handleInputText = (element) => {
  if (element === "del") {
    input.innerText = input.innerText.slice(0, -1);
  } else if (element === "reset") {
    input.innerText = "";
    values = [];
  } else if (element === "=") {
    input.innerText = performOperation(values[0], input.innerText, values[1]);
    values = [];
  } else if (["x", "-", "+", "/"].includes(element)) {
    if (values.length < 2) {
      values.push(...[input.innerText, element]);
      input.innerText = "";
    } else if (values.length >= 2) {
      input.innerText = performOperation(values[0], input.innerText, values[1]);
      values = [];
    }
  } else {
    input.innerText = `${input.innerText}${element}`;
  }
  text = input.innerText.split(".");
  text[0] = text[0].replace(/,/g, "").replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  input.innerText = text.join(".");
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
