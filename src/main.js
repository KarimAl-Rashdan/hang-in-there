// query selector variables go here 👇

var poster = document.querySelector(".poster")
var randomPosterButton = document.querySelector(".show-random")
//var randomPosterView = document.querySelector("")
//everything from index.html under 'poster' 
//document => .html files querySelector => js method, can pull from html, matching on html files
//dot notation because we are accessing a class



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
// var savedPosters = [];
// var currentPoster;

// event listeners go here 👇
//waits for user input and then when user input is done it invokes a function

poster.addEventListener("load", pageLoad())
randomPosterButton.addEventListener("click", showRandomPoster())
//html and js know what 'load' means 

// functions and event handlers go here 👇
// (we've provided one for you to get you started)!
function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
}


// // When a user clicks the “Make Your Own Poster” button, we should see the form, and the main poster should be hidden
// // When a user clicks the “View Saved Posters” button, we should see the saved posters area, and the main poster should be hidden
// // When a user clicks the “Nevermind, take me back!” or “Back to Main” buttons, we should only see the main poster section
// // In summary: Be able to switch between the three views (main poster, form, and saved posters) on the correct button clicks

// //listen for a page to load, when it loads should show a random image from above with another random title from above and a random quote from above
// //create a poster with random image, quote and title
// //send completed poster to the DOM(display) data model(behind the scenes)


var poster = document.querySelector(".poster")
var randomPosterButton = document.querySelector(".show-random")
var makeYourOwnPoster = document.querySelector(".poster-form")
var mainPoster = document.querySelector(".main-poster")
var viewSavedPosterButton = document.querySelector(".show-saved")
var savedPostersPage = document.querySelector(".saved-posters")


window.addEventListener("load", pageLoad)
randomPosterButton.addEventListener("click", showRandomPoster)
makeYourOwnPoster.addEventListener("click", yourOwnPoster)
//window.addEventListener("click", viewSavedPosters)


function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
}

function pageLoad() {
  poster.innerHTML = null
  var imageIndex = getRandomIndex(images)
  var titleIndex = getRandomIndex(titles)
  var quoteIndex = getRandomIndex(quotes)
  var newPoster = {
    image: images[imageIndex],
    title: titles[titleIndex],
    quote: quotes[quoteIndex],
  }

  console.log("these are the numbers you are looking for ",imageIndex, titleIndex, quoteIndex)
  console.log("Hey, the page reloaded!")
  console.log(`Hey, these are your object properties `, newPoster.image, newPoster.title, newPoster.quote)

  poster.innerHTML += `<img class="poster-img" src=${newPoster.image} alt="poster image">
  <h1 class="poster-title">${newPoster.title}</h1>
  <h3 class="poster-quote">${newPoster.quote}</h3>`
  console.log(poster)
  //whatever is pushed into innerHTML will update html file
}



function showRandomPoster() {
  //poster.classList.add("hidden")
  poster.innerHTML = null
  var imageIndex = getRandomIndex(images)
  var titleIndex = getRandomIndex(titles)
  var quoteIndex = getRandomIndex(quotes)
  var newPoster = {
    image: images[imageIndex],
    title: titles[titleIndex],
    quote: quotes[quoteIndex],
  }
  poster.innerHTML += `<img class="poster-img" src=${newPoster.image} alt="poster image">
  <h1 class="poster-title">${newPoster.title}</h1>
  <h3 class="poster-quote">${newPoster.quote}</h3>`
}
//console.log makes sure the page and the code are talking to each other

//When the page loads, we should see a poster with a randomly selected image, title, and quote
// Every time the user clicks the Show Random Poster button, a new random poster is displayed.

//listen for a page to load, when it loads should show a random image from above with another random title from above and a random quote from above
//create a poster with random image, quote and title
//send completed poster to the DOM(display) data model(behind the scenes)