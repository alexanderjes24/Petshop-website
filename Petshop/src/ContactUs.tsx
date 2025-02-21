import React from 'react'
import Header from './GeneralComponent/Header'
import NavBar from './GeneralComponent/NavBar'
import Herobanner from './GeneralComponent/Herobanner'
import Footer from './GeneralComponent/Footer'
import Imageprofile from './GeneralComponent/Imageprofile'
import Map from './assets/Map+ pin.svg'
import Banner from './assets/Frame 421 (2).svg'
import icon from './assets/Icon+bg (1).svg'
import icon2 from './assets/Icon+bg (2).svg'
import icon3 from './assets/Icon+bg (3).svg'
import icon4 from './assets/Icon+bg (4).svg'
const ContactUs = () => {
  return (
    <div className='text-center items-center md:text-start'>
    <div className='bg-gray-50 pb-15'>
        <Header/>
        <NavBar/>
        <Herobanner title='A pet shop with'
        title2='everything you need'
        description='At et vehicula sodales est proin turpis pellentesque sinulla a aliquam amet rhoncus quisque eget sit'
        buttonText='Shop Now'
        showButton={true}
        image={Banner}/>
    </div>
    <div className='w-full max-w-6xl mx-auto'>
    <div className="max-w-6xl mx-auto px-4 py-10 grid grid-cols-1 md:grid-cols-2 gap-10">
      {/* Contact Form */}
      <div className="bg-gray-100 p-6 rounded-lg">
        <form className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                First Name
              </label>
              <input
                type="text"
                placeholder="First name"
                className="mt-1 p-2 w-full bg-white rounded-md focus:ring-2 focus:ring-orange-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Last Name
              </label>
              <input
                type="text"
                placeholder="Last name"
                className="mt-1 p-2 w-full bg-white rounded-md focus:ring-2 focus:ring-orange-500"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Email Address
            </label>
            <input
              type="email"
              placeholder="E-mail address"
              className="mt-1 p-2 w-full bg-white rounded-md focus:ring-2 focus:ring-orange-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Message
            </label>
            <textarea
              placeholder="Your message..."
              className="mt-1 p-2 w-full bg-white rounded-md focus:ring-2 focus:ring-orange-500 h-28"
            />
          </div>

          <button className="px-10 bg-orange-500 text-white py-2 rounded-md hover:bg-orange-600 transition">
            Send Message
          </button>
        </form>
      </div>

      {/* Contact Details */}
      <div className="space-y-4 font-semibold">
        <h2 className="text-2xl font-bold">Feel free to contact us</h2>
        <p className="text-gray-600">
          At et vehicula sodales est proin turpis pellentesque sinulla a
          aliquam amet rhoncus quisque eget sit. Sociis blandit et pellentesque
          aliquet at quisque tortor lacinia nullam.
        </p>

        <div className="space-y-3">
          <div className="flex items-center space-x-3">
            <img src={icon}/>
            <p className="text-gray-800">
              8592 Fairground St. Tallahassee, FL 32303
            </p>
          </div>

          <div className="flex items-center space-x-3">
          <img src={icon2}/>
            <p className="text-gray-800">rgarton@outlook.com</p>
          </div>

          <div className="flex items-center space-x-3">
          <img src={icon3}/>
            <p className="text-gray-800">+775 378-6348</p>
          </div>

          <div className="flex items-center space-x-3">
          <img src={icon4}/>
            <p className="text-gray-800">Mon - Fri: 10AM - 10PM</p>
          </div>
        </div>
      </div>
    </div>
    <Imageprofile 
    imgSrc={Map}/>
    </div>
    <div className='bg-gray-50'>
    <Footer/>
    </div>
    </div>
  )
}

export default ContactUs