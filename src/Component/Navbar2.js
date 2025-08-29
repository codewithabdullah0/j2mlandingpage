import React, {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'
import './Navbar2.css'
import logo1 from '../Image/Group 1000009192 (2).png'
import { Fade } from "react-awesome-reveal";
import { HashLink } from "react-router-hash-link";   


function Navbar2() {

  // const [nav, setnav] = useState(false)

  // const navfun = () =>{
  //   if(window.scrollY >= 50){
  //     setnav(true)
  //   }
  //   else{
  //     setnav(false)
  //   }
  // }

  // window.addEventListener('scroll', navfun)



  const [nav2, setnav2] = useState(false)

  const animationj2m = () => {
    console.log(window.scrollY)
    if (window.scrollY >= 15400) {
      setnav2(true)
    }
    else {
      setnav2(false)
    }


  }

  window.addEventListener('scroll', animationj2m)

  return (
    // className={nav ? 'd-md-block d-none navbar-main-div1' : 'd-md-block d-none navbar-main-div2'}
    <div clssName='d-md-block d-none'>
      {/* <Fade> */}
      <div className='container-fluid d-md-block d-none'>
        <div className='container'>
          <div className={!nav2 ? 'navbar2-div' : 'last-navbar2-div'}>
            <div className='nav2-logo1'>
              <HashLink
                class=""
                to="/#top"
                spy={true}
                smooth={true}
                offset={-100}
                duration={600}
              >
                <img src={logo1} />
              </HashLink>
             
            </div>


            <div className=' navbar22-text-div1'>
              <ul class="navbar-nav">
                <li class="nav-item">
                  <HashLink
                    class="nav-link navbar22-text1"
                    to="/#service"
                    spy={true}
                    smooth={true}
                    offset={-100}
                    duration={600}
                  >
                    Services
                  </HashLink>
                </li>

                <li class="nav-item">
                  <HashLink  
                  class="nav-link navbar22-text1"
                    to="/#benefits"
                    spy={true}
                    smooth={true}
                    offset={-100}
                    duration={600}>
                    Benefits
                  </HashLink>
                </li>

                <li class="nav-item">
                  <HashLink  
                  class="nav-link navbar22-text1"
                    to="/#top"
                    spy={true}
                    smooth={true}
                    offset={-100}
                    duration={600}>
                    AMZ Marketing
                  </HashLink>
                </li>

                <li class="nav-item">
                  <HashLink  
                  class="nav-link navbar22-text1"
                    to="/#pricingplan"
                    spy={true}
                    smooth={true}
                    offset={-100}
                    duration={600}>
                    Pricing
                  </HashLink>
                </li>

                <li class="nav-item">
                  <HashLink  
                  class="nav-link navbar22-text1"
                    to="/#faqs"
                    spy={true}
                    smooth={true}
                    offset={-100}
                    duration={600}>
                   Faq's
                  </HashLink>
                </li>
              </ul>
            </div>

            <div className='nav2-btn11'>
              <a href="">
                <div>Book a meeting</div>
              </a>
            </div>

          </div>
        </div>
      </div>

      {/* </Fade> */}
    </div>
  )
}

export default Navbar2
