
const uri=process.env.MONGODB_URI

if(!uri) throw new Error(" check database config ")


let isConnected = false


export async function connectedToDatabase() {

  if(isConnected) return console.log("db already has connected")

  try{
    await mongoose.connect(uri,{dbName:"test"})
    isConnected=true
    console.log("successful connect to db")
  }
  catch(error){
    console.error(error)
    process.exit(1)
  }
  
}

