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

// import React from 'react'


// function Hello(props) {
//   // console.log(props);
//   return (
//     <div>
//       <p>Hello {props.name}, you are {props.age} years old</p>
//     </div>
//   )
// }

// function App() {
//   const age = 23;
//   return (
//     <div>
//     <h1>Greetings</h1>
//     <Hello name='priya' age={10+12}/>
//     <Hello name='pandiyan' age={age}/>
//     </div>
//     )
// }

// export default App

// import React from 'react'

// function App(props) {

//   const {notes} = props;

//   console.log(notes);
//   return (
//     <div>
//       <h1>Notes</h1>
//       <ul>
        
//       <li>{notes[0].content}</li> 
//       <li>{notes[1].content}</li>
//       <li>{notes[2].content}</li>
//       <li>{notes[3].content}</li>
//       <li>{notes[4].content}</li> 
//       </ul>
//     </div>
//   )
// }

// export default App;
 
// import React from 'react'

// function Note({note}){
//   // if(note.important){
//   //   return(
//   //     <li>{note.content}✔</li>
//   //   )
//   // }
//   // return(
//   //   <li>{note.content}</li>

//   // )

//   return(
//     <li>
//       {/* {note.important ? note.content + '✔' : note.content} */}
//       {note.content} {note.important && '✔'} 
//     </li>
//   )
// }

// function App({notes}) {

//   const addNote= (event) => {
//     console.log('button clicked' , event.target)
//   }

//   return (
//     <div>
//       <h1>Notes</h1>
//       <ul>
//        {notes.map(note => 
//        <Note key={note.id} note={note}/>
//        )}
//       </ul>
//       <form onSubmit={addNote}>
//         <input />
//         <button type='submit'>Save Note</button>
//       </form>
//     </div>
//   )
// }

// export default App;

// import React from 'react'

// function Note({note}){
//   // if(note.important){
//   //   return(
//   //     <li>{note.content}✔</li>
//   //   )
//   // }
//   // return(
//   //   <li>{note.content}</li>

//   // )

//   return(
//     <li>
//       {/* {note.important ? note.content + '✔' : note.content} */}
//       {note.content} {note.important && '✔'} 
//     </li>
//   )
// }

// function App({notes}) {

//   const addNote= (event) => {
  // event.preventDefault(); 
//     console.log('button clicked' , event.target)
//   }

//   return (
//     <div>
//       <h1>Notes</h1>
//       <ul>
//        {notes.map(note => 
//        <Note key={note.id} note={note}/>
//        )}
//       </ul>
//       <form>
//         <input />
//         <button onClick={() => console.log('button clicked')}>Save Note</button>
//       </form>
//     </div>
//   )
// }

// export default App;


import React from 'react'

function Note({note}){
  // if(note.important){
  //   return(
  //     <li>{note.content}✔</li>
  //   )
  // }
  // return(
  //   <li>{note.content}</li>

  // )

  return(
    <li>
      {/* {note.important ? note.content + '✔' : note.content} */}
      {note.content} {note.important && '✔'} 
    </li>
  )
}

function App({notes}) {

  const addNote= (event) => {
    event.preventDefault();
    console.log('button clicked')
  }

  return (
    <div>
      <h1>Notes</h1>
      <ul>
       {notes.map(note => 
       <Note key={note.id} note={note}/>
       )}
      </ul>
      <form>
        <input />
        <button onClick={addNote}>Save Note</button>
      </form>
    </div>
  )
}

export default App;