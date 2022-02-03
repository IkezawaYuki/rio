import { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { Nav } from "./components/Nav";
import { Row } from './components/Row';
import { Banner } from './components/Banner';
import { requests } from "./requests.js";

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <img src={logo} className="App-logo" alt="logo" />
      <Nav />
      <Banner />
      <Row
        title="NETFLIX ORIGUINALS"
        fetchUrl={requests.feachNetflixOriginals}
      />
    </div>
  )
}

export default App
