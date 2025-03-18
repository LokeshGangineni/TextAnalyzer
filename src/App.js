// import logo from './logo.svg';
// import './App.css';
   import Navbar from "./components/Navbar";
   import Textform from "./components/Textform"
// let name ="lokesh"
function App() {
  return (
    <>
      <Navbar title="TextAnalyzer" aboutText="About us"/>
      <div className="container my-3">
      <Textform  heading="Enter text to analyze" />
      </div>
      
      {/* <Navbar /> */ }
    </>
    
    // <h1>Hi Welcome {name}</h1>
    
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React with Lokesh +0
    //     </a>
    //   </header>
    // </div>
  );
}

export default App;
