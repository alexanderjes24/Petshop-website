import React from 'react'
import Logo1 from '../assets/Logo (1).svg'
import Logo2 from '../assets/Logo (2).svg'
import Logo3 from '../assets/Logo (3).svg'
import Logo4 from '../assets/Logo (4).svg'
import Logo5 from '../assets/Logo (5).svg'

const Logbanner = () => {
  return (
    <div className='flex justify-evenly items-center py-15 flex-wrap gap-4'>
    <img src={Logo1} className='w-32 md:w-24 lg:w-28 xl:w-32' />
    <img src={Logo2} className='w-32 md:w-24 lg:w-28 xl:w-32' />
    <img src={Logo3} className='w-32 md:w-24 lg:w-28 xl:w-32' />
    <img src={Logo4} className='w-32 md:w-24 lg:w-28 xl:w-32' />
    <img src={Logo5} className='w-32 md:w-24 lg:w-28 xl:w-32' />
</div>
  )
}

export default Logbanner