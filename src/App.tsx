import { useState } from 'react';
import logo from './logo.svg';

import { Nav } from "./components/Nav";
import { Row } from './components/Row';
import { Banner } from './components/Banner';
import { requests } from "./requests.js";

const App = () => {
  const [count, setCount] = useState(0);
  const increment = () => {
    setCount(count+1);
  }
  const decrement = () => {
    setCount(count-1);
  }
  const increment2 = () => {
    setCount(previousCount => previousCount+1);
  }
  const decrement2 = () => {
    setCount(previousCount => previousCount-1);
  }
  const reset = () => {
    setCount(0);
  }
  return (
    <>
      <div>
        count:{count}
      </div>
      <div>
        <button onClick={increment}>+1</button>
        <button onClick={decrement}>-1</button>
      </div>
      <div>
        <button onClick={increment2}>+1</button>
        <button onClick={decrement2}>-1</button>
      </div>
      <div>
        <button onClick={reset}>Reset</button>
      </div>
    </>
  )
}

export default App
