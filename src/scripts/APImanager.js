
// function to fetch data from local json server and parse
const fetchParks = () => {
    return fetch("http://localhost:8088/parks/")
    .then(res => res.json())
}

// fetches data from darksky api
const fetchWeather = (i, lat, long) => {
    return fetch(`https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/${darkSkyApi}/${lat},${long}`)
    .then(res => res.json())
}