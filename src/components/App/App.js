import './App.css';
import Header from '../Header/';
import Main from '../Main/';
import Player from '../Player/';
import './App.css';

function App() {

  return (
    <div className="App">
      <div className="navigation">
        <Header />
        <Main />
      </div>
      <div className="player">
        <Player />
      </div>
    </div>
  );
}

export default App;
