import React from 'react'
import Header from './GeneralComponent/Header'
import NavBar from './GeneralComponent/NavBar'
import Herobanner from './GeneralComponent/Herobanner'
import Category from './HomeComponent/Category'
import Featured from './HomeComponent/Featured'
import Footer from './GeneralComponent/Footer'
import Logbanner from './HomeComponent/Logbanner'
import Bestselling from './GeneralComponent/Bestselling'
import Shopbypet from './HomeComponent/Shopbypet'
import News from './HomeComponent/News'
import Banner from './assets/Imgs+ shapes+ pattern.svg'
import Banner2 from './assets/Shape+ vector +img.svg'
import Product1 from './assets/Img (19).svg'
import Product2 from './assets/Img (20).svg'
import Product3 from './assets/Img (21).svg'
import Product4 from './assets/Img (22).svg'
import Product5 from './assets/Img (23).svg'
import Product6 from './assets/Img (24).svg'
import Product7 from './assets/Img (25).svg'
import Product8 from './assets/Img (26).svg'
const productsData=[
        { title: "Cat Bowl", products: 20.99, img: Product1 },
        { title: "Cat Bowk", products: 49.99, img: Product2 },
        { title: "Dog Leash", products: 9.99, img: Product3 },
        { title: "Premium Cat Food", products: 19.99, img: Product4 },
        { title: "Dog Bowl", products: 19.99, img: Product5 },
        { title: "Premium Dog Food", products: 29.99, img: Product6 },
        { title: "Dog Bed", products: 49.99, img: Product7 },
        { title: "Bags", products: 19.99, img: Product8 },
]

const Home = () => {
  return (
    <div className='text-center items-center md:text-start'>
    <div className='bg-gray-50'>
        <Header/>
        <NavBar/>
        <Herobanner title='A pet shop with'
        title2='everything you need'
        description='Sociis blandit et pellentesque aliquet at quisque tortor lacinia nullam. Mattis aenean scelerisque dui libero'
        buttonText='Shop Now'
        showButton={true}
        image={Banner}/>
    </div>
    <div className='w-full max-w-6xl mx-auto'>
      <Category/>
      <Featured/>
      <div className='bg-gray-50 py-5'>
      <Herobanner title='The smarter way to shop for your pet' 
      description='Lorem ipsum dolor sit amet consectetur. At et vehicula sodales est proin turpis pellentesque sinulla a aliquam amet rhoncus quisque eget sit'
      position='right'
      buttonText='Learn More'
      image={Banner2}
      showButton={true}/>
      </div>
      <Logbanner/>
      <Bestselling heading="Best Selling Products" items={productsData}/>
      <Shopbypet/>
      <News/>
    </div>
    <div className='bg-gray-50'>
    <Footer/>
    </div>
    </div>
  )
}

export default Home