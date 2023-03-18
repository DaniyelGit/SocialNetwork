import React from "react";
import ReactDOM from "react-dom";
import './index.css';
import {BrowserRouter} from "react-router-dom";

import {App} from "./App";
import {store} from "./redux/redux-store/redux-store";
import {Provider} from "./storeContext/StoreContext";

const rerenderEntireThree = () => {
   ReactDOM.render(
      <BrowserRouter>
         <Provider store={store}>
            <App/>
         </Provider>
      </BrowserRouter>
      , document.getElementById('root')
   );
};



rerenderEntireThree();

store.subscribe(rerenderEntireThree);



