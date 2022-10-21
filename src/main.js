// On the new poster form view, users should be able to fill out the three input fields and then hit the Show My Poster button
// When the Show My Poster button is clicked, several things will happen:
// Use the values from the inputs to create a new instance of our Poster class (part of your data model)
// Save the submitted data into the respective arrays (image URL into the images array, etc - all part of your data model) so that future random posters can use the user-created data
// Change back to the main poster view (hiding the form view again)
// Use the new instance of the Poster class (part of your data model) to display the newly created poster image, title, and quote in the main view on the DOM

// When a user clicks the “Save This Poster” button, the current main poster will be added to the savedPosters array.
// If a user clicks the “Save This Poster” more than once on a single poster, it will still only be saved once (no duplicates)
// When a user clicks the “Show Saved Posters” button, we should see the saved posters section
// All the posters in the savedPosters array should be displayed in the saved posters grid section



// query selector variables go here 👇

// var poster = document.querySelector(".poster")
// var image = document.getElementById("poster-image-url").value
// var title = document.getElementById("poster-title").value
// var quote = document.getElementById("poster-quote").value
// var randomPosterButton = document.querySelector(".show-random")
// var makeYourOwnPosterButton = document.querySelector(".show-form")
// var makeYourOwnFormPage = document.querySelector(".poster-form")
// var mainPoster = document.querySelector(".main-poster")
// var viewSavedButton = document.querySelector(".show-saved")
// var savedPostersPage = document.querySelector(".saved-posters")
// var nevermindButton = document.querySelector(".show-main")
// var backToMainButton = document.querySelector(".back-to-main")
// var showMyPosterButon = document.querySelector(".make-poster")
//var savedPostersGridPage = document.querySelector(".saved-posters-grid")

// event listeners go here 👇
// window.addEventListener("load", pageLoad)
// makeYourOwnPosterButton.addEventListener("click", makeYourOwnPosterForm)
// randomPosterButton.addEventListener("click", showRandomPoster)
// viewSavedButton.addEventListener("click", viewSavedPosters)
// nevermindButton.addEventListener("click", pageLoad)
// backToMainButton.addEventListener("click", pageLoad)
// showMyPosterButon.addEventListener("click", showMyPoster)


// we've provided you with some data to work with 👇
var images = [
  "./assets/bees.jpg",
  "./assets/bridge.jpg",
  "./assets/butterfly.jpg",
  "./assets/cliff.jpg",
  "./assets/elephant.jpg",
  "./assets/flock.jpg",
  "./assets/fox.jpg",
  "./assets/frog.jpg",
  "./assets/horse.jpg",
  "./assets/lion.jpg",
  "./assets/mountain.jpg",
  "./assets/pier.jpg",
  "./assets/puffins.jpg",
  "./assets/pug.jpg",
  "./assets/runner.jpg",
  "./assets/squirrel.jpg",
  "./assets/tiger.jpg",
  "./assets/turtle.jpg"
];
var titles = [
  "determination",
  "success",
  "inspiration",
  "perspiration",
  "grit",
  "empathy",
  "feelings",
  "hope",
  "believe",
  "try",
  "conviction",
  "accomplishment",
  "achievement",
  "ambition",
  "clarity",
  "challenge",
  "commitment",
  "confidence",
  "action",
  "courage",
  "focus",
  "breathe",
  "gratitude",
  "imagination",
  "kindness",
  "mindfulness",
  "knowledge",
  "opportunity",
  "passion",
  "patience",
  "practice",
  "smile",
  "trust",
  "understanding",
  "wisdom"
];
var quotes = [
  "Don’t downgrade your dream just to fit your reality, upgrade your conviction to match your destiny.",
  "You are braver than you believe, stronger than you seem and smarter than you think.",
  "You are confined only by the walls you build yourself.",
  "The one who has confidence gains the confidence of others.",
  "Act as if what you do makes a difference. It does.",
  "Success is not final, failure is not fatal: it is the courage to continue that counts.",
  "Never bend your head. Always hold it high. Look the world straight in the eye.",
  "What you get by achieving your goals is not as important as what you become by achieving your goals.",
  "Believe you can and you're halfway there.",
  "When you have a dream, you've got to grab it and never let go.",
  "I can't change the direction of the wind, but I can adjust my sails to always reach my destination.",
  "No matter what you're going through, there's a light at the end of the tunnel.",
  "It is our attitude at the beginning of a difficult task which, more than anything else, will affect its successful outcome.",
  "Life is like riding a bicycle. To keep your balance, you must keep moving.",
  "Just don't give up trying to do what you really want to do. Where there is love and inspiration, I don't think you can go wrong.",
  'Limit your "always" and your "nevers."',
  "You are never too old to set another goal or to dream a new dream.",
  "Try to be a rainbow in someone else's cloud.",
  "You do not find the happy life. You make it.",
  "Inspiration comes from within yourself. One has to be positive. When you're positive, good things happen.",
  "Sometimes you will never know the value of a moment, until it becomes a memory.",
  "The most wasted of days is one without laughter.",
  "You must do the things you think you cannot do.",
  "It isn't where you came from. It's where you're going that counts.",
  "It is never too late to be what you might have been.",
  "Happiness often sneaks in through a door you didn't know you left open.",
  "We must be willing to let go of the life we planned so as to have the life that is waiting for us.",
  "Never limit yourself because of others’ limited imagination; never limit others because of your own limited imagination.",
  "Be the change that you wish to see in the world.",
  "Let us make our future now, and let us make our dreams tomorrow's reality.",
  "You don't always need a plan. Sometimes you just need to breathe, trust, let go, and see what happens.",
  "If I cannot do great things, I can do small things in a great way.",
  "Don't wait. The time will never be just right.",
  "With the right kind of coaching and determination you can accomplish anything.",
  "If you have good thoughts they will shine out of your face like sunbeams and you will always look lovely.",
  "No matter what people tell you, words and ideas can change the world.",
  "Each person must live their life as a model for others.",
  "A champion is defined not by their wins but by how they can recover when they fall."
];
var savedPosters = [];
var currentPoster = {};
 
var mainPoster = document.querySelector('.main-poster')
var poster = document.querySelector('.poster')
var randomPosterButton = document.querySelector('.show-random')
var makeYourOwnPosterButton = document.querySelector('.show-form')
var posterForm = document.querySelector('.poster-form')
var savedPostersButton = document.querySelector('.show-saved')
var savedPostersPage = document.querySelector('.saved-posters')
var backToMainButton = document.querySelector('.back-to-main')
var nevermindButton = document.querySelector('.show-main')
var makePosterButton = document.querySelector('.make-poster')
var saveThisPosterButton = document.querySelector('.save-poster')
var showMySavedPostersGrid = document.querySelector('.saved-posters-grid')

window.addEventListener('load', loadPage)
randomPosterButton.addEventListener('click', showRandomPoster)
makeYourOwnPosterButton.addEventListener('click', showMakeYourOwnPoster)
//capture automatic reload event and call .preventDefault()
savedPostersButton.addEventListener('click', showSavedPosters)
backToMainButton.addEventListener('click', hideSavedPosters)
nevermindButton.addEventListener('click', hideMakeYourOwnPoster)
makePosterButton.addEventListener('click', createMyOwnPoster)
saveThisPosterButton.addEventListener('click', saveCurrentPosters)

function loadPage() {
  var image = images[getRandomIndex(images)]
  var title = titles[getRandomIndex(titles)]
  var quote = quotes[getRandomIndex(quotes)]
 poster.innerHTML = `<img class="poster-img" src="${image}" alt="nothin' to see here"/>
  <h1 class="poster-title">${title}</h1>
  <h3 class="poster-quote">${quote}</h3>`
  var newPoster1 = new Poster(image,title,quote)
  currentPoster = newPoster1
}
function showRandomPoster() {
  loadPage()
}
function showMakeYourOwnPoster() {
  mainPoster.classList.add('hidden')
  posterForm.classList.remove('hidden')
}
function showSavedPosters() {
  mainPoster.classList.add('hidden')
  savedPostersPage.classList.remove('hidden')
  showMySavedPostersGrid.innerHTML = `<img class="poster-img" src="${savedPosters[0].image}" alt="nothin' to see here"/>
  <h1 class="poster-title">${savedPosters[0].title}</h1>
  <h3 class="poster-quote">${savedPosters[0].quote}</h3>`
}
function hideSavedPosters() {
  mainPoster.classList.remove('hidden')
  savedPostersPage.classList.add('hidden')
}
function hideMakeYourOwnPoster() {
  mainPoster.classList.remove('hidden')
  posterForm.classList.add('hidden')
}
function createMyOwnPoster() {
  hideMakeYourOwnPoster()
  var image = document.getElementById("poster-image-url").value
  var title = document.getElementById("poster-title").value
  var quote = document.getElementById("poster-quote").value
  poster.innerHTML = `<img class="poster-img" src="${image}" alt="nothin' to see here"/>
  <h1 class="poster-title">${title}</h1>
  <h3 class="poster-quote">${quote}</h3>`

  images.push(image)
  titles.push(title)
  quotes.push(quote)
  currentPoster = new Poster(image, title, quote)
  savedPosters.push(currentPoster)
}
function saveCurrentPosters() {
  savedPosters.push(currentPoster)
  console.log('Will save this poster', savedPosters)
}



// functions and event handlers go here 👇
// (we've provided one for you to get you started)!
function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
}

// function pageLoad() {
//   mainPoster.classList.remove("hidden")
//   makeYourOwnFormPage.classList.add("hidden")
//   savedPostersPage.classList.add("hidden")
//   var imageIndex = getRandomIndex(images)
//   var titleIndex = getRandomIndex(titles)
//   var quoteIndex = getRandomIndex(quotes)
//   var newPoster = {
//     image: images[imageIndex],
//     title: titles[titleIndex],
//     quote: quotes[quoteIndex],
//   }
//   updatePoster(newPoster)
// }
// function showRandomPoster() {
//   //show random button
//   makeYourOwnFormPage.classList.add("hidden")
//   console.log(`Hey this is your `, poster)
//   var imageIndex = getRandomIndex(images)
//   var titleIndex = getRandomIndex(titles)
//   var quoteIndex = getRandomIndex(quotes)
//   var newPoster = {
//     image: images[imageIndex],
//     title: titles[titleIndex],
//     quote: quotes[quoteIndex],
//   }
//   updatePoster(newPoster)
  
// }
// function makeYourOwnPosterForm() {
//   //make my own poster button
//   mainPoster.classList.add("hidden")
//   makeYourOwnFormPage.classList.remove("hidden")
  
// }
// function viewSavedPosters() {
//   //saved posters button
//   makeYourOwnFormPage.classList.add("hidden")
//   mainPoster.classList.add("hidden")
//   savedPostersPage.classList.remove("hidden")
// }
// function showMyPoster() {
//   //show my poster button
//   newPoster = {
//     image: document.getElementById("poster-image-url").value,
//     title: document.getElementById("poster-title").value,
//     quote: document.getElementById("poster-quote").value,
//   }
//   var newPoster = new Poster (newPoster)
// updatePoster(newPoster)
// console.log('This will be checking the showMyPoster functionality')
 
// }
// function updatePoster(newPoster) {
//   mainPoster.classList.remove("hidden")
//   makeYourOwnFormPage.classList.add("hidden")
//   savedPostersPage.classList.add("hidden")

//   poster.innerHTML = `<img class="poster-img" src=${newPoster.image} alt="poster image">
//   <h1 class="poster-title">${newPoster.title}</h1>
//   <h3 class="poster-quote">${newPoster.quote}</h3>`
// }

// function updatePoster2(newPoster) {
//   mainPoster.classList.remove("hidden")
//   makeYourOwnFormPage.classList.add("hidden")
//   savedPostersPage.classList.add("hidden")

//   posterImage.src = newPoster.image
//   posterTitle.innerText = newPoster.title
//   posterQuote.innerText = newPoster.quote
// }

//On the new poster form view, users should be able to 
//fill out the three input fields and then hit the 
//Show My Poster button

// When the Show My Poster button is clicked, 
//several things will happen:

// Use the values from the inputs to create a new instance 
//of our Poster class (part of your data model)

// Save the submitted data into the respective arrays 
//(image URL into the images array, etc - all part of your data model)
//so that future random posters can use the user-created data

// Change back to the main poster view (hiding the form view again)
// Use the new instance of the Poster class (part of your data model) 
//to display the newly created poster image, title, and quote in 
//the main view on the DOM


