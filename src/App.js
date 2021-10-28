import {useState} from 'react';
import './App.css';
import background from './background.gif';

function App() {
  const [sentence, setSentence] = useState('');
  return (
    <div className="App">
      <img src={background}></img>
      <h1>Khor IT Fortune Teller</h1>
      <button onClick={()=>setSentence(Math.random().toString())}>Get Fortune</button>
      <div className="fortune">{sentence}</div>
    </div>
  );
}

export default App;
