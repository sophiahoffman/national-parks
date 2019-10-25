
// one function that calls the fetch parks function and then displays results and switches css tag based on visited key for parks


const displayResults = () => {
    fetchParks()
    .then(parsedParks => {
        for (park of parsedParks) {
            // create new article element to be appended to body
            const newElement = document.createElement("article")
            newElement.class = "article-park"
            newElement.id = `parkResult${parsedParks.indexOf(park)}`
            newElement.innerHTML = `
            <h3>${park.name}</h3>
            <p>${park.state}</p>
            `
            // adds class to the list of classes based on value under visited key of park object
            if (park.visited === true) {
                newElement.classList.add("visited")
            } else {
                newElement.classList.add("unvisited")
            }
            document.querySelector("body").appendChild(newElement)
        }
    })
}

