function search() {
    var input = document.querySelector('.input-data').value;
    var div = document.querySelector('.data')
    div.innerHTML = ''

    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${input}`)

        .then(response => response.json())
        .then((data) => {
            data.meals.forEach((meal) => {
                console.log(meal)
                let meald = document.createElement('div')
                meald.innerHTML = `<h2>${meal.strMeal}</h2>
                <img src="${meal.strMealThumb}">
                <p>${meal.strInstructions}</p>
                `;
                div.appendChild(meald)

            })

        })


        .catch((err) => {
            alert("Error");
        })

}