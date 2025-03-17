import React from 'react'
import Image from 'next/image'


export default function ProducDetail({params}) {
  const {id}=params
  let products=[
    {id:1,title:"tv",price:3000,image: "/images/tv.jpg", description:"samsung tv is the best"},
    {id:2,title:"xbox",price:8000,image: "/images/tv.jpg", description:"xbox is the best"},
    {id:3,title:"Iphone16",price:12000,image:"/images/tv.jpg" , description:"Iphone16 is the best"},
    {id:4,title:"Laptop",price:9000,image:"/images/tv.jpg" , description:"Laptop is the best"},
    
  ]

  let product = products.find((product)=>product.id==id)

  return (
    <>
    <br />
    <div className='flex flex-col md:flex-row justify-around w-[100%]  md:w-[80%] m-auto rounded-md gap-3'>

      <div className='w-[100%] md:w-[50%] '><Image className='m-auto rounded-md' src={product.image} width={300} height={200} alt={product.title}/></div>
      
      <div className='flex flex-col rounded-md bg-yellow-300 py-5 w-[100%] md:w-[50%] text-center text-[20px] md:text-[25px] gap-5 content-center '>
        <div>{product.title}</div>
        <div className='text-left px-10'>{product.description}</div>

        <div className='flex flex-row p-10'>
        <div className=' w-[50%] '>${product.price}</div>
        <div className='bg-blue-500 text-white w-[50%]'><button>add</button></div>
          
          </div>
        
        </div>
      </div>
      </>
  )
}
