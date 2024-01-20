let btn = document.querySelector('button')
let num = 0;
let quote = [];
let h = document.querySelector('h1');

fetch("https://type.fit/api/quotes")
    .then(function (response) {
        return response.json();
    })
    .then((data) => {
        quote = data;
    })
    .catch((error) => {
        console.log(error)
    })

btn.addEventListener('click', () => {
    num++;
    h.innerText = quote[num].text;

})