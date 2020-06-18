import React from 'react';
import Header from "./Components/Header/Header";
import HomePage from "./Components/Homepage/HomePage";
import Footer from "./Components/Footer/Footer";


export default class App extends React.Component{
  render() {
    return(
        <div>
          <header>
            <Header/>
          </header>
          <HomePage/>

              <Footer/>
        </div>
    )
  }
}