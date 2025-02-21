import React from 'react'
import Header from './GeneralComponent/Header'
import NavBar from './GeneralComponent/NavBar'
import Herobanner from './GeneralComponent/Herobanner'
import Shopbypet from './HomeComponent/Shopbypet'
import Footer from './GeneralComponent/Footer'
import ProductPage from './ShopComponent/ProductPage'
import ImageComponent from './ShopComponent/ImageComponent'
import Banner from './assets/Frame 421.svg'
const Shop = () => {
  return (
    <div className='text-center items-center md:text-start'>
    <div className='bg-gray-50 '>
        <Header/>
        <NavBar/>
        <Herobanner title='The friendly and'
        title2='caring small pet store'
        description='At et vehicula sodales est proin turpis pellentesque sinulla a aliquam amet rhoncus quisque eget sit'
        showButton={false}
        image={Banner}/>
    </div>
    <div className='w-full max-w-6xl mx-auto'>
      <Shopbypet/>
      <ProductPage/>
      <ImageComponent/>
    </div>
    <div className='bg-gray-50'>
    <Footer/>
    </div>
    </div>
  )
}

export default Shop