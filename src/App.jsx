import { useEffect, useState, useReducer } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from './logo.svg';
import React from 'react';
import { Nav } from "./components/Nav";
import { Row } from './components/Row';
import { Banner } from './components/Banner';
import { requests } from "./requests.js";
import EventForm from "./components/EventForm";
import reducer from "./reducers";
import EventIndex from './components/EventIndex';
import AppContext from "./contexts/AppContext";

console.log(AppContext);
const App = () => {

  const [state, dispatch] = useReducer(reducer, []);
  return (
    <AppContext.Provider value={"Hello, I am a provider"}>
      <div className='container-fluid'>
        <EventForm state={state} dispatch={dispatch}/>
        <EventIndex state={state} dispatch={dispatch} />
      </div>
    </AppContext.Provider>
  )
}

App.defaultProps = {
  name: "サンプル",
  price: 1000
}

export default App
