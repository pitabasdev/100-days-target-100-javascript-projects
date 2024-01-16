let display=document.getElementById("display-location")
let btn=document.getElementById('btn')

btn.addEventListener("click",()=>{
    navigator.geolocation.getCurrentPosition((position)=>{
        let lat=position.coords.latitude;
        let lon=position.coords.longitude;
    
        const api="44eba5cd419f4758b87055794f038b43"
    
        fetch(`https://api.opencagedata.com/geocode/v1/json?key=${api}&q=${lat}+${lon}$pretty=1`)
        .then(res => res.json())
    
        .then(data=>{
            console.log(data)
            const city=data.results[0].components.country
    
            console.log(city)
            display.textContent=city
        })
       
    });
})
