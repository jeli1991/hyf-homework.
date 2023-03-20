// Flight booking fullname function



function getfullname(firstname, surname,useformalname,gender){
    if(useformalname=true && gender==="male"){
      console.log(`Lord ${firstname} ${surname} has bought their tickets`);
    } else  if(useformalname=true && gender==="female"){
      console.log(`Madam ${firstname} ${surname} has bought the tickets`);
    } else{
      console.log(`${firstname}, ${surname}`);
    }
  }
  
  
  let fullname1=getfullname("mike","poser", true, "male");
  let fullname2=getfullname("rebeca", "poser", "female");
  
  console.log(fullname1);
  console.log(fullname2);
  
  // End Flight booking fullname function
  
  // Event application
  
  
  
  
  function getEventWeekday(day){
    let datetoday= new Date().getDay();
    let daysOfWeek=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    let futureday=(datetoday+day)% 7;
    const weekday=daysOfWeek[futureday];
    return weekday;
  
  }
  
  getEventWeekday(1);
  
  
  // End Event application
  
  
  // Weather wear
  
  function enterTemperature(degree){
    if (degree<0){
      return (`Its ${degree} degrees, get thick clothes and a winter jacket`)
    }else if(degree>0 && degree <=5){
      return(`Its ${degree} degrees, get warm clothes and a fluffy hat`)
    } else if(degree>=6 && degree <=11){
      return(`Its ${degree} degrees, get comfortable clothes and an umbrella, ela ela ela `)
    }else if(degree>=12 && degree <=17){
      return(`Its ${degree} degrees, it might be sunny but dont be fulled, its stil chilly`)
    }else if(degree>=18 && degree <=23){
      return(`Its ${degree} degrees, seems worm enough, shorts and a tank top`)
    }else if(degree>=24 && degree <=29){
      return(`Its ${degree} degrees, grab a towel and go to the beach`)
    }else if(degree>=30 ){
      return(`Its ${degree} degrees, stay hydrated and put sun screen on `)
    }else {
      return ("please enter a valid temperature")
    }
    }
  
  const clothesToWear = enterTemperature(18);
  console.log(clothesToWear); // Logs out: "shorts and a t-shirt"
  
  // End Weather wear
  
  
  // Add student
  
  let class07Students=["mark","jacob","simon"];
  
  function addStudentToClass(student){
     if (class07Students.lenght>=6 && student !== "queen"){
      console.log("cant add more students")
      return;
     }
  
     if(class07Students.includes(student)){
      console.log(`${student} already on the list`)
      return;
     }
  
     if(student===" "){
      console.log("please add a valid name")
     }
  
     class07Students.push(student)
    
  }
  
  function NumberOfStudents(class07Students) {
    return class07Students.length;
  }
  
  addStudentToClass("paul")
  
  // End Add student