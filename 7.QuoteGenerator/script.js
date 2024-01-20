function Quote() {
    let num = 0;
    let quote = []
    fetch("https://type.fit/api/quotes")
        .then(function (response) {
            return response.json();
        })
}