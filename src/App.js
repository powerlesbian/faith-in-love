import logo from './FIL-logo-final-01.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Welcome to Faith in Love Foundation's Website <br></br><br></br>
          We are currently in the process of renovating or updating our site.  You can contact us at: <br></br><br></br> 4901 Central Plaza, <br></br>18 Harbour Road, <br></br>Wanchai, Hong Kong
        </p>
        <a
          className="App-link"
          href="https://www.facebook.com/foundfaithinlove"
          target="_blank"
          rel="noopener noreferrer"
        >
          Please visit our Facebook page for more information 
        </a><br></br>
        <a
          className="App-link"
          href="https://buy.stripe.com/7sI2bZgL30Es4Ni3cd"
          target="_blank"
          rel="noopener noreferrer"
        >
          Click here if you would like to support our work with a donation.
        </a><br></br><br></br>
        <a
          className="App-link"
          href="https://www.faith-in-love.org"
          target="_blank"
          rel="noopener noreferrer"
        >
         Sneak peak our new website here. 
        </a

      </header>
    </div>
  );
}

export default App;
