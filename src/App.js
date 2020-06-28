import React from 'react';
import Header from "./Components/Header/Header";
import HomePage from "./Components/Homepage/HomePage";
import Footer from "./Components/Footer/Footer";
import './App.css'

export default class App extends React.Component{
  componentDidMount(){
    console.clear()
  }
  render() {
    return(
        <div>
          <header>
            <Header/>
          </header>
          <section>
              <HomePage/>
          </section>
          <footer>
              <Footer/>
          </footer>
        </div>
    )
  }
}