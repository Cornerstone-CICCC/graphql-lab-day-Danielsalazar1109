import { Customer } from "../models/customer.model"
import { ICustomer } from "../types/customer"

const getCustomers = async () => {
  const customers = await Customer.find()
  return customers
}

const createCustomer = async(data: Omit<ICustomer,'id'>) => {
  const customer = await new Customer(data)
  return await customer.save()
}

const getCustomerById = async(id:string) =>{
  const customer = await Customer.findById(id)
  return customer
}

const updateCustomer = async(id:string, data: Partial<ICustomer>) => {
  const customer = await Customer.findByIdAndUpdate(id,data,{ new: true })
  return customer 
}


const deleteCustomer = async(id:string) => {
  const customer = await Customer.findByIdAndDelete(id)
  return customer
}


export default {
  getCustomers,
  createCustomer,
  getCustomerById,
  updateCustomer,
  deleteCustomer 
}