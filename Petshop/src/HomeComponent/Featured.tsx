import React from 'react'
import DogFood1 from '../assets/Img (16).svg'
import DogFood2 from '../assets/Img (17).svg'
import DogFood3 from '../assets/Img (18).svg'
import heart from '../assets/heart.svg'
const Featured= () => {
  return (
    <div className='py-5'>
    <div>
        <h1 className='text-center py-10 text-4xl font-semibold'>Feature Products</h1>
    </div>
    <div className="grid grid-cols-1 px-3 md:px-0 md:grid-cols-3 gap-6">
    {[
        { title: "Premium Dog Food", products:'$19.99', img: DogFood1},
        { title: "Premium Cat Food", products: '$19.99', img: DogFood2 },
        { title: "Premium Cat Food", products: '$19.99', img: DogFood3 },
    ].map((item, index) => (
        <div key={index} className="bg-white rounded-2xl border-2 border-gray-50 overflow-hidden">
        <img src={item.img} alt={item.title} className="w-fullobject-cover" />
        <div className="p-4">
            <div className="flex justify-between items-center">
            <h2 className="text-lg font-bold">{item.title}</h2>
            <img src={heart}/>
            </div>
            <p className="text-gray-500 text-sm">{item.products} products</p>
        </div>
        </div>
    ))}
    </div>
    </div>
  )
}

export default Featured