# Frontend Mentor - Calculator app solution

This is a solution to the [Calculator app challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/calculator-app-9lteq5N29). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- See the size of the elements adjust based on their device's screen size
- Perform mathmatical operations like addition, subtraction, multiplication, and division
- Adjust the color theme based on their preference
- **Bonus**: Have their initial theme preference checked using `prefers-color-scheme` and have any additional changes saved in the browser

### Screenshot

![](./screenshot.jpg)

### Links

- Solution URL: [Add solution URL here](https://github.com/Anandhex/-Frontend-Mentor---Calculator)
- Live Site URL: [Add live site URL here](https://anandhex.github.io/-Frontend-Mentor---Calculator/)

## My process

### Built with

- Semantic HTML5 markup
- CSS Grid
- SASS

### What I learned

Using of prefers-color-schemes to set the intial theme of the page

```js
//checks whether the prefers-color-scheme is present or not
if (window.matchMedia("(prefers-color-scheme: dark)").media === "not all") {
  document.getElementById("range").value = "2";
  document.body.classList.remove("theme3");
  document.body.classList.add("theme2");
  //default to light theme
} else {
  //if present
  if (window.matchMedia("(prefers-color-scheme:dark)").matches === false) {
    document.getElementById("range").value = "2";
    document.body.classList.remove("theme3");
    document.body.classList.add("theme2");
  }
}
```

## Author

- Author - [Anand]
