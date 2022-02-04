import { useState } from 'react';
import logo from './logo.svg';

import { Nav } from "./components/Nav";
import { Row } from './components/Row';
import { Banner } from './components/Banner';
import { requests } from "./requests.js";

const App = (props) => {
  const [name, setName] = useState(props.name);
  const [price, setPrice] = useState(props.price);

  const reset = () => {
    setPrice(props.price);
    setName(props.name);
  }
  return (
    <>
      <p>現在の{name}は、{price}円です</p>
      <button onClick={() => setPrice(price + 1)}>+1</button>
      <button onClick={() => setPrice(price - 1)}>-1</button>
      <button onClick={reset}>Reset</button>
      <input value={name} type="text" onChange={e => setName(e.target.value)}/>
    </>
  )
}

App.defaultProps = {
  name: "サンプル",
  price: 1000
}

export default App
