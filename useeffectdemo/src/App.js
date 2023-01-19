import './App.css';
import React, { useState} from 'react';
function App() {
  const [users,setUsers]=useState([])
  console.log("Component rendered")

  // put no dependency when you want to run it only once
  React.useEffect(function(){
    fetch("https://swapi.dev/api/people/")
  .then(res => res.json())
  .then(data => setUsers(data))
},[])

  return (
    <div>
      <pre>{JSON.stringify(users,null,2)}</pre>
    </div>
  );
}

export default App;
