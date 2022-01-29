// aside part
const aside = document.querySelector("aside")
const library = document.createElement("div")
library.classList.add("library")
const libraryElements = ["YOUR LIBRARY", "Artists", "Albums", "Podcasts", "Stations", "Liked Songs", "Playlists"]
aside.appendChild(library)
for(let element of libraryElements) {
    const p = document.createElement("p")
    p.innerText = element
    library.appendChild(p)
}

const anotherLIb = document.createElement("div")
anotherLIb.classList.add("anotherLIb")
aside.appendChild(anotherLIb)

const libLis = ["turn off the lights...","Is it love?", "Is it raining?","Workout","Sad Vibes", "rtod"]
for(let list of libLis) {
    const p = document.createElement("p")
    p.innerText = list
    anotherLIb.appendChild(p)
}


const queue = document.createElement("div")
queue.classList.add("queue")
const queueTxt = document.createElement("p")
queueTxt.innerText = "Queue"
queue.appendChild(queueTxt)
aside.appendChild(queue)
const contain = document.createElement("div")
queue.appendChild(contain)
const text = ["Like I Love You", "Lost Frequencies, The NGHBRS"]
for(let txt of text) {
    const p = document.createElement("p")
    p.innerText = txt
    contain.appendChild(p)
}
const contain1 = document.createElement("div")
queue.appendChild(contain1)
const text1 = ["All Too Well (Taylor’s Version)", "Taylor Swift"]
for(let txt of text1) {
    const p = document.createElement("p")
    p.innerText = txt
    contain1.appendChild(p)
}
const contain2 = document.createElement("div")
queue.appendChild(contain2)
const text2 = ["All Too Well (Taylor’s Version)", "Taylor Swift"]
for(let txt of text2) {
    const p = document.createElement("p")
    p.innerText = txt
    contain2.appendChild(p)
}

const upDownIcon = document.querySelector(".up-down-icon")
upDownIcon.addEventListener("click", ()=> {
    document.querySelector(".header").classList.toggle("show")
    upDownIcon.classList.toggle("rotate")
})



// responsive aside

document.querySelector(".menu-icon").addEventListener("click", ()=> {
    aside.classList.toggle("show-aside")
})
document.querySelector(".close-icon").addEventListener("click", ()=> {
    aside.classList.toggle("show-aside")
})

// aside part ends (above)

// main-center part (below)

const main = document.querySelector("main")
const gMorning = document.createElement("div")
main.appendChild(gMorning)
gMorning.classList.add("gMorning")
const morningTxt = document.createElement("p")
morningTxt.innerText = "Good morning"
gMorning.appendChild(morningTxt)
const gMorningImages = document.createElement("div")
gMorningImages.classList.add("gMorningImges")
gMorning.appendChild(gMorningImages)
const gMorningImges = ["./assets/imges/gmorning.png", "./assets/imges/gmorning1.png", "./assets/imges/gmorning2.png"]

const searchIcon = document.querySelector(".search-icon")

searchIcon.addEventListener("click", ()=> {
    document.querySelector(".search-input").classList.toggle("search-inp-show")
})
window.addEventListener('click', function(e){   
    if (document.querySelector('.search-icon').contains(e.target)|| document.querySelector('.search-input').contains(e.target)){
      
    } else{
        document.querySelector(".search-input").classList.remove("search-inp-show")
    }
});

for(let img of gMorningImges) {
    const image = document.createElement("img")
    image.src = img
    gMorningImages.appendChild(image)

}

const recentTxt = document.createElement("p")
recentTxt.innerText = "Recently Played"
main.appendChild(recentTxt)

const recentPlayed = document.createElement("div")
recentPlayed.classList.add("recentPlayed")
main.appendChild(recentPlayed)

const playLists = [
    {
        img: "./assets/imges/Rectangle 4.png",
        boldTxt: "Where Are You Now",
        txt: "Lost Frequencies, Calum Scot"
    },
    {
        img: "./assets/imges/Rectangle 5.png",
        boldTxt: "Where Are You Now",
        txt: "Lost Frequencies, Calum Scot"
    },
    {
        img: "./assets/imges/Rectangle 6.png",
        boldTxt: "Where Are You Now",
        txt: "Lost Frequencies, Calum Scot"
    },
    {
        img: "./assets/imges/Rectangle 7.png",
        boldTxt: "Where Are You Now",
        txt: "Lost Frequencies, Calum Scot"
    }
]

for (let list of playLists) {
    const boxList = document.createElement("div")
    boxList.classList.add("boxList")
    recentPlayed.appendChild(boxList)
    const img = document.createElement("img")
    img.src = list.img
    const boldTxt = document.createElement("p")
    boldTxt.innerText = list.boldTxt 
    const txt = document.createElement("p")
    txt.innerText = list.txt
    boxList.append(img,boldTxt, txt)
}




const forYouTxt = document.createElement("p")
forYouTxt.innerText = "Made For You"
main.appendChild(forYouTxt)

const forYou = document.createElement("div")
forYou.classList.add("forYou")
main.appendChild(forYou)

const forYouLists = [
    {
        img: "./assets/imges/Rectangle 8.png",
        boldTxt: "Where Are You Now",
        txt: "Lost Frequencies, Calum Scot"
    },
    {
        img: "./assets/imges/Rectangle 9.png",
        boldTxt: "Where Are You Now",
        txt: "Lost Frequencies, Calum Scot"
    },
    {
        img: "./assets/imges/Rectangle 8 (1).png",
        boldTxt: "Where Are You Now",
        txt: "Lost Frequencies, Calum Scot"
    },
    {
        img: "./assets/imges/Rectangle 11.png",
        boldTxt: "Where Are You Now",
        txt: "Lost Frequencies, Calum Scot"
    }
]

for (let list of forYouLists) {
    const boxList = document.createElement("div")
    boxList.classList.add("boxList")
    forYou.appendChild(boxList)
    const img = document.createElement("img")
    img.src = list.img
    const boldTxt = document.createElement("p")
    boldTxt.innerText = list.boldTxt 
    const txt = document.createElement("p")
    txt.innerText = list.txt
    boxList.append(img,boldTxt, txt)
}



// main-center part ends(above)

// sidebar-section

const sidebar = document.querySelector(".sidebar")

const sidebarImages = ["./assets/imges/Ellipse .png", "./assets/imges/Ellipse 1.png", "./assets/imges/Ellipse 2.png", "./assets/imges/Ellipse 3.png", "./assets/imges/Ellipse 4.png", "./assets/imges/Ellipse 5.png", "./assets/imges/Ellipse 6.png", "./assets/imges/Ellipse 7.png", "./assets/imges/Ellipse 8.png"]

for(let image of sidebarImages) {
    const img = document.createElement("img")
    img.src = image
    sidebar.appendChild(img)
}
