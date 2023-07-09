let rawJSON
async function jsonGrab(){
    const result = await fetch("https://mapleatmorning.github.io/ytrandomjson/ytrandom.json")
    rawJSON = await result.json()
    return rawJSON
}
await jsonGrab()

let keys = Object.keys(rawJSON)

function grabRandom(){
    let randomItem = keys[Math.floor(Math.random()*keys.length)]
    document.getElementById('random-link').href = randomItem
}
document.getElementById('random-link').addEventListener("click", grabRandom)
grabRandom()
