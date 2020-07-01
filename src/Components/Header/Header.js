import React, { useState, useEffect } from 'react';
import Navbar from "./Navbar";
import logo from './img/WebID.png'
import './Header.scss'
import { NavLink } from "react-router-dom";

export default ()=>{
    const [scrollPosition, setSrollPosition] = useState(0);
    const [startScroll, setStartScroll] = useState('header_all');
    useEffect(() => {
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    const handleScroll = () => {
        const position = window.pageYOffset;
        setSrollPosition(position);
        if(position>0){
            setStartScroll('header_all1')
        }
        else{
            setStartScroll('header_all')
        }
    };

    return(
        <div className={startScroll}>
            <div className={'logo'}>
                <NavLink to={'/'}><img src={logo} alt=""/></NavLink>
            </div>
            <Navbar/>
        </div>
    )
}