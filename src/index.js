getRandom4()
// or document.addEventListener('DOMContentLoaded', getRandom4)
getAllBreeds()

// Elements from Dom
const imgDiv = document.querySelector('#dog-image-container')
const breedUl = document.querySelector('#dog-breeds')

// Fetch Request
function getRandom4() {
  fetch("https://dog.ceo/api/breeds/image/random/4")
  .then(res => res.json())
  .then(dogObj => addImagesToDom(dogObj)) 
}

function getAllBreeds() {
  fetch('https://dog.ceo/api/breeds/list/all')
  .then(res => res.json())
  .then(dogBreedObj => createBreedLis(dogBreedObj)) 
}


// Functions
function addImagesToDom(dogObj) {
  dogObj.message.forEach(dogImg => {
  const img = document.createElement('img')
  img.src = dogImg
  img.style.maxWidth = '300px'
  imgDiv.append(img)
  })
}

function createBreedLis(dogBreedObj) {
  const breedArray = Object.keys(dogBreedObj.message)
  // create li for each breed
  breedArray.forEach(breed => {
    const breedLi = document.createElement('li')
    breedLi.textContent = breed
    breedUl.append(breedLi)

  breedLi.addEventListener("click", (e) => {
    let c1 = Math.floor(Math.random() * 256)
    let c2 = Math.floor(Math.random() * 256)
    let c3 = Math.floor(Math.random() * 256)
    e.target.style.color = `rgb(${c1}, ${c2}, ${c3})`
    e.target.style.backgroundColor = `rgb(${c2}, ${c3}, ${c1})`
    
    // TOGGLE COLORs
    // if (!!e.target.style.color){
    //   e.target.style.color = "black"
    //   e.target.style.backgroundColor = "white"
    // } else {
    //  e.target.style.color = `rgb(${c1}, ${c2}, ${c3})`
    //  e.target.style.backgroundColor = `rgb(${c2}, ${c3}, ${c1})`
    // }
    })
  })
}