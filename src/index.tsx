import React from "react";
import ReactDOM from "react-dom";
import './index.css';
import {BrowserRouter} from "react-router-dom";

import {App} from "./App";
import {store} from "./redux/redux-store/redux-store";

const rerenderEntireThree = () => {
   ReactDOM.render(
      <BrowserRouter>
         <App
            store={store}
            dispatch={store.dispatch}
         />
      </BrowserRouter>
      , document.getElementById('root')
   );
};



rerenderEntireThree();

store.subscribe(rerenderEntireThree);

