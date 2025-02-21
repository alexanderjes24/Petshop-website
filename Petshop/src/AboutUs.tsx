import React from 'react'
import Header from './GeneralComponent/Header'
import NavBar from './GeneralComponent/NavBar'
import Herobanner from './GeneralComponent/Herobanner'
import Footer from './GeneralComponent/Footer'
import StatsSection from './StatsSection'
import Image from './assets/Img (3).svg'
import Signature from './assets/OnlineSignatures 1.svg'
import Imageprofile from './GeneralComponent/Imageprofile'
import profile from './assets/Img (4).svg'
import profile2 from './assets/Img (5).svg'
import profile3 from './assets/Img (6).svg'
import Instagram from './assets/Img (7).svg'
import Instagram2 from './assets/Img (8).svg'
import Instagram3 from './assets/Img (9).svg'
import Instagram4 from './assets/Img (10).svg'
import video from './assets/Img+ button.svg'
import Stars from './assets/Stars.svg'
import Arrow1 from './assets/Icon1.svg'
import Arrow2 from './assets/Icon2.svg'
import Review from './assets/Shapes+ pattern(paws)+img.svg'
import Banner from './assets/Frame 421 (1).svg'
const AboutUs = () => {
  return (
    <>
    <div className='bg-gray-50 pb-15'>
        <Header/>
        <NavBar/>
        <Herobanner title='If animals could talk, '
        title2='they’d talk about us!'
        description='At et vehicula sodales est proin turpis pellentesque sinulla a aliquam amet rhoncus quisque eget sit'
        buttonText='Shop Now'
        showButton={true}
        image={Banner}/>
    </div>
    <div className='w-full max-w-6xl mx-auto'>
      <h1 className='text-4xl font-bold py-10 text-center md:text-start'>About our store</h1>
      <div className="flex flex-col px-4 md:flex-row gap-x-30 md:px-0">
      <StatsSection
      description='At et vehicula sodales est proin turpis pellentesque sinulla a aliquam amet rhoncus quisque eget sit. Sociis blandit et pellentesque aliquet at quisque tortor lacinia nullam. Mattis aenean scelerisque dui libero cras arcu in egestas sagittis.'
      stats={[
        { value: '2k+', label: 'Happy Clients' },
        { value: '72', label: 'Brands' },
      ]}/>
      <StatsSection
      description='Aliquet ultrices risus dolor gravida. Faucibus sodales semper a magnis sapien viverra purus sed tortor. Amet risus blandit nunc odio rutrum. Adipiscing tincidunt imperdiet at cursus ipsum vulputate pharetra. Tellus nulla commodo ut ut auctor orci blandit at elit'
      stats={[
        { value: '1.8k+', label: 'Products' },
        { value: '28', label: 'Years in business' },
      ]}/>
      </div>
      <div className='px-10 justify-center md:flex gap-x-30 py-10 md:px-0'>
      <img src={Image} className='w-120'/>
      <div>
        <h1 className='text-3xl font-bold pt-5'>Taylor Joshua</h1>
        <p className='pb-8 text-gray-500 font-semibold'>Founder</p>
        <p className='italic'> Nisl nunc vitae integer ridiculus ultrices quam a scelerisque est. Sollicitudin volutpat blandit maecenas ornare dictum tempor. Amet sem non rutrum et duis. Id nisi ac vitae enim neque sapien.
        Eu arcu consectetur etiam bibendum fermentum sed lobortis fringilla imperdiet. Aliquet ultrices risus dolor gravida. Faucibus sodales semper a magnis sapien viverra purus sed tortor. Amet risus blandit nunc odio rutrum</p>
        <img src={Signature}/>
      </div>
      </div>
      <div>
        <h1 className='text-4xl font-bold text-center'>Our Team</h1>
        <div className='flex'>
          <Imageprofile
          imgSrc={profile}
          name="Caroline Washington"
          seller='Seller'/>
          <Imageprofile
          imgSrc={profile2}
          name="Gerald Ferguson"
          seller='Seller'/>
          <Imageprofile
          imgSrc={profile3}
          name="Averi Maddox"
          seller='Seller'/>
        </div>
      </div>
      <div className='flex flex-col-reverse px-5 md:px-0 md:flex md:flex-row gap-x-10 '>
        <div>
          <h1 className='text-amber-500 font-bold'>Testimonials</h1>
          <h1 className='text-3xl pb-5 font-bold'>What people say about us</h1>
          <img src={Stars}/>
          <p className='text-xl'>Morbi viverra eleifend in cras orci a leo tellus. Nunc purus adipiscing diam aliquet lorem nunc. Ipsum euismod risus amet eget non. Pulvinar condimentum ultricies tellus a non pellentesque odio pellentesque blandit. Aliquet et massa eget vitae justo tellus donec ac enim. Rhoncus adipiscing cursus</p>
          <div className='flex justify-between py-10'>
            <div>
              <h1 className='font-bold'>Gerald Ferguson</h1>
              <p>Customer</p>
            </div>
            <div className='flex gap-x-10 items-center justify-center w-full sm:w-auto mt-4 sm:mt-0'>
                <img src={Arrow2} className='w-8 h-8' />
                <img src={Arrow1} className='w-8 h-8' />
            </div>
          </div>
        </div>
        <div>
          <img src={Review} className='w-600'/>
        </div>
      </div>
      <Imageprofile
      imgSrc={video}/>
      <div>
        <h1 className='text-4xl font-bold text-center'>Follow our instagram</h1>
        <div className='flex'>
          <Imageprofile
          imgSrc={Instagram}/>
          <Imageprofile
          imgSrc={Instagram2}/>
          <Imageprofile
          imgSrc={Instagram3}/>
          <Imageprofile
          imgSrc={Instagram4}/>
        </div>
      </div>
    </div>

    <div className='bg-gray-50'>
    <Footer/>
    </div>
    </>
  )
}

export default AboutUs