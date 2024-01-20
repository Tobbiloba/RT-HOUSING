import mongoose from "mongoose";

const ExpenseSchema = new mongoose.Schema({
  price: { type: String, required: false },
  description: { type: String, required: false },
});

const OrderSchema = new mongoose.Schema({
  propertyId: { type: String, required: true },
  orderId: { type: String, required: true },
  companyId: {type: String, required: true},
  userInformation: {
    userId: { type: String, required: true },
    username: { type: String, required: true },
    email: { type: String, required: true },
    phoneNo: { type: String, required: true },
  },
  checkinDate: {type: String, required: true},
  checkoutDate: {type: String, required: true},
  propertyInformation: {
    propertyName: { type: String, required: true },
    propertyType: { type: String, required: true },
    propertyLocation: {
      country: { type: String, required: true },
      state: { type: String, required: true },
      city: { type: String, required: true },
      latitude: { type: String, required: false },
      longitude: { type: String, required: false },
    },
    propertyImage: { type: String, required: true },
  },

  pricing: {
    rentalPrice: { type: String, required: true },
    expenses: [ExpenseSchema],
    totalPrice: { type: String, required: true },
  },
  promotions: {
    couponCode: { type: String, required: false },
    discount: { type: String, required: false },
  },
  bookingStatus: {
    type: String,
    enum: ["pending", "active", "expired", "declined"],
    default: "pending",
  },
  reason: {
    type: String,
    required: function () {
      return this.bookingStatus === "declined";
    },
  },
  createdAt: { type: Date, default: Date.now },
});

const OrderModel = mongoose.model("Order", OrderSchema);

export const getOrders = (no) => OrderModel.find({}).limit(no);
export const getOrderByProperty = (id) =>
  OrderModel.findOne({ property_id: id });
  export const getOrderByCompany = (id) =>
  OrderModel.findOne({ company_id: id });
export const getOrderByUserId = (id) =>
  OrderModel.find({ user_id: id }).populate("creator");
export const getOrderById = (id) => OrderModel.findOne({ _id: id });
export const createOrder = (values) =>
  new OrderModel(values).save().then((user) => user.toObject());
export const updateOrderById = (id, property) =>
  OrderModel.findByIdAndUpdate(id, property);
// export const deleteOrderById = (id) => OrderModel.findByIdAndDelete(id);

export const getOrdersByPropertyIds = async (propertyIds) => {
  console.log(propertyIds);
  try {
    const orders = await OrderModel.find({ property_id: { $in: propertyIds } })
      .populate("user")
      .populate("property");
    return orders;
  } catch (error) {
    console.error("Error fetching orders by property IDs:", error);
    throw error;
  }
};
