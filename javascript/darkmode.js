let storage = window.localStorage
let theme = storage.getItem("theme")
const root = document.querySelector(':root')


if(theme === null || theme == "undefined"){
    storage.setItem("theme", "light")
    theme = "light"
}

function startTheme(){
    if (theme == "light"){
        setTheme("light")
    }else{
        setTheme("dark")
    }
}

function themeColorUpdater(primaryOrange, primaryRed, primaryLight, grey, background, secondaryBackground, text) {
    root.style.setProperty('--primary-orange', primaryOrange)
    root.style.setProperty('--primary-red', primaryRed)
    root.style.setProperty('--lighter-red', primaryLight)
    root.style.setProperty('--grey', grey)
    root.style.setProperty('--background-color', background)
    root.style.setProperty('--background-color-2', secondaryBackground)
    root.style.setProperty('--primary-text', text)
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
            "#000000"
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
            "#FFF"
        )
    } 
}

setTheme(theme)
