import { getAdminUserById } from "../mongodb/models/admin.js";
import { createEmployeeSchema, getAllEmployeesSchema, getEmployeeByEmployerIdSchema, getEmployeeByEmailSchema, getEmployeeByEmployerEmailSchema, getEmployeeByIdSchema, deleteEmployeeByIdSchema, getAgentByAdminSchema } from "../mongodb/models/employee.js";
import { createNotificationModel } from "./notification.controller.js";

const getAllEmployeesModel = async(req, res) => {

    try {
        const employees = await getAllEmployeesSchema()

        return res.status(200).json(employees)
    } catch (error) {
        console.log(error)
        return res.status(500).json(error.message)
    }
}

const getEmployeeByIdModel = async(req, res) => {

    try {
        const { id } = req.params;
        console.log(id)
        const employee = await getEmployeeByIdSchema(id)

        if(!employee) {
            return res.status(404).json({message: "Employee not found"})
        }

        return res.status(200).json(employee)
    } catch (error) {
        console.log(error)
        return res.status(500).json(error.message)
    }
}

const getAgentByEmployerIdModel = async(req, res) => {

    try {
        const {id} = req.params;
        console.log('lol')
        const agents = await getAgentByAdminSchema(id)
        console.log(agents)

            return res.status(200).json(agents)
    } catch (error) {
        console.log(error)
        return res.status(500).json(error.message)
    }
}

const getAllEmployeeByEmailModel = async(req, res) => {

    try {
        const {email} = req.body()
        const employee = await getEmployeeByEmailSchema(email)


        return res.status(200).json(employee)
    } catch (error) {
        console.log(error)
        return res.status(500).json(error.message)
    }
}
const getAllEmployeeByEmployerIdModel = async(req, res) => {

    try {
        const {id} = req.params;
        console.log('lol')
        const employees = await getEmployeeByEmployerIdSchema(id)

        if(!employees) {
            return res.status(500).json({message: "Employee not found"})
        }

        return res.status(200).json(employees)
    } catch (error) {
        console.log(error)
        return res.status(500).json(error.message)
    }
}

const createEmployeeModel = async(req, res) => {

    try {
        const {id} = req.params
        const {
            username,
            firstname,
            lastname,
            email,
            phone,
            role,
            start_date,
            job_type,
            status,
            img
        } = req.body
        console.log(username,
            firstname,
            lastname,
            email,
            phone,
            role,
            start_date,
            job_type,
            status,
            img)


            const employeeExist = await getEmployeeByEmailSchema(email)

            if(employeeExist) {
                console.log('already exist')
                return res.status(400).json({message: "Employee already exist"})
            }

        if(!username ||
            !firstname ||
            !lastname ||
            !email ||
            !phone ||
            !start_date||
            !role||
            !job_type ||
            !status|| !id || !img) {
                return res.status(400).json({message: "Pass in necessary parameters"})
            }

            const admin = await getAdminUserById(id);
            console.log(admin)

            if(!admin) {
                return res.status(404).json({message: "Admin not found"})
            }


         console.log('passed')

            const employee = await createEmployeeSchema({
                username,
                firstname,
                lastname,
                email,
                phone_no: phone,
                role,
                start_date,
                status,
                employer_id: id,
                employer_email: admin.email,
                img,
                job_type
            })

            console.log(employee)

            admin.employee.push({
                id: employee._id
            })
            await admin.save()

            createNotificationModel({
                id,
                title: "Employee Creation Successful",
                message: `Dear Admin,
              
              We are pleased to inform you that the addition of a new employee, ${username}, to your workforce has been successfully completed. This employee holds the role of ${role} and will be commencing remote work starting from ${start_date}.
              
              Thank you for efficiently managing your employee roster. If you have any further inquiries or require assistance, please do not hesitate to contact our support team.
              
              Best Regards,
             Febtos`
              });
            return res.status(200).json(employee)
    } catch (error) {
        console.log(error)
        return res.status(500).json(error.message)
    }
}


const deleteEmplyeeModel = async (req, res) =>{

    try{
        const {id} = req.params
        console.log(id)
        const deleteEmployee = await deleteEmployeeByIdSchema(id)
        console.log(deleteEmployee)

        return res.status(200).json({message: "Successfully deleted employee"})
    } catch(error) {
        console.log(error)
        return res.status(500).json(error.message)
    }
}

const updateEmployeeStatusModel = async (req, res) => {

    try {
        const {id} = req.params
        const {status} = req.body

        const employee = await  getEmployeeByIdSchema(id)


        if (!employee) {
            return res.status(404).json({message: "Employee not found"})
        }

        employee.status = status
        await employee.save()

        return res.status(200).json({message: "Successfully updated employee status"})
    } catch (error) {
        console.log(error)
        return res.status(500).json(error.message)
    }
}




export {
    createEmployeeModel, getAllEmployeeByEmailModel,
    getAllEmployeeByEmployerIdModel,
    deleteEmplyeeModel,
    updateEmployeeStatusModel,
    getAllEmployeesModel,
    getEmployeeByIdModel,
    getAgentByEmployerIdModel
}