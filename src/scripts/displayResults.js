
// one function that calls the fetch parks function and then displays results and switches css tag based on visited key for parks


const displayResults = () => {

    fetchParks()
    .then(parsedParks => {

        for (park of parsedParks) {
            // create new article element to be appended to body
            const lat = `${park.latitude}`
            const long = `${park.longitude}`
            const i = parsedParks.indexOf(park)    

            fetchWeather(i, lat, long)
            .then((parsedWeather) => {
                const newArticle = document.createElement("article")
                newArticle.class = "article-park"
                newArticle.id = `parkResult${i}`
                newArticle.innerHTML = `
                <h3>${parsedParks[i].name}</h3>
                <p>${parsedParks[i].state}</p>
                <p>Currently: ${parsedWeather.currently.summary} <br>
                Today: ${parsedWeather.hourly.summary} <br>
                Weekly weather: ${parsedWeather.daily.summary}<br>
                </p>
                `

                // adds class to the list of classes based on value under visited key of park object
                if (parsedParks[i].visited === true) {
                    newArticle.classList.add("visited")
                } else {
                    newArticle.classList.add("unvisited")
                }
                document.querySelector("body").appendChild(newArticle) 

            })
        }
    })
}
        







    


