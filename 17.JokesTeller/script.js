function Jokes() {
    fetch('https://v2.jokeapi.dev/joke/Any')
        .then(response => response.json())
        .then((data) => {
            if (data.type == "twopart") {
                document.querySelector(".jokes").innerHTML = `<strong>${data.setup}</strong><br> ${data.delivery}`;
            } else {
                document.querySelector(".jokes").innerHTML = `<strong>${data.joke}</strong>`;
            }




        })
        .catch((error) => {
            console.log(error)
        })
}