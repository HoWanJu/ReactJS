import './App.css';
import photo from './NewYear.jpg';

function App() {
  const name = '賀琬茹';
  const age = 21;

  return (
    <div className="App">
      <header className="App-header">
        <img src={photo} className="MyPhoto" alt="photo" />
        <h1>Hello Everyone!</h1>
        <div>我叫 {name}, 我今年 {age} 歲。</div>
        <button>
            GO
        </button>
      </header>
    </div>
  );
}

export default App;
