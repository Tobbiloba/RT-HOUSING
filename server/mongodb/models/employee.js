import mongoose from "mongoose";

const EmployeeSchema = new mongoose.Schema({
    username: {type: String, required: true},
    firstname: {type: String, required: true},
    lastname: {type: String, required: true},
    email: {type: String, required: true},
    phone_no: {type: String, required: true},
    role: {type: String, required: true},
    start_date: {type: String, reqired: true},
    job_type: {type: String, required: true},
    status: {type: String, required: true},
    employer_id: {type: String, required: true},
    employer_email: {type: String, required: true},
    img: {type: String, required: true}
})

const employeeModel = mongoose.model("Employee", EmployeeSchema);



export const getAllEmployeesSchema = () => employeeModel.find();
export const getEmployeeByIdSchema = (id) => employeeModel.findOne({"_id": id });
export const getEmployeeByEmailSchema = (email) => employeeModel.findOne({"email": email });
export const getEmployeeByEmployerIdSchema = (id) => employeeModel.find({"employer_id": id });
export const getEmployeeByEmployerEmailSchema = (email) => employeeModel.findOne({"employer_email": email });
export const deleteEmployeeByIdSchema = (id) => employeeModel.findByIdAndDelete(id)
export const createEmployeeSchema = (values) =>
  new employeeModel(values).save().then((user) => user.toObject());
export default employeeModel;
