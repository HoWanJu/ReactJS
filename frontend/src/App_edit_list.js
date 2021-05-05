import { useState } from 'react';

function App() {
  const [text, setText] = useState('');
  const[num, setNum] = useState();
  const [list, setList] = useState([]);

  const onChange = e => {
    setText(e.target.value);
  };

  const onChange1 = e1 => {
    setNum(parseInt(e1.target.value));
  };

  //Array.from(list) 複製list並指派到newList中(不能單純用 = 來指派，因為Array是透過指標存取，若用 = 指派，仍然會指到同個array)
  const insert = () =>{
    const newList = Array.from(list);
    newList.push(text);
    setList(newList);
    setText('');
    console.log(newList);
  };

  const remove = () =>{
    let newList = Array.from(list);
    newList = newList.filter((item, i) => i !== num);
    console.log(newList);
    setList(newList);
  }

  return(
    <div>
      <p>
        <input type = "text" value = {text} onChange = {onChange}/>
        <button onClick = {insert}> 新增 </button>
      </p>
      <p>
      <input type = "num" value = {num} onChange = {onChange1}/> 
      <button onClick = {remove}> 刪除 </button>
      </p>
      <ul>
        {list.map(x => <li>{x}</li>)}
      </ul>
      </div>
  )
}

export default App;
//Q：有辦法一次onClick一次執行多的function嗎?

