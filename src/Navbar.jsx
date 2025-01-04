import React from 'react'
import './Navbar.css'
import chevron from './assets/chevron.svg';
const Navbar = () => {
  return (
    <nav className="navbar">
        <button
        onClick={() => document.body.classList.toggle('open')}
        className="burger"
      ></button>
      <h1>Cleoville</h1>

      
      <div className="dropdowns">
        <div className="dropdown">
          <button>
            Services
            <img src={chevron}/>
          </button>
          <div className="dropdown-menu">
            <button>Dynamic Qr</button>
            <button>Embedded images</button>
            <button>Dedicate Music</button>
          </div>
        </div>
        <div className="dropdown">
          <button>
            Products
            <img src={chevron} />
          </button>
          <div className="dropdown-menu">
            <button>Gifting</button>
            <button>Jewels</button>
            <button>Decors</button>
          </div>
        </div>
        <div className="dropdown">
          <button>
            Support
            <img src={chevron}/>
          </button>
          <div className="dropdown-menu">
            <button>Live Chat</button>
            <button>Send Email</button>
            <button>Request Help</button>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar