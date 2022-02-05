import { useEffect, useState } from 'react';
import logo from './logo.svg';

import { Nav } from "./components/Nav";
import { Row } from './components/Row';
import { Banner } from './components/Banner';
import { requests } from "./requests.js";

const App = (props: Props) => {
  const [state, setState] = useState(props);
  const { name, price } = state;

  useEffect(() => {
    console.log("useEffect is invoked");
  }, [name])

  return (
    <>
      <p>現在の{name}は、{price}円です.</p>
      <button onClick={() => setState({...state, price: price + 1})}>+1</button>
      <button onClick={() => setState({...state, price: price - 1})}>-1</button>
      <button onClick={() => setState(props)}>Reset</button>
      <input value={state.name} type="text" onChange={e => setState({...state, name: e.target.value})}/>
    </>
  )
}

type Props = {
  name: string,
  price: number
}

App.defaultProps = {
  name: "サンプル",
  price: 1000
}

export default App
