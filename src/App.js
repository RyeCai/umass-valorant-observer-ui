import logo from './logo.svg';
import './App.css';
import Header from './components/Header.js'
import Customizer from './components/Customizer'

function App() {
  return (
    <div>
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
      <div className='background-overlay'>
        <div className='background-img'/>
        <div className='background-color-overlay'/>
      </div>
      <Header />
      
    </div>
  );
}

export default App;
