// Declare a non-updateable variable and assign it an array of numbers. Iterate over the array and print each number to the console.


const myarray = [1, 2, 3, 4];

for (const number of myarray) {
  console.log(number);
}


// Write a function that takes a day of the week as input (e.g., “Monday”, “Tuesday”) and prints a message indicating whether it’s a weekday or a weekend day.


    function determineDayType(day) {
        const weekdays = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];
        const weekendDays = ['Saturday', 'Sunday'];
      
        const formattedDay = day.trim().toLowerCase();
      
        if (weekdays.map(d => d.toLowerCase()).includes(formattedDay)) {
          console.log(`${day} is a weekday.`);
        } else if (weekendDays.map(d => d.toLowerCase()).includes(formattedDay)) {
          console.log(`${day} is a weekend day.`);
        } else {
          console.log('Please enter a valid day of the week.');
        }
      }
      
      
      determineDayType("sAturday")


// Create an object representing a book with properties like title, author, and year. Print all the object keys to the console.


      const book={
        author:'George Orwell',
        title:'1984',
        year:'1948'
      }

      const keys=Object.keys(book);
      
      console.log(keys);
      


//   Write a function that fetches data from a JSON API endpoint that you found online and prints the response status to the console.

      async function fetchCatData() {
        const url = 'https://meowfacts.herokuapp.com/'; 
      
        try {
          const response = await fetch(url);
          console.log('Response Status:', response.status);
        } catch (error) {
          console.log('Error:', error);
        }
      }
      



      fetchCatData();

      
      