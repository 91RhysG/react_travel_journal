import "./App.css";
import Nav from "./components/Nav";
import JournalEntry from "./components/JournalEntry";
import data from "./data/data.js";

function App() {
  const entries = data.map((entry, id) => <JournalEntry key={id} {...entry} />);

  return (
    <div className="App">
      <Nav />
      {entries}
    </div>
  );
}

export default App;
