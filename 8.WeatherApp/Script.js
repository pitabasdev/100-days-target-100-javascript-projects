function weather() {
    const key = '8ZE3wl5cMpyuWL5CGqGDU5kAVOouGcUD'
    let city = document.getElementById('city').value;
    fetch(`http://dataservice.accuweather.com/locations/v1/cities/search?apikey=${key}&q=${city}`)
        .then(response => response.json())
        .then((data) => {

            let locationKey = data[0].Key
            return fetch(`http://dataservice.accuweather.com/currentconditions/v1/${locationKey}?apikey=${key}`);

        })
        .then(response => response.json())
        .then((data) => {
            let temperature = data[0].Temperature.Metric.Value;
            console.log(`Current Temperature: ${temperature}°C`);
        })
        .catch(error => {
            console.error('Error fetching weather data:', error);
        });
}

