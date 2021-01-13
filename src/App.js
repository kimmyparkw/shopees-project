import './App.css';

function App() {
  return (
    <div className="App">
        <h1>The Shoppies</h1>
        <div className="searchbox">
          <p>Movie title</p>
          <input type="text" placeholder="Search..." />
        </div>
        <div className="list-containers">
          <div className="results-container">
            <h4>Results for "(add searched title here)"</h4>
            <div className="results-lists">
              <ul>
                <li>search results listed here</li>
                {/* <li> .map through all the search results</li> */}
                {/* make sure to add nominate button to each result item */}
              </ul>
            </div>
          </div>
          <div className="nominations-container">
            <h4>Nominations</h4>
            <div className="nominations-list">
              <ul>
                <li>nominations go here</li>
              </ul>
            </div>
          </div>
        </div>
    </div>
  );
}

export default App;
