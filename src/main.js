// query selector variables go here 👇

var poster = document.querySelector(".poster")
var randomPosterButton = document.querySelector(".show-random")
var makeYourOwnPosterButton = document.querySelector(".show-form")
var makeYourOwnFormPage = document.querySelector(".poster-form")
var mainPoster = document.querySelector(".main-poster")
var viewSavedButton = document.querySelector(".show-saved")
var savedPostersPage = document.querySelector(".saved-posters")
var nevermindButton = document.querySelector(".show-main")
var backToMainButton = document.querySelector(".back-to-main")
var showMyPosterButton = document.querySelector(".make-poster")
var imageInputValue = document.getElementById("poster-image-url")
var titleInputValue = document.getElementById("poster-title")
var quoteInputValue = document.getElementById("poster-quote")
var posterImage = document.querySelector(".poster-img")
var posterTitle = document.querySelector(".poster-title")
var posterQuote = document.querySelector(".poster-quote")

// event listeners go here 👇
window.addEventListener("load", pageLoad)
makeYourOwnPosterButton.addEventListener("click", makeYourOwnPosterForm)
randomPosterButton.addEventListener("click", showRandomPoster)
viewSavedButton.addEventListener("click", viewSavedPosters)
nevermindButton.addEventListener("click", pageLoad)
backToMainButton.addEventListener("click", pageLoad)
showMyPosterButton.addEventListener("click", submitPosterForm)


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
var currentPoster;
 

// functions and event handlers go here 👇
// (we've provided one for you to get you started)!
function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
}
function pageLoad() {
  mainPoster.classList.remove("hidden")
  makeYourOwnFormPage.classList.add("hidden")
  savedPostersPage.classList.add("hidden")
  var imageIndex = getRandomIndex(images)
  var titleIndex = getRandomIndex(titles)
  var quoteIndex = getRandomIndex(quotes)
  var newPoster = {
    image: images[imageIndex],
    title: titles[titleIndex],
    quote: quotes[quoteIndex],
  }
  currentPoster = new Poster(newPoster.image,newPoster.title,newPoster.quote)
  posterImage.src = currentPoster.imageURL
  posterTitle.innerText = currentPoster.title
  posterQuote.innerText = currentPoster.quote
  
// posterImage.src =currentPoster.imageurl
// posterTitle.innerText = currentPoster.title
  
}
function showRandomPoster() {
  makeYourOwnFormPage.classList.add("hidden")
  console.log(`Hey this is your `, poster)
  var imageIndex = getRandomIndex(images)
  var titleIndex = getRandomIndex(titles)
  var quoteIndex = getRandomIndex(quotes)
  var newPoster = {
    image: images[imageIndex],
    title: titles[titleIndex],
    quote: quotes[quoteIndex],
  }
  poster.innerHTML = `<img class="poster-img" src=${newPoster.image} alt="poster image">
  <h1 class="poster-title">${newPoster.title}</h1>
  <h3 class="poster-quote">${newPoster.quote}</h3>`
}
function makeYourOwnPosterForm() {
  mainPoster.classList.add("hidden")
  makeYourOwnFormPage.classList.remove("hidden")
}
function viewSavedPosters() {
  makeYourOwnFormPage.classList.add("hidden")
  mainPoster.classList.add("hidden")
  savedPostersPage.classList.remove("hidden")
}
function submitPosterForm(event) {
  
  console.log("The submitPosterForm is firing")
  console.log(imageInputValue)
  event.preventDefault()
  makeYourOwnFormPage.classList.remove("hidden")
  
  var imageInputValue = document.getElementById("poster-image-url").value
  var titleInputValue = document.getElementById("poster-title").value
  var quoteInputValue = document.getElementById("poster-quote").value
  // var imageInputValue = imageInputValue.value
  // var titleInputValue = titleInputValue.value
  // var quoteInputValue = quoteInputValue.value
  console.log("imageInputValue: ",imageInputValue )
  console.log("titleInputValue: ", titleInputValue)
  console.log("quoteInputValue: ", quoteInputValue)
  poster.innerHTML =`<img class="poster-img" src="${imageInputValue}" alt="nothin' to see here">
  <h1 class="poster-title">${titleInputValue}</h1>
  <h3 class="poster-quote">${quoteInputValue}</h3>`
  console.log(makeYourOwnFormPage)
  var userPoster = new Poster(imageInputValue, titleInputValue, quoteInputValue)
  images.push(imageInputValue)
  titles.push(titleInputValue)
  quotes.push(quoteInputValue)
  savedPosters.push(userPoster)
}
var currentPoster = new Poster(posterImage,posterTitle,posterQuote)

// posterImage.src =currentPoster.imageurl
// posterTitle.innerText = currentPoster.title