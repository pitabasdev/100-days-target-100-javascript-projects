function search() {
    var input = document.querySelector('.input-data').value;

    fetch(`www.themealdb.com/api/json/v1/1/search.php?s=${input}`)
        .then(response => response.json())
        .then((date) => {
            console.log(date);
        })
        .catch((err) => {
            alert("Error");
        })

}