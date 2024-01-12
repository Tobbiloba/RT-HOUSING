import mongoose from "mongoose";
const CompanySchema = new mongoose.Schema({
    
})
const AdminUserSchema = new mongoose.Schema({
    username: {type: String, required: true},
    firstname: {type: String, required: false},
    lastname: {type: String, required: false},
    email: {type: String, required: true},
    phone_no: {type: String, required: false},
    profile_img: {type: String, required: false},
    country: {type: String, required: false},
    state: {type: String, required: false},
    city: {type: String, required: false},
    socials: {type: [String], required: false},
    company_information: {
        company_id: {type: String, required: false},
    company_name: {type: String, required: false},
    role: {type: String, required: false}
    },
    authentication: {
        password: {type: String, required: true, select: false},
        salt: {type: String, required: true, select: false},
    },
    
})

const adminUserModel = mongoose.model("AdminUser", AdminUserSchema);


export const getAllAdmins = () => adminUserModel.find();
export const getAdminUserByEmail = (email) => adminUserModel.findOne({email})
// export const getAdminUserByUsername = (username) => adminUserModel.findOne({username})
export const getAdminUserById = (id) => adminUserModel.findOne({_id: id}).populate("allProperties");
export const registerAdminUser = (values) => new adminUserModel(values).save().then((user) => user.toObject())
export const updateAdminUser = (id, values) => adminUserModel.findByIdAndUpdate(id, values, { new: true });

export default adminUserModel