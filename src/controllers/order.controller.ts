import { Order } from "../models/order.model"
import { IOrder } from "../types/order"

const getOrders = async () => {
  const Orders = await Order.find()
  return Orders
}

const createOrder = async(data: Omit<IOrder,'id'>) => {
  const order = await new Order(data)
  return await order.save()
}

const updateOrder= async(id:string, data: Partial<IOrder>) => {
  const order = await Order.findByIdAndUpdate(id,data,{ new: true })
  return order 
}


const deleteOrder = async(id:string) => {
  const order = await Order.findByIdAndDelete(id)
  return order
}


export default {
  getOrders,
  createOrder,
  updateOrder,
  deleteOrder
}