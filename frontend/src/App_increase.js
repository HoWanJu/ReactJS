import { useState } from 'react';

function App() {

  let [num, setNum] = useState(0);

  const increase = () => {
    setNum(num + 1);
    console.log(num);
    console.log('Increase!');
  };

  return (
    <div>
      <div>Total: {num}</div>
      <button onClick = {increase}>+1</button>
    </div>

  )
}

export default App;
