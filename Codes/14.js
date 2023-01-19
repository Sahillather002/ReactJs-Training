const numbers = [1, 2, 3, 4, 5];
function NumberList(props) {
    const numbers = props.numbers;
    const listItems = numbers.filter((number) => 
        number > 10
    ).map(item =>  <li>{item}</li>); 
    return (
      <ul>{listItems}</ul> 
     );
  }
  