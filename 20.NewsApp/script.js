function News() {
    const api = "50b26d6ff2284aaab2978fce0bf1b7f2"
    fetch(`https://newsapi.org/v2/top-headlines?country=us&apiKey=${api}`)
        .then(response => response.json())
        .then((data) => {
            console.log(data)
        })
        .catch((err) => {
            console.error(err);
        })
}