// my json file about football DataTransferItemList


{
    "teams": [
      {
        "name": "Real Madrid",
        "country": "Spain",
        "league": "La Liga",
        "stadium": "Santiago Bernabeu",
        "founded": 1902
      },
      {
        "name": "Manchester United",
        "country": "England",
        "league": "Premier League",
        "stadium": "Old Trafford",
        "founded": 1878
      },
      {
        "name": "FC Barcelona",
        "country": "Spain",
        "league": "La Liga",
        "stadium": "Camp Nou",
        "founded": 1899
      },
      {
        "name": "Bayern Munich",
        "country": "Germany",
        "league": "Bundesliga",
        "stadium": "Allianz Arena",
        "founded": 1900
      },
      {
        "name": "Juventus",
        "country": "Italy",
        "league": "Serie A",
        "stadium": "Allianz Stadium",
        "founded": 1897
      }
    ]
  }


// Timezone footbal games

cconst url = 'https://api-football-v1.p.rapidapi.com/v3/timezone';
const options = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': '08b2e4a664msh162c459a452cb14p1e70a3jsnd054693f2b71',
    'X-RapidAPI-Host': 'api-football-v1.p.rapidapi.com'
  }
};

try {
  const response = await fetch(url, options);
  const result = await response.json();
  console.log(result);
} catch (error) {
  console.error(error);
}


// API response is a JSON object containing information about the requested timezones.

// it is an object divided into 6 Keys . 
// get, parameters, errors, result,paging,and response. 

//  The response key holds an array of strings representing the timezones.

//  0:"Africa/Abidjan"
// 1:"Africa/Accra"
// 2:"Africa/Addis_Ababa"
// 3:"Africa/Algiers"
// 4:"Africa/Asmara"

// etc 