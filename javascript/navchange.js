const tabs = [document.getElementById("fries-page"), document.getElementById("images-page")]
const container = document.getElementById("title-container")
const subtitle = document.getElementById("expand-subtitle")
const title = document.getElementById("changing-text")
const nav = document.getElementById('nav-link-holder')
const menu = document.getElementById('list-button')
let changing = false
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
    if (!tabs[goto].classList.contains("hidden") || changing){
        return
    }

    changing = true
    let i = 0
    for(i in tabs){
        if (!tabs[i].classList.contains("hidden")){
            tabs[i].classList.add("hidden")
            }
        }
        
        // Disable the red rest of the page if not on main page
        if (tabs[goto].id == "fries-page"){
            document.getElementById("main-page").classList.remove("hard-hidden")
            subtitle.classList.add("hidden")
            title.classList.add("hidden")
            container.style.width = "550px"

            setTimeout(() => {
              document.getElementById("buttons").classList.remove("hidden")
              document.getElementById("buttons").style.zIndex = 150
              subtitle.innerHTML = "it's fries"
              subtitle.classList.remove("hidden")
              title.innerHTML = "The Discord server."
              title.classList.remove("hidden")
            }, 300);

        }else{
            document.getElementById("main-page").classList.add("hard-hidden")
            document.getElementById("buttons").classList.add("hidden")
            document.getElementById("buttons").style.zIndex = 0
            subtitle.classList.add("hidden")
            title.classList.add("hidden")
            container.style.width = "280px"

            setTimeout(() => {
              subtitle.innerHTML = "it's pics"
              subtitle.classList.remove("hidden")
              title.innerHTML = "The Pics."
              title.classList.remove("hidden")
            }, 300);

        }
        
        
    setTimeout(() => {
        tabs[goto].classList.remove("hidden")
        changing = false
    }, 300);
}

// changeTab()

menu.addEventListener("click", navStart)