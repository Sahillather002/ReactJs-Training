import './App.css';
import React, { useState} from 'react';
function App() {
  const [users,setUsers]=useState([])
  const [count,setCount]=useState(0)
  console.log("Component rendered")

  // put no dependency when you want to run it only once
  // useEffect will run again if the count value changes
  React.useEffect(function(){
    console.log("useeffect called")
    fetch("https://swapi.dev/api/people/")
  .then(res => res.json())
  .then(data => setUsers(data))
},[count])

function handleClick(){
  setCount(prevCount => prevCount + 1)
}

  return (
    <div>
      <pre>{JSON.stringify(users,null,2)}</pre>
      <h3>Count:{count}</h3>
      <button onClick={handleClick}>Add</button>
    </div>
  );
}

export default App;
