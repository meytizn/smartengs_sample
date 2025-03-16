"use client"
import Image from "next/image";
import { useState } from "react";

export default function navbar() {
let [dlogo,setDlogo]=useState(" m15 19-7-7 7-7")
let [margin,setMarging]= useState("mx-[-500px]")
let [mobile,setMobile]=useState(false)

let navlists=[
  {id:1,title:"weblog",link:"ssss"},
  {id:2,title:"about",link:"ssss"},
  {id:3,title:"products",link:"ssss"},
  {id:4,title:"team",link:"ssss"},

]

 function mobilehandler(){
  setMobile(!mobile)
  if(mobile==true){
    return(
    setMarging("mx-[0px]"),
     setDlogo("m9 5 7 7-7 7"))

  }
  return (setMarging("mx-[-500px]"),setDlogo("m15 19-7-7 7-7") )

}

  return (
    <>
    <div className="relative flex flex-row justify-around content-center items-center  w-[100%] h-[60px] bg-red-800 text-[25px]  text-white">
      
      <div className=""> SmartEngs </div>

      <div> logo </div>


      <div className="hidden   md:flex  md:flex-row md:justify-center mdLitems-stretch md:gap-10  "> 
       
   
        {navlists.map((list,index)=>(<div key={index}>{list.title}</div>))}
        
        </div>



        <div className="md:hidden cursor-pointer  " onClick={()=>mobilehandler()} > 
        <svg  className="  text-white dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={dlogo}/>
          </svg>

          

           </div>




      </div>




{/* movile navbar */}
      <div className={`md:hidden flex flex-col  items-center gap-8 p-10 float-right w-[100%] text-center  text-white text-[25px] bg-red-800 my-1 ${margin} transition-all duration-400 `}> 
       
      {navlists.map((list,index)=>(<div key={index}>{list.title}</div>))}
        
        </div>

      </>
  )
}
