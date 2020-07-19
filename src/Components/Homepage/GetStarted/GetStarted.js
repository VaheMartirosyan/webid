import React from "react";
import './GetStarted.scss'
import {NavLink} from "react-router-dom";

export default ()=>{
    return(
        <>
            <div className={'get_started'}>
                <div className={'getStartedText'}>
                    <h2>Want To get Started ?</h2>
                </div>
                <div>
                    <div className={'btn_get_started'}>
                        <NavLink to={'/khabsdji'}  className="botbtn from-left">Launch a project</NavLink>
                        <NavLink to={'/jklls'} className="botbtn from-right">Start a training</NavLink>
                    </div>
                </div>
            </div>
        </>
    )
}