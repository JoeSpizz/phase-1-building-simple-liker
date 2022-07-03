// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!

const error = document.querySelector("#modal")
error.className = "hidden"

const like = document.querySelectorAll('.like-glyph')

for (let i = 0; i < like.length; i++) {
  like[i].addEventListener("click", function() {

  mimicServerCall()
  //.then to run <3 replace
  .then(res => {
    like[i].textContent = FULL_HEART
    like[i].className += " activated-heart"
  })
  // .catch to run empty heart
  .catch(() => {
    error.classList.remove("hidden")
    setTimeout (() => error.className = "hidden", 3000)
  })
})
}

//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
