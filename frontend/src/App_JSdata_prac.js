import data from './1999.json';
// import photo from './NewYear.jpg';

function App() {
  console.log(data);
  return (
    <div>
      <ul>
        {
          data
            .map(x => <li>{x.Save_Date_} : {x.ZipName_} - {x.StatusName_}</li>)
        }
      </ul>
    </div>

  );
}

export default App;
