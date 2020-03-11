import { createStore, compose } from "redux";
import reducer from "./reducer";

import React from 'react';

import Comp1 from "./comopnents/comp1";
import Comp2 from "./comopnents/comp2";
import Comp3 from "./comopnents/comp3";
import './App.css';
import {Provider} from "react-redux";

const composeEnhancers =
  typeof window === "object" &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
      // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
    }) : compose;

const enhancer = composeEnhancers();

const store = createStore(reducer, {}, enhancer);

function App() {
  return (
<Provider store={store}>

    <div className="App">
      <header className="App-header">
       <Comp1/>
       <Comp2/>
       <Comp3/>
      </header>
    </div>
</Provider>
  );
}

export default App;
