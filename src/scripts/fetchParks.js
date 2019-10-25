
// function to fetch data from local json server and parse
const fetchParks = () => {
    return fetch("http://localhost:8088/parks/")
    .then(res => res.json())
}

