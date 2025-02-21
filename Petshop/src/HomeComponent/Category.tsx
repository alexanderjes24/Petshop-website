import React from 'react'
import Arrow1 from '../assets/Icon1.svg'
import Arrow2 from '../assets/Icon2.svg'
import Accessories from '../assets/Img (11).svg'
import Food from '../assets/Img (12).svg'
import Furniture from '../assets/Img (13).svg'
import Bags from '../assets/Img (14).svg'
const Category = () => {
  return (
    <div className='w-full max-w-6xl mx-auto py-5'>
    <div className='flex justify-between py-4 flex-wrap sm:flex-nowrap sm:items-center'>
    <div className='w-full text-center sm:text-left'>
        <h1 className='text-3xl font-bold pb-5'>Browse by category</h1>
    </div>
    <div className='flex gap-x-10 items-center justify-center w-full sm:w-auto mt-4 sm:mt-0'>
        <img src={Arrow2} className='w-8 h-8' />
        <img src={Arrow1} className='w-8 h-8' />
    </div>
    </div>
    <div className="grid grid-cols-1 px-3 sm:px-0 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
    {[
        { title: "Accessories", products: 84, img: Accessories },
        { title: "Food", products: 64, img: Food },
        { title: "Furniture", products: 22, img: Furniture },
        { title: "Bags", products: 16, img: Bags },
    ].map((item, index) => (
        <div key={index} className="bg-gray-100 rounded-2xl overflow-hidden">
        <img src={item.img} alt={item.title} className="w-full h-40 object-cover" />
        <div className="p-4">
            <div className="flex justify-between items-center">
            <h2 className="text-lg font-bold">{item.title}</h2>
            <span className="text-orange-500 text-xl">→</span>
            </div>
            <p className="text-gray-500 text-sm">{item.products} products</p>
        </div>
        </div>
    ))}
    </div>
</div>

  )
}

export default Category