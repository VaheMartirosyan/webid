import React ,{ useState }from "react";
import './Navbar.scss'
import './MediaNavbar.scss'
import { NavLink } from 'react-router-dom'
import logo from './img/WebID.png'

export default ()=>{
    const [checked, setChecked] = useState(false);
    return(
        <div className={'nav_all'} >
            <input type="checkbox" id="myInput" checked={checked}/>
            <label htmlFor="myInput" onClick={()=>setChecked(!checked)}>
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
                            <li><NavLink onClick={()=>setChecked(false)} to={'/'} className="aside-anchor">Home</NavLink></li>
                            <li><NavLink onClick={()=>setChecked(false)} to={'/about'} className="aside-anchor">About</NavLink></li>
                            <li><NavLink onClick={()=>setChecked(false)} to={'/services'} className="aside-anchor">Services</NavLink></li>
                            <li><NavLink onClick={()=>setChecked(false)} to={'/contact'} className="aside-anchor">Contact</NavLink></li>
                        </ul>

                    </div>
                </div>
                <div className="aside-section aside-right">

                </div>
            </aside>
        </div>
    )
}