import React from "react";
import './HomePage.scss'
import HeaderBottom from "./HeaderBottom/HeaderBottom";
import HomePortfolio from "./HomePortfolio/HomePortfolio";
export default ()=>{
    return(
        <div className={'homepage_all'}>
            <HeaderBottom/>
            <HomePortfolio/>
        </div>
    )
}