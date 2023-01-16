import './App.css';

function Greeting(props) {
  console.log(JSON.stringify(props))
  // const firstName = "Mark"
  // const lastName = "Zuckerberg"
  
  // destructuring of object
  // const {firstName,lastName}=props
  // then no need to user props.firstName to access
  // we can directly access using firstName / variable name

  const{firstName,lastName}=props
  return (
    <div className="App">
      <h1>Welcome, {firstName} {lastName}</h1>
    </div>
  );
}

export default Greeting;

// function square(num){
//   return num*num;
// }