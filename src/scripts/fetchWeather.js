
const fetchWeather = (i, lat, long) => {


    return fetch(`https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/${darkSkyApi}/${lat},${long}`)
    .then(res => res.json())
}
    

    
