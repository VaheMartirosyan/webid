import React from "react";
import './HomePage.scss'
import HeaderBottom from "./HeaderBottom/HeaderBottom";
import HomePortfolio from "./HomePortfolio/HomePortfolio";
import GetStarted from "./GetStarted/GetStarted";
export default class extends React.Component{

constructor(props){
    super(props)
    this.toPort = React.createRef()
}
scrollToPortfolio  = () =>{
    window.scrollTo({behavior:'smooth',top:this.toPort.current.offsetTop-100})
}
    render() {
        return(
            <div className={'homepage_all'}>
                <HeaderBottom scroll = {this.scrollToPortfolio}/>
                <div ref = {this.toPort}>
                    <HomePortfolio />
                </div>
                <GetStarted/>
            </div>
        )
    }
}