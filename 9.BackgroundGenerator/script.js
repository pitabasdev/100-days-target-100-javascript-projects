let color1 = document.querySelector('.color1');
let color2 = document.querySelector('.color2')
let h3 = document.getElementsByTagName('h3')
let body = document.querySelector('.gradeint')

function Color() {
    body.style.background = "linear-gradient(to right, "
        + color1.value
        + ", "
        + color2.value
        + ")";

    css.textContent = body.style.background + ";";
}

color1.addEventListener('input', Color)
color2.addEventListener('input', Color)