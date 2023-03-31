//  DOM elements
const nameTag=document.getElementById("name-input");
const animalBtn=document.getElementById("generate-btn");
const spiritAnimalElement=document.getElementById("spirit-animal");
const newAnimalBtn=document.getElementById("new-animal-btn");

// Array of spirit animal names

const arrayspiritAnimals = [
    "The Grey Wolf",
    "The Golden Eagle",
    "The Wise Owl",
    "The Dancing Peacock",
    "The Crying Butterfly",
    "The Roaring Lion",
    "The Soaring Hawk",
    "The Strong Serpant",
    "The Mighty Bear",
    "The Graceful Deer"
  ];
  
  // Build spirit animal name

  function generateSpiritAnimal(){
    const name=nameTag.value.trim(); // trim has the role of eliminating white space and cheching is the string is empty or not
    if(name=== ""){
        alert ("Please enter yout name");
    } else{
        const animal=arrayspiritAnimals[Math.floor(Math.random()*arrayspiritAnimals.length)];
        const spiritAnimal=`${name} - ${animal}`;
        spiritAnimalElement.textContent=spiritAnimal;

    }
  }

  // Event listeners
  function addNameKeypress(event) {   //here I creaded an keypress event listener, just for the enter key
	if (event.keyCode === 13) {
		generateSpiritAnimal();
	}
}
  nameTag.addEventListener('keypress', addNameKeypress);
  animalBtn.addEventListener("click", generateSpiritAnimal,addNameKeypress);
  newAnimalBtn.addEventListener("click", generateSpiritAnimal, addNameKeypress);