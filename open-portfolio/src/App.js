import './App.css';
import Header from './components/Header';

function App() {
  let header_props = {
    title: "John Doe",
    sections: ["Section 1", "Section 2"]
  }

  return (
    <div className="App">
      <Header title={header_props.title} sections={header_props.sections}></Header>
    </div>
  );
}

export default App;
