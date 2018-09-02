//const image = document.querySelector("img")
const https = require('https')

const randomDogUrl = https.get("https://teamtreehouse.com/willlee4.json", (res) => {
    let rawData = ''
    res.on('data', (chunk) => { 
        rawData += chunk 
    })
    
    res.on('end', () => {
        const data = JSON.parse(rawData)
        console.log(`${data.name} has ${data.points.total} amount of points.`)
    })
})

const getProfile = (username) => {
    https.get(`https://teamtreehouse.com/${username}.json`, (res) => {
       let rawData = ''
        res.on('data', (monk) => {
            rawData += monk
        })
    
        res.on('end', () => {
            const data = JSON.parse(rawData)
            console.log(`${data.name} has ${data.points.total} amount of points.`)
        })
    })
}

getProfile("calebchapman")
console.log(process.argv.slice(2))

const processUsernames = () => {
    const usernames = process.argv.slice(2)
    usernames.map((username) => {
        console.log(username)    
        getProfile(username)
    })
}
processUsernames()
