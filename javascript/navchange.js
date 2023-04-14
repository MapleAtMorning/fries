const tabs = [document.getElementById("fries-page"), document.getElementById("images-page")]

function changeTab(goto){
    i = 0
    console.log(tabs[goto])
    for(i in tabs){
        if (!tabs[i].classList.contains("hidden")){
            tabs[i].classList.add("hidden")
        }
        if (tabs[goto].id == "fries-page"){
            document.getElementById("main-page").classList.remove("hidden")
        }else{
            document.getElementById("main-page").classList.add("hidden")
        }
        tabs[goto].classList.remove("hidden")
    }
}

// changeTab()