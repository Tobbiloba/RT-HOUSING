import mongoose from "mongoose"

const CouponSchema = new mongoose.Schema({
    coupon_title: {type: String, required: true},
    coupon_code: {type: String, required: true},
    free_shipping: {type: Boolean, required: true},
    quantity: {type: String, required: true},
    discount_type: {type: String, enum: ['percent', 'fixed'], default: 'fixed', required: true},
    status: {type: String, enum: ['active', 'inactive'], default: 'active'},
    created_at: { type: Date, default: Date.now },
    company_id: {type: String, required: true},
    company_name: {type: String, required: true}
})

const CouponModel = mongoose.model("Coupon", CouponSchema)

export const getAllCouponSchema = (no) => CouponModel.find().limit(no)
export const getCouponByCodeSchema = (code) => CouponModel.findOne({"coupon_code": code})
export const getCompanyCouponByNameSchema = (name) => CouponModel.find({"company_name": name})
export const getCompanyCouponByIdSchema = (id) => CouponModel.findOne({"_id": id})
export const createCouponSchema = (values) => new CouponModel(values)
    .save().then((user) => user.toObject())
// export const updateCouponSchema = (id, value) => CouponModel.findByIdAndUpdate(id, value);
export const deleteCouponSchema = (id) => CouponModel.findByIdAndDelete(id);

export default CouponModel;