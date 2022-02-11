import { useEffect, useState, useReducer } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from './logo.svg';
import React from 'react';
import { Nav } from "./components/Nav";
import { Row } from './components/Row';
import { Banner } from './components/Banner';
import { requests } from "./requests.js";
import EventForm from "./components/EventForm";
import reducer from "./reducers/index";
import EventIndex from './components/EventIndex';
import AppContext from "./contexts/AppContext";


const App = () => {
  const initialtState = {
    events: []
  }
  const [state, dispatch] = useReducer(reducer, initialtState);
  return (
    <AppContext.Provider value={{ state, dispatch }}>
      <div className='container-fluid'>
        <EventForm />
        <EventIndex />
      </div>
    </AppContext.Provider>
  )
}

App.defaultProps = {
  name: "サンプル",
  price: 1000
}

export default App
