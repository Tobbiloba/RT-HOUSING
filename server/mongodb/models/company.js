import mongoose from "mongoose"

const socialSchema = new mongoose.Schema({
    platform: {type: String, required: true},
    url: {type: String, required: true}
})

const EmployeeSchema = new mongoose.Schema({
    employee_id: {type: String, required: true},
    employee_name: {type: String, required: true},
    role: {type: [String], required: true}
})

const CompanySchema = new mongoose.Schema({
    company_name: {type: String, required: true},
    company_email: {type: String, required: true},
    company_address: {type: String, required: true},
    company_website: { type: String, required: false },
    socials: [socialSchema],
    employees: [EmployeeSchema],
    created_at: { type: Date, default: Date.now },
    // created_by: {type: String, required: true}
    // allProperties: [{ type: mongoose.Schema.Types.ObjectId, ref: "Property" }],
})


const CompanyModel = mongoose.model('Company', CompanySchema);


export const getAllCompanySchema = () => CompanyModel.find();
export const getCompanyByIdSchema = (id) => CompanyModel.findOne({"_id": id})
export const getCompanyByNameSchema = (name) => CompanyModel.findOne({"company_name": name});
export const getCompanyByEmailSchema = (email) => CompanyModel.findOne({"company_email": email})
export const createCompanySchema = (values) => new CompanyModel(values).save().then((company) => company.toObject())
// export const getCompanyEmployeeByIdSchema = (id) => CompanyModel.findOne({"employee_id": id})
// export const getCopanyEmployeeByNameSchema = (name) => CompanyModel.findOne({"employee_name": name});

export default CompanyModel;