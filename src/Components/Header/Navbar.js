import React from "react";
import './Navbar.scss'
import logo from './img/WebID.png'
// import {FacebookShareButton} from 'react-share'

export default ()=>{
    // const shareUrl = 'http://github.com';
    // const title = 'GitHub';
    // <FacebookShareButton
    //     url={shareUrl}
    //     quote={title}
    // // >
    // share
    // </FacebookShareButton>
    return(
        <div className={'nav_all'} >
            <input type="checkbox" id="myInput"/>
            <label htmlFor="myInput">
                <span className="bar top"></span>
                <span className="bar middle"></span>
                <span className="bar bottom"></span>
            </label>
            <aside>
                <div className="aside-section aside-left">
                    <div className={'logo'}>
                        <a><img src={logo} alt=""/></a>
                    </div>
                    <div className="aside-content">
                        <ul className="aside-list">
                            <li><a href="" className="aside-anchor">Home</a></li>
                            <li><a href="" className="aside-anchor">About</a></li>
                            <li><a href="" className="aside-anchor">Services</a></li>
                            <li><a href="" className="aside-anchor">Contact</a></li>
                        </ul>

                    </div>
                </div>
                <div className="aside-section aside-right">

                </div>
            </aside>
        </div>
    )
}