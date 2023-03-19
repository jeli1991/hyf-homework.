// Item remove array



const names = [
    "Peter",
    "Ahmad",
    "Yana",
    "kristina",
    "Rasmus",
    "Samuel",
    "katrine",
    "Tala",
  ];
  const nameToRemove = "Ahmad";
  
  // Write some code here
 const index=names.indexOf(nameToRemove);

 if(index !== -1){
    names.splice(index,1);
 }

  // Code done
  
  console.log(names); // ['Peter', 'Yana', 'kristina', 'Rasmus', 'Samuel', 'katrine', 'Tala']

// time travel


  const travelInformation = {
    speed: 120,
    destinationDistance: 432,
  };

  function notThisFunctionName( travelInformation){
    const { speed, destinationDistance } = travelInformation;
  const totalMinutes = (destinationDistance / speed) * 60;
  const hours = Math.floor(totalMinutes / 60);
  const minutes = Math.round(totalMinutes % 60);

  return `${hours} hours and ${minutes} minutes`;
  }

  const travelTime = notThisFunctionName(travelInformation);
  console.log(travelTime); 


//   End of time travel


// Time spent on movies

const seriesDurations = [
    {
      title: "Game of thrones",
      days: 3,
      hours: 1,
      minutes: 0,
    }
  ];

  function timespent(seriesDurations, age) {
    for (let i = 0; i < seriesDurations.length; i++) {
      let title = seriesDurations[i].title;
      let daysToyear = seriesDurations[i].days / 365;
      let hoursToYear = seriesDurations[i].hours / (24 * 365);
      let minutesToYear = seriesDurations[i].minutes / (60 * 24 * 365);
      let total = (daysToyear + hoursToYear + minutesToYear).toFixed(3);
      let relevanttime = (age * total / 100).toFixed(3);
      console.log(`${title} took ${relevanttime}% of my life `);
    }
  }
       
   
     timespent(seriesDurations,30)


    //  end time spent on movies

// note add
    let notes=[];

    function saveNotes(constent,id){
        const note={content,id};
        notes.push(note);
    }

    function getNote(id) {
        if(!id || typeOf !== number){
            console.log("Error: Please provide a valid id");
            return
        }
        for(let i=0;i<notes.length; i++){
            if(notes[i].id===id){
                return notes[i];
            }
        
        }
        // your code here
      }
      
      const firstNote = getNote(1);
      console.log(firstNote); // {content: 'Pick up groceries', id: 1}



      function logOutNotesFormatted() {
        for(let i=0;i<notes.length; i++){
        console.log(`The notewith the if: ${notes[i].id} , has the following note text: ${notes[i].content}`)
        }
      }
      
      logOutNotesFormatted(); 

    //   end note app













