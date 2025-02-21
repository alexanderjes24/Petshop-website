import React from 'react'
import Image1 from '../assets/Img (1).svg'
import Image2 from '../assets/Img (2).svg'

const ImageComponent = () => {
  return (
    <div className="flex justify-center gap-5 py-10">
      <img src={Image1} className="w-30 xl:w-140" />
      <img src={Image2} className="w-30 xl:w-140 " />
    </div>
  )
}

export default ImageComponent
