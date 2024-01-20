import mgongoose from "mongoose"
import { random } from "../helpers/index.js"
import { getAllCouponSchema, getCompanyCouponByIdSchema, createCouponSchema, deleteCouponSchema, getCouponByCodeSchema, getCouponById } from "../mongodb/models/coupon.js"
import { getCompanyByIdSchema } from "../mongodb/models/company.js"



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

const getCompanyCouponByIdModel = async (req, res) => {
    try {
        const {id} = req.params;

        const coupons = getCompanyCouponByIdSchema(id)

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
        const { coupon_title, coupon_code, free_shipping, quantity, min_purchase, discount_type, status } = req.body;

        if (!id || !coupon_title || !coupon_code || !free_shipping || !min_purchase || !discount_type || !status || !quantity) {
            return res.status(400).json({ message: "Pass in all required parameters" });
        }

        const companyExists = await getCompanyByIdSchema(id);

        if (!companyExists) {
            return res.status(404).json({ message: "Company doesn't exist" });
        }

        const couponExist = await getCouponByCodeSchema(coupon_code);

        if (couponExist) {
            return res.status(400).json({ message: "Coupon code already used" });
        }

        const coupon = await createCouponSchema({
            company_id: id,
            company_name: companyExists.company_name,
            coupon_title: coupon_title,
            coupon_code: coupon_code,
            free_shipping: free_shipping,
            quantity: quantity,
            min_purchase: min_purchase,
            discount_type: discount_type,
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
        const {id} = req.params;
        const {amount} = req.body;

        const isCoupon =  await getCouponById(id)

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

export {getAllCouponsModel, getCompanyCouponByIdModel, createCouponModel, verifyCouponModel}