function search() {
    var input = document.querySelector('.input-data').value;

    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${input}`)

        .then(response => response.json())
        .then((data) => {
            data.meals.forEach((meal) => {
                console.log(meal)
            })

        })


        .catch((err) => {
            alert("Error");
        })

}