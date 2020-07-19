import React from "react";
import './About.scss'
import mask from './img/meduza.png'
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
        this.pl = gsap.timeline({
            paused: true,
            scrollTrigger: {
                trigger: this.trigger,
                scrub: true,

            }
        });
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
        }).to('.down',{color:'#ea0026'},0).to('.down',{color:'#ea0026'},1);
        this.pl.to('.down2', {
            x:-2000,
            duration: 2
        }).to('.down2',{color:'#ea0026'},0).to('.down',{color:'#ea0026'},1);
        // this.il.to(".box", {
        //     force3D: true,
        //     duration: 1,
        //     // xPercent: -100,
        //     ease: "power1.inOut",
        //     stagger: { amount: 1 }
        // }).to(".about_last", { ease: "power1.out", duration: 1, translateX:'0%' }, 1)

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
                </div>
                <div className={'about_last'}>
                   <span className="down2" >
                    We are a team of young and ambitious talents desire to grow with every new project.
                    <br/>
                    We create budget fitted projects on time to improve Your business growing and customer relationships.
                    <br/>
                    Our passion is to provide innovative, highly functional, visually appealing and feature-rich websites, mobile applications and custom software that drive your business growth.
                    <br/>
                    Every client, regardless of the size or scope of the project, can expect nothing but the deep-dive of project development till its 100% complete.
                </span>
                </div>
                <div className={'boxes2'}>
                    <img src={mask} alt=""/>
                </div>
            </section>

        );
    }
}

