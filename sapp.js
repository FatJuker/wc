const apiKey = "62b950c35ba9f5be01859093183eb120"
const https = require("https")
const math = (thing) => {
    const equation = 1.8 * (thing - 273) + 32
    return Math.floor(equation)
}
const getWeather = cityName => {
    https.get(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&APPID=${apiKey}`, (res) => {
        let rawData = ""
        res.on("data", (chunk) => {
            rawData += chunk

        })

        res.on("end", () => {
            const j = JSON.parse(rawData)

            console.log(`Coords are ${j.coord.lon}, ${j.coord.lat} The city of ${j.name}, has a minimum farrenheight of ${math(j.main.temp_min)} and a max farrenheight of ${math(j.main.temp_max)} humidity is ${j.main.humidity}`)
        })
    })
}

const processCities = () => {
    const cities = process.argv.slice(2)
    cities.map((scitys) => {
        getWeather(scitys)
    })
}
processCities()

module.exports.get = getWeather