import mgongoose from "mongoose"
import { random } from "../helpers/index.js"
import { getAllCouponSchema, getAdminCouponByIdSchema, createCouponSchema, deleteCouponSchema, getCouponByCodeSchema, getCouponById } from "../mongodb/models/coupon.js"
import { getCompanyByIdSchema } from "../mongodb/models/company.js"
import { getAdminUserById } from "../mongodb/models/admin.js"



const getAllCouponsModel = async(req, res) => {
    try {
        const coupons = await getAllCouponSchema()

        console.log(coupons)
        return res.status(200).json(coupons)
    } catch(error) {
        console.log(error)
        return res.status(500).json(error.message) 
    }
}

const getAdminCouponByIdModel = async (req, res) => {
    try {
        const {id} = req.params;
        console.log(id)

        const coupons = await getAdminCouponByIdSchema(id)

        console.log(coupons)

        return res.status(200).json(coupons)
    } catch (error) {
        console.log(error.message)
        return res.status(500).json(error.message)
    }
}


const createCouponModel = async (req, res) => {
    try {
        const { id } = req.params;
        
        const {  coupon_code, free_shipping, quantity, min_purchase, discount_type, status, discount_price } = req.body;
        console.log(id, coupon_code, free_shipping, quantity, min_purchase, discount_type, status, discount_price)
        if (!id || !discount_price || !coupon_code  || !min_purchase || !discount_type || !status || !quantity) {
            console.log('not complete')
            return res.status(400).json({ message: "Pass in all required parameters" });
        }

        const adminExist = await getAdminUserById(id);

        if (!adminExist) {
            console.log('admin not found')
            return res.status(404).json({ message: "Admin doesn't exist" });
        }

        const couponExist = await getCouponByCodeSchema(coupon_code);

        if (couponExist) {
            return res.status(400).json({ message: "Coupon code already used" });
        }


        const coupon = await createCouponSchema({
            admin_id: id,
            admin_name: adminExist.username,
            coupon_code: coupon_code,
            free_shipping: free_shipping,
            quantity: quantity,
            min_purchase: min_purchase,
            discount_type: discount_type,
            discount_price: discount_price,
            status: 'active',
        });
        console.log(coupon)

        return res.status(201).json(coupon);
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: "Internal Server Error" });
    }
};

const verifyCouponModel = async (req, res) => {
    try {
        // const {id} = req.params;
        const {amount, couponCode} = req.body;

        const isCoupon =  await getCouponByCodeSchema(couponCode)

        // console.log(isCoupon)

        if(!isCoupon) {
            return res.status(500).json({message: "Coupon doesn't exist"})
        }

        if(isCoupon.status === "inactive") {
            return res.status(500).json({message: "Coupon already used"})
        }

        if(!amount) {
            return res.status(500).json({message: "Amount not found"})
        }

        if(amount < isCoupon.min_purchase) {
            return res.status(500).json({message: `Purchase has to be atleast #${isCoupon.min_purchase}`})
        }


        console.log(isCoupon)
        isCoupon.status = "inactive"

        await isCoupon.save()


        return res.status(200).json(isCoupon)
    } catch (error) {
        console.log(error)
        return res.status(500).json(error.message)
    }
}

export {getAllCouponsModel, getAdminCouponByIdModel, createCouponModel, verifyCouponModel}