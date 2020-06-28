import React from "react";
import './Footer.scss'
import {FacebookShareButton, LinkedinShareButton, TelegramShareButton, WhatsappShareButton} from "react-share";

export default ()=>{
    return(
        <div className={'footer'}>
            <div className={'footer_top'}>

            </div>
            <div className={'footer_padding_seperator'}></div>
            <div className={'fixed_footer'} >

                <div className={'fixCont'}>
                    <div className={'fixedContainerContent'}>
                        <div>
                            <p>Logo</p>
                            <p>address</p>
                            <p>Telephone</p>
                        </div>
                        <div>
                            <div>
                                <div>
                                    <i className="fa fa-facebook-square"></i>
                                    <i className="fa fa-linkedin"></i>
                                    <i className="fa fa-instagram"></i>
                                    <i className="fa fa-whatsapp"></i>
                                    <i className="fa fa-telegram"></i>
                                </div>
                            </div>
                        </div>
                        <div>
                            Services
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}