import React from 'react'
import Phone from '../assets/Vector (1).svg'
import Mail from '../assets/mail.svg'
import Pin from '../assets/map-pin (1).svg'
const Header = () => {
  return (
  <div className="hidden sm:flex justify-between items-center w-full max-w-6xl mx-auto p-2 font-semibold">
  {/* Left Section */}
  <div className="flex items-center space-x-2">
    <img src={Phone}/>
    <span>+379 871-8371</span>
    <img src={Mail}/>
    <span>rgarton@outlook.com</span>
  </div>

  {/* Right Section */}
  <div className="flex items-center space-x-2">
    <img src={Pin}/>
    <span>8592 Fairground St. Tallahassee, FL 32303</span>
  </div>
</div>


  )
}

export default Header