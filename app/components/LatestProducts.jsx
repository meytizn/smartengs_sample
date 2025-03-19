import React from 'react'
import { v4 as uuidv4 } from 'uuid';
import Image from 'next/image'
import Link from 'next/link';




export default async function LatestProducts() {

//using dynamic apis in api/products/route.js
  let response= await fetch("http://192.168.1.6:3000/api/products")
  let products= await response.json()


  // static api commited 
  // let products=[
  //   {id:1,title:"tv",price:3000,image: "/images/tv.jpg", description:"samsung tv is the best"},
  //   {id:2,title:"xbox",price:8000,image: "/images/tv.jpg", description:"xbox is the best"},
  //   {id:3,title:"Iphone16",price:12000,image:"/images/tv.jpg" , description:"Iphone16 is the best"},
  //   {id:4,title:"Laptop",price:9000,image:"/images/tv.jpg" , description:"Laptop is the best"},
    
  // ]

  
  return (
    <>
    <div className='bg-red-800 text-white my-1 flex flex-row justify-center items-center content-center w-[100%] h-[50px] text-center text-[20px]'>Latest Products</div>
    
    <div className='bg-red-800 p-5 text-white flex flex-row justify-around gap-5 md:gap-2  md:justify-center items-center content-center flex-wrap w-[100%]  text-center text-[20px]'>
      
      {products.map((product,index)=>(
        
        <div  className='w-[45%] md:w-[20%] bg-white text-black rounded-md  ' key={index}>

          
        <div className='w-[100%]'>
        <Link href={`products/${product.id}`}>
        <Image className='m-auto rounded-md' src={product.image} width={200} height={200} alt={product.title}/>
        </Link>
        </div>

        <div className='w-[100%] text-center'>{product.title}</div>

        <div className='flex flex-row justify-start w-[100%] text-center'>
        <div className='bg-blue-500 w-[50%] '>{product.price}</div>
        <div  className='bg-green-300 text-white text-[20px] w-[50%] '><button>
          
        <svg className="   text-white dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="none" viewBox="0 0 24 24">
  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M5 4h1.5L9 16m0 0h8m-8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm-8.5-3h9.25L19 7H7.312"/>
</svg>

          
          </button></div>
        </div>


        
        </div>
        
        ))}



      </div>
    
   
    </>
  )
}
