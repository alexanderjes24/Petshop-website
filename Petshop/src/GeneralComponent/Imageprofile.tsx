import React from 'react'


type ImageProps={
    imgSrc: string
    name?: string
    seller?:string
}
const Imageprofile = (props:ImageProps) => {
  return (
    <div className='px-2 py-10'>
        <img src={props.imgSrc}></img>
        <div className='text-center py-5'>
        <p className='font-bold'>{props.name}</p>
        <p>{props.seller}</p>
        </div>
    </div>
  )
}

export default Imageprofile