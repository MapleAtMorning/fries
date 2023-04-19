let storage = window.localStorage
let theme = storage.getItem("theme")
const sun = document.getElementById("sun")
const moon = document.getElementById("moon")
const root = document.querySelector(':root')


if(theme === null || theme == "undefined"){
    storage.setItem("theme", "light")
    theme = "light"
}

function startTheme(){
    if (getComputedStyle(sun).display === "block"){
        setTheme("light")
    }else{
        setTheme("dark")
    }
}

function setTheme(newTheme){
    console.log(newTheme)
    storage.setItem("theme", newTheme)
    if (newTheme === "light"){
        root.style.setProperty('--primary-text', "#000000")
        root.style.setProperty('--grey', "#999999")
        root.style.setProperty('--background-color', "#F2F2F2")
        root.style.setProperty('--background-color-2', "#ffffff")

        sun.style.display = "none"
        moon.style.display = "block"
    } 
    if (newTheme === "dark"){
        root.style.setProperty('--primary-text', "#F2F2F2")
        root.style.setProperty('--grey', "#d2d2d2")
        root.style.setProperty('--background-color', "#151515")
        root.style.setProperty('--background-color-2', "#000000")

        sun.style.display = "block"
        moon.style.display = "none"
    } 
}

sun.addEventListener("click", startTheme)
moon.addEventListener("click", startTheme)

setTheme(theme)