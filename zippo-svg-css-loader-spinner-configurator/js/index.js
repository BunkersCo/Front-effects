// control helpers
const loader = document.querySelector('svg.spinner')
const body = document.querySelector('body')
let setProperty = (selector, property, value) => {
  loader.style.setProperty(property, value)
  let elements = document.querySelectorAll(selector)
  elements.forEach(element => element.innerHTML = value)
}

let toggleDarkness = () => body.classList.toggle('light')