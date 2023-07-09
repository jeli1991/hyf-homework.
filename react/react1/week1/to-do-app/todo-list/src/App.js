
import React, {useState} from 'react';
import './App.css';
// import DatePicker from 'react-date-picker';

function App() {

//state hook - use state
const [newItem, setNewItem]= useState('');
const [items, setItems]= useState([]);
const [startDate, setStartDate] = useState(new Date());

// const DatePickerExample = () => {
  

//   return (
//     <DatePicker
//       selected={startDate}
//       onChange={date => setStartDate(date)}
//     />
//   );
// };

//helper functions

function addItem(){

  if(!newItem){
    alert('Please enter an item: ');
    return;

  }
    const item={
      id: Math.floor(Math.random() * 1000),
      value: newItem
    };

    setItems(oldList => [ ...oldList, item]);
    setNewItem(" ")


    
console.log(item)
}

//delete items

function deleteItem(id){
  const newArray=items.filter(item => item.id !==id);
  setItems(newArray);
}



  return (
    <div className="App">
     {/* 1. header */}
     <h1>To Do List App</h1>

     {/* 2.input (input element and button) */}

     <input type='text' 
         placeholder='Add Item...'
          value={newItem}
          onChange={e =>setNewItem(e.target.value)}
        /> 
     <button onClick={() => addItem()}>Add</button>


     {/* 3.list of items (ul with items inside) */}

     <ul>
      <li>Get out of bed</li>
      <li>Brush teeth</li>
      <li>Eat breakfast</li>
      {items.map(item=>{
        return(
          <li key={item.id}>{item.value} <button onClick={() =>deleteItem(item.id)}>💀</button></li>
        )
      })}
     </ul>
    </div>
  );
}

export default App;
