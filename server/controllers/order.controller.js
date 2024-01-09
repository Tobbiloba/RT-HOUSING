import { getOrderByUserId, getOrders, getOrderByProperty, createOrder, updateOrderById, getOrdersByPropertyIds, getOrderById } from "../mongodb/models/order.js";


import { random } from "../helpers/index.js";
import { getAdminUserById } from "../mongodb/models/admin.js";
import { getPropertyById } from "../mongodb/models/property.js";


const getAllOrders = async (req, res) => {
    

    try{
        const orders = await getOrders()
        return res.status(200).json(orders)
    } catch (err) {
        res.status(500).json(err.message)
    }
}



 const getUserOrder = async (req, res) => {
    const {id} = req.params;

    try{
        const orders = await getOrderByUserId(id);

        return res.status(200).json(orders)
    } catch(error) {
        return res.status(500).json(error.message)
    }
}


const getOrdersByAdmin = async (req, res) => {
    const { id } = req.params;
    console.log(id)
  
    try {
      const user = await getAdminUserById(id);
      // console.log(user)
  
      if (user) {
        const propertyIds = user.allProperties.map(property => property._id.toString());
        // const propertyIds = user.allProperties.map(property => new ObjectId(property._id));
        // console.log(propertyIds)
        const orders = await getOrdersByPropertyIds(propertyIds);
        // console.log(orders)
        return res.status(200).json({ orders });
      } else {
        return res.status(404).json({ message: "Admin not found" });
      }
    } catch (error) {
      console.error('Error fetching orders for admin:', error);
      return res.status(500).json({ message: 'Internal Server Error' });
    }
  };


// const createOrder = async (req, res) => {
//     const { id } = req.params;

//     const {property_id, order_information} = req.body;
    
  
//     try {
//       const user = await getAdminUserById(id);
  
//       if (user) {
//         const order = createOrder({
//             order_id: random(),
//             property_id: property_id,
//             user_id: id,
//             order_information: {...order_information}
//         })
        
//       } else {
//         return res.status(500).json({ message: "User not found" });
//       }
//     } catch (error) {
//     //   console.error('Error fetching orders for admin:', error);
//     console.log(error)
//       return res.status(500).json(error.message);
//     }
// }




const createUserOrder = async (req, res) => {
    const { id } = req.params;
    const { property_id, order_information } = req.body;
  
    try {
      const user = await getAdminUserById(id);
      const property = await getPropertyById(property_id)

      console.log(user)
      console.log(property_id, property)
  
      if (user && property) {
        const newOrder = await createOrder({
          order_id: random(),
          property_id: property_id,
          user_id: id,
          order_information: { ...order_information }
        });
  
        return res.status(201).json({ order: newOrder });
      } else {
        return res.status(404).json({ message: "User not found" });
      }
    } catch (error) {
      console.error('Error creating order:', error);
      return res.status(500).json({ message: 'Internal Server Error' });
    }
  };








  const updateOrderStatus = async (req, res) => {
    const { id: adminUserId } = req.params;
    const { orderId, status, reason } = req.body;
  
    try {
        // Check if the user is an admin
        const adminUser = await getAdminUserById(adminUserId);
        console.log(status)
  
        if (!adminUser) {
            return res.status(403).json({ message: 'Not authorized as an admin' });
        }
  
        const order = await getOrderById(orderId);
  
        if (order) {
            // Assuming the admin checks if they are the owner before updating the order
            // ... your logic to check if admin is the owner of the property
            if (status === "active" && status != "declined") {
                // Update the order status
                order.booking_status = status;

                console.log('it is successful')
                
                // Update the reason only if status is "declined"
                if (status === "declined") {
                  order.booking_status = status;
                    order.reason = reason;
                }
                
                await order.save();
                console.log(order);
  
                return res.status(200).json({ message: `Order ${status}ed successfully` });
            } else {
                return res.status(400).json({ message: `Invalid status: ${status}` });
            }
        } else {
            return res.status(404).json({ message: `Order with ID ${orderId} not found` });
        }
    } catch (error) {
        console.error(`Error ${status}ing order:`, error);
        return res.status(500).json({ message: 'Internal Server Error' });
    }
}













//   const updateOrderStatus = async (req, res) => {
//     const { id: adminUserId } = req.params;
//     const { orderId, status, reason } = req.body;
  
//     try {
//         // Check if the user is an admin
//         const adminUser = await getAdminUserById(adminUserId);
//         console.log(status)
  
//         if (!adminUser) {
//             return res.status(403).json({ message: 'Not authorized as an admin' });
//         }
  
//         const order = await getOrderById(orderId);
  
//         if (order) {
//             // Assuming the admin checks if they are the owner before updating the order
//             // ... your logic to check if admin is the owner of the property
//               if (status === "accepted") {
//                 // Update the order status
//             order.booking_status = status;
            
//               } else if(status === "declined") {
// // Update the order status
//             order.booking_status = status;
//             order.reason = reason;
//               }
            
//               await order.save();
//             console.log(order)
  
//             return res.status(200).json({ message: `Order ${status}ed successfully` });
//         } else {
//             return res.status(404).json({ message: `Order with ID ${orderId} not found` });
//         }
//     } catch (error) {
//         console.error(`Error ${status}ing order:`, error);
//         return res.status(500).json({ message: 'Internal Server Error' });
//     }
// }






//  const updateOrderStatus = async (req, res) => {
//     const { id: adminUserId } = req.params;
//     const { orderId, status } = req.body;
  
//     try {
//       // Check if the user is an admin
//       const adminUser = await getAdminUserById(adminUserId);
//       console.log(adminUserId, adminUser)
  
//       if (!adminUser ) {
//         return res.status(403).json({ message: 'Not authorized as an admin' });
//       }
  
//       const order = await getOrderById(orderId).populate('property');
  
//       if (order) {
//         // Assuming the admin checks if they are the owner before updating the order
//         // ... your logic to check if admin is the owner of the property
  
//         // Update the order status
//         order.booking_status = status;
//         await order.save();
        
//         console.log(order)
//         // Update the property detail status if necessary
//         // const property = order.property;
//         // // Assuming you have a property status field
//         // if (status === 'accepted') {
//         //   property.status = 'accepted';
//         //   await property.save();
//         // }
  
//         console.log(`Order ${status}:`, order);
  
//         return res.status(200).json({ message: `Order ${status}ed successfully` });
//       } else {
//         return res.status(404).json({ message: `Order with ID ${orderId} not found` });
//       }
//     } catch (error) {
//       console.error(`Error ${status}ing order:`, error);
//       return res.status(500).json({ message: 'Internal Server Error' });
//     }
//   }







  export {createUserOrder, getOrdersByAdmin, getUserOrder, getAllOrders, updateOrderStatus }