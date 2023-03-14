import React from "react";
import ReactDOM from "react-dom";
import './index.css';
import {BrowserRouter} from "react-router-dom";

import {App} from "./App";
import {store} from "./redux/store/store";


const rerenderEntireThree = () => {
   ReactDOM.render(
      <BrowserRouter>
         <App
            state={store.getState()}
            dispatch={store.dispatch.bind(store)}
         />
      </BrowserRouter>
      , document.getElementById('root')
   );
};



rerenderEntireThree();

store.subscribe(rerenderEntireThree);

