// function log out text after delay

function logAfterDelay(delay, stringToLog) {
    setTimeout(() => console.log(stringToLog), delay * 1000);
  }
  
  // Call the function with different arguments:
  logAfterDelay(2.5, "Called after 2.5 seconds");
  logAfterDelay(5, "Called after 5 seconds");
  
  // Function call after button click:
  const button = document.querySelector("button");
  button.addEventListener("click", () =>
    logAfterDelay(5, "Called after 5 seconds")
  );

  // buttons

  const locationButton = document.querySelector("#location-button");
  locationButton.addEventListener("click", () => {
      navigator.geolocation.getCurrentPosition(position => {
          console.log(`Latitude: ${position.coords.latitude}, Longitude: ${position.coords.longitude}`);
      });
  });



  // two planet functions

  function logEarth() {
    console.log("Earth");
  }
  
  function logSaturn() {
    console.log("Saturn");
  }
  
  function planetLogFunction(logFunction) {
    logFunction();
  }
  
  planetLogFunction(logEarth); // logs "Earth"
  planetLogFunction(logSaturn); // logs "Saturn"


  //callback
  function runAfterDelay(delay, callback) {
    setTimeout(callback, delay * 1000);
  }
  
  // Call the function with different delays and callbacks:
  runAfterDelay(2, () => console.log("Callback after 2 seconds"));
  runAfterDelay(5, () => console.log("Callback after 5 seconds"));

  let clickCount = 0;
let clickTimeout;

function checkDoubleClick() {
  clickCount++;
  if (clickCount === 2) {
    console.log("double click!");
    clearTimeout(clickTimeout);
    clickCount = 0;
  } else {
    clickTimeout = setTimeout(() => {
      clickCount = 0;
    }, 500);
  }
}

// Add event listener to the document to listen for clicks:
document.addEventListener("click", checkDoubleClick);

//bad jokes 

function jokeCreator(shouldTellFunnyJoke, logFunnyJoke, logBadJoke) {
    if (shouldTellFunnyJoke) {
      logFunnyJoke();
    } else {
      logBadJoke();
    }
  }
  
 //two functions to log a funny and a bad joke:
  function logFunnyJoke() {
    console.log("Why don't scientists trust atoms? Because they make up everything!");
  }
  
  function logBadJoke() {
    console.log("Why did the tomato turn red? Because it saw the salad dressing!");
  }
  
  // Call the jokeCreator 
  jokeCreator(true, logFunnyJoke, logBadJoke); // logs a funny joke
  jokeCreator(false, logFunnyJoke, logBadJoke); // logs a bad joke