import { Product } from "../models/product.model"
import { IProduct } from "../types/product"

const getProducts = async () => {
  const products = await Product.find()
  return products
}

const createProduct = async(data: Omit<IProduct,'id'>) => {
  const product = await new Product(data)
  return await product.save()
}

const getProductById = async(id:string) =>{
  const product = await Product.findById(id)
  return product
}

const updateProduct= async(id:string, data: Partial<IProduct>) => {
  const product = await Product.findByIdAndUpdate(id,data,{ new: true })
  return product 
}


const deleteProduct = async(id:string) => {
  const product = await Product.findByIdAndDelete(id)
  return product
}


export default {
  getProducts,
  createProduct,
  getProductById,
  updateProduct,
  deleteProduct
}