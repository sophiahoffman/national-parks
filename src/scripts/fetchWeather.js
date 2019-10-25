let weatherReport
const fetchWeather = (i, lat, long) => {

    let weatherReport = ""
    fetch(`https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/${darkSkyApi}/${lat},${long}`)
    .then(res => res.json())
    .then(parsedWeather => {
        
   
        const newElement = document.createElement("p")
        newElement.id = `weather${i}` 
        newElement.innerHTML = `
        Currently: ${parsedWeather.currently.summary} <br>
        Today: ${parsedWeather.hourly.summary} <br>
        Weekly weather: ${parsedWeather.daily.summary}<br>
        `
        document.querySelector(`#parkResult${i}`).appendChild(newElement)
        
        
    })


    

}