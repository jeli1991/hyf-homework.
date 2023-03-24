
let todoList=[]; // here is where the todo will be stored

function getReply(command){
    let name=""; 

let split=command.split(" ");  // this line of code will create an array by dividing the command string into an array
let firstWord=split[0]; // first word of the array
let subject = split.slice(1).join(' '); // the rest of the array, disregarding the first
let VerbToDo=split[1]; // second word of the array that will be displayed later

switch(firstWord){  //switch case method
    case "Hello":
    name=subject;
    return `Nice to meet you ${name}`;
    break;
    case "What":
        if(subject === "is my name?"){
            if(name){
                return `I know you, youre name is ${name}`;
            } else{
                return `I dont know your name yet`;
            }
        }else if (subject === 'is on my todo?') {
            if (todoList.length === 0) {
              return 'There are no items on your todo';
            } else {
              const items = todoList.join(' and ');
              return `You have ${todoList.length} - ${items}`;
            }
        } else if (subject === 'day is it today?') {
            const date = new Date();
            const options = { day: 'numeric', month: 'long', year: 'numeric' };
            return `Today is ${date.toLocaleDateString(undefined, options)}`;
          } else {
            return 'I don\'t understand that command';
          }
    case 'Add':
        todoList.push(subject);
    return `${VerbToDo} added to your todo`;
    case 'Remove':
    const index = todoList.indexOf(subject);
    if (index !== -1) {
        todoList.splice(index, 1);
    return `Removed ${subject} from your todo`;
    } else {
    return `${subject} is not on your todo`;
    }
    case 'Set':
        if (subject === 'a timer') {
          const minutes = split[3];
          setTimeout(() => console.log('Timer done'), minutes * 60 * 1000);
          return `Timer set for ${minutes} minute${minutes === '1' ? '' : 's'}`;
        } else {
          return 'I don\'t understand that command';
        }
    case "What":
        if (split[1] === 'is') {
            const a = parseInt(split[2]);
            const symbol = split[3];
            const b = parseInt(split[4]);
            let result;
            switch (symbol) {
              case '+':
                result = a + b;
                break;
              case '-':
                result = a - b;
                break;
              case '*':
                result = a * b;
                break;
              case '/':
                result = a / b;
                break;
              default:
                return 'I don\'t understand that command';
            }
            return result.toString();
          } else {
            return 'I don\'t understand that command';
          }
        default:
          return 'I don\'t understand that command';
      }
    }

    console.log(getReply("Hello my name is Mark"));
    console.log(getReply("What day is it today?"));
    console.log(getReply("Add reading to my list"))