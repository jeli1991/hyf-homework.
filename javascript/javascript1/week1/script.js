//  Age-ify (A future age calculator)


let yearOfBirth= prompt("enter your year of birth");
let yearFuture= prompt("enter your future year");

let humanage=yearFuture-yearOfBirth;

alert("you will be " + humanage + " years old in " + yearFuture);


// dogyear

const dogYearOfBirth=2018;
let dogYearFuture= 2028;
let age=dogYearFuture-dogYearOfBirth;
let shouldShowResultsInDogYear=true ;

if(shouldShowResultsInDogYear){
 age=Math.log(16)*age+31;
console.log("Your dog will be " + age + " dog years old in " + dogYearFuture);
} else{
 console.log("Your dog will be " + age + " human years old in " + dogYearFuture);
} ;

// // // // Your friend Peter is considering a house that is 8m wide, 10m deep and 10m high. The garden size is 100m2. The house costs 2.500.000.
// // // // Your friend Julia is considering a house that is 5m wide, 11m deep and 8m high. The garden size is 70m2. This house costs 1.000.000.


function rightprice(width,height,depth, garden,cost,name){
 let houseprice=width* height* depth* 2.5 *1000 + garden *300;
if(houseprice >cost){
 console.log("too much");
} else{
   console.log("just enough");
 }
}


//Lets help people who struggle finding a startup name by creating some code!

const firstWords=["best","most","very","excelent","blue","pink","shiny","thick","watery","fast"];
const secondWords=["door","glass","pen","desk","ball","sky","shoes","book","wall","shirt"];

const randomNumber = Math.floor(Math.random() * 10);

let startupname=firstWords[randomNumber]+ " " +secondWords[randomNumber];

console.log("the startup name is: " +startupname+ "  The lenth is: " +startupname.length+ " characters long.");




