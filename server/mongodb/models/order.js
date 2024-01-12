import mongoose from "mongoose";

const OrderSchema = new mongoose.Schema({
    property_id: {type: String, required: true},
    order_id: {type: String, required: true},
    user_id: {type: String, required: true},
    // owner_id: {type: String, required: true},
    order_information: {
        property_name: {type: String, required: true},
        property_type: {type: String, required: true},
        property_location: {
            country: {type: String, required: true},
            state: {type: String, required: true},
            city: {type: String, required: true},
            latitude: {type: String, required: false},
            longitude: {type: String, required: false}
        },
        property_images: {type: String, required: true},
        checkin_date: {type: String, required: true},
        checkout_date: {type: String, required: true},
        price: {type: String, required: true},
        expenses: {type: [String], required: false}
    },
    booking_status: { type: String, enum: ['pending', 'active', 'expired', 'declined'], default: 'pending' },
    reason: {type: String,
        required: function() {
          return this.booking_status === 'declined';
        }},
        created_at: { type: Date, default: Date.now },
})

const OrderModel = mongoose.model("Order", OrderSchema);


export const getOrders = (no) => OrderModel.find({}).limit(no);
export const getOrderByProperty = (id) => OrderModel.findOne({"property_id": id});
export const getOrderByUserId = (id) => OrderModel.find({"user_id": id}).populate(
    "creator",
);
export const getOrderById = (id) => OrderModel.findOne({"_id": id});
export const createOrder = (values) => new OrderModel(values)
    .save().then((user) => user.toObject())
export const updateOrderById = (id, property) => OrderModel.findByIdAndUpdate(id, property);
// export const deleteOrderById = (id) => OrderModel.findByIdAndDelete(id);


export const getOrdersByPropertyIds = async (propertyIds) => {
  console.log(propertyIds)
    try {
      const orders = await OrderModel.find({ property_id: { $in: propertyIds } }).populate('user').populate('property');
      return orders;
    } catch (error) {
      console.error('Error fetching orders by property IDs:', error);
      throw error;
    }
  };
