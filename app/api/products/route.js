// Making and routing api 
import { connectedToDatabase } from "@/lib/mongodb";
import Product from "@/models/Product";
import { NextResponse } from "next/server";

export async function GET(){

  try{
    await connectedToDatabase()
    const products = await Product.find({})
    return NextResponse.json(products,{status:200})
  }
  catch(error){
    return NextResponse.json({error:"error ocurred in getting products"},{status:500})
  }
} 