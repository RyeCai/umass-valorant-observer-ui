import "./App.css";
import "./index.css";
import Header from "./components/Header.js";
import Customizer from "./components/Customizer";

function App() {
  return (
    <div className="background-overlay">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}

      <Header />
      <Customizer />
    </div>
  );
}

export default App;
