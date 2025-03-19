
// modeling

const { default: mongoose } = require("mongoose");

const productSchema = new mongoose.Schema({

  title:String,
  price:Number,
  image:String,
  description:String
})

export default mongoose.model.Product || mongoose.model("Product",productSchema)