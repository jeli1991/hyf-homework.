//Danish letter string
function danishString(string){
    const danishLetters={total: 0};
    const danishChar=["å","ø", "æ"];

    for (let char of string){
        if (danishChar.includes(char)) {
            danishLetters[char] = (danishLetters[char] || 0) + 1;
            danishLetters.total++;
          }
        }      
        return danishLetters;
      }


const string = "Jeg har en blå bil";
const result = danishString(string);
console.log(result); // { total: 1, å: 1 }

//
