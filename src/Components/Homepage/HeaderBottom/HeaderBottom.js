import React from "react";
import Particles from 'react-particles-js';
import "./HeaderBottom.scss"
import Social from "./Social/Social";
export default ()=>{
    var TxtRotate = function(el, toRotate, period) {
        this.toRotate = toRotate;
        this.el = el;
        this.loopNum = 0;
        this.period = parseInt(period, 10) || 2000;
        this.txt = '';
        this.tick();
        this.isDeleting = false;
    };

    TxtRotate.prototype.tick = function() {
        var i = this.loopNum % this.toRotate.length;
        var fullTxt = this.toRotate[i];

        if (this.isDeleting) {
            this.txt = fullTxt.substring(0, this.txt.length - 1);
        } else {
            this.txt = fullTxt.substring(0, this.txt.length + 1);
        }

        this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';

        var that = this;
        var delta = 200 - Math.random() * 100;

        if (this.isDeleting) { delta /= 2; }

        if (!this.isDeleting && this.txt === fullTxt) {
            delta = this.period;
            this.isDeleting = true;
        } else if (this.isDeleting && this.txt === '') {
            this.isDeleting = false;
            this.loopNum++;
            delta = 500;
        }

        setTimeout(function() {
            that.tick();
        }, delta);
    };

    window.onload = function() {
        var elements = document.getElementsByClassName('txt-rotate');
        for (var i=0; i<elements.length; i++) {
            var toRotate = elements[i].getAttribute('data-rotate');
            var period = elements[i].getAttribute('data-period');
            if (toRotate) {
                new TxtRotate(elements[i], JSON.parse(toRotate), period);
            }
        }
        // INJECT CSS
        var css = document.createElement("style");
        css.type = "text/css";
        css.innerHTML = ".txt-rotate > .wrap { border-right: 0.08em solid #666 }";
        document.body.appendChild(css);
    };
    return(
        <div className={'header_bottom_all'}>
            <Particles
                style={{height:'100vh'}}
                params={{
                    "particles": {
                        "number": {
                            "value": 120,
                            "density": {
                                "enable": true,
                                "value_area": 510
                            }
                        },
                        // "color": {
                        //     "value": "#EA0026"
                        // },
                        // "shape": {
                        //     "type": "circle",
                        //     "stroke": {
                        //         "width": 0,
                        //         "color": "#000000"
                        //     },
                        //     "polygon": {
                        //         "nb_sides": 5
                        //     },
                        //     "image": {
                        //         "src": "img/github.svg",
                        //         "width": 100,
                        //         "height": 100
                        //     }
                        // },
                        // "opacity": {
                        //     "value": 0.5,
                        //     "random": false,
                        //     "anim": {
                        //         "enable": false,
                        //         "speed": 1,
                        //         "opacity_min": 0.1,
                        //         "sync": false
                        //     }
                        // },
                        // "size": {
                        //     "value": 3,
                        //     "random": true,
                        //     "anim": {
                        //         "enable": false,
                        //         "speed": 40,
                        //         "size_min": 0.1,
                        //         "sync": false
                        //     }
                        // },
                        "line_linked": {
                            "enable": true,
                            "distance": 150,
                            "color": "#afafaf",
                            "opacity": 0.6,
                            "width": .1
                        },
                        "move": {
                            "enable": true,
                            "speed": 6,
                            "direction": "none",
                            "random": false,
                            "straight": false,
                            "out_mode": "out",
                            "bounce": false,
                            "attract": {
                                "enable": false,
                                "rotateX": 600,
                                "rotateY": 1200
                            }
                        }
                    },
                    "interactivity": {
                        "detect_on": "canvas",
                        "events": {
                            "onhover": {
                                "enable": true,
                                "mode": "repulse"
                            },
                            "onclick": {
                                "enable": true,
                                "mode": "push"
                            },
                            "resize": true
                        },
                        "modes": {
                            "grab": {
                                "distance": 140,
                                "line_linked": {
                                    "opacity": 1
                                }
                            },
                            "bubble": {
                                "distance": 400,
                                "size": 0,
                                "duration": 2,
                                "opacity":1,
                                "speed": 3
                            },
                            "repulse": {
                                "distance": 200,
                                "duration": 0.4
                            },
                            "push": {
                                "particles_nb": 4
                            },
                            "remove": {
                                "particles_nb": 2
                            }
                        }
                    },
                    "retina_detect": true
                }}
            />
            <div className={'text_header'}>
                <h2 className={'big_txt1'}>Digitizing Your</h2>
                <h2 className={'big_txt2'}>Business Identity</h2>
                <h2 className={'small_txt'}>
                    We do:
                    <span
                        className="txt-rotate"
                        data-period="2000"
                        data-rotate='[ " Web Design.", " Application Development.", " Software Engineering."]'>
                    </span>

                </h2>
            </div>
            <Social/>
            <div className="mouse_scroll">

                <div className="mouse">
                    <div className="wheel"></div>
                </div>
                <div>
                    <span className="m_scroll_arrows unu"></span>
                    <span className="m_scroll_arrows doi"></span>
                    <span className="m_scroll_arrows trei"></span>
                </div>
            </div>
        </div>
    )

}