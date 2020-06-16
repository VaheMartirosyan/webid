import React from "react";
import './Social.scss'
import {
    FacebookShareButton,
    LinkedinShareButton,
    TelegramShareButton,
    WhatsappShareButton,
} from "react-share";

export default ()=>{
    const shareUrl = 'http://github.com';
    const title = 'GitHub';
    return(
        <div className={'header_social'}>

            <p>Social Links</p>

            <div className={'line'}></div>

            <div className={'social_btns'}>
                <FacebookShareButton url={shareUrl} quote={title}>
                    <i className="fa fa-facebook-square"></i>
                </FacebookShareButton>
                <LinkedinShareButton url={shareUrl} quote={title}>
                    <i className="fa fa-linkedin"></i>
                </LinkedinShareButton>


                <i className="fa fa-instagram"></i>
                <WhatsappShareButton url={shareUrl} quote={title}>
                    <i className="fa fa-whatsapp"></i>
                </WhatsappShareButton>
                <TelegramShareButton url={shareUrl} quote={title}>
                    <i className="fa fa-telegram"></i>
                </TelegramShareButton>

            </div>
        </div>
    )
}