import React from 'react'
import './Navbar.css'
import logopic from "../Image/Group 1000001396 (1).svg";


function NavBar() {
  return (
    <div>
      
      <div className='container-fluid navbar-div1'>
        <div className='container'>
            <div className='d-flex justify-content-between align-items-center'>
                <div>
                    <img src={logopic} alt="" />
                </div>
                <div>
                    <a href="">
                        <div className="navbar-btn1">
                  See Plans{" "}
                  <svg
                    className="home-banner-btn-svg1"
                    xmlns="http://www.w3.org/2000/svg"
                    width="50"
                    height="50"
                    viewBox="0 0 62 62"
                    fill="none"
                  >
                    <circle cx="31" cy="31" r="31" fill="#030F17" />
                    <path
                      d="M41.5896 22C41.5896 21.122 40.8779 20.4102 39.9999 20.4102L25.6922 20.4098C24.8142 20.4098 24.1024 21.1215 24.1024 21.9995C24.1024 22.8775 24.8141 23.5893 25.6921 23.5893L38.41 23.5896L38.4097 36.3076C38.4097 37.1856 39.1214 37.8973 39.9994 37.8974C40.8774 37.8974 41.5892 37.1857 41.5892 36.3077L41.5896 22ZM23.1231 41.1239L41.1239 23.1241L38.8757 20.8758L20.8749 38.8756L23.1231 41.1239Z"
                      fill="white"
                    />
                  </svg>
                </div>
                    </a>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default NavBar
