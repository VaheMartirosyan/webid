import React from "react";
import './Footer.scss'
import {NavLink} from "react-router-dom";

export default ({copyright})=>{

    return(

        <div className={'footer'}>
            <div className={'footer_top'}>

            </div>
            <div className={'footer_padding_seperator'}></div>
            <div className={'fixed_footer'} >

                <div className={'fixCont'}>
                    <div className={'fixedContainerContent'}>
                        <div className={'footer_info'}>
                            <p>Address: <span>Sebastia 14/3, 0065 Yerevan, RA</span></p>
                            <p>Tel: <span>+37477699729</span></p>
                        </div>
                        <div className={'footer_mid'}>
                            <div >
                                <div className={'footer_icons'}>
                                    <i className="fa fa-facebook-square"></i>
                                    <i className="fa fa-linkedin"></i>
                                    <i className="fa fa-instagram"></i>
                                    <i className="fa fa-whatsapp"></i>
                                    <i className="fa fa-telegram"></i>
                                </div>
                            </div>
                            <div className={'footer_page_links'}>
                                <ul>
                                    <li><NavLink to={'/'} >Home</NavLink></li>
                                    <li><NavLink to={'/about'} >About</NavLink></li>
                                    <li><NavLink to={'/services'} >Services</NavLink></li>
                                    <li><NavLink to={'/contact'} >Contact</NavLink></li>
                                </ul>
                                <ul>
                                    <li><NavLink to={'/'} >Link To Service</NavLink></li>
                                    <li><NavLink to={'/about'} >Link To Service</NavLink></li>
                                    <li><NavLink to={'/services'} >Link To Service</NavLink></li>
                                    <li><NavLink to={'/contact'} >Link To Service</NavLink></li>
                                </ul>
                            </div>
                        </div>
                        <div className={'footer_email'}>
                            <h4>Get In Touch</h4>
                            <p>i@webid.am</p>
                        </div>
                    </div>
                    <div className={'copyright'}>
                       <p>© {copyright} Web<span>ID</span> creative agency</p>
                    </div>
                </div>
            </div>
        </div>
    )
}