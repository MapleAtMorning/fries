let storage = window.localStorage
let theme = storage.getItem("theme")
const sun = document.getElementById("sun")
const moon = document.getElementById("moon")
const root = document.querySelector(':root')


if(theme === null || theme == "undefined"){
    storage.setItem("theme", "dark")
    theme = "dark"
}

function startTheme(){
    if (getComputedStyle(sun).display === "block"){
        setTheme("light")
    }else{
        setTheme("dark")
    }
}

function themeColorUpdater(primaryOrange, primaryRed, primaryLight, grey, background, secondaryBackground, text, sunMoon) {
    root.style.setProperty('--primary-orange', primaryOrange)
    root.style.setProperty('--primary-red', primaryRed)
    root.style.setProperty('--lighter-red', primaryLight)
    root.style.setProperty('--grey', grey)
    root.style.setProperty('--background-color', background)
    root.style.setProperty('--background-color-2', secondaryBackground)
    root.style.setProperty('--primary-text', text)

    if (sunMoon === "sun"){
        sun.style.display = "block"
        moon.style.display = "none"
    }else{
        sun.style.display = "none"
        moon.style.display = "block"
    }
}

function setTheme(newTheme){
    console.log(newTheme)
    storage.setItem("theme", newTheme)
    if (newTheme === "light"){
        themeColorUpdater(
            "#ff4800",
            "#be1931",
            "221, 46, 68",
            "#636363",
            "#F2F2F2",
            "#ffffff",
            "#000000",
            "moon"
        )
    } 
    if (newTheme === "dark"){
        themeColorUpdater(
            "#ff4800",
            "#be1931",
            "221, 46, 68",
            "#636363",
            "#2a2d2e",
            "#1d2122",
            "#FFF",
            "sun"
        )
    } 
}

sun.addEventListener("click", startTheme)
moon.addEventListener("click", startTheme)

setTheme(theme)
