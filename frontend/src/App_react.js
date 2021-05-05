
// import photo from './NewYear.jpg';

function App() {

  const hi1 = () => {
      alert('Hi, how are you?');
  }

  const hi2 = e => {
      alert( 'text is ' + e.target.value);
  }

  return (
    <div>
      <button onClick = {hi1}>Here</button>  
      <input onChange = {hi2}></input>
    </div>

  );
}

export default App;
