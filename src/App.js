import React from 'react';
import Header from "./Components/Header/Header";
import HomePage from "./Components/Homepage/HomePage";
import About from "./Components/About/About";
import Footer from "./Components/Footer/Footer";
import Services from "./Components/Services/Services";
import Contact from "./Components/Contact/Contact";
import {Route} from "react-router";
import './App.css'

export default class App extends React.Component{
    state={
        year:'',
    }

    componentDidMount() {
       this.setState({year:new Date().getFullYear()})
    }

  componentDidUpdate(prevProps) {
        if (this.props.location !== prevProps.location) {
            window.scrollTo(0, 0);
        }
  }
    // getYear() {
    //
    // }
    render() {

    return(
        <div>
              <header>
                <Header/>
              </header>
              <section>
                <Route exact path={'/'} component={HomePage}/>
              </section>
                <section>
                    <Route path={'/about'} component={About}/>
                </section>
                <section>
                    <Route path={'/services'} component={Services}/>
                </section>
                <section>
                    <Route path={'/contact'} component={Contact}/>
                </section>
              <footer>
                  <Footer copyright={this.state.year}/>
              </footer>
        </div>
    )
  }
}