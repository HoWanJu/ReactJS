import { useState } from 'react';
// init state, only have insert method
// function App() {
//   const [text, setText] = useState('');
//   const [list, setList] = useState([]);

//   const onChange = e => setText(e.target.value);

//   const insert = () => {
//       const newList = Array.from(list);
//       newList.push(text);
//       setList(newList);
//       setText('');
//   }

//   return (
//       <div>
//           <p>
//               <input type="text" value={text} onChange={onChange} />
//               <button onClick={insert}>新增</button>
//           </p>
//           <h3>TODO:</h3>
//           <ul>
//               {
//                   list.map(ele => <li>{ele}</li>)
//               }
//           </ul>
//       </div>
//   );
// }

// make sub-component replace <li> tag

// function ListItem(props) {
//   const [isFinish, setIsFinish] = useState(false); // 已完成

//   return (
//       <li style={{textDecoration: isFinish ? 'line-through' : 'none'}}>
//           {props.ele}
//           <button onClick={() => setIsFinish(!isFinish)}>已完成</button>
//       </li>
//   );
// }

// function App() {
//   const [text, setText] = useState('');
//   const [list, setList] = useState([]);

//   const onChange = e => setText(e.target.value);

//   const insert = () => {
//       const newList = Array.from(list);
//       newList.push(text);
//       setList(newList);
//       setText('');
//   }

//   return (
//       <div>
//           <p>
//               <input type="text" value={text} onChange={onChange} />
//               <button onClick={insert}>新增</button>
//           </p>


//           <h3>TODO:</h3>
//           <ul>
//               {
//                   list.map(ele =>
//                       <ListItem ele={ele} />
//                   )
//               }
//           </ul>
//       </div>
//   );
// }

// full one

function App() {
  const [text, setText] = useState('');
  const [list, setList] = useState([]);

  const onChange = e => setText(e.target.value);

  const insert = () => {
      const newList = Array.from(list);
      newList.push(text);
      setList(newList);
      setText('');
  }

  const removeFromIndex = (idx) => { // new
      let newList = list.filter((x, i) => i !== idx);
      setList(newList);
  }

  return (
      <div>
          <p>
              <input type="text" value={text} onChange={onChange} />
              <button onClick={insert}>新增</button>
          </p>


          <h3>TODO:</h3>
          <ul>
              {
                  list.map((ele, i) =>
                      <ListItem ele={ele} remove={() => removeFromIndex(i)} />
                  )
              }
          </ul>
      </div>
  );
}


function ListItem(props) {
  const [isFinish, setIsFinish] = useState(false); // 已完成
  const [yellowBG, setBG] = useState(false);

  return (
      <li style={{textDecoration: isFinish ? 'line-through' : 'none', backgroundColor: yellowBG ? 'yellow' : 'white'}}>
          {props.ele}
          <button onClick={() => setIsFinish(!isFinish)}>已完成</button>
          <button onClick={() => setBG(!yellowBG)}>Highlight</button>
          <button onClick={() => props.remove()}>刪除</button>
      </li>
  );
}
export default App;