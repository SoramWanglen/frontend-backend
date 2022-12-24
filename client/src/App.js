import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import {useState, useEffect} from 'react'

function App() {
  const [text, setText] = useState([])

   useEffect(()=>{
   axios.get('http://localhost:9000/testAPI')
   //axios.get('https://jsonplaceholder.typicode.com/todos/1')
    .then((res)=>{
      console.log("data from axios>>",res.data)
      setText(res.data)
    })
    .catch((err)=>{
      console.log(err)
    })
   },[])
  return (
    <div className="App">
      <header className="App-header">
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
        <h2>{text}</h2>
      </header>
    </div>
  );
}

export default App;
