import React from 'react'
import Arrow1 from '../assets/Icon1.svg'
import Arrow2 from '../assets/Icon2.svg'
import Pet1 from '../assets/pet1.svg'
import Pet2 from '../assets/pet2.svg'
import Pet3 from '../assets/pet3.svg'
import Pet4 from '../assets/pet4.svg'
import Pet5 from '../assets/pet5.svg'

const Shopbypet = () => {
  return (
    <div>
        <div className='flex justify-between py-4 flex-wrap sm:flex-nowrap sm:items-center'>
        <div className='w-full text-center sm:text-left'>
            <h1 className='text-3xl font-bold pb-5'>Shop by Pet</h1>
        </div>
        <div className='flex gap-x-10 items-center justify-center w-full sm:w-auto mt-4 sm:mt-0'>
            <img src={Arrow2} className='w-8 h-8' />
            <img src={Arrow1} className='w-8 h-8' />
        </div>
        </div>
        <div className='flex justify-evenly pb-10 flex-wrap'>
            <img src={Pet1} className='max-w-xs' />
            <img src={Pet2} className='max-w-xs' />
            <img src={Pet3} className='max-w-xs' />
            <img src={Pet4} className='max-w-xs' />
            <img src={Pet5} className='max-w-xs' />

        </div>
    
    </div>
  )
}

export default Shopbypet