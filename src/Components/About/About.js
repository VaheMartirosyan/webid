import React from "react";
import './About.scss'
import mask from './img/mask.png'
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
gsap.core.globals("ScrollTrigger", ScrollTrigger);

export default class Introducing extends React.Component {

    constructor(props) {
        super(props);

        this.trigger = null;
        this.tl = gsap.timeline({
            paused: true,
            scrollTrigger: {
                trigger: this.trigger,
                scrub: true,
            }
        });
        this.dl = gsap.timeline({
            paused: true,
            scrollTrigger: {
                trigger: this.trigger,
                scrub: true,

            }
        });
        this.il = gsap.timeline({
            paused: true,
            scrollTrigger: {
                trigger: this.trigger,
                scrub: true,

            }
        });
        this.state = {
            arr:['001','002','003','004','005','006','007','008','009',
                '010','011','012','013','014','015','016','017','018','019','020']
        }

    }
    componentDidMount() {
        this.tl.to(".box", {
            force3D: true,
            duration: 1,
            xPercent: -100,
            ease: "power1.inOut",
            stagger: { amount: 1 }
        }).to(".box", { ease: "power1.out", duration: 1, rotation: "-65deg", }, 0)
            .to(".box", { ease: "power1.in", duration: 1, rotation: "0deg",height:'3vh',translateY:'1338%' }, 1);
        this.dl.to('.down', {
            x:2000,
            duration: 2
        });
        this.il.to(".box", {
            force3D: true,
            duration: 1,
            // xPercent: -100,
            ease: "power1.inOut",
            stagger: { amount: 1 }
        }).to(".about_last", { ease: "power1.out", duration: 1, translateX:'0%' }, 1)

    }
    render() {
        return (
            <section className="trigger" >
                <span className="down" ref={div => (this.container2 = div)}>
                    We are a team of young and ambitious talents desire to grow with every new project.
                    <br/>
                    We create budget fitted projects on time to improve Your business growing and customer relationships.
                    <br/>
                    Our passion is to provide innovative, highly functional, visually appealing and feature-rich websites, mobile applications and custom software that drive your business growth.
                    <br/>
                    Every client, regardless of the size or scope of the project, can expect nothing but the deep-dive of project development till its 100% complete.
                </span>
                <div className={'boxes'}>
                    <img src={mask} alt=""/>
                    {/*{this.state.arr.map((e,i)=>{*/}
                    {/*    return(*/}
                    {/*        <div key={i} className={`box boxed${i}`} ></div>*/}
                    {/*    )*/}
                    {/*})}*/}
                </div>
                <div className={'about_last'}>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error, repudiandae?
                </div>
            </section>

        );
    }
}

