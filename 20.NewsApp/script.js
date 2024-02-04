function News() {
    const api = "50b26d6ff2284aaab2978fce0bf1b7f2"
    fetch(`https://newsapi.org/v2/top-headlines?country=us&apiKey=${api}`)
        .then(response => response.json())
        .then((data) => {

            data.articles.forEach((news) => {
                console.log(news)
                const list = document.getElementById('news')
                const div = document.createElement('div')
                div.innerHTML = `
                <img src="${news.urlToImage}" alt="News Image">
                <h1>${news.author}"</h1>
                <h2>${news.title}</h2>
                <p>${news.description}</p>
                <a href="${news.url}>Read</a>
                `
                list.appendChild(div)
            })
        })
        .catch((err) => {
            console.error(err);


        })
}