// function App() {
//   // javascript
//   console.log('hello from component');

//   return (
//    <div>
//     <p>Hello World</p>
//    </div>
//   );
// }

// export default App;

import React from 'react'


function Hello(props) {
  // console.log(props);
  return (
    <div>
      <p>Hello {props.name}, you are {props.age} years old</p>
    </div>
  )
}

function App() {
  const age = 23;
  return (
    <div>
    <h1>Greetings</h1>
    <Hello name='priya' age={10+12}/>
    <Hello name='pandiyan' age={age}/>
    </div>
    )
}

export default App
 