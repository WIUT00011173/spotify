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