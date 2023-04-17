const tabs = [document.getElementById("fries-page"), document.getElementById("images-page")]

function changeTab(goto){
    // console.log(tabs[goto])
    
    // If current tab isn't hidden, don't run any of the changing code.
    if (!tabs[goto].classList.contains("hidden")){
        return
    }

    let i = 0
    for(i in tabs){
        if (!tabs[i].classList.contains("hidden")){
            tabs[i].classList.add("hidden")
            }
        }
        
        // Disable the red rest of the page if not on main page
        if (tabs[goto].id == "fries-page"){
            document.getElementById("main-page").classList.remove("hidden")
            document.getElementById("buttons").classList.remove("hidden")
            document.getElementById("buttons").style.zIndex = 150
        }else{
            document.getElementById("main-page").classList.add("hidden")
            document.getElementById("buttons").classList.add("hidden")
            document.getElementById("buttons").style.zIndex = 0
        }
        
        
    setTimeout(() => {
        tabs[goto].classList.remove("hidden")
    }, 300);
}

// changeTab()