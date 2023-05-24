
const apiKey="3975e1c2286a8c534bd280117c6b3ebe";
const apiURL= "https://api.openweathermap.org/data/2.5/weather?&units=metric&q="


const searchbox=document.querySelector(".search input");
const serchBtn=document.querySelector(".search button");





async function checkweather(city){
  const response=await fetch(apiURL + city+ `&appid=${apiKey}`) ;
  let data = await response.json();

  console.log(data);

  // const sunrise = data.sys.sunrise;
  const sunset = data.sys.sunset;

  document.querySelector(".city").innerHTML= data.name;
  document.querySelector(".temp").innerHTML= Math.round(data.main.temp) + "°c";
  document.querySelector(".wind").innerHTML= data.wind.speed + "km/h";
  document.querySelector(".sunset").innerHTML= new Date(sunset * 1000) ;


  
  // console.log("Sunrise:", new Date(sunrise * 1000));
  // console.log("Sunset:", new Date(sunset * 1000));


}

serchBtn.addEventListener("click", ()=>{
  checkweather(searchbox.value);

} )

searchbox.addEventListener("keydown", (event) => {
  if (event.keyCode === 13) {
    event.preventDefault();
    checkweather(searchbox.value);
  }
});


checkweather()


