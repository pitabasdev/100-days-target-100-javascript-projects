function weather() {
    const key = '8ZE3wl5cMpyuWL5CGqGDU5kAVOouGcUD'
    let city = document.getElementById('city').value;
    fetch(`http://dataservice.accuweather.com/locations/v1/cities/search?apikey=${key}&q=${city}`)
        .then(response => response.json())
        .then((data) => {

            let locationKey = data[0].Key
            console.log()
        })
}