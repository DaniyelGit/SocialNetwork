import React from "react";
import ReactDOM from "react-dom";
import './index.css';
import {BrowserRouter} from "react-router-dom";

import {App} from "./App";
import {addPost, state, subscriber, updatePostText} from "./redux/state/state";


const rerenderEntireThree = () => {
   ReactDOM.render(
      <BrowserRouter>
         <App
            state={state}
            addPost={addPost}
            updatePostText={updatePostText}
         />
      </BrowserRouter>
      , document.getElementById('root')
   );
};



rerenderEntireThree();

subscriber(rerenderEntireThree);

