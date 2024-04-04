import {reviews} from '../data/reviews.js';
console.log(reviews)

// adds current year in footer
const currentYear = new Date()
document.querySelector("#year").innerHTML = currentYear.getFullYear()

function toggleMenu() {
    document.querySelector("#navItems").classList.toggle("open");
    document.querySelector("#menuBtn").classList.toggle("open");
}

const x = document.querySelector("#menuBtn")

x.onclick = toggleMenu;

// CREATING REVIEW CARDS
// reaching out to the #cards div (where i want to place the cards)
const allCards = document.querySelector("#cards")

for (let x = 0; x < reviews.length; x++){

    // creating a section for each card
    const myCard = document.createElement('section')

    // creating elements that go within each card
    const myName = document.createElement('h3')
    myName.innerHTML = reviews[x].name
    console.log(myName)

    const myReview = document.createElement('p')
    myReview.innerHTML = reviews[x].text
    console.log(myReview)

    const myRating = document.createElement('div') // this will hold the img


    console.log(reviews[x].stars) //this value is the number of stars that should be displayed
    for (let step = 0; step < reviews[x].stars; step++) {
        const starRating = document.createElement('img') // this will hold the svg file of the star
        starRating.src = "./images/star.svg"
        myRating.appendChild(starRating)

    }

    // adding elements into their card
    myCard.appendChild(myName)
    myCard.appendChild(myReview)
    myCard.appendChild(myRating)

    // adding the card to the page
    allCards.appendChild(myCard)

} // end of reviews.js loop