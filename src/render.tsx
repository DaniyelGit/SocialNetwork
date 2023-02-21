import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter} from "react-router-dom";

import {addPost, stateType} from './redux/state/state';


export const rerenderEntireThree = (state: stateType) => {
   ReactDOM.render(
      <BrowserRouter>
         <App state={state} addPost={addPost}/>
      </BrowserRouter>
      , document.getElementById('root')
   );
};
