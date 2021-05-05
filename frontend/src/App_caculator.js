import { useState } from 'react';

function App() {

  const [num1, SetNum1] = useState(0);
  const [num2, SetNum2] = useState(0);
  const [sum, SetSum] = useState(0);

    // 設定變數e來接文字框的變化
  const onChange1 = (e1) => {
    SetNum1(e1.target.value);
    console.log('num1', e1.target.value);
  };

  const onChange2 = (e2) => {
    SetNum2(e2.target.value);
    console.log('num2', e2.target.value);
  };

  const sumUp = () => {
    SetSum(parseInt(num1) * parseInt(num2));
    SetNum1(0);
    SetNum2(0);
  }

  return(
    <div>
      <input type = "number" value = {num1} onChange = {onChange1}/> 
      *
      <input type = "number" value = {num2} onChange = {onChange2}/> 
      <button onClick = {sumUp}> = </button>
      {/* button的變動就是onClick */}
      <div>{sum}</div>
      </div>
  )
}

export default App;
