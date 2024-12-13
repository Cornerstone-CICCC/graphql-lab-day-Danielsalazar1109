import orderController from "../controllers/order.controller"
import customerController from "../controllers/customer.controller"
import productController from "../controllers/product.controller"
import { IProduct } from "../types/product"
import { IOrder } from "../types/order"
import { ICustomer } from "../types/customer"


// Finish the resolvers
export const resolvers = {
  Query: {
    products: async () => await productController.getProducts(),
    customers: async () => await customerController.getCustomers(),
    orders: async () => await orderController.getOrders(),
    getProductById: async(_:unknown,{ productId }:{productId: string}) => { await productController.getProductById(productId)},
    getCustomerById: async(_:unknown,{ customerId }:{ customerId: string}) => { await customerController.getCustomerById(customerId)},
  },
  Product: {
    customers: async(parent:{ id:string }) => {
      await customerController.getCustomerById
    }
  },
  Customer: {
    products: async(parent:{ id:string }) => {
      await productController.getProductById
    }
  },
  Order: {
    product: async(parent:{ id:string }) => {
      await productController.getProductById
    },
    customer: async(parent:{ id:string }) => {
      await customerController.getCustomerById
    }
  },
  Mutation: {
    addProduct: async (_:unknown,{ productName,  productPrice}: Omit<IProduct,'id'>)=>
      await productController.createProduct({ productName,  productPrice }),
    editProduct: async(_:unknown,{ id,productName,  productPrice }:IProduct ) => await productController.updateProduct( id, { productName,  productPrice }),
    removeProduct: async (_: unknown, { id }: { id: string }) =>
      await productController.deleteProduct(id),

    addCustomer: async (_:unknown,{ firstName,lastName,email }: Omit<ICustomer,'id'>)=>
      await customerController.createCustomer({ firstName,lastName,email}),
    editCustomer: async(_:unknown,{ id,firstName,lastName,email }:ICustomer ) => await customerController.updateCustomer( id, { firstName,lastName,email }),
    removeCustomer: async (_: unknown, { id }: { id: string }) =>
      await customerController.deleteCustomer(id),

    addOrder: async (_:unknown,{ productId,customerId }: Omit<IOrder,'id'>)=>
      await orderController.createOrder({ productId,customerId }),
    editOrder: async(_:unknown,{ id,productId,customerId }:IOrder ) => await orderController.updateOrder( id, { productId,customerId }),
    removeOrder: async (_: unknown, { id }: { id: string }) =>
      await orderController.deleteOrder(id)
  }
}
