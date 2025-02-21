import React from 'react'
import Logo from '../assets/Group.svg';
import Payment from '../assets/payment-icons 1.svg'
import Social from '../assets/Social icons.svg'

const Footer = () => {
    return (
        <footer className="bg-gray-50 py-20 w-full max-w-6xl mx-auto font-semibold">
          <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row md:justify-between md:items-start gap-8 text-gray-700">
            
            {/* Left Section - Pet Shop Info */}
            <div className="md:w-1/4">
              <h2 className="text-xl font-bold flex items-center">
                <img src={Logo}/> Pet Shop
              </h2>
              <p className="mt-2 text-sm">
                Sed viverra eget fames sit varius. Pellentesque mattis libero viverra dictumst ornare sed justo convallis vitae.
              </p>
              {/* Social Icons */}
              <div className="flex space-x-4 mt-4 text-xl">
               <img src={Social}/>
              </div>
            </div>
    
            {/* Middle Links (Wrapped in Flex) */}
            <div className="flex flex-wrap justify-between md:w-2/4 gap-8">
              <div>
                <h3 className="font-bold mb-2">Company</h3>
                <ul className="space-y-1 text-sm">
                  <li>About Us</li>
                  <li>Blog</li>
                  <li>Gift Cards</li>
                  <li>Careers</li>
                </ul>
              </div>
    
              <div>
                <h3 className="font-bold mb-2">Useful Links</h3>
                <ul className="space-y-1 text-sm">
                  <li>New products</li>
                  <li>Best sellers</li>
                  <li>Discount</li>
                  <li>F.A.Q</li>
                </ul>
              </div>
    
              <div>
                <h3 className="font-bold mb-2">Customer Service</h3>
                <ul className="space-y-1 text-sm">
                  <li>Contact Us</li>
                  <li>Shipping</li>
                  <li>Returns</li>
                  <li>Order tracking</li>
                </ul>
              </div>
            </div>
    
            {/* Store Details */}
            <div className="md:w-1/4">
              <h3 className="font-bold mb-2">Store</h3>
              <p className="text-sm">8592 Fairground St.<br />Tallahassee, FL 32303</p>
              <p className="text-sm mt-2">+775 378-6348</p>
              <p className="text-sm">rgarton@outlook.com</p>
            </div>
    
          </div>
    
          {/* Footer Bottom */}
          <div className="mt-10 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500 px-6">
            <p>© Copyright Pet Shop 2024. Design by Figma.guru</p>
            {/* Payment Icons */}
            <div className="flex mt-4 md:mt-0">
              <img src={Payment}/>
            </div>
          </div>
        </footer>
  )
}

export default Footer