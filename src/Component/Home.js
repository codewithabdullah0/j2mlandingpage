import React, { useState, useEffect } from 'react'
import './Home.css'
import './Plans.css'
import bannerpic1 from '../Image/mobile-mockup 1.png'
import bannerpic2 from '../Image/Red Gradient Profile Photo Instagram Post (3) 4.webp'
import salesicon1 from '../Image/Group 79 (1).svg'
import salesicon2 from '../Image/Group 1000009287.svg'
import salesicon3 from '../Image/Group 1000009269.svg'
import salesicon4 from '../Image/Group 1000009271.png'


import listingcardimg1 from '../Image/Group 1000009192.png'
import listingcardimg2 from '../Image/Group 1000009183.webp'
import listingcardimg3 from '../Image/Group 1000009188.webp'
import listingcardimg4 from '../Image/Group 1000009182.webp'

import slidepic7 from '../Image/Anovina Home.webp'
import slidepic1 from '../Image/Essential Stacks a.webp'
import slidepic2 from '../Image/Candle storefront.webp'
import slidepic3 from '../Image/Store Front - Home.webp'
import slidepic4 from '../Image/Smiyle StemSoaker.webp'
import slidepic5 from '../Image/Group 1000009037.webp'
import slidepic6 from '../Image/Group 1000008685.png'
import auditdesignicon1 from "../Image/Group 1000008536.png";
import auditdesignicon2 from "../Image/Group 1000009275.png";
import auditdesignicon3 from "../Image/Group 1000008538.png";

import serviceimg11 from "../Image/image 2159.webp";
import serviceplaybtn11 from "../Image/Group 1000008656.webp";

import homeplantsvg1 from '../Image/FFAD40 (1440 x 600 px) (1) 3.svg'
import homeplantsvg2 from '../Image/FFAD40 (1440 x 600 px) (1) 2.svg'

import personpic from '../Image/Group 1000009274.webp'

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper/modules";

import sellingcardimg1 from "../Image/Page-1 (3).png";
import sellingcardimg2 from "../Image/unlimited tasks 1 (1).png";
import sellingcardimg3 from "../Image/Page-1 (4).png";

import drivesalesimg1 from '../Image/Group 1000008997.png'
import drivesalesimg2 from '../Image/Group 1000009243.webp'

import reviewpic1 from '../Image/28d27f27-3479-438a-9b56-1d05ef8882dc 2.webp'
import reviewpic2 from '../Image/Group (2).webp'
import reviewpic3 from '../Image/IMG_7638 1.png'
import reviewpic4 from '../Image/IMG_7637 1.png'


import Marquee from "react-fast-marquee";

import lastsecimg0 from '../Image/Group 1000009278.webp'
import lastsecimg1 from '../Image/Group 1001.webp'
import lastsecimg2 from '../Image/Group 1002.webp'
import lastsecimg3 from '../Image/Group 1000009279 (1).webp'
import lastsecimg4 from '../Image/Group 1000009254 (2).webp'
import lastsecimg5 from '../Image/Group 1007.webp'
import lastsecimg6 from '../Image/Group 1008.webp'

import reserachpic1 from '../Image/Group 1000008844 (1).webp'
import reserachpic2 from '../Image/Group 1000008848.png'
import reserachpic3 from '../Image/Group 1000009272.png'

import { questions } from "./Question.js";
import FAQs from "./FAQs.js";
import zoomimg1 from '../Image/Frame 48095719.webp'
import zoomimg2 from '../Image/Frame 48095720.webp'
import { Fade } from "react-awesome-reveal";
import servicebtnpic1 from '../Image/Group 1000009035.webp'
import Navbar2 from './Navbar2'

import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'

import J2MMobilesec from './J2MMobilesec.js'


gsap.registerPlugin(ScrollTrigger)


function Home() {
    const [faqs, setfaqs] = useState(questions);

    const [ads, setads] = useState(true);


    //   const [nav2, setnav2] = useState(false)

    //   const animationj2m = () =>{
    //     console.log(window.scrollY)
    //     if(window.scrollY >= 15509){
    //       setnav2(true)
    //     }
    //     else{
    //       setnav2(false)
    //     }


    //   }

    useEffect(() => {
        let ctx = gsap.context(() => {
            gsap.set(".photo:not(:first-child)", { opacity: 0, scale: 0.5 })

            const animation = gsap.to(".photo:not(:first-child)", {
                opacity: 1, scale: 1, duration: 2, stagger: 2
                // opacity: 1 , duration: 1, stagger: 1
            })

            ScrollTrigger.create({
                trigger: ".gallery",
                start: "top top",
                end: "bottom bottom",
                pin: ".rightblock",
                animation: animation,
                scrub: true,
                // markers: true,
            })
        })
        return () => ctx.revert();
    }, [])








    return (
        <div>
            <div className="conatiner-fluid home-banner-div1" id='top'>
                <div className="home-banner-color-svg1"></div>
                <div className="home-banner-color-svg2"></div>

                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 d-flex align-items-center">
                            <div className="home-banner-text-div1">
                                <Fade delay={100} triggerOnce={true}>
                                    <h4>Drive sales, unlock endless design, <br className='d-md-block d-none' />
                                        advertising, and consulting services. </h4>
                                </Fade>
                                <Fade delay={200} triggerOnce={true}>
                                    <h2>Your Full Service</h2>

                                    <h1>
                                        <span>Amaz<svg xmlns="http://www.w3.org/2000/svg" width="43" height="43" viewBox="0 0 43 43" fill="none">
                                            <rect width="43" height="43" rx="21.5" fill="#FFBC63" />
                                            <path d="M27.1192 27.9523C27.4227 28.1285 27.7707 28.0866 28.0326 27.8695C28.8184 27.2182 30.2156 26.0021 31.0448 25.351C31.3502 25.1341 31.3089 24.6971 31.0498 24.3464C30.3593 23.3383 29.6242 22.5484 29.6331 20.7575L29.6629 14.7735C29.6755 12.2401 29.8612 9.88225 28.0006 8.12576C26.5297 6.67697 24.0976 6.18437 22.2283 6.17505C18.5767 6.15685 14.527 7.49076 13.6349 12.0291C13.5456 12.5091 13.8923 12.7292 14.1961 12.8181L17.8893 13.2296C18.2371 13.2314 18.4562 12.883 18.5449 12.534C18.857 10.9631 20.1649 10.227 21.643 10.2344C22.4255 10.2383 23.2934 10.5484 23.7681 11.2497C24.3293 12.0387 24.2369 13.1302 24.2324 14.0475L24.23 14.528C22.0116 14.779 19.0981 14.9392 17.0068 15.8461C14.6106 16.8825 12.9048 18.9706 12.8891 22.1155C12.8693 26.0904 15.3806 28.1122 18.5976 28.1282C21.2929 28.1416 22.8177 27.494 24.915 25.3641C25.6055 26.3722 25.8638 26.8977 27.1192 27.9523Z" fill="#0B232B" />
                                            <path d="M22.1392 23.6171C23.2744 22.5725 23.6405 21.359 24.1179 19.9528L24.3848 19.1669C21.7502 18.2724 18.7956 17.915 17.7423 21.0171C17.2087 22.5888 17.6668 23.9437 19.0664 24.4189C20.0955 24.7683 21.2118 24.4554 22.1392 23.6171Z" fill="#FFBC63" />
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M32.2882 31.2473C30.0986 33.3212 26.7132 34.6973 23.6934 35.0663C19.4628 35.5833 15.479 34.4858 12.2732 32.242C12.0294 32.0645 12.1852 31.7641 12.482 31.8907C15.8104 33.32 19.7791 33.9307 23.7471 33.4459C26.4168 33.1196 29.2959 32.2052 31.8686 30.7211C32.2574 30.5107 32.6464 30.9074 32.2882 31.2473Z" fill="#0B232B" />
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M33.1599 29.9693C32.8055 29.6128 31.0944 30.0292 30.3337 30.2258C30.1038 30.2835 30.0351 30.0846 30.2361 29.912C31.5026 28.7652 33.7994 28.7807 34.1012 29.0695C34.4031 29.3584 34.3456 31.6752 33.1791 32.9134C32.9945 33.0988 32.7942 33.0345 32.855 32.8049C33.0576 32.0399 33.5162 30.3403 33.1599 29.9693Z" fill="#0B232B" />
                                        </svg>n Agency </span>{" "}
                                        <br className="d-lg-block d-none" />
                                        with a Twist
                                    </h1>
                                </Fade>
                                <Fade delay={300} triggerOnce={true}>

                                    <h3>Amazon agency subscriptions for everyone.</h3>
                                </Fade>

                                <Fade delay={400} triggerOnce={true}>
                                    <div className="home-banner-btn-div1">
                                        <div>
                                            <a href="">
                                                <div className="home-banner-btn11">
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        width="56"
                                                        height="56"
                                                        viewBox="0 0 59 59"
                                                        fill="none"
                                                    >
                                                        <circle cx="29.5" cy="29.5" r="29.5" fill="#0B232B" />
                                                        <path
                                                            d="M34.1266 23.9196C34.4992 23.4776 35.1649 23.4176 35.5607 23.839C36.575 24.9192 37.3109 26.2374 37.6957 27.6795C38.1709 29.4601 38.088 31.3436 37.4582 33.0755C36.8285 34.8074 35.6822 36.3043 34.1744 37.3638C32.6665 38.4233 30.8698 38.9944 29.0269 39C27.1841 39.0055 25.3839 38.4451 23.8698 37.3946C22.3556 36.3442 21.2004 34.8542 20.5603 33.126C19.9202 31.3979 19.8261 29.5149 20.2906 27.7316C20.6668 26.2872 21.3947 24.9646 22.4026 23.8784C22.7958 23.4546 23.4619 23.5106 23.8372 23.9504C24.2125 24.3901 24.1529 25.0464 23.7749 25.4838C23.0855 26.2814 22.5847 27.2301 22.3166 28.2593C21.9602 29.6278 22.0324 31.0727 22.5236 32.3988C23.0148 33.725 23.9013 34.8683 25.0632 35.6744C26.2251 36.4806 27.6065 36.9106 29.0207 36.9063C30.4348 36.9021 31.8136 36.4638 32.9707 35.6508C34.1277 34.8378 35.0073 33.6891 35.4906 32.3601C35.9739 31.031 36.0375 29.5857 35.6728 28.2193C35.3986 27.1918 34.8922 26.2461 34.198 25.4526C33.8174 25.0175 33.7539 24.3616 34.1266 23.9196Z"
                                                            fill="white"
                                                        />
                                                        <path
                                                            d="M29 22L29 30"
                                                            stroke="white"
                                                            stroke-width="2"
                                                            stroke-linecap="round"
                                                        />
                                                    </svg>
                                                    Talk with<span> Amazon Expert</span>
                                                </div>
                                            </a>
                                        </div>


                                        <div className='home-btn-avaible-div1'>
                                            <p> <div></div> Available now  </p>
                                        </div>
                                    </div>
                                </Fade>

                                <Fade delay={500} triggerOnce={true}>
                                    <div>
                                        <p className="home-banner-contract-text1">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                                <g clip-path="url(#clip0_1466_6999)">
                                                    <path d="M10 20C15.5228 20 20 15.5228 20 10C20 4.47715 15.5228 0 10 0C4.47715 0 0 4.47715 0 10C0 15.5228 4.47715 20 10 20Z" fill="#FFBA61" />
                                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M8.39413 11.8849L13.6111 6.66797L14.6587 7.7155L8.39413 13.98L5 10.5859L6.04757 9.53837L8.39413 11.8849Z" fill="#17181D" />
                                                </g>
                                                <defs>
                                                    <clipPath id="clip0_1466_6999">
                                                        <rect width="20" height="20" fill="white" />
                                                    </clipPath>
                                                </defs>
                                            </svg>
                                            No contracts, pause or cancel anytime.
                                        </p>
                                    </div>
                                </Fade>
                            </div>
                        </div>

                        <div className="col-lg-6 text-center ">
                            <Fade delay={600} triggerOnce={true}>
                                <div className=''>
                                    <img src={bannerpic1} className="banner-pic1 img-fluid" alt="" />
                                </div>
                            </Fade>
                        </div>
                    </div>
                </div>
                <Fade delay={700} triggerOnce={true}>
                    <img src={bannerpic2} className="banner-pic-2" alt="" />
                </Fade>
            </div>




















            <div className="container-fluid home-amazon-sales-div1">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-2">
                            <div className="home-amazon-sales-textdiv11">
                                <Fade triggerOnce={true}>
                                    <p>Clients increase in <br /> <span className='span1'>Amazon </span><span>Sales</span></p>
                                </Fade>
                            </div>
                        </div>

                        <div className='col-lg-10'>
                            <div className="row">
                                <div className="col-lg-4">
                                    <Fade triggerOnce={true}>
                                        <div className="home-amazon-sales-textdiv22">
                                            <div>
                                                <div>
                                                    <img src={salesicon1} alt="" width={90} />
                                                </div>
                                                <h1>91%</h1>
                                            </div>
                                            <p><span>6 SKU </span> Business</p>
                                        </div>
                                    </Fade>
                                </div>


                                <div className="col-lg-4">
                                    <Fade triggerOnce={true}>
                                        <div className="home-amazon-sales-textdiv22">
                                            <div>
                                                <div>
                                                    <img src={salesicon2} alt="" className='for-mobile-reponsive-sales-img' width={115} />
                                                </div>
                                                <h1>122%</h1>
                                            </div>
                                            <p><span>600+ SKU </span> Business</p>
                                        </div>
                                    </Fade>
                                </div>


                                <div className="col-lg-4">
                                    <Fade triggerOnce={true}>
                                        <div className="home-amazon-sales-textdiv22">
                                            <div>
                                                <div>
                                                    <img src={salesicon3} alt="" width={140} />
                                                </div>
                                                <h1>69%</h1>
                                            </div>
                                            <p><span>3 SKU </span> Business</p>
                                        </div>
                                    </Fade>
                                </div>
                            </div>
                        </div>


                    </div>
                </div>
            </div>





























            <div className="container-fluid home-listing-card-div1" >
                <div className="">
                    <div className="row">

                        <div className="col-lg-3">
                            <Fade direction='up' triggerOnce={true}>
                                <div className="home-listing-card-div22">
                                    <div>
                                        <h1>LISTING <br /> OPTIMISATION</h1>
                                        <img src={lastsecimg0} className="home-listing-img0" alt="" />
                                    </div>
                                    <div className="home-listing-card-div33">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="13" height="14" viewBox="0 0 13 14" fill="none">
                                            <path d="M12.9927 1.99991C12.9927 1.35894 12.4731 0.839331 11.8321 0.839331L1.38686 0.83933C0.74589 0.83933 0.226279 1.35894 0.226279 1.99991C0.226279 2.64089 0.74589 3.1605 1.38686 3.1605H10.6715V12.4452C10.6715 13.0861 11.1911 13.6058 11.8321 13.6058C12.4731 13.6058 12.9927 13.0861 12.9927 12.4452L12.9927 1.99991ZM1.82066 13.6527L12.6528 2.82057L11.0115 1.17926L0.179343 12.0114L1.82066 13.6527Z" fill="#0B232B" />
                                        </svg>
                                    </div>
                                </div>
                            </Fade>
                        </div>

                        <div className="col-lg-3">
                            <Fade delay={200} direction='up' triggerOnce={true}>
                                <div className="home-listing-card-div22">
                                    <div>
                                        <h1>catalogUE & <br className="d-md-block d-none" />
                                            INVENTORY</h1>
                                        <img src={listingcardimg2} className="img-fluid" alt="" />
                                    </div>
                                    <div className="home-listing-card-div33">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="13" height="14" viewBox="0 0 13 14" fill="none">
                                            <path d="M12.9927 1.99991C12.9927 1.35894 12.4731 0.839331 11.8321 0.839331L1.38686 0.83933C0.74589 0.83933 0.226279 1.35894 0.226279 1.99991C0.226279 2.64089 0.74589 3.1605 1.38686 3.1605H10.6715V12.4452C10.6715 13.0861 11.1911 13.6058 11.8321 13.6058C12.4731 13.6058 12.9927 13.0861 12.9927 12.4452L12.9927 1.99991ZM1.82066 13.6527L12.6528 2.82057L11.0115 1.17926L0.179343 12.0114L1.82066 13.6527Z" fill="#0B232B" />
                                        </svg>
                                    </div>
                                </div>
                            </Fade>
                        </div>

                        <div className="col-lg-3">
                            <Fade delay={400} direction='up' triggerOnce={true}>
                                <div className="home-listing-card-div22">
                                    <div>
                                        <h1>Product <br /> Creatives</h1>
                                        <img src={listingcardimg3} className="img-fluid" alt="" />
                                    </div>
                                    <div className="home-listing-card-div33">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="13" height="14" viewBox="0 0 13 14" fill="none">
                                            <path d="M12.9927 1.99991C12.9927 1.35894 12.4731 0.839331 11.8321 0.839331L1.38686 0.83933C0.74589 0.83933 0.226279 1.35894 0.226279 1.99991C0.226279 2.64089 0.74589 3.1605 1.38686 3.1605H10.6715V12.4452C10.6715 13.0861 11.1911 13.6058 11.8321 13.6058C12.4731 13.6058 12.9927 13.0861 12.9927 12.4452L12.9927 1.99991ZM1.82066 13.6527L12.6528 2.82057L11.0115 1.17926L0.179343 12.0114L1.82066 13.6527Z" fill="#0B232B" />
                                        </svg>
                                    </div>
                                </div>
                            </Fade>
                        </div>

                        <div className="col-lg-3">
                            <Fade delay={600} direction='up' triggerOnce={true}>
                                <div className="home-listing-card-div22">
                                    <div>
                                        <h1>Amazon <br /> ADVERTISING</h1>
                                        <img src={listingcardimg4} className="img-fluid" alt="" />
                                    </div>
                                    <div className="home-listing-card-div33">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="13" height="14" viewBox="0 0 13 14" fill="none">
                                            <path d="M12.9927 1.99991C12.9927 1.35894 12.4731 0.839331 11.8321 0.839331L1.38686 0.83933C0.74589 0.83933 0.226279 1.35894 0.226279 1.99991C0.226279 2.64089 0.74589 3.1605 1.38686 3.1605H10.6715V12.4452C10.6715 13.0861 11.1911 13.6058 11.8321 13.6058C12.4731 13.6058 12.9927 13.0861 12.9927 12.4452L12.9927 1.99991ZM1.82066 13.6527L12.6528 2.82057L11.0115 1.17926L0.179343 12.0114L1.82066 13.6527Z" fill="#0B232B" />
                                        </svg>
                                    </div>
                                </div>
                            </Fade>
                        </div>

                    </div>
                </div>
            </div>



























            <div className="container-fluid p-0">
                <div className='design-slide-maindiv1'>
                    <div className=''>

                        <Marquee>
                            {/* <div className="design-slide-pic-div1">
                                <img src={slidepic1} />
                            </div> */}

                            <div className="design-slide-pic-div1">
                                <img src={slidepic2} />
                            </div>

                            <div className="design-slide-pic-div1">
                                <img src={slidepic3} />
                            </div>


                            <div className="design-slide-pic-div1">
                                <img src={slidepic7} />
                            </div>

                            <div className="design-slide-pic-div1">
                                <img src={slidepic2} />
                            </div>

                            <div className="design-slide-pic-div1">
                                <img src={slidepic3} />
                            </div>

                            <div className="design-slide-pic-div1">
                                <img src={slidepic7} />
                            </div>

                        </Marquee>

                    </div>
                </div>




                <div className='design-slide2-maindiv1'>
                    <div className=''>

                        <Marquee>
                            <div className="design-slide2-pic-div1">
                                <img src={slidepic6} />
                            </div>

                            <div className="design-slide2-pic-div1">
                                <img src={slidepic4} />
                            </div>


                            <div className="design-slide2-pic-div1">
                                <img src={slidepic5} />
                            </div>

                            <div className="design-slide2-pic-div1">
                                <img src={slidepic6} />
                            </div>

                            <div className="design-slide2-pic-div1">
                                <img src={slidepic4} />
                            </div>


                            <div className="design-slide2-pic-div1">
                                <img src={slidepic5} />
                            </div>

                        </Marquee>

                    </div>
                </div>
            </div>































            <div className="container-fluid home-task-point-div1" >
                <div className="container">
                    <div className="row">

                        <div className="col-lg-4 col-12 ">
                            <div>
                                <Fade triggerOnce={true}>
                                    <div className="home-task-point-cardimg1">
                                        <img src={sellingcardimg1} alt="" />
                                    </div>
                                </Fade >
                                <Fade delay={150} triggerOnce={true}>
                                    <h1 className="home-task-point-cardtext1">
                                        Accelerate Sales Growth
                                    </h1>
                                </Fade>
                                <Fade delay={300} triggerOnce={true}>
                                    <p className="home-task-point-cardtext2">
                                        We drive growth on the worlds largest
                                        platform being Amazon. Using our years of experience and up to date strategies.
                                    </p>
                                </Fade>
                            </div>
                        </div>


                        <div className="col-lg-4 col-12 ">
                            <div>
                                <Fade triggerOnce={true}>
                                    <div className="home-task-point-cardimg1">
                                        <img src={sellingcardimg2} alt="" />
                                    </div>
                                </Fade>
                                <Fade delay={150} triggerOnce={true}>
                                    <h1 className="home-task-point-cardtext1">Unlimited Tasks</h1>
                                </Fade>
                                <Fade delay={300} triggerOnce={true}>
                                    <p className="home-task-point-cardtext2">
                                        Make as many requests as you need.
                                        All tasks will be done one after the other
                                        and revisions are included!                 </p>
                                </Fade>
                            </div>
                        </div>


                        <div className="col-lg-4 col-12 ">
                            <div>
                                <Fade triggerOnce={true}>
                                    <div className="home-task-point-cardimg1">
                                        <img src={sellingcardimg3} alt="" />
                                    </div>
                                </Fade>
                                <Fade delay={150} triggerOnce={true}>
                                    <h1 className="home-task-point-cardtext1">
                                        We take care of it
                                    </h1>
                                </Fade>
                                <Fade delay={300} triggerOnce={true}>
                                    <p className="home-task-point-cardtext2">
                                        Many brands count on us as a strategic and execution partner to increase their sales. Focus on scaling while we handle the rest.
                                    </p>
                                </Fade>
                            </div>
                        </div>

                    </div>
                </div>
            </div>



































            <div className="container-fluid home-service-div1" id='service'>

                <div className="home-banner-color-svg1"></div>
                <div className="home-banner-color-svg2"></div>

                <div className="container">
                    <div>
                        <Fade triggerOnce={true}>
                            <div className="d-flex justify-content-center align-items-center home-service-build-div1">
                                <p className="home-build-text1 ">We build, so you can yield. </p>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="62"
                                    height="12"
                                    viewBox="0 0 62 12"
                                    fill="none"
                                >
                                    <path
                                        fill-rule="evenodd"
                                        clip-rule="evenodd"
                                        d="M56.2018 9.48233L53.089 11.3943C52.7145 11.625 52.4917 11.4701 52.5928 11.0443L53.4413 7.46532L50.6706 5.07777C50.3372 4.79098 50.4146 4.53027 50.8602 4.49313L54.496 4.20081L55.9008 0.803579C56.0667 0.400651 56.3353 0.399071 56.5028 0.803579L57.9091 4.20081L61.5449 4.49313C61.981 4.52948 62.0711 4.78545 61.7322 5.07777L58.9614 7.46374L59.8107 11.0443C59.9111 11.4677 59.6946 11.6289 59.3146 11.3951L56.2018 9.48154V9.48233ZM43.5609 9.48233L40.4481 11.3943C40.0736 11.625 39.8508 11.4701 39.9519 11.0443L40.8005 7.46532L38.0297 5.07777C37.6963 4.79098 37.7738 4.53027 38.2193 4.49313L41.8552 4.20081L43.2599 0.803579C43.4258 0.400651 43.6944 0.399071 43.8619 0.803579L45.2682 4.20081L48.904 4.49313C49.3402 4.52948 49.4302 4.78545 49.0913 5.07777L46.3206 7.46374L47.1699 11.0443C47.2702 11.4677 47.0537 11.6289 46.6737 11.3951L43.5609 9.48154V9.48233ZM31.0204 9.48233L27.9076 11.3943C27.5323 11.625 27.3103 11.4701 27.4098 11.0443L28.2599 7.46532L25.4884 5.07777C25.155 4.79098 25.2324 4.53027 25.678 4.49313L29.3139 4.20081L30.7186 0.803579C30.8845 0.400651 31.1531 0.399071 31.3206 0.803579L32.7253 4.20081L36.3619 4.49313C36.7996 4.52948 36.8889 4.78545 36.5515 5.07777L33.78 7.46374L34.6293 11.0443C34.7297 11.4677 34.5132 11.6289 34.1332 11.3951L31.0204 9.48154V9.48233ZM18.3424 9.48233L15.2295 11.3943C14.8543 11.625 14.6315 11.4701 14.7318 11.0443L15.5819 7.46532L12.8112 5.07777C12.4778 4.79098 12.5552 4.53027 12.9992 4.49313L16.6358 4.20081L18.0421 0.803579C18.2081 0.400651 18.4767 0.399071 18.6426 0.803579L20.0489 4.20081L23.6847 4.49313C24.1224 4.52948 24.2117 4.78545 23.8743 5.07777L21.1028 7.46374L21.9513 11.0443C22.0517 11.4677 21.836 11.6289 21.4552 11.3951L18.3424 9.48154V9.48233ZM5.73862 9.48233L2.62581 11.3943C2.25053 11.625 2.02853 11.4701 2.12807 11.0443L2.97817 7.46532L0.205871 5.07698C-0.127532 4.79019 -0.0501063 4.52948 0.395484 4.49234L4.03132 4.20002L5.43603 0.802789C5.60194 0.399861 5.87056 0.398281 6.03805 0.802789L7.44277 4.20002L11.0794 4.49234C11.5171 4.52869 11.6064 4.78466 11.269 5.07698L8.49749 7.46295L9.3468 11.0435C9.44714 11.4669 9.23066 11.6281 8.85065 11.3943L5.73783 9.48075L5.73862 9.48233Z"
                                        fill="white"
                                    />
                                </svg>
                                <p className="home-build-text2 ">4.9</p>
                            </div>
                        </Fade>

                        <Fade triggerOnce={true}>
                            <h1 className="home-service-text11">Explore How Our Full Service</h1>
                            <h2 className="home-service-text22">Amazon Agency Creates <span> More Wins for Your Brand</span></h2>
                        </Fade>

                        <div className="position-relative d-flex justify-content-center">
                            <Fade triggerOnce={true}>
                                <div className="d-flex align-items-center justify-content-center  home-service-img-div11 ">
                                    <img src={serviceimg11} className="position-relative img-fluid " alt="" />
                                    <img src={serviceplaybtn11} className="position-absolute" alt="" />
                                </div>
                            </Fade>
                        </div>

                        <Fade triggerOnce={true}>
                            <h3 className="home-service-text44"> <span>Time is too valuable </span>to be squandered guessing.</h3>
                            <p className="home-service-text55">Uncover a clear path to growth with <br className='d-md-block d-none' /> your tailored brand plan today.</p>
                        </Fade>

                        <div className='d-flex justify-content-center'>
                            <a href="">
                                <div className="home-servicesbanner-btn11">
                                    <img src={servicebtnpic1} />
                                    Talk with <span>Amazon Expert</span>
                                </div>
                            </a>
                        </div>

                    </div>
                </div>
            </div>







            <div className='container-fluid p-0'>
                <img src={homeplantsvg1} className="home-plnt-pic1" alt="" />
            </div>










































            {/* // ################## Section No 8######################### */}
            <div className="container-fluid home-review-div1 d-block">
                <div className="container">
                    <div className="home-review-text-div1">
                        <div>
                            <h2>
                                They said  <span>it best.</span>
                            </h2>
                        </div>

                    </div>




                    <div className="">

                        <Swiper navigation={true}
                            spaceBetween={25} modules={[Navigation]} breakpoints={{
                                576: {
                                    slidesPerView: 1,
                                },

                                1024: {
                                    slidesPerView: 2,
                                    spaceBetween: 25,
                                },
                            }} className="mySwiper">

                            <SwiperSlide>
                                <Fade triggerOnce={true}>
                                    <div className="col-12 home-review-col-div1">
                                        <div className="home-review-col-div2">
                                            <h2>
                                                They Turned my business around <span>”</span>
                                            </h2>
                                            <p>
                                                “Jack2Media helped my when sales was down and the market was flooded with copycat sellers He helped get my sales back and some.”
                                            </p>

                                            <div className="home-reviews-img-mainsdiv11 ">
                                                <div className="home-reviews-img-div1 ">
                                                    <div>
                                                        <img src={reviewpic1} alt="" />
                                                    </div>
                                                    <div>
                                                        <img src={reviewpic2} alt="" />
                                                        <p>Joe Barbar</p>
                                                    </div>
                                                </div>
                                                <div className='home-review-logo-img'>
                                                    <img src={salesicon1} alt="" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </Fade>
                            </SwiperSlide>



                            <SwiperSlide>
                                <Fade triggerOnce={true}>
                                    <div className="col-12 home-review-col-div1">
                                        <div className="home-review-col-div2">
                                            <h2>
                                                Creative Thinkers & problem solvers<span>”</span>
                                            </h2>
                                            <p>
                                                “Jacks innovative solutions have helped <br className="d-md-block d-none" />us a lot. We started working him <br className="d-md-block d-none" /> 6 months, now its going on 12!
                                                Highly recommend!"
                                            </p>

                                            <div className="home-reviews-img-mainsdiv11 ">
                                                <div className="home-reviews-img-div1 ">
                                                    <div>
                                                        <img src={reviewpic4} alt="" />
                                                    </div>
                                                    <div>
                                                        <img src={reviewpic2} alt="" />
                                                        <p>Zoe Dean</p>
                                                    </div>
                                                </div>
                                                <div className='home-review-logo-img'>
                                                    <img src={salesicon2} alt="" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </Fade>
                            </SwiperSlide>





                            <SwiperSlide>
                                <Fade triggerOnce={true}>
                                    <div className="col-12 home-review-col-div1">
                                        <div className="home-review-col-div2">
                                            <h2>
                                                Unmatched <br className="d-md-block d-none" />Excellence <span>”</span>
                                            </h2>
                                            <p>
                                                "Jack provides tailored, individualized one-to-one attention, meticulously guiding me through every step of developing my listing journey with care."
                                            </p>

                                            <div className="home-reviews-img-mainsdiv11 ">
                                                <div className="home-reviews-img-div1 ">
                                                    <div>
                                                        <img src={reviewpic3} alt="" />
                                                    </div>
                                                    <div>
                                                        <img src={reviewpic2} alt="" />
                                                        <p>Richard</p>
                                                    </div>
                                                </div>
                                                <div className='home-review-logo-img'>
                                                    <img src={salesicon4} width={54} alt="" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </Fade>
                            </SwiperSlide>



                        </Swiper>
                    </div>
                </div>
            </div>





























            <div className="container-fluid pl-0 pr-0 home-drivesales-div1">
                <div className="row">
                    <div className="col-lg-7 home-drivesales-col1-div2">
                        <div>
                            <Fade triggerOnce={true} >
                                <h1><span>Drive </span>Ranking</h1>
                                <p>Real ranking campaign results from J2M PPC managed launch</p>
                            </Fade>
                            <Fade triggerOnce={true}>
                                <img src={drivesalesimg1} className="drive-ranking-img" alt="" />
                            </Fade>
                        </div>
                    </div>
                    <div className="col-lg-5 home-drivesales-col2-div3">
                        <div>
                            <Fade triggerOnce={true}>
                                <h1><span>Grow </span>Sales & Profits</h1>
                                <p>Real sales data from J2M PPC managed launch</p>
                            </Fade>
                            <Fade triggerOnce={true}>
                                <img src={drivesalesimg2} className="img-fluid " alt="" />
                            </Fade>
                        </div>
                    </div>
                </div>
            </div>


































            <div className='container-fluid home-j2m-div1 gallery d-md-flex d-none'>
                <div className='container'>
                    <div className='row '>
                        <div className=" home-j2m-col1-div1 rightblock">
                            <div className='photo'>
                                <img src={reserachpic1} className="firstphoto" alt="" />
                            </div>
                            <div className='photo'>
                                <img src={reserachpic2} className="img-fluid" alt="" />
                            </div>
                            <div className='photo'>
                                <img src={reserachpic3} className="img-fluid" alt="" />
                            </div>
                        </div> 

                        <div className=" leftblock">
                            <div className="home-j2m-col2-div1">

                                <h1 className="home-j2m-col2-text11">The J2M method</h1>
                                <div className='position-relative'>
                                    <div className='j2m-svg-line'></div>

                                    {/* ######################   Slide NO 1 ##################### */}
                                    <div>
                                        <div className="home-research-text-div1 position-relative">
                                            <div className="home-research-text-div2" >
                                                <p>1</p>
                                            </div>
                                            <div className="home-research-text-div3">
                                                <h1>Research</h1>
                                                <p > Your brand has a distinctive history, and your future vision is equally unique. With experience spanning numerous product categories, we initiate each project with thorough research to uncover challenges, strategic insights, and avenues for growth.</p>
                                            </div>
                                        </div>
                                    </div>

                                    {/* ######################   Slide NO 2 ##################### */}
                                    <div>
                                        <div className="home-research-text-div1 align-items-center">
                                            <div className="home-designsec-text-div2">
                                                <p>1</p>
                                            </div>
                                            <div className="home-designsec-text-div3">
                                                <h1>Design & optimize</h1>
                                                <p className="d-none">Your brand has a distinctive history, and your future vision is equally unique. With experience spanning numerous product categories, we initiate each project with thorough research to uncover challenges, strategic insights, and avenues for growth.</p>
                                            </div>
                                        </div>
                                    </div>

                                    {/* ######################   Slide NO 13##################### */}
                                    <div>
                                        <div className="home-research-text-div1 align-items-center">
                                            <div className="home-designsec-text-div2">
                                                <p>1</p>
                                            </div>
                                            <div className="home-designsec-text-div3">
                                                <h1>Grow & scale</h1>
                                                <p className="d-none">Your brand has a distinctive history, and your future vision is equally unique. With experience spanning numerous product categories, we initiate each project with thorough research to uncover challenges, strategic insights, and avenues for growth.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>









                            <div className="home-j2m-col2-div1">
                                <h1 className="home-j2m-col2-text11">The J2M method</h1>

                                <div className='position-relative'>
                                    <div className='j2m-svg-line'></div>
                                    {/* ######################   Slide NO 1 ##################### */}
                                    <div>
                                        <div className="home-research-text-div1 align-items-center">
                                            <div className="home-designsec-text-div2" >
                                                <p>1</p>
                                            </div>
                                            <div className="home-designsec-text-div3">
                                                <h1>Research</h1>
                                                <p className="d-none" > Your brand has a distinctive history, and your future vision is equally unique. With experience spanning numerous product categories, we initiate each project with thorough research to uncover challenges, strategic insights, and avenues for growth.</p>
                                            </div>
                                        </div>
                                    </div>

                                    {/* ######################   Slide NO 2 ##################### */}
                                    <div>
                                        <div className="home-research-text-div1 ">
                                            <div className="home-research-text-div2">
                                                <p>2</p>
                                            </div>
                                            <div className="home-research-text-div3">
                                                <h1>Design & optimize</h1>
                                                <p >With a solid strategy in hand, it's all about execution. Our experts dive into their specialties, whether it's crafting attention-grabbing product listings, optimising budgets, or crafting targeted campaigns.</p>
                                            </div>
                                        </div>
                                    </div>

                                    {/* ######################   Slide NO 13##################### */}
                                    <div>
                                        <div className="home-research-text-div1 align-items-center">
                                            <div className="home-designsec-text-div2">
                                                <p>1</p>
                                            </div>
                                            <div className="home-designsec-text-div3">
                                                <h1>Grow & scale</h1>
                                                <p className="d-none">Your brand has a distinctive history, and your future vision is equally unique. With experience spanning numerous product categories, we initiate each project with thorough research to uncover challenges, strategic insights, and avenues for growth.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>









                            <div className="home-j2m-col2-div1">
                                <h1 className="home-j2m-col2-text11">The J2M method</h1>
                                <div className='position-relative'>
                                    <div className='j2m-svg-line'></div>

                                    {/* ######################   Slide NO 1 ##################### */}
                                    <div>
                                        <div className="home-research-text-div1 align-items-center">
                                            <div className="home-designsec-text-div2" >
                                                <p>1</p>
                                            </div>
                                            <div className="home-designsec-text-div3">
                                                <h1>Research</h1>
                                                <p className="d-none"> Your brand has a distinctive history, and your future vision is equally unique. With experience spanning numerous product categories, we initiate each project with thorough research to uncover challenges, strategic insights, and avenues for growth.</p>
                                            </div>
                                        </div>
                                    </div>

                                    {/* ######################   Slide NO 2 ##################### */}
                                    <div>
                                        <div className="home-research-text-div1 align-items-center">
                                            <div className="home-designsec-text-div2">
                                                <p>1</p>
                                            </div>
                                            <div className="home-designsec-text-div3">
                                                <h1>Design & optimize</h1>
                                                <p className="d-none">Your brand has a distinctive history, and your future vision is equally unique. With experience spanning numerous product categories, we initiate each project with thorough research to uncover challenges, strategic insights, and avenues for growth.</p>
                                            </div>
                                        </div>
                                    </div>

                                    {/* ######################   Slide NO 13##################### */}
                                    <div>
                                        <div className="home-research-text-div1 ">
                                            <div className="home-research-text-div2">
                                                <p>3</p>
                                            </div>
                                            <div className="home-research-text-div3">
                                                <h1>Grow & scale</h1>
                                                <p >Once all systems are running smoothly, it's time to elevate and surpass your growth objectives. Tailoring our approach to your goals and insights gained, our experts amplify efforts to propel your products to new heights of success.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>


<J2MMobilesec></J2MMobilesec>
           



























            <div className='container-fluid plant-svg p-0'>
                <img src={homeplantsvg2} className="home-plant-pic2" alt="" />
            </div>



            <div className="container-fluid home-last-sec-div1" id='benefits'>
                <div className="container">

                    <div className='home-roots-textdiv1'>
                        <Fade cascade damping={0.2} triggerOnce={true}>
                            <h1>What we do <span>from the roots.</span></h1>
                            <p>Stand head and shoulders above the competition on the <br className='d-md-block d-none' /> worlds largest market place being Amazon.</p>
                        </Fade>
                    </div>
                    <div className="row  home-last-sec-rowdiv1">

                        <div className="col-lg-6 col-12 d-flex align-items-center ">
                            <div>
                                <div>
                                    <Fade triggerOnce={true}>
                                        <a href="">
                                            <div className="home-last-sec-text1">Amazon Listing Optimisation <div>✔</div> </div>
                                        </a>
                                    </Fade>
                                </div>

                                <Fade triggerOnce={true}>
                                    <h1 className="home-last-sec-text2">
                                        Stand Out From The Crowd
                                    </h1>
                                </Fade>
                                <Fade triggerOnce={true}>
                                    <div className="d-md-none d-block home-last-sec-mobileimg-div">
                                        <img src={lastsecimg0} alt="" className="img-fluid" />
                                    </div>
                                </Fade>
                                <Fade triggerOnce={true}>
                                    <p className="home-last-sec-para2">
                                        Stand head and shoulders above the competition on the worlds largest market place being Amazon. To truly stand out, “you need to be the best, and leave the rest, so that there is no contest.” - Muhammad Ali
                                    </p>
                                </Fade>
                                <Fade cascade damping={0.2} triggerOnce={true}>
                                    <ul className="home-last-sec-ultext">
                                        <li> Engaging content: <span>Increase USP communication delivery with your target market.</span></li>
                                        <li> Reduced advertising expenses: <span>Decrease customer bounce rate and improve your conversion rate.</span></li>
                                        <li> SEO keyword optimisation: <span>Implement the highest relevant searched keyword phrases for your product to build momentum.</span></li>
                                        <li>Stamp your brand authority: <span>Make your impact in the market and build brand recognition.</span></li>

                                    </ul>
                                </Fade>
                            </div>
                        </div>

                        <div className="col-lg-6 col-12 d-md-block d-none">
                            <div className='last-sec-color-svg1'></div>
                            <div className='last-sec-color-svg2'></div>

                            <Fade triggerOnce={true}>
                                <div>
                                    <img src={lastsecimg0} alt="" className="img-fluid" />
                                </div>
                            </Fade>
                        </div>
                    </div>


















                    <div className="row  home-last-sec-rowdiv1">

                        <div className="col-lg-6 col-12 d-md-block d-none">
                            <div className='last-sec-color-svg1'></div>
                            <div className='last-sec-color-svg2'></div>
                            <Fade triggerOnce={true}>
                                <div>
                                    <img src={lastsecimg1} alt="" className="img-fluid" />
                                </div>
                            </Fade>
                        </div>


                        <div className="col-lg-6 col-12 d-flex align-items-center ">
                            <div>
                                <div>
                                    <Fade triggerOnce={true}>
                                        <a href="">
                                            <div className="home-last-sec-text1">Amazon PPC <div>✔</div></div>
                                        </a>
                                    </Fade>
                                </div>

                                <Fade triggerOnce={true}>
                                    <h1 className="home-last-sec-text2">
                                        Increase Visibility & Ranking
                                    </h1>
                                </Fade>
                                <Fade triggerOnce={true}>
                                    <div className="d-md-none d-block home-last-sec-mobileimg-div">
                                        <img src={lastsecimg1} alt="" className="img-fluid" />
                                    </div>
                                </Fade>
                                <Fade triggerOnce={true}>
                                    <p className="home-last-sec-para2">
                                        As  a qualified Amazon ads specialists we use a data-driven approach to optimize your keywords and increase your Amazon search ranking.
                                    </p>
                                </Fade>
                                <Fade triggerOnce={true} cascade damping={0.2}>
                                    <ul className="home-last-sec-ultext">
                                        <li>Data-driven: <span>Follow the data with keyword and bid optimisation. </span> </li>
                                        <li> Gain an edge:  <span>Be seen where your competitors are not and bid on the hours which count.</span></li>
                                        <li>Stay ahead: <span> With comprehensive market analysis and block your competitors from adverting on your listings.</span></li>
                                        <li> Clear understanding: <span>Transparent reporting for better performance insights and better decisions.</span></li>
                                    </ul>
                                </Fade>

                            </div>
                        </div>
                    </div>


















                    <div className="row  home-last-sec-rowdiv1">
                        <div className="col-lg-6 col-12 d-flex align-items-center ">
                            <div>
                                <div>
                                    <a href="">
                                        <div className="home-last-sec-text1">EBC / A+ ContentOr Store Creation <div>✔</div></div>
                                    </a>
                                </div>
                                <Fade triggerOnce={true}>
                                    <h1 className="home-last-sec-text2">
                                        A+ Content can Improve Your
                                        Sales by Over 10%
                                    </h1>
                                </Fade>
                                <Fade triggerOnce={true}>
                                    <div className="d-md-none d-block home-last-sec-mobileimg-div">
                                        <img src={lastsecimg6} alt="" className="img-fluid" />
                                    </div>
                                </Fade>
                                <Fade triggerOnce={true}>
                                    <p className="home-last-sec-para2">
                                        Attention the currency and you can steal it away from your competitors and stamp your brand authority in the Amazon marketplace. Reach millions of potential new visitors everyday with your very own Amazon storefront.
                                    </p>
                                </Fade>
                                <Fade triggerOnce={true} cascade damping={0.2}>
                                    <ul className="home-last-sec-ultext">
                                        <li>Enhanced Presentation: <span>Elevate listings with captivating visuals. </span> </li>
                                        <li> Consistent Branding: <span>Improve or maintain a cohesive brand image.</span></li>
                                        <li> Boosted Conversions: <span>Communicate and engage with your shoppers for higher conversion.</span></li>
                                        <li> Improved Discoverability: <span>Stand out from your competitors.</span></li>
                                    </ul>
                                </Fade>
                            </div>
                        </div>


                        <div className="col-lg-6 col-12 d-md-block d-none">
                            <div className='last-sec-color-svg1'></div>
                            {/* <div className='last-sec-color-svg2'></div> */}
                            <Fade triggerOnce={true}>
                                <div>
                                    <img src={lastsecimg6} alt="" className="img-fluid" />
                                </div>
                            </Fade>
                        </div>
                    </div>














                    <div className="row  home-last-sec-rowdiv1">

                        <div className="col-12">
                            <div className="real-client-text1">
                                <h1>Real client examples.</h1>
                            </div>
                            <div className="row real-client-row-div1">

                                <div className="col-lg-6 ">
                                    <div className="real-client-col-div11">

                                        <div className="real-client-week-div11">
                                            <div>
                                                <h2>In 8 Weeks:</h2>
                                                <ul>
                                                    <li>53.85% Sales Growth!</li>
                                                    <li>1020 x Ad Revenue Increased</li>
                                                </ul>
                                            </div>
                                            <div>
                                                <img src={salesicon2} alt="" />
                                            </div>
                                        </div>


                                        <div>
                                            <table class="table table-striped home-table">
                                                <thead class="thead-dark">
                                                    <tr>
                                                        <th scope="col" className="date-table">Date</th>
                                                        <th scope="col">11/22-12/22</th>
                                                        <th scope="col" className="date-table22">11/23 - 12/23</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td className='home-table-tr11'>Revenue</td>
                                                        <td>£157,210</td>
                                                        <td>£241,870</td>
                                                    </tr>

                                                    <tr>
                                                        <td className='home-table-tr11'>Sessions</td>
                                                        <td>21,265</td>
                                                        <td>74,365</td>
                                                    </tr>

                                                    <tr>
                                                        <td className='home-table-tr11'>Conversion Rate</td>
                                                        <td>14.7%</td>
                                                        <td>18.1%</td>
                                                    </tr>

                                                    <tr>
                                                        <td className='home-table-tr11'>Ad Spend</td>
                                                        <td>£172.90</td>
                                                        <td>£49,850</td>
                                                    </tr>

                                                    <tr>
                                                        <td className='home-table-tr11'>Ad Revenue</td>
                                                        <td>£236.96</td>
                                                        <td>£119,020</td>
                                                    </tr>

                                                    <tr>
                                                        <td className='home-table-tr11'>Impressions</td>
                                                        <td>379,500</td>
                                                        <td>1,295,625</td>
                                                    </tr>

                                                    <tr>
                                                        <td className='home-table-tr11'>Click Through Rate</td>
                                                        <td>0.30%</td>
                                                        <td>1.25%</td>
                                                    </tr>

                                                    <tr>
                                                        <td className='home-table-tr11'>Ad ACOS</td>
                                                        <td>72.96%</td>
                                                        <td>20.6%</td>
                                                    </tr>

                                                    <tr>
                                                        <td className='home-table-tr11'>True ACOS</td>
                                                        <td>0.0015%</td>
                                                        <td>13.81%</td>
                                                    </tr>


                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>











                                <div className="col-lg-6 ">
                                    <div className="real-client-col-div11">

                                        <div className="real-client-week-div11">
                                            <div>
                                                <h2>In 8 Weeks:</h2>
                                                <ul>
                                                    <li>71.79% Sales Growth!</li>
                                                    <li>43.74% Ad Revenue Increased</li>
                                                </ul>
                                            </div>
                                            <div>
                                                <img src={salesicon1} className="mt-1" alt="" />
                                            </div>
                                        </div>


                                        <div>
                                            <table class="table table-striped home-table">
                                                <thead class="thead-dark">
                                                    <tr>
                                                        <th scope="col" className="date-table">Date</th>
                                                        <th scope="col">6/23-7/23</th>
                                                        <th scope="col" className="date-table22">02/24 - 03/24</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td className='home-table-tr11'>Revenue</td>
                                                        <td>$39,742</td>
                                                        <td>$66,456</td>
                                                    </tr>

                                                    <tr>
                                                        <td className='home-table-tr11'>Sessions</td>
                                                        <td>4,589</td>
                                                        <td>7,456</td>
                                                    </tr>

                                                    <tr>
                                                        <td className='home-table-tr11'>Conversion Rate</td>
                                                        <td>15.3%</td>
                                                        <td>20.23%</td>
                                                    </tr>

                                                    <tr>
                                                        <td className='home-table-tr11'>Ad Spend</td>
                                                        <td>$7,236</td>
                                                        <td>$4,559</td>
                                                    </tr>

                                                    <tr>
                                                        <td className='home-table-tr11'>Ad Revenue</td>
                                                        <td>$31,650</td>
                                                        <td>$45,468</td>
                                                    </tr>

                                                    <tr>
                                                        <td className='home-table-tr11'>Impressions</td>
                                                        <td>174,659</td>
                                                        <td>200,716</td>
                                                    </tr>

                                                    <tr>
                                                        <td className='home-table-tr11'>Click Through Rate</td>
                                                        <td>2.68%</td>
                                                        <td>3.71%</td>
                                                    </tr>

                                                    <tr>
                                                        <td className='home-table-tr11'>Ad ACOS</td>
                                                        <td>22.86%</td>
                                                        <td>20.2%</td>
                                                    </tr>

                                                    <tr>
                                                        <td className='home-table-tr11'>True ACOS</td>
                                                        <td>18.20%</td>
                                                        <td>6.86%</td>
                                                    </tr>


                                                </tbody>
                                            </table>
                                        </div>
                                    </div>

                                    <p className='home-real-client-para112'>+ 217 successful counterfeiters removed from the market</p>
                                </div>

                            </div>

                        </div>
                    </div>


















                    <div className="row  home-last-sec-rowdiv1">

                        <div className="col-lg-6 col-12 d-md-block d-none">
                            <div className='last-sec-color-svg1'></div>
                            {/* <div className='last-sec-color-svg2'></div> */}
                            <Fade triggerOnce={true}>
                                <div>
                                    <img src={lastsecimg5} alt="" className="img-fluid" />
                                </div>
                            </Fade>
                        </div>


                        <div className="col-lg-6 col-12 d-flex align-items-center ">
                            <div>
                                <div>
                                    <a href="">
                                        <div className="home-last-sec-text1">Amazon Troubleshooting <div>✔</div></div>
                                    </a>
                                </div>
                                <Fade triggerOnce={true}>
                                    <h1 className="home-last-sec-text2">
                                        Tired of Canned Responses From “Seller Support”?
                                    </h1>
                                </Fade>
                                <Fade triggerOnce={true}>
                                    <div className="d-md-none d-block home-last-sec-mobileimg-div">
                                        <img src={lastsecimg5} alt="" className="img-fluid" />
                                    </div>
                                </Fade>
                                <Fade triggerOnce={true}>
                                    <p className="home-last-sec-para2">
                                        Attention is the currency and you must steal it away from your competitors and stamp your brand authority in the Amazon marketplace. Reach millions of potential new visitors everyday with your very own Amazon storefront.
                                    </p>
                                </Fade>
                                <Fade triggerOnce={true} cascade damping={0.2}>
                                    <ul className="home-last-sec-ultext">
                                        <li>Valuable Expertise:<span>With a track record of over 5 years, we've adeptly resolved various Amazon challenges. </span> </li>
                                        <li>Dedicated Specialist Team: <span>Our team of time tested experts are devoted to supporting your journey.</span></li>
                                        <li>Customized Solutions: <span>We grasp the nuances of your challenges and deliver personalized solutions.</span></li>
                                        <li>Strategic Partnership: <span>Beyond mere education, we serve as your strategic ally for Amazon success.</span></li>
                                    </ul>
                                </Fade>

                            </div>
                        </div>
                    </div>


















                    <div className="row  home-last-sec-rowdiv1">

                        <div className="col-lg-6 col-12 d-flex align-items-center ">
                            <div>
                                <div>
                                    <a href="">
                                        <div className="home-last-sec-text1">Account management for your growth <div>✔</div></div>
                                    </a>
                                </div>
                                <Fade triggerOnce={true}>
                                    <h1 className="home-last-sec-text2">
                                        Reclaim Back Your Time and Peace of Mind
                                    </h1>
                                </Fade>
                                <Fade triggerOnce={true}>
                                    <div className="d-md-none d-block home-last-sec-mobileimg-div">
                                        <img src={lastsecimg2} alt="" className="img-fluid" />
                                    </div>
                                </Fade>
                                <Fade triggerOnce={true}>
                                    <p className="home-last-sec-para2">
                                        Jack2Media handle catalog issues, address listing suppressions, eliminate unauthorized resellers, and maintain robust Seller Central accounts, freeing up your time to concentrate on your core tasks.
                                    </p>
                                </Fade>
                                <Fade triggerOnce={true} cascade damping={0.2}>
                                    <ul className="home-last-sec-ultext">
                                        <li> Account Health:<span>Keep your Amazon account in top shape, avoiding suspensions or penalties.</span> </li>
                                        <li>Metrics Maintenance: <span>Stay on top of performance indicators for consistent growth..</span></li>
                                        <li>Efficient Oversight: <span> Free up time for core business activities by delegating account monitoring and optimization.</span></li>
                                        <li>Proactive Issue Resolution:  <span>Quickly address issues to ensure uninterrupted operations.</span></li>
                                    </ul>
                                </Fade>
                            </div>
                        </div>


                        <div className="col-lg-6 col-12 d-md-block d-none">
                            <div className='last-sec-color-svg1'></div>
                            <div className='last-sec-color-svg2'></div>
                            <Fade triggerOnce={true}>
                                <div>
                                    <img src={lastsecimg2} alt="" className="img-fluid" />
                                </div>
                            </Fade>
                        </div>
                    </div>


















                    <div className="row  home-last-sec-rowdiv1">
                        <div className="col-lg-6 col-12 d-md-block d-none">
                            <Fade triggerOnce={true}>
                                <div>
                                    <img src={lastsecimg3} alt="" className="img-fluid" />
                                </div>
                            </Fade>
                        </div>


                        <div className="col-lg-6 col-12 d-flex align-items-center ">
                            <div>
                                <div>
                                    <a href="">
                                        <div className="home-last-sec-text1">Protect your intellectual property <div>✔</div></div>
                                    </a>
                                </div>
                                <Fade triggerOnce={true}>
                                    <h1 className="home-last-sec-text2">
                                        Eliminate the Fakes and Counterfeit Snakes
                                    </h1>
                                </Fade>
                                <Fade triggerOnce={true}>
                                    <div className="d-md-none d-block home-last-sec-mobileimg-div">
                                        <img src={lastsecimg3} alt="" className="img-fluid" />
                                    </div>
                                </Fade>
                                <Fade triggerOnce={true}>
                                    <p className="home-last-sec-para2">
                                        Protect your brand with our comprehensive intellectual property services. From Brand Registry to Trade Mark and Patent enforcement, we ensure your rights are upheld. Our expert team also enforces copyrights, safeguarding your creative works from unauthorized use. Trust us to protect your brand integrity.
                                    </p>
                                </Fade>
                                <Fade triggerOnce={true} cascade damping={0.2}>
                                    <ul className="home-last-sec-ultext">
                                        <li>Brand Registry: <span>Enhance brand protection, boost visibility, access marketing tools, and unlock additional features on Amazon.</span> </li>
                                        <li>Trademark Registry and Enforcement: <span> Protect brand identity, deter competitors, maintain reputation, and secure customer trust.</span></li>
                                        <li>Patent Enforcement: <span>Safeguard innovations, maintain competitive edge, ensure fair compensation, and protect intellectual property.</span></li>
                                        <li>Copyright Enforcement: <span>Preserve creative works, deter unauthorized use, maintain value, and uphold content integrity.</span></li>
                                    </ul>
                                </Fade>
                            </div>
                        </div>
                    </div>


















                    <div className="row  home-last-sec-rowdiv1">
                        <div className="col-lg-6 col-12 d-flex align-items-center ">
                            <div>
                                <div>
                                    <a href="">
                                        <div className="home-last-sec-text1">First £100 recovered is FREE! <div>✔</div></div>
                                    </a>
                                </div>
                                <Fade triggerOnce={true}>
                                    <h1 className="home-last-sec-text2">
                                        Are you aware that Amazon owes 99% of sellers money?
                                    </h1>
                                </Fade>
                                <Fade triggerOnce={true}>
                                    <div className="d-md-none d-block home-last-sec-mobileimg-div">
                                        <img src={lastsecimg4} alt="" className="img-fluid" />
                                    </div>
                                </Fade>
                                <Fade triggerOnce={true}>
                                    <p className="home-last-sec-para2">
                                        Dedicated to recovering funds owed to you by Amazon due to damages, lost items, and FBA warehouse issues. We encourage you to enroll in this service for prompt refund processing within 2 weeks, ensuring money returns to your pocket swiftly!
                                    </p>
                                </Fade>
                                <Fade triggerOnce={true} cascade damping={0.2}>
                                    <ul className="home-last-sec-ultext">
                                        <li> Prompt refunds: <span> Processing in 2 weeks on average</span> </li>
                                        <li>Lost and Damaged Units. <span>We will recover what is owed for those damaged items or goods that have gone walkies.</span></li>
                                        <li> Refunds and Mishandled Returns: <span> We spot and fight those cases, so you dont have to.</span></li>
                                        <li> Lost Inbound Shipments:<span>Amazon often pay back 50% of retail price for missing units.</span></li>
                                        <li>No Risk<span>– We get paid when you get paid.</span></li>
                                        <li>  Low Commissions* <span>25% on successful refunds you may have lost anyway.</span></li>
                                        <li> Additional Money for Your Business:  <span>No more money left on the table. Extra money your business deserves back in YOUR pocket. </span></li>
                                    </ul>
                                </Fade>
                            </div>
                        </div>


                        <div className="col-lg-6 col-12 d-md-block d-none">
                            <Fade triggerOnce={true}>
                                <div>
                                    <img src={lastsecimg4} alt="" className="img-fluid" />
                                </div>
                            </Fade>
                        </div>



                    </div>
                </div>
            </div>












































            <div className="container-fluid plan-member-div1" id="pricingplan">
                <div className="container">
                    <div>
                        <Fade triggerOnce={true}>
                            <h1 className="plan-member-text1">Subscription Plans </h1>
                        </Fade>
                        <Fade triggerOnce={true}>
                            <p className="plan-member-text2">
                                Pick a plan that fits your needs.
                            </p>
                        </Fade>

                        <div className='d-flex justify-content-center'>
                            <div className='with-ads-btndiv1' >
                                <button className={ads ? 'with-ads-btn1' : 'with-ads-btn2'} onClick={() => setads(true)}>With Advertising</button>
                                <button className={!ads ? 'with-ads-btn1' : 'with-ads-btn2'} onClick={() => setads(false)}>Without</button>

                            </div>
                        </div>


                        <div className="row plan-member-carddiv112">












                            {/* card ############################# 1 */}

                            <div className="col-lg-4">
                                <div className="plan-member-carddiv1">
                                    <Fade triggerOnce={true}>
                                        <h1 className="plan-member-cardtext1">
                                            £599/<span>m<sup className={ads ? '' : 'd-none'}>+1% rev share</sup></span>
                                        </h1>
                                    </Fade>
                                    <Fade triggerOnce={true}>
                                        <p className="plan-member-cardtext2">
                                            Pause or cancel anytime.
                                        </p>
                                    </Fade>
                                    <div>
                                        <Fade triggerOnce={true}>
                                            <div className="plan-member-cardbtn1">Monthly</div>
                                        </Fade>
                                    </div>

                                    <Fade triggerOnce={true} cascade damping={0.1}>
                                        <p className="plan-member-cardtext3">
                                            <svg
                                                className="mr-2"
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="20"
                                                height="20"
                                                viewBox="0 0 20 20"
                                                fill="none"
                                            >
                                                <path
                                                    d="M8.98886 0.276881C9.34862 -0.0922942 9.94193 -0.0922934 10.3017 0.276882L11.3753 1.37863C11.6097 1.61922 11.957 1.71226 12.2804 1.62113L13.761 1.2038C14.2571 1.06396 14.771 1.36063 14.8979 1.86022L15.2768 3.35116C15.3596 3.67674 15.6138 3.93096 15.9394 4.01371L17.4303 4.39261C17.9299 4.51957 18.2266 5.03341 18.0868 5.52955L17.6694 7.01019C17.5783 7.33353 17.6713 7.68081 17.9119 7.91525L19.0136 8.98886C19.3828 9.34862 19.3828 9.94193 19.0136 10.3017L17.9119 11.3753C17.6713 11.6097 17.5783 11.957 17.6694 12.2804L18.0868 13.761C18.2266 14.2571 17.9299 14.771 17.4303 14.8979L15.9394 15.2768C15.6138 15.3596 15.3596 15.6138 15.2768 15.9394L14.8979 17.4303C14.771 17.9299 14.2571 18.2266 13.761 18.0868L12.2804 17.6694C11.957 17.5783 11.6097 17.6713 11.3753 17.9119L10.3017 19.0136C9.94193 19.3828 9.34862 19.3828 8.98886 19.0136L7.91525 17.9119C7.68081 17.6713 7.33352 17.5783 7.01019 17.6694L5.52955 18.0868C5.03341 18.2266 4.51957 17.9299 4.39261 17.4303L4.01371 15.9394C3.93096 15.6138 3.67674 15.3596 3.35115 15.2768L1.86022 14.8979C1.36063 14.771 1.06396 14.2571 1.2038 13.761L1.62113 12.2804C1.71226 11.957 1.61922 11.6097 1.37863 11.3753L0.276881 10.3017C-0.0922942 9.94193 -0.0922934 9.34862 0.276882 8.98886L1.37863 7.91525C1.61922 7.68081 1.71226 7.33352 1.62113 7.01019L1.2038 5.52955C1.06396 5.03341 1.36063 4.51957 1.86022 4.39261L3.35116 4.01371C3.67674 3.93096 3.93096 3.67674 4.01371 3.35115L4.39261 1.86022C4.51957 1.36063 5.03341 1.06396 5.52955 1.2038L7.01019 1.62113C7.33353 1.71226 7.68081 1.61922 7.91525 1.37863L8.98886 0.276881Z"
                                                    fill="#000"
                                                />
                                                <path
                                                    d="M5.74219 9.28826L8.33037 11.8765L13.3514 6.85547"
                                                    stroke="#FFAB3E"
                                                    stroke-width="1.67367"
                                                />
                                            </svg>{" "}
                                            1 x request at a time
                                        </p>

                                        <p className="plan-member-cardtext3">
                                            <svg
                                                className="mr-2"
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="20"
                                                height="20"
                                                viewBox="0 0 20 20"
                                                fill="none"
                                            >
                                                <path
                                                    d="M8.98886 0.276881C9.34862 -0.0922942 9.94193 -0.0922934 10.3017 0.276882L11.3753 1.37863C11.6097 1.61922 11.957 1.71226 12.2804 1.62113L13.761 1.2038C14.2571 1.06396 14.771 1.36063 14.8979 1.86022L15.2768 3.35116C15.3596 3.67674 15.6138 3.93096 15.9394 4.01371L17.4303 4.39261C17.9299 4.51957 18.2266 5.03341 18.0868 5.52955L17.6694 7.01019C17.5783 7.33353 17.6713 7.68081 17.9119 7.91525L19.0136 8.98886C19.3828 9.34862 19.3828 9.94193 19.0136 10.3017L17.9119 11.3753C17.6713 11.6097 17.5783 11.957 17.6694 12.2804L18.0868 13.761C18.2266 14.2571 17.9299 14.771 17.4303 14.8979L15.9394 15.2768C15.6138 15.3596 15.3596 15.6138 15.2768 15.9394L14.8979 17.4303C14.771 17.9299 14.2571 18.2266 13.761 18.0868L12.2804 17.6694C11.957 17.5783 11.6097 17.6713 11.3753 17.9119L10.3017 19.0136C9.94193 19.3828 9.34862 19.3828 8.98886 19.0136L7.91525 17.9119C7.68081 17.6713 7.33352 17.5783 7.01019 17.6694L5.52955 18.0868C5.03341 18.2266 4.51957 17.9299 4.39261 17.4303L4.01371 15.9394C3.93096 15.6138 3.67674 15.3596 3.35115 15.2768L1.86022 14.8979C1.36063 14.771 1.06396 14.2571 1.2038 13.761L1.62113 12.2804C1.71226 11.957 1.61922 11.6097 1.37863 11.3753L0.276881 10.3017C-0.0922942 9.94193 -0.0922934 9.34862 0.276882 8.98886L1.37863 7.91525C1.61922 7.68081 1.71226 7.33352 1.62113 7.01019L1.2038 5.52955C1.06396 5.03341 1.36063 4.51957 1.86022 4.39261L3.35116 4.01371C3.67674 3.93096 3.93096 3.67674 4.01371 3.35115L4.39261 1.86022C4.51957 1.36063 5.03341 1.06396 5.52955 1.2038L7.01019 1.62113C7.33353 1.71226 7.68081 1.61922 7.91525 1.37863L8.98886 0.276881Z"
                                                    fill="#000"
                                                />
                                                <path
                                                    d="M5.74219 9.28826L8.33037 11.8765L13.3514 6.85547"
                                                    stroke="#FFAB3E"
                                                    stroke-width="1.67367"
                                                />
                                            </svg>{" "}
                                            Unlimited Revisions
                                        </p>

                                        <p className="plan-member-cardtext3">
                                            <svg
                                                className="mr-2"
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="20"
                                                height="20"
                                                viewBox="0 0 20 20"
                                                fill="none"
                                            >
                                                <path
                                                    d="M8.98886 0.276881C9.34862 -0.0922942 9.94193 -0.0922934 10.3017 0.276882L11.3753 1.37863C11.6097 1.61922 11.957 1.71226 12.2804 1.62113L13.761 1.2038C14.2571 1.06396 14.771 1.36063 14.8979 1.86022L15.2768 3.35116C15.3596 3.67674 15.6138 3.93096 15.9394 4.01371L17.4303 4.39261C17.9299 4.51957 18.2266 5.03341 18.0868 5.52955L17.6694 7.01019C17.5783 7.33353 17.6713 7.68081 17.9119 7.91525L19.0136 8.98886C19.3828 9.34862 19.3828 9.94193 19.0136 10.3017L17.9119 11.3753C17.6713 11.6097 17.5783 11.957 17.6694 12.2804L18.0868 13.761C18.2266 14.2571 17.9299 14.771 17.4303 14.8979L15.9394 15.2768C15.6138 15.3596 15.3596 15.6138 15.2768 15.9394L14.8979 17.4303C14.771 17.9299 14.2571 18.2266 13.761 18.0868L12.2804 17.6694C11.957 17.5783 11.6097 17.6713 11.3753 17.9119L10.3017 19.0136C9.94193 19.3828 9.34862 19.3828 8.98886 19.0136L7.91525 17.9119C7.68081 17.6713 7.33352 17.5783 7.01019 17.6694L5.52955 18.0868C5.03341 18.2266 4.51957 17.9299 4.39261 17.4303L4.01371 15.9394C3.93096 15.6138 3.67674 15.3596 3.35115 15.2768L1.86022 14.8979C1.36063 14.771 1.06396 14.2571 1.2038 13.761L1.62113 12.2804C1.71226 11.957 1.61922 11.6097 1.37863 11.3753L0.276881 10.3017C-0.0922942 9.94193 -0.0922934 9.34862 0.276882 8.98886L1.37863 7.91525C1.61922 7.68081 1.71226 7.33352 1.62113 7.01019L1.2038 5.52955C1.06396 5.03341 1.36063 4.51957 1.86022 4.39261L3.35116 4.01371C3.67674 3.93096 3.93096 3.67674 4.01371 3.35115L4.39261 1.86022C4.51957 1.36063 5.03341 1.06396 5.52955 1.2038L7.01019 1.62113C7.33353 1.71226 7.68081 1.61922 7.91525 1.37863L8.98886 0.276881Z"
                                                    fill="#000"
                                                />
                                                <path
                                                    d="M5.74219 9.28826L8.33037 11.8765L13.3514 6.85547"
                                                    stroke="#FFAB3E"
                                                    stroke-width="1.67367"
                                                />
                                            </svg>{" "}
                                            Unlimited Projects
                                        </p>

                                        <p className="plan-member-cardtext3">
                                            <svg
                                                className="mr-2"
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="20"
                                                height="20"
                                                viewBox="0 0 20 20"
                                                fill="none"
                                            >
                                                <path
                                                    d="M8.98886 0.276881C9.34862 -0.0922942 9.94193 -0.0922934 10.3017 0.276882L11.3753 1.37863C11.6097 1.61922 11.957 1.71226 12.2804 1.62113L13.761 1.2038C14.2571 1.06396 14.771 1.36063 14.8979 1.86022L15.2768 3.35116C15.3596 3.67674 15.6138 3.93096 15.9394 4.01371L17.4303 4.39261C17.9299 4.51957 18.2266 5.03341 18.0868 5.52955L17.6694 7.01019C17.5783 7.33353 17.6713 7.68081 17.9119 7.91525L19.0136 8.98886C19.3828 9.34862 19.3828 9.94193 19.0136 10.3017L17.9119 11.3753C17.6713 11.6097 17.5783 11.957 17.6694 12.2804L18.0868 13.761C18.2266 14.2571 17.9299 14.771 17.4303 14.8979L15.9394 15.2768C15.6138 15.3596 15.3596 15.6138 15.2768 15.9394L14.8979 17.4303C14.771 17.9299 14.2571 18.2266 13.761 18.0868L12.2804 17.6694C11.957 17.5783 11.6097 17.6713 11.3753 17.9119L10.3017 19.0136C9.94193 19.3828 9.34862 19.3828 8.98886 19.0136L7.91525 17.9119C7.68081 17.6713 7.33352 17.5783 7.01019 17.6694L5.52955 18.0868C5.03341 18.2266 4.51957 17.9299 4.39261 17.4303L4.01371 15.9394C3.93096 15.6138 3.67674 15.3596 3.35115 15.2768L1.86022 14.8979C1.36063 14.771 1.06396 14.2571 1.2038 13.761L1.62113 12.2804C1.71226 11.957 1.61922 11.6097 1.37863 11.3753L0.276881 10.3017C-0.0922942 9.94193 -0.0922934 9.34862 0.276882 8.98886L1.37863 7.91525C1.61922 7.68081 1.71226 7.33352 1.62113 7.01019L1.2038 5.52955C1.06396 5.03341 1.36063 4.51957 1.86022 4.39261L3.35116 4.01371C3.67674 3.93096 3.93096 3.67674 4.01371 3.35115L4.39261 1.86022C4.51957 1.36063 5.03341 1.06396 5.52955 1.2038L7.01019 1.62113C7.33353 1.71226 7.68081 1.61922 7.91525 1.37863L8.98886 0.276881Z"
                                                    fill="#000"
                                                />
                                                <path
                                                    d="M5.74219 9.28826L8.33037 11.8765L13.3514 6.85547"
                                                    stroke="#FFAB3E"
                                                    stroke-width="1.67367"
                                                />
                                            </svg>{" "}
                                            48h Turnaround Time
                                        </p>

                                        <p className="plan-member-cardtext3">
                                            <svg
                                                className="mr-2"
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="20"
                                                height="20"
                                                viewBox="0 0 20 20"
                                                fill="none"
                                            >
                                                <path
                                                    d="M8.98886 0.276881C9.34862 -0.0922942 9.94193 -0.0922934 10.3017 0.276882L11.3753 1.37863C11.6097 1.61922 11.957 1.71226 12.2804 1.62113L13.761 1.2038C14.2571 1.06396 14.771 1.36063 14.8979 1.86022L15.2768 3.35116C15.3596 3.67674 15.6138 3.93096 15.9394 4.01371L17.4303 4.39261C17.9299 4.51957 18.2266 5.03341 18.0868 5.52955L17.6694 7.01019C17.5783 7.33353 17.6713 7.68081 17.9119 7.91525L19.0136 8.98886C19.3828 9.34862 19.3828 9.94193 19.0136 10.3017L17.9119 11.3753C17.6713 11.6097 17.5783 11.957 17.6694 12.2804L18.0868 13.761C18.2266 14.2571 17.9299 14.771 17.4303 14.8979L15.9394 15.2768C15.6138 15.3596 15.3596 15.6138 15.2768 15.9394L14.8979 17.4303C14.771 17.9299 14.2571 18.2266 13.761 18.0868L12.2804 17.6694C11.957 17.5783 11.6097 17.6713 11.3753 17.9119L10.3017 19.0136C9.94193 19.3828 9.34862 19.3828 8.98886 19.0136L7.91525 17.9119C7.68081 17.6713 7.33352 17.5783 7.01019 17.6694L5.52955 18.0868C5.03341 18.2266 4.51957 17.9299 4.39261 17.4303L4.01371 15.9394C3.93096 15.6138 3.67674 15.3596 3.35115 15.2768L1.86022 14.8979C1.36063 14.771 1.06396 14.2571 1.2038 13.761L1.62113 12.2804C1.71226 11.957 1.61922 11.6097 1.37863 11.3753L0.276881 10.3017C-0.0922942 9.94193 -0.0922934 9.34862 0.276882 8.98886L1.37863 7.91525C1.61922 7.68081 1.71226 7.33352 1.62113 7.01019L1.2038 5.52955C1.06396 5.03341 1.36063 4.51957 1.86022 4.39261L3.35116 4.01371C3.67674 3.93096 3.93096 3.67674 4.01371 3.35115L4.39261 1.86022C4.51957 1.36063 5.03341 1.06396 5.52955 1.2038L7.01019 1.62113C7.33353 1.71226 7.68081 1.61922 7.91525 1.37863L8.98886 0.276881Z"
                                                    fill="#000"
                                                />
                                                <path
                                                    d="M5.74219 9.28826L8.33037 11.8765L13.3514 6.85547"
                                                    stroke="#FFAB3E"
                                                    stroke-width="1.67367"
                                                />
                                            </svg>{" "}
                                            Cancel Anytime
                                        </p>
                                    </Fade>

                                    <Fade triggerOnce={true}>
                                        <div className="plan-member-cardbtndiv2323">
                                            <div className="plan-member-cardbtn2">Book a Call</div>

                                        </div>
                                    </Fade>
                                    <Fade triggerOnce={true}>
                                        <p className='money-text1'>14 Days Money Back Gureented</p>
                                    </Fade>
                                </div>
                            </div>














                            {/* card ########################## 2 */}

                            <div className="col-lg-4">
                                <div className="plan-members-carddiv112">
                                    <Fade triggerOnce={true}>
                                        <h1 className="plan-member-cardtext112">
                                            £899/<span>m<sup className={ads ? '' : 'd-none'}>+1% rev share</sup></span>
                                        </h1>
                                    </Fade>
                                    <Fade triggerOnce={true}>
                                        <p className="plan-member-cardtext212">
                                            Pause or cancel anytime.
                                        </p>
                                    </Fade>
                                    <div>
                                        <Fade triggerOnce={true}>
                                            <a href="">
                                                <div className="plan-member-cardbtn1">Monthly</div>
                                            </a>
                                        </Fade>
                                    </div>
                                    <Fade triggerOnce={true} cascade damping={0.1}>
                                        <p className="plan-member-cardtext312">
                                            <svg
                                                className="mr-2"
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="20"
                                                height="20"
                                                viewBox="0 0 20 20"
                                                fill="none"
                                            >
                                                <path
                                                    d="M8.98886 0.276881C9.34862 -0.0922942 9.94193 -0.0922934 10.3017 0.276882L11.3753 1.37863C11.6097 1.61922 11.957 1.71226 12.2804 1.62113L13.761 1.2038C14.2571 1.06396 14.771 1.36063 14.8979 1.86022L15.2768 3.35116C15.3596 3.67674 15.6138 3.93096 15.9394 4.01371L17.4303 4.39261C17.9299 4.51957 18.2266 5.03341 18.0868 5.52955L17.6694 7.01019C17.5783 7.33353 17.6713 7.68081 17.9119 7.91525L19.0136 8.98886C19.3828 9.34862 19.3828 9.94193 19.0136 10.3017L17.9119 11.3753C17.6713 11.6097 17.5783 11.957 17.6694 12.2804L18.0868 13.761C18.2266 14.2571 17.9299 14.771 17.4303 14.8979L15.9394 15.2768C15.6138 15.3596 15.3596 15.6138 15.2768 15.9394L14.8979 17.4303C14.771 17.9299 14.2571 18.2266 13.761 18.0868L12.2804 17.6694C11.957 17.5783 11.6097 17.6713 11.3753 17.9119L10.3017 19.0136C9.94193 19.3828 9.34862 19.3828 8.98886 19.0136L7.91525 17.9119C7.68081 17.6713 7.33352 17.5783 7.01019 17.6694L5.52955 18.0868C5.03341 18.2266 4.51957 17.9299 4.39261 17.4303L4.01371 15.9394C3.93096 15.6138 3.67674 15.3596 3.35115 15.2768L1.86022 14.8979C1.36063 14.771 1.06396 14.2571 1.2038 13.761L1.62113 12.2804C1.71226 11.957 1.61922 11.6097 1.37863 11.3753L0.276881 10.3017C-0.0922942 9.94193 -0.0922934 9.34862 0.276882 8.98886L1.37863 7.91525C1.61922 7.68081 1.71226 7.33352 1.62113 7.01019L1.2038 5.52955C1.06396 5.03341 1.36063 4.51957 1.86022 4.39261L3.35116 4.01371C3.67674 3.93096 3.93096 3.67674 4.01371 3.35115L4.39261 1.86022C4.51957 1.36063 5.03341 1.06396 5.52955 1.2038L7.01019 1.62113C7.33353 1.71226 7.68081 1.61922 7.91525 1.37863L8.98886 0.276881Z"
                                                    fill="white"
                                                />
                                                <path
                                                    d="M5.74219 9.28826L8.33037 11.8765L13.3514 6.85547"
                                                    fill="white"
                                                />
                                                <path
                                                    d="M5.74219 9.28826L8.33037 11.8765L13.3514 6.85547"
                                                    stroke="black"
                                                    stroke-width="1.67367"
                                                />
                                            </svg>
                                            2 x request at a time
                                        </p>
                                        <p className="plan-member-cardtext312">
                                            <svg
                                                className="mr-2"
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="20"
                                                height="20"
                                                viewBox="0 0 20 20"
                                                fill="none"
                                            >
                                                <path
                                                    d="M8.98886 0.276881C9.34862 -0.0922942 9.94193 -0.0922934 10.3017 0.276882L11.3753 1.37863C11.6097 1.61922 11.957 1.71226 12.2804 1.62113L13.761 1.2038C14.2571 1.06396 14.771 1.36063 14.8979 1.86022L15.2768 3.35116C15.3596 3.67674 15.6138 3.93096 15.9394 4.01371L17.4303 4.39261C17.9299 4.51957 18.2266 5.03341 18.0868 5.52955L17.6694 7.01019C17.5783 7.33353 17.6713 7.68081 17.9119 7.91525L19.0136 8.98886C19.3828 9.34862 19.3828 9.94193 19.0136 10.3017L17.9119 11.3753C17.6713 11.6097 17.5783 11.957 17.6694 12.2804L18.0868 13.761C18.2266 14.2571 17.9299 14.771 17.4303 14.8979L15.9394 15.2768C15.6138 15.3596 15.3596 15.6138 15.2768 15.9394L14.8979 17.4303C14.771 17.9299 14.2571 18.2266 13.761 18.0868L12.2804 17.6694C11.957 17.5783 11.6097 17.6713 11.3753 17.9119L10.3017 19.0136C9.94193 19.3828 9.34862 19.3828 8.98886 19.0136L7.91525 17.9119C7.68081 17.6713 7.33352 17.5783 7.01019 17.6694L5.52955 18.0868C5.03341 18.2266 4.51957 17.9299 4.39261 17.4303L4.01371 15.9394C3.93096 15.6138 3.67674 15.3596 3.35115 15.2768L1.86022 14.8979C1.36063 14.771 1.06396 14.2571 1.2038 13.761L1.62113 12.2804C1.71226 11.957 1.61922 11.6097 1.37863 11.3753L0.276881 10.3017C-0.0922942 9.94193 -0.0922934 9.34862 0.276882 8.98886L1.37863 7.91525C1.61922 7.68081 1.71226 7.33352 1.62113 7.01019L1.2038 5.52955C1.06396 5.03341 1.36063 4.51957 1.86022 4.39261L3.35116 4.01371C3.67674 3.93096 3.93096 3.67674 4.01371 3.35115L4.39261 1.86022C4.51957 1.36063 5.03341 1.06396 5.52955 1.2038L7.01019 1.62113C7.33353 1.71226 7.68081 1.61922 7.91525 1.37863L8.98886 0.276881Z"
                                                    fill="white"
                                                />
                                                <path
                                                    d="M5.74219 9.28826L8.33037 11.8765L13.3514 6.85547"
                                                    fill="white"
                                                />
                                                <path
                                                    d="M5.74219 9.28826L8.33037 11.8765L13.3514 6.85547"
                                                    stroke="black"
                                                    stroke-width="1.67367"
                                                />
                                            </svg>
                                            Unlimited Revisions
                                        </p>
                                        <p className="plan-member-cardtext312">
                                            <svg
                                                className="mr-2"
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="20"
                                                height="20"
                                                viewBox="0 0 20 20"
                                                fill="none"
                                            >
                                                <path
                                                    d="M8.98886 0.276881C9.34862 -0.0922942 9.94193 -0.0922934 10.3017 0.276882L11.3753 1.37863C11.6097 1.61922 11.957 1.71226 12.2804 1.62113L13.761 1.2038C14.2571 1.06396 14.771 1.36063 14.8979 1.86022L15.2768 3.35116C15.3596 3.67674 15.6138 3.93096 15.9394 4.01371L17.4303 4.39261C17.9299 4.51957 18.2266 5.03341 18.0868 5.52955L17.6694 7.01019C17.5783 7.33353 17.6713 7.68081 17.9119 7.91525L19.0136 8.98886C19.3828 9.34862 19.3828 9.94193 19.0136 10.3017L17.9119 11.3753C17.6713 11.6097 17.5783 11.957 17.6694 12.2804L18.0868 13.761C18.2266 14.2571 17.9299 14.771 17.4303 14.8979L15.9394 15.2768C15.6138 15.3596 15.3596 15.6138 15.2768 15.9394L14.8979 17.4303C14.771 17.9299 14.2571 18.2266 13.761 18.0868L12.2804 17.6694C11.957 17.5783 11.6097 17.6713 11.3753 17.9119L10.3017 19.0136C9.94193 19.3828 9.34862 19.3828 8.98886 19.0136L7.91525 17.9119C7.68081 17.6713 7.33352 17.5783 7.01019 17.6694L5.52955 18.0868C5.03341 18.2266 4.51957 17.9299 4.39261 17.4303L4.01371 15.9394C3.93096 15.6138 3.67674 15.3596 3.35115 15.2768L1.86022 14.8979C1.36063 14.771 1.06396 14.2571 1.2038 13.761L1.62113 12.2804C1.71226 11.957 1.61922 11.6097 1.37863 11.3753L0.276881 10.3017C-0.0922942 9.94193 -0.0922934 9.34862 0.276882 8.98886L1.37863 7.91525C1.61922 7.68081 1.71226 7.33352 1.62113 7.01019L1.2038 5.52955C1.06396 5.03341 1.36063 4.51957 1.86022 4.39261L3.35116 4.01371C3.67674 3.93096 3.93096 3.67674 4.01371 3.35115L4.39261 1.86022C4.51957 1.36063 5.03341 1.06396 5.52955 1.2038L7.01019 1.62113C7.33353 1.71226 7.68081 1.61922 7.91525 1.37863L8.98886 0.276881Z"
                                                    fill="white"
                                                />
                                                <path
                                                    d="M5.74219 9.28826L8.33037 11.8765L13.3514 6.85547"
                                                    fill="white"
                                                />
                                                <path
                                                    d="M5.74219 9.28826L8.33037 11.8765L13.3514 6.85547"
                                                    stroke="black"
                                                    stroke-width="1.67367"
                                                />
                                            </svg>
                                            Unlimited Projects
                                        </p>

                                        <p className="plan-member-cardtext312">
                                            <svg
                                                className="mr-2"
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="20"
                                                height="20"
                                                viewBox="0 0 20 20"
                                                fill="none"
                                            >
                                                <path
                                                    d="M8.98886 0.276881C9.34862 -0.0922942 9.94193 -0.0922934 10.3017 0.276882L11.3753 1.37863C11.6097 1.61922 11.957 1.71226 12.2804 1.62113L13.761 1.2038C14.2571 1.06396 14.771 1.36063 14.8979 1.86022L15.2768 3.35116C15.3596 3.67674 15.6138 3.93096 15.9394 4.01371L17.4303 4.39261C17.9299 4.51957 18.2266 5.03341 18.0868 5.52955L17.6694 7.01019C17.5783 7.33353 17.6713 7.68081 17.9119 7.91525L19.0136 8.98886C19.3828 9.34862 19.3828 9.94193 19.0136 10.3017L17.9119 11.3753C17.6713 11.6097 17.5783 11.957 17.6694 12.2804L18.0868 13.761C18.2266 14.2571 17.9299 14.771 17.4303 14.8979L15.9394 15.2768C15.6138 15.3596 15.3596 15.6138 15.2768 15.9394L14.8979 17.4303C14.771 17.9299 14.2571 18.2266 13.761 18.0868L12.2804 17.6694C11.957 17.5783 11.6097 17.6713 11.3753 17.9119L10.3017 19.0136C9.94193 19.3828 9.34862 19.3828 8.98886 19.0136L7.91525 17.9119C7.68081 17.6713 7.33352 17.5783 7.01019 17.6694L5.52955 18.0868C5.03341 18.2266 4.51957 17.9299 4.39261 17.4303L4.01371 15.9394C3.93096 15.6138 3.67674 15.3596 3.35115 15.2768L1.86022 14.8979C1.36063 14.771 1.06396 14.2571 1.2038 13.761L1.62113 12.2804C1.71226 11.957 1.61922 11.6097 1.37863 11.3753L0.276881 10.3017C-0.0922942 9.94193 -0.0922934 9.34862 0.276882 8.98886L1.37863 7.91525C1.61922 7.68081 1.71226 7.33352 1.62113 7.01019L1.2038 5.52955C1.06396 5.03341 1.36063 4.51957 1.86022 4.39261L3.35116 4.01371C3.67674 3.93096 3.93096 3.67674 4.01371 3.35115L4.39261 1.86022C4.51957 1.36063 5.03341 1.06396 5.52955 1.2038L7.01019 1.62113C7.33353 1.71226 7.68081 1.61922 7.91525 1.37863L8.98886 0.276881Z"
                                                    fill="white"
                                                />
                                                <path
                                                    d="M5.74219 9.28826L8.33037 11.8765L13.3514 6.85547"
                                                    fill="white"
                                                />
                                                <path
                                                    d="M5.74219 9.28826L8.33037 11.8765L13.3514 6.85547"
                                                    stroke="black"
                                                    stroke-width="1.67367"
                                                />
                                            </svg>
                                            48h Turnaround Time
                                        </p>

                                        <p className="plan-member-cardtext312">
                                            <svg
                                                className="mr-2"
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="20"
                                                height="20"
                                                viewBox="0 0 20 20"
                                                fill="none"
                                            >
                                                <path
                                                    d="M8.98886 0.276881C9.34862 -0.0922942 9.94193 -0.0922934 10.3017 0.276882L11.3753 1.37863C11.6097 1.61922 11.957 1.71226 12.2804 1.62113L13.761 1.2038C14.2571 1.06396 14.771 1.36063 14.8979 1.86022L15.2768 3.35116C15.3596 3.67674 15.6138 3.93096 15.9394 4.01371L17.4303 4.39261C17.9299 4.51957 18.2266 5.03341 18.0868 5.52955L17.6694 7.01019C17.5783 7.33353 17.6713 7.68081 17.9119 7.91525L19.0136 8.98886C19.3828 9.34862 19.3828 9.94193 19.0136 10.3017L17.9119 11.3753C17.6713 11.6097 17.5783 11.957 17.6694 12.2804L18.0868 13.761C18.2266 14.2571 17.9299 14.771 17.4303 14.8979L15.9394 15.2768C15.6138 15.3596 15.3596 15.6138 15.2768 15.9394L14.8979 17.4303C14.771 17.9299 14.2571 18.2266 13.761 18.0868L12.2804 17.6694C11.957 17.5783 11.6097 17.6713 11.3753 17.9119L10.3017 19.0136C9.94193 19.3828 9.34862 19.3828 8.98886 19.0136L7.91525 17.9119C7.68081 17.6713 7.33352 17.5783 7.01019 17.6694L5.52955 18.0868C5.03341 18.2266 4.51957 17.9299 4.39261 17.4303L4.01371 15.9394C3.93096 15.6138 3.67674 15.3596 3.35115 15.2768L1.86022 14.8979C1.36063 14.771 1.06396 14.2571 1.2038 13.761L1.62113 12.2804C1.71226 11.957 1.61922 11.6097 1.37863 11.3753L0.276881 10.3017C-0.0922942 9.94193 -0.0922934 9.34862 0.276882 8.98886L1.37863 7.91525C1.61922 7.68081 1.71226 7.33352 1.62113 7.01019L1.2038 5.52955C1.06396 5.03341 1.36063 4.51957 1.86022 4.39261L3.35116 4.01371C3.67674 3.93096 3.93096 3.67674 4.01371 3.35115L4.39261 1.86022C4.51957 1.36063 5.03341 1.06396 5.52955 1.2038L7.01019 1.62113C7.33353 1.71226 7.68081 1.61922 7.91525 1.37863L8.98886 0.276881Z"
                                                    fill="white"
                                                />
                                                <path
                                                    d="M5.74219 9.28826L8.33037 11.8765L13.3514 6.85547"
                                                    fill="white"
                                                />
                                                <path
                                                    d="M5.74219 9.28826L8.33037 11.8765L13.3514 6.85547"
                                                    stroke="black"
                                                    stroke-width="1.67367"
                                                />
                                            </svg>
                                            Monthly Cancellable
                                        </p>


                                        <p className="plan-member-cardtext312">
                                            <svg
                                                className="mr-2"
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="20"
                                                height="20"
                                                viewBox="0 0 20 20"
                                                fill="none"
                                            >
                                                <path
                                                    d="M8.98886 0.276881C9.34862 -0.0922942 9.94193 -0.0922934 10.3017 0.276882L11.3753 1.37863C11.6097 1.61922 11.957 1.71226 12.2804 1.62113L13.761 1.2038C14.2571 1.06396 14.771 1.36063 14.8979 1.86022L15.2768 3.35116C15.3596 3.67674 15.6138 3.93096 15.9394 4.01371L17.4303 4.39261C17.9299 4.51957 18.2266 5.03341 18.0868 5.52955L17.6694 7.01019C17.5783 7.33353 17.6713 7.68081 17.9119 7.91525L19.0136 8.98886C19.3828 9.34862 19.3828 9.94193 19.0136 10.3017L17.9119 11.3753C17.6713 11.6097 17.5783 11.957 17.6694 12.2804L18.0868 13.761C18.2266 14.2571 17.9299 14.771 17.4303 14.8979L15.9394 15.2768C15.6138 15.3596 15.3596 15.6138 15.2768 15.9394L14.8979 17.4303C14.771 17.9299 14.2571 18.2266 13.761 18.0868L12.2804 17.6694C11.957 17.5783 11.6097 17.6713 11.3753 17.9119L10.3017 19.0136C9.94193 19.3828 9.34862 19.3828 8.98886 19.0136L7.91525 17.9119C7.68081 17.6713 7.33352 17.5783 7.01019 17.6694L5.52955 18.0868C5.03341 18.2266 4.51957 17.9299 4.39261 17.4303L4.01371 15.9394C3.93096 15.6138 3.67674 15.3596 3.35115 15.2768L1.86022 14.8979C1.36063 14.771 1.06396 14.2571 1.2038 13.761L1.62113 12.2804C1.71226 11.957 1.61922 11.6097 1.37863 11.3753L0.276881 10.3017C-0.0922942 9.94193 -0.0922934 9.34862 0.276882 8.98886L1.37863 7.91525C1.61922 7.68081 1.71226 7.33352 1.62113 7.01019L1.2038 5.52955C1.06396 5.03341 1.36063 4.51957 1.86022 4.39261L3.35116 4.01371C3.67674 3.93096 3.93096 3.67674 4.01371 3.35115L4.39261 1.86022C4.51957 1.36063 5.03341 1.06396 5.52955 1.2038L7.01019 1.62113C7.33353 1.71226 7.68081 1.61922 7.91525 1.37863L8.98886 0.276881Z"
                                                    fill="white"
                                                />
                                                <path
                                                    d="M5.74219 9.28826L8.33037 11.8765L13.3514 6.85547"
                                                    fill="white"
                                                />
                                                <path
                                                    d="M5.74219 9.28826L8.33037 11.8765L13.3514 6.85547"
                                                    stroke="black"
                                                    stroke-width="1.67367"
                                                />
                                            </svg>
                                            30 Min Weekly Consultation
                                        </p>
                                    </Fade>
                                    <div className="plan-member-cardbtndiv2">
                                        <Fade triggerOnce={true}>
                                            <div className="plan-member-cardbtn212">Book a Call</div>
                                        </Fade>
                                    </div>
                                    <Fade triggerOnce={true}>
                                        <p className='money-text2'>14 Days Money Back Gureented</p>
                                    </Fade>
                                </div>

                            </div>













                            {/* card ################## 3 */}

                            <div className="col-lg-4 ">
                                <div className="plan-member-carddiv1">
                                    <Fade triggerOnce={true}>
                                        <h1 className="plan-member-cardtext1">
                                            £1999/<span>m<sup className={ads ? '' : 'd-none'}>+1% rev share</sup></span>
                                        </h1>
                                    </Fade>
                                    <Fade triggerOnce={true}>
                                        <p className="plan-member-cardtext2">
                                            Pause or cancel anytime.
                                        </p>
                                    </Fade>
                                    <div>
                                        <Fade triggerOnce={true}>
                                            <a href="">
                                                <div className="plan-member-cardbtn1">Monthly</div>
                                            </a>
                                        </Fade>
                                    </div>
                                    <Fade triggerOnce={true} cascade damping={0.1}>
                                        <p className="plan-member-cardtext3">
                                            <svg
                                                className="mr-2"
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="20"
                                                height="20"
                                                viewBox="0 0 20 20"
                                                fill="none"
                                            >
                                                <path
                                                    d="M8.98886 0.276881C9.34862 -0.0922942 9.94193 -0.0922934 10.3017 0.276882L11.3753 1.37863C11.6097 1.61922 11.957 1.71226 12.2804 1.62113L13.761 1.2038C14.2571 1.06396 14.771 1.36063 14.8979 1.86022L15.2768 3.35116C15.3596 3.67674 15.6138 3.93096 15.9394 4.01371L17.4303 4.39261C17.9299 4.51957 18.2266 5.03341 18.0868 5.52955L17.6694 7.01019C17.5783 7.33353 17.6713 7.68081 17.9119 7.91525L19.0136 8.98886C19.3828 9.34862 19.3828 9.94193 19.0136 10.3017L17.9119 11.3753C17.6713 11.6097 17.5783 11.957 17.6694 12.2804L18.0868 13.761C18.2266 14.2571 17.9299 14.771 17.4303 14.8979L15.9394 15.2768C15.6138 15.3596 15.3596 15.6138 15.2768 15.9394L14.8979 17.4303C14.771 17.9299 14.2571 18.2266 13.761 18.0868L12.2804 17.6694C11.957 17.5783 11.6097 17.6713 11.3753 17.9119L10.3017 19.0136C9.94193 19.3828 9.34862 19.3828 8.98886 19.0136L7.91525 17.9119C7.68081 17.6713 7.33352 17.5783 7.01019 17.6694L5.52955 18.0868C5.03341 18.2266 4.51957 17.9299 4.39261 17.4303L4.01371 15.9394C3.93096 15.6138 3.67674 15.3596 3.35115 15.2768L1.86022 14.8979C1.36063 14.771 1.06396 14.2571 1.2038 13.761L1.62113 12.2804C1.71226 11.957 1.61922 11.6097 1.37863 11.3753L0.276881 10.3017C-0.0922942 9.94193 -0.0922934 9.34862 0.276882 8.98886L1.37863 7.91525C1.61922 7.68081 1.71226 7.33352 1.62113 7.01019L1.2038 5.52955C1.06396 5.03341 1.36063 4.51957 1.86022 4.39261L3.35116 4.01371C3.67674 3.93096 3.93096 3.67674 4.01371 3.35115L4.39261 1.86022C4.51957 1.36063 5.03341 1.06396 5.52955 1.2038L7.01019 1.62113C7.33353 1.71226 7.68081 1.61922 7.91525 1.37863L8.98886 0.276881Z"
                                                    fill="#000"
                                                />
                                                <path
                                                    d="M5.74219 9.28826L8.33037 11.8765L13.3514 6.85547"
                                                    stroke="#FFAB3E"
                                                    stroke-width="1.67367"
                                                />
                                            </svg>{" "}
                                            6 x request at a time
                                        </p>
                                        <p className="plan-member-cardtext3">
                                            <svg
                                                className="mr-2"
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="20"
                                                height="20"
                                                viewBox="0 0 20 20"
                                                fill="none"
                                            >
                                                <path
                                                    d="M8.98886 0.276881C9.34862 -0.0922942 9.94193 -0.0922934 10.3017 0.276882L11.3753 1.37863C11.6097 1.61922 11.957 1.71226 12.2804 1.62113L13.761 1.2038C14.2571 1.06396 14.771 1.36063 14.8979 1.86022L15.2768 3.35116C15.3596 3.67674 15.6138 3.93096 15.9394 4.01371L17.4303 4.39261C17.9299 4.51957 18.2266 5.03341 18.0868 5.52955L17.6694 7.01019C17.5783 7.33353 17.6713 7.68081 17.9119 7.91525L19.0136 8.98886C19.3828 9.34862 19.3828 9.94193 19.0136 10.3017L17.9119 11.3753C17.6713 11.6097 17.5783 11.957 17.6694 12.2804L18.0868 13.761C18.2266 14.2571 17.9299 14.771 17.4303 14.8979L15.9394 15.2768C15.6138 15.3596 15.3596 15.6138 15.2768 15.9394L14.8979 17.4303C14.771 17.9299 14.2571 18.2266 13.761 18.0868L12.2804 17.6694C11.957 17.5783 11.6097 17.6713 11.3753 17.9119L10.3017 19.0136C9.94193 19.3828 9.34862 19.3828 8.98886 19.0136L7.91525 17.9119C7.68081 17.6713 7.33352 17.5783 7.01019 17.6694L5.52955 18.0868C5.03341 18.2266 4.51957 17.9299 4.39261 17.4303L4.01371 15.9394C3.93096 15.6138 3.67674 15.3596 3.35115 15.2768L1.86022 14.8979C1.36063 14.771 1.06396 14.2571 1.2038 13.761L1.62113 12.2804C1.71226 11.957 1.61922 11.6097 1.37863 11.3753L0.276881 10.3017C-0.0922942 9.94193 -0.0922934 9.34862 0.276882 8.98886L1.37863 7.91525C1.61922 7.68081 1.71226 7.33352 1.62113 7.01019L1.2038 5.52955C1.06396 5.03341 1.36063 4.51957 1.86022 4.39261L3.35116 4.01371C3.67674 3.93096 3.93096 3.67674 4.01371 3.35115L4.39261 1.86022C4.51957 1.36063 5.03341 1.06396 5.52955 1.2038L7.01019 1.62113C7.33353 1.71226 7.68081 1.61922 7.91525 1.37863L8.98886 0.276881Z"
                                                    fill="#000"
                                                />
                                                <path
                                                    d="M5.74219 9.28826L8.33037 11.8765L13.3514 6.85547"
                                                    stroke="#FFAB3E"
                                                    stroke-width="1.67367"
                                                />
                                            </svg>{" "}
                                            Unlimited Revisions
                                        </p>
                                        <p className="plan-member-cardtext3">
                                            <svg
                                                className="mr-2"
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="20"
                                                height="20"
                                                viewBox="0 0 20 20"
                                                fill="none"
                                            >
                                                <path
                                                    d="M8.98886 0.276881C9.34862 -0.0922942 9.94193 -0.0922934 10.3017 0.276882L11.3753 1.37863C11.6097 1.61922 11.957 1.71226 12.2804 1.62113L13.761 1.2038C14.2571 1.06396 14.771 1.36063 14.8979 1.86022L15.2768 3.35116C15.3596 3.67674 15.6138 3.93096 15.9394 4.01371L17.4303 4.39261C17.9299 4.51957 18.2266 5.03341 18.0868 5.52955L17.6694 7.01019C17.5783 7.33353 17.6713 7.68081 17.9119 7.91525L19.0136 8.98886C19.3828 9.34862 19.3828 9.94193 19.0136 10.3017L17.9119 11.3753C17.6713 11.6097 17.5783 11.957 17.6694 12.2804L18.0868 13.761C18.2266 14.2571 17.9299 14.771 17.4303 14.8979L15.9394 15.2768C15.6138 15.3596 15.3596 15.6138 15.2768 15.9394L14.8979 17.4303C14.771 17.9299 14.2571 18.2266 13.761 18.0868L12.2804 17.6694C11.957 17.5783 11.6097 17.6713 11.3753 17.9119L10.3017 19.0136C9.94193 19.3828 9.34862 19.3828 8.98886 19.0136L7.91525 17.9119C7.68081 17.6713 7.33352 17.5783 7.01019 17.6694L5.52955 18.0868C5.03341 18.2266 4.51957 17.9299 4.39261 17.4303L4.01371 15.9394C3.93096 15.6138 3.67674 15.3596 3.35115 15.2768L1.86022 14.8979C1.36063 14.771 1.06396 14.2571 1.2038 13.761L1.62113 12.2804C1.71226 11.957 1.61922 11.6097 1.37863 11.3753L0.276881 10.3017C-0.0922942 9.94193 -0.0922934 9.34862 0.276882 8.98886L1.37863 7.91525C1.61922 7.68081 1.71226 7.33352 1.62113 7.01019L1.2038 5.52955C1.06396 5.03341 1.36063 4.51957 1.86022 4.39261L3.35116 4.01371C3.67674 3.93096 3.93096 3.67674 4.01371 3.35115L4.39261 1.86022C4.51957 1.36063 5.03341 1.06396 5.52955 1.2038L7.01019 1.62113C7.33353 1.71226 7.68081 1.61922 7.91525 1.37863L8.98886 0.276881Z"
                                                    fill="#000"
                                                />
                                                <path
                                                    d="M5.74219 9.28826L8.33037 11.8765L13.3514 6.85547"
                                                    stroke="#FFAB3E"
                                                    stroke-width="1.67367"
                                                />
                                            </svg>
                                            Unlimited Projects
                                        </p>

                                        <p className="plan-member-cardtext3">
                                            <svg
                                                className="mr-2"
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="20"
                                                height="20"
                                                viewBox="0 0 20 20"
                                                fill="none"
                                            >
                                                <path
                                                    d="M8.98886 0.276881C9.34862 -0.0922942 9.94193 -0.0922934 10.3017 0.276882L11.3753 1.37863C11.6097 1.61922 11.957 1.71226 12.2804 1.62113L13.761 1.2038C14.2571 1.06396 14.771 1.36063 14.8979 1.86022L15.2768 3.35116C15.3596 3.67674 15.6138 3.93096 15.9394 4.01371L17.4303 4.39261C17.9299 4.51957 18.2266 5.03341 18.0868 5.52955L17.6694 7.01019C17.5783 7.33353 17.6713 7.68081 17.9119 7.91525L19.0136 8.98886C19.3828 9.34862 19.3828 9.94193 19.0136 10.3017L17.9119 11.3753C17.6713 11.6097 17.5783 11.957 17.6694 12.2804L18.0868 13.761C18.2266 14.2571 17.9299 14.771 17.4303 14.8979L15.9394 15.2768C15.6138 15.3596 15.3596 15.6138 15.2768 15.9394L14.8979 17.4303C14.771 17.9299 14.2571 18.2266 13.761 18.0868L12.2804 17.6694C11.957 17.5783 11.6097 17.6713 11.3753 17.9119L10.3017 19.0136C9.94193 19.3828 9.34862 19.3828 8.98886 19.0136L7.91525 17.9119C7.68081 17.6713 7.33352 17.5783 7.01019 17.6694L5.52955 18.0868C5.03341 18.2266 4.51957 17.9299 4.39261 17.4303L4.01371 15.9394C3.93096 15.6138 3.67674 15.3596 3.35115 15.2768L1.86022 14.8979C1.36063 14.771 1.06396 14.2571 1.2038 13.761L1.62113 12.2804C1.71226 11.957 1.61922 11.6097 1.37863 11.3753L0.276881 10.3017C-0.0922942 9.94193 -0.0922934 9.34862 0.276882 8.98886L1.37863 7.91525C1.61922 7.68081 1.71226 7.33352 1.62113 7.01019L1.2038 5.52955C1.06396 5.03341 1.36063 4.51957 1.86022 4.39261L3.35116 4.01371C3.67674 3.93096 3.93096 3.67674 4.01371 3.35115L4.39261 1.86022C4.51957 1.36063 5.03341 1.06396 5.52955 1.2038L7.01019 1.62113C7.33353 1.71226 7.68081 1.61922 7.91525 1.37863L8.98886 0.276881Z"
                                                    fill="#000"
                                                />
                                                <path
                                                    d="M5.74219 9.28826L8.33037 11.8765L13.3514 6.85547"
                                                    stroke="#FFAB3E"
                                                    stroke-width="1.67367"
                                                />
                                            </svg>
                                            48h Turnaround Time
                                        </p>

                                        <p className="plan-member-cardtext3">
                                            <svg
                                                className="mr-2"
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="20"
                                                height="20"
                                                viewBox="0 0 20 20"
                                                fill="none"
                                            >
                                                <path
                                                    d="M8.98886 0.276881C9.34862 -0.0922942 9.94193 -0.0922934 10.3017 0.276882L11.3753 1.37863C11.6097 1.61922 11.957 1.71226 12.2804 1.62113L13.761 1.2038C14.2571 1.06396 14.771 1.36063 14.8979 1.86022L15.2768 3.35116C15.3596 3.67674 15.6138 3.93096 15.9394 4.01371L17.4303 4.39261C17.9299 4.51957 18.2266 5.03341 18.0868 5.52955L17.6694 7.01019C17.5783 7.33353 17.6713 7.68081 17.9119 7.91525L19.0136 8.98886C19.3828 9.34862 19.3828 9.94193 19.0136 10.3017L17.9119 11.3753C17.6713 11.6097 17.5783 11.957 17.6694 12.2804L18.0868 13.761C18.2266 14.2571 17.9299 14.771 17.4303 14.8979L15.9394 15.2768C15.6138 15.3596 15.3596 15.6138 15.2768 15.9394L14.8979 17.4303C14.771 17.9299 14.2571 18.2266 13.761 18.0868L12.2804 17.6694C11.957 17.5783 11.6097 17.6713 11.3753 17.9119L10.3017 19.0136C9.94193 19.3828 9.34862 19.3828 8.98886 19.0136L7.91525 17.9119C7.68081 17.6713 7.33352 17.5783 7.01019 17.6694L5.52955 18.0868C5.03341 18.2266 4.51957 17.9299 4.39261 17.4303L4.01371 15.9394C3.93096 15.6138 3.67674 15.3596 3.35115 15.2768L1.86022 14.8979C1.36063 14.771 1.06396 14.2571 1.2038 13.761L1.62113 12.2804C1.71226 11.957 1.61922 11.6097 1.37863 11.3753L0.276881 10.3017C-0.0922942 9.94193 -0.0922934 9.34862 0.276882 8.98886L1.37863 7.91525C1.61922 7.68081 1.71226 7.33352 1.62113 7.01019L1.2038 5.52955C1.06396 5.03341 1.36063 4.51957 1.86022 4.39261L3.35116 4.01371C3.67674 3.93096 3.93096 3.67674 4.01371 3.35115L4.39261 1.86022C4.51957 1.36063 5.03341 1.06396 5.52955 1.2038L7.01019 1.62113C7.33353 1.71226 7.68081 1.61922 7.91525 1.37863L8.98886 0.276881Z"
                                                    fill="#000"
                                                />
                                                <path
                                                    d="M5.74219 9.28826L8.33037 11.8765L13.3514 6.85547"
                                                    stroke="#FFAB3E"
                                                    stroke-width="1.67367"
                                                />
                                            </svg>
                                            Monthly Cancellable
                                        </p>

                                        <p className="plan-member-cardtext3">
                                            <svg
                                                className="mr-2"
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="20"
                                                height="20"
                                                viewBox="0 0 20 20"
                                                fill="none"
                                            >
                                                <path
                                                    d="M8.98886 0.276881C9.34862 -0.0922942 9.94193 -0.0922934 10.3017 0.276882L11.3753 1.37863C11.6097 1.61922 11.957 1.71226 12.2804 1.62113L13.761 1.2038C14.2571 1.06396 14.771 1.36063 14.8979 1.86022L15.2768 3.35116C15.3596 3.67674 15.6138 3.93096 15.9394 4.01371L17.4303 4.39261C17.9299 4.51957 18.2266 5.03341 18.0868 5.52955L17.6694 7.01019C17.5783 7.33353 17.6713 7.68081 17.9119 7.91525L19.0136 8.98886C19.3828 9.34862 19.3828 9.94193 19.0136 10.3017L17.9119 11.3753C17.6713 11.6097 17.5783 11.957 17.6694 12.2804L18.0868 13.761C18.2266 14.2571 17.9299 14.771 17.4303 14.8979L15.9394 15.2768C15.6138 15.3596 15.3596 15.6138 15.2768 15.9394L14.8979 17.4303C14.771 17.9299 14.2571 18.2266 13.761 18.0868L12.2804 17.6694C11.957 17.5783 11.6097 17.6713 11.3753 17.9119L10.3017 19.0136C9.94193 19.3828 9.34862 19.3828 8.98886 19.0136L7.91525 17.9119C7.68081 17.6713 7.33352 17.5783 7.01019 17.6694L5.52955 18.0868C5.03341 18.2266 4.51957 17.9299 4.39261 17.4303L4.01371 15.9394C3.93096 15.6138 3.67674 15.3596 3.35115 15.2768L1.86022 14.8979C1.36063 14.771 1.06396 14.2571 1.2038 13.761L1.62113 12.2804C1.71226 11.957 1.61922 11.6097 1.37863 11.3753L0.276881 10.3017C-0.0922942 9.94193 -0.0922934 9.34862 0.276882 8.98886L1.37863 7.91525C1.61922 7.68081 1.71226 7.33352 1.62113 7.01019L1.2038 5.52955C1.06396 5.03341 1.36063 4.51957 1.86022 4.39261L3.35116 4.01371C3.67674 3.93096 3.93096 3.67674 4.01371 3.35115L4.39261 1.86022C4.51957 1.36063 5.03341 1.06396 5.52955 1.2038L7.01019 1.62113C7.33353 1.71226 7.68081 1.61922 7.91525 1.37863L8.98886 0.276881Z"
                                                    fill="#000"
                                                />
                                                <path
                                                    d="M5.74219 9.28826L8.33037 11.8765L13.3514 6.85547"
                                                    stroke="#FFAB3E"
                                                    stroke-width="1.67367"
                                                />
                                            </svg>
                                            1 Hr Weekly Consultation
                                        </p>
                                    </Fade>

                                    <div className="plan-member-cardbtndiv2">
                                        <Fade triggerOnce={true}>
                                            <div className="plan-member-cardbtn2">Book a Call</div>
                                        </Fade>
                                    </div>
                                    <Fade triggerOnce={true}>
                                        <p className='money-text1'>14 Days Money Back Gureented</p>
                                    </Fade>
                                </div>

                            </div>
                        </div>










                        <div className="row add-web-div1">
                            <div className="col-lg-4">
                                <div className=" add-web-div2">
                                    <div>
                                        <p className="add-web-text1">Or</p>
                                        <h1 className="add-web-text2"> Hour Consultation</h1>
                                        <h1 className="add-web-text3">£196/<span>ph</span></h1>
                                    </div>

                                </div>
                            </div>
                            <div className="col-lg-8 ">
                                <div className='add-web-div3'>
                                    <div>
                                        <div className='row align-items-center'>
                                            <div className="col-lg-8 col-7 ">
                                                <p className="add-web-text4">Curious if we're the right fit?</p>
                                                <a href=""><h1 className="add-web-text5">Book a <span>FREE</span> 15 minutes to find out.</h1></a>
                                            </div>
                                            <div className="col-lg-4 col-5 d-flex align-items-end  add-web-div-img212">
                                                <img src={personpic} alt="" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>




































            <div className="container-fluid audit-design-div1">
                <div className="container">
                    <div>
                        <Fade triggerOnce={true}>
                            <h1 className="audit-design-text1">
                                We didn't reinvent the wheel. <br className="d-md-block d-none" />
                                Just the model.
                            </h1>
                        </Fade>
                        <Fade triggerOnce={true}>
                            <p className="audit-design-text2">
                                Say goodbye to traditional agencies. The fresh ,
                                <br className='d-md-block d-none'></br>
                                personalised approach is here.
                            </p>
                        </Fade>

                        <div className="row audit-design-icondiv11">

                            <div className="col-lg-4">
                                <Fade triggerOnce={true}>
                                    <div className="audit-design-icondiv3">
                                        <img src={auditdesignicon1} alt="" />
                                    </div>
                                </Fade>
                                <Fade triggerOnce={true}>
                                    <p className="audit-design-text3">
                                        Subscribe to a plan & submit as many requests and designs as you’d like.
                                    </p>
                                </Fade>
                            </div>
                            <div className="col-lg-4">
                                <Fade triggerOnce={true}>
                                    <div className="audit-design-icondiv3">
                                        <img src={auditdesignicon2} alt="" />
                                    </div>
                                </Fade>
                                <Fade triggerOnce={true}>
                                    <p className="audit-design-text3">
                                        Receive solutions and designs within two business days
                                    </p>
                                </Fade>
                            </div>
                            <div className="col-lg-4">
                                <Fade triggerOnce={true}>
                                    <div className="audit-design-icondiv3">
                                        <img src={auditdesignicon3} alt="" />
                                    </div>
                                </Fade>
                                <Fade triggerOnce={true}>
                                    <p className="audit-design-text3">
                                        We revise and continue the work until your 100% satisfied.
                                    </p>
                                </Fade>
                            </div>

                        </div>
                    </div>
                </div>
            </div>






































            <div className='container-fluid home-faqs-div1' id='faqs'>
                <div className='container'>
                    <div className="home-faqs-text">
                        <h1>FAQs (Frequently Asked Questions)</h1>
                    </div>

                    <div>
                        <div className="home-faq-div2">
                            <div className='row'>
                                {faqs.map((faq) => {
                                    return (
                                        <FAQs
                                            question={faq.question}
                                            answer={faq.answer}
                                            answer2={faq.answer2}
                                            key={faq.id}
                                        />
                                    );
                                })}
                            </div>
                        </div>
                    </div>

                </div>

            </div>


























            <div className='container-fluid home-zoom-div1'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-lg-5'>
                            <div>
                                <Fade cascade damping={0.2} triggerOnce={true}>
                                    <div className='home-zoom-text11'>
                                        <img src={zoomimg1} alt="" />
                                        <p>My Bon Bon listing isn't  converting! Can you do  a listing Audit for me?</p>
                                    </div>

                                    <div className='home-zoom-text22'>
                                        <img src={zoomimg2} alt="" />
                                        <p>Or course, I will review
                                            and audit this listing, and come back with upgraded suggestions  to increase conversion!</p>
                                    </div>
                                </Fade>
                            </div>
                        </div>
                        <div className='col-lg-7'>
                            <div className='home-zoom-text33 '>
                                <Fade triggerOnce={true}>
                                    <h1>EMAIL & ZOOM COMMUNICATION</h1>
                                </Fade>
                                <Fade triggerOnce={true}>
                                    <p>Our refined yet straightforward platform provides all the tools necessary for submitting, tracking, and communicating about your requests, enabling you to oversee them from start to
                                        finish in a unified interface.</p>
                                </Fade>
                            </div>

                        </div>
                    </div>
                </div>
            </div>













            <Navbar2 ></Navbar2>


        </div>
    );
}

export default Home;


































// <div className="container-fluid pl-0 pr-0 home-reviews-div1">
//     <div className="">
//         <Marquee>

//             <div className="home-reviews-card-maindiv1">
//                 <div className="home-reviews-card-div2">
//                     <img src={reviewpic3} className="review-svg1" alt="" />
//                     <div className="home-reviews-img-div1 ">
//                         <div>
//                             <img src={reviewpic1} alt="" />
//                         </div>
//                         <div>
//                             <img src={reviewpic2} alt="" />
//                             <p>Joe Barbar</p>
//                         </div>
//                     </div>

//                     <h1>Unmatched Social  <br className="d-md-block d-none" />
//                         Media Excellence</h1>
//                     <p>Amazon listing optimization is the <br className="d-md-block d-none" /> cornerstone to selling success,  <br className="d-md-block d-none" /> improving everything from search  <br className="d-md-block d-none" /> rankings to traffic to conversions.</p>
//                 </div>
//             </div>




//             <div className="home-reviews-card-maindiv1">
//                 <div className="home-reviews-card-div2">
//                     <img src={reviewpic3} className="review-svg1" alt="" />
//                     <div className="home-reviews-img-div1">
//                         <div>
//                             <img src={reviewpic1} alt="" />
//                         </div>
//                         <div>
//                             <img src={reviewpic2} alt="" />
//                             <p>Joe Barbar</p>
//                         </div>
//                     </div>

//                     <h1>Unmatched Social  <br className="d-md-block d-none" />
//                         Media Excellence</h1>
//                     <p>Amazon listing optimization is the <br className="d-md-block d-none" /> cornerstone to selling success,  <br className="d-md-block d-none" /> improving everything from search  <br className="d-md-block d-none" /> rankings to traffic to conversions.</p>
//                 </div>
//             </div>



//             <div className="home-reviews-card-maindiv1">
//                 <div className="home-reviews-card-div2">
//                     <img src={reviewpic3} className="review-svg1" alt="" />
//                     <div className="home-reviews-img-div1">
//                         <div>
//                             <img src={reviewpic1} alt="" />
//                         </div>
//                         <div>
//                             <img src={reviewpic2} alt="" />
//                             <p>Joe Barbar</p>
//                         </div>
//                     </div>

//                     <h1>Unmatched Social  <br className="d-md-block d-none" />
//                         Media Excellence</h1>
//                     <p>Amazon listing optimization is the <br className="d-md-block d-none" /> cornerstone to selling success,  <br className="d-md-block d-none" /> improving everything from search  <br className="d-md-block d-none" /> rankings to traffic to conversions.</p>
//                 </div>
//             </div>


//             <div className="home-reviews-card-maindiv1">
//                 <div className="home-reviews-card-div2">
//                     <img src={reviewpic3} className="review-svg1" alt="" />
//                     <div className="home-reviews-img-div1">
//                         <div>
//                             <img src={reviewpic1} alt="" />
//                         </div>
//                         <div>
//                             <img src={reviewpic2} alt="" />
//                             <p>Joe Barbar</p>
//                         </div>
//                     </div>

//                     <h1>Unmatched Social  <br className="d-md-block d-none" />
//                         Media Excellence</h1>
//                     <p>Amazon listing optimization is the <br className="d-md-block d-none" /> cornerstone to selling success,  <br className="d-md-block d-none" /> improving everything from search  <br className="d-md-block d-none" /> rankings to traffic to conversions.</p>
//                 </div>
//             </div>

//         </Marquee>
//     </div>
// </div>

