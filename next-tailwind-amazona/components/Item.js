import Image from 'next/image'
import React from 'react'

const Item = ({image,name,price,brand}) => {
  return (
    <div className=' flex flex-col items-center rounded-md  shadow-md'>
        <Image src={image} width={300} height={320} alt={name} className=" rounded-t-md"/>

        <div className=' flex flex-col justify-center items-center gap-y-1 my-5'>
            <h1 className=' text-xl font-[400]'>{name}</h1>
            <h1 className=' text-xl font-[400]'>{brand}</h1>
            <h1 className=' text-xl font-[400]'>${price}</h1>
            <button className=' text-xl font-normal px-3 py-2 bg-amber-300 rounded-md hover:bg-amber-400  '>Add to cart</button>
        </div>
    </div>
  )
}

export default Item
