import React from 'react'

export default function card() {
  let products=[
    {id:1,title:"tv",price:3000,image: "/images/tv.jpg", description:"samsung tv is the best"},
    {id:2,title:"xbox",price:8000,image: "/images/tv.jpg", description:"xbox is the best"},
    {id:3,title:"Iphone16",price:12000,image:"/images/tv.jpg" , description:"Iphone16 is the best"},
    {id:4,title:"Laptop",price:9000,image:"/images/tv.jpg" , description:"Laptop is the best"},
    
  ]
  let totalprice=0
  products.forEach((product)=>{totalprice+=Number(product.price)})
  return (
    <>
 <br />

    {products.length==0 && <div>empty</div>}    





{products.length > 0 &&<>

  <div className='flex flex-col md:flex-row justify-around w-[100%]  md:w-[80%] m-auto rounded-md gap-3'>





<div className='w-[100%] md:w-[50%] bg-blue-300 rounded-md '>
  <div className='text-[25px] text-center text-white'>your information</div>
  <form className='flex flex-col gap-2 p-5'>
    
  <input placeholder="Full-name" required  type="text" id="first_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"  />
  <input placeholder="Email" required  type="text" id="first_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"  />
  <input placeholder="City" required type="text" id="first_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"  />
  <input placeholder="Country" required type="text" id="first_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"  />
  <input placeholder="Address" required type="text" id="first_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"  />
  <input placeholder="ZipCode" required type="text" id="first_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"  />
 
  <button className="btn btn-blue bg-black hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded">
  online payment
</button>

  </form>
  </div>

 






<div className='flex flex-col p-3 rounded-md bg-green-200 w-[100%] md:w-[50%] text-center text-[15px] md:text-[20px]   '>

<table className="">
<thead>
<tr>
<th>products</th>
<th>price</th>

</tr>
</thead>
<tbody>


{products.map((product)=>(

  <tr key={product.id}>
  <td >{product.title}</td>
  <td>${product.price}</td>
  </tr>
  
  ))}


  <tr className='border bg-white h-[35px]'>
  <td>Total Price</td>
  <td>${totalprice}</td>
  </tr>

</tbody>
</table>
  
  </div>






</div>


</>}
   

      </>
  )
}
