function Generate() {
    var meal = document.querySelector('.meal-container')
    meal.innerHTML = ''
    fetch('https://www.themealdb.com/api/json/v1/1/random.php')
        .then(response =>
            response.json()
        )
        .then(data => {
            const mealdiv = document.createElement('div');
            mealdiv.classList.add('meal');
            mealdiv.innerHTML = `
            <h3>${data.meals[0].strMeal}</h3>
            <img src="${data.meals[0].strMealThumb}">
            <p>${data.meals[0].strInstructions}</p>
            `;

            meal.appendChild(mealdiv);
            console.log(data.meals[0]);
        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });
}
