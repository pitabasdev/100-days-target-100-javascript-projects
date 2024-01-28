function Generate() {
    var meal = document.querySelector('.meal-container')
    meal.innerHTML = ''
    fetch('www.themealdb.com/api/json/v1/1/random.php')
        .then(response => response.json())
        .then(data => {
            console.log(data)
        })
}