import { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { Row } from './components/Row';
import { requests } from "./requests.js";

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <img src={logo} className="App-logo" alt="logo" />
      <Row
        title="NETFLIX ORIGUINALS"
        fetchUrl={requests.feachNetflixOriginals}
        isLargeRow
      />
    </div>
  )
}

export default App
