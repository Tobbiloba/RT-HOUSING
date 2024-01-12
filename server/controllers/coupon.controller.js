import mgongoose from "mongoose"
import { random } from "../helpers/index.js"
import { getAllCouponSchema, getCompanyCouponByIdSchema, getCompanyCouponByNameSchema, createCouponSchema, deleteCouponSchema, getCouponByCodeSchema } from "../mongodb/models/coupon.js"
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

const getCompanyCouponByNameModel = async (req, res) => {
    try {
        const {name} = req.body;

        const coupons = getCompanyCouponByNameSchema(name)

        console.log(coupons)

        return res.status(200).json(coupons)
    } catch (error) {
        console.log(error.message)
        return res.status(500).json(error.message)
    }
}


// const createCouponModel = async (req, res) => {
//     try {
//         const {id} = req.params
//         const {coupon_title, coupon_code, free_shipping, quantity, discount_type, status} = req.body

//         if(!id || !coupon_title || !coupon_code ||  !free_shipping || !discount_type || !status || !quantity ) {
//             return res.status(500).json({message: "Pass in all params"})
//         }

//         const companyExists = await getCompanyByIdSchema(id)

//         if(!companyExists) {
//             return res.status(500).json({message: "Company doesn't exist"})
//         }

//         // console.log(coupon_code)
//         const couponExist = await getCouponByCodeSchema(coupon_code)
//         console.log(couponExist)
//         if(couponExist) {
//             console.log(couponExist)
//             return res.status(500).json({message: "Coupon code already used"})
//         }
//         const coupon = createCouponSchema({
//             company_id: id,
//             company_name: companyExists.company_name,
//             coupon_title: coupon_title,
//             coupon_code: coupon_code,
//             free_shipping: free_shipping,
//             quantity: quantity,
//             discount_type: discount_type,
//             status: 'active'
//         })

//         // console.log(coupons)

//         return res.status(200).json(coupon)
//     } catch (error) {
//         console.log(error)
//         return res.status(500).json(error.message)
//     }
// }

















const createCouponModel = async (req, res) => {
    try {
        const { id } = req.params;
        const { coupon_title, coupon_code, free_shipping, quantity, discount_type, status } = req.body;

        if (!id || !coupon_title || !coupon_code || !free_shipping || !discount_type || !status || !quantity) {
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
            discount_type: discount_type,
            status: 'active',
        });

        return res.status(201).json(coupon);
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: "Internal Server Error" });
    }
};












const verifyCouponModel = async (req, res) => {
    try {
        const {id} = req.params;

        const isCoupon = getCompanyCouponByIdSchema(id)

        if(!isCoupon) {
            return res.status(500).json({message: "Coupon doesn'e exist"})
        }

        if(isCoupon.status === "inactive") {
            return res.status(500).json({message: "Coupon already used"})
        }

        isCoupon.status === "inactive"

        await isCoupon.save()


        return res.status(200).json(isCoupon)
    } catch (error) {
        console.log(error)
        return res.status(500).json(error.message)
    }
}

export {getAllCouponsModel, getCompanyCouponByIdModel, getCompanyCouponByNameModel, createCouponModel, verifyCouponModel}