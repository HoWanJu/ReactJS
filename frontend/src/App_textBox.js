import { useState } from 'react';

function App() {

  const [text, SetText] = useState('');
  // 設定text為我們要設置的狀態，SetText為更新text的方法
  const [output, SetOutput] = useState('');

    // 設定變數e來接文字框的變化
  const onChange = (e) => {
    SetText(e.target.value);
  };
  
  const update = () => {
    SetOutput(text);
    // 清空文字框：使用 setText 來清空 <input>
    SetText('');
  }

  return(
    <div>
      <input type = "text" value = {text} onChange = {onChange}/> 
      {/* 文字框變動的function就是onChange */}
      <button onClick = {update}>更新</button>
      {/* button的變動就是onClick */}
      <div>{output}</div>
      </div>
  )
}

export default App;
