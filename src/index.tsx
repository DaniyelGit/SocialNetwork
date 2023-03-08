import React from "react";
import ReactDOM from "react-dom";
import './index.css';
import {BrowserRouter} from "react-router-dom";

import {App} from "./App";
import {store} from "./redux/state/state";


const rerenderEntireThree = () => {
   ReactDOM.render(
      <BrowserRouter>
         <App
            state={store.getState()}
            addPost={store.addPost}
            updatePostText={store.updatePostText}
         />
      </BrowserRouter>
      , document.getElementById('root')
   );
};



rerenderEntireThree();

store.subscribe(rerenderEntireThree);

