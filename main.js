import './style.css'

const darkMode = document.querySelector('#app')
darkMode.innerHTML = `
  <i class='bx bxs-moon' ></i>
  `
let isDark = false;

const body = document.querySelector('#myBody')

darkMode.addEventListener("click", () => {
  if (isDark) {
    darkMode.innerHTML = `
    <i class='bx bxs-moon' ></i>
    `
    isDark = false;
  } else {
    darkMode.innerHTML = `
    <i class='bx bxs-sun' ></i>
    `;
    isDark = true;
  }
  body.classList.toggle("darkMode")
})
