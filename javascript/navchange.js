const tabs = [document.getElementById("fries-page"), document.getElementById("images-page")]
const nav = document.getElementById('nav-link-holder')
const menu = document.getElementById('list-button')
let openBool = false

function navOpen () {
  console.log('Open')
  nav.classList.add('open')
  openBool = true
};

function navClose () {
  console.log('Close')
  nav.classList.remove('open')
  openBool = false
};

function navStart () {
  if (openBool === true) {
    navClose()
  } else {
    navOpen()
  };
  // Else instead of elseif to make it so if anything goes wrong, it will default to trying to open the menu.
};


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

menu.addEventListener("click", navStart)