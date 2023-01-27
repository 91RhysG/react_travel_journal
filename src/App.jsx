import "./App.css";
import Nav from "./components/Nav";
import JournalEntry from "./components/JournalEntry";
import data from "./data/data.js";

function App()
{
  //This go through the set of data and converts it from raw data to the component, '...entry' passes down the data and does not add a new layer
  const entries = data.map((entry, id) => <JournalEntry key={id} {...entry} />);

  return (
    <div className="App">
      <Nav />
      {/* Below is the set of data that is going to be displayed, it iterates and renders it automatically */}
      {entries}
    </div>
  );
}

export default App;
