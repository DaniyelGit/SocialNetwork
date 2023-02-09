import React from 'react';
import './App.css';


function App() {
   return (
      <div className="app-wrapper">
         <header className={'header'}>
            <img src="#" alt="logo"/>
         </header>
         <nav className={'nav'}>
            <ul>
               <li>
                  <a href={'#'}>Profile</a>
               </li>
               <li>
                  <a href={'#'}>Messages</a>
               </li>
               <li>
                  <a href={'#'}>News</a>
               </li>
               <li>
                  <a href={'#'}>Music</a>
               </li>
               <li>
                  <a href={'#'}>Settings</a>
               </li>
            </ul>
         </nav>
         <div className={'content'}>
            <div>
               <img src="#" alt="bg-content"/>
            </div>
            <div>
               ava + description
            </div>
            <div>
               My post
               <div>
                  New post
                  <div>
                     <div>
                        post 1
                     </div>
                     <div>
                        post 2
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
}

export default App;
