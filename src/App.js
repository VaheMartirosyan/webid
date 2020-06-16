import React from 'react';
import Header from "./Components/Header/Header";
import HomePage from "./Components/Homepage/HomePage";


export default class App extends React.Component{
  render() {
    return(
        <div>
          <header>
            <Header/>
          </header>
          <HomePage/>
        </div>
    )
  }
}