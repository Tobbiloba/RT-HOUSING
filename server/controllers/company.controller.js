import {
  getAllCompanySchema,
  getCompanyByEmailSchema,
  getCompanyByIdSchema,
  getCompanyByNameSchema,
//   getCompanyEmployeeByIdSchema,
//   getCopanyEmployeeByNameSchema,
  createCompanySchema,
} from "../mongodb/models/company.js";
import { random,authentication } from "../helpers/index.js";
import { getAdminUserByEmail, getAdminUserById } from "../mongodb/models/admin.js";

const getAllCompanyModel = async (req, res) => {
  try {
    const companies = await getAllCompanySchema();
    // console.log(companies)

    return res.status(200).json(companies);
  } catch (error) {
    // console.log(error.message);
    return res.status(500).json(error.message);
  }
};

const getCompanyByIdModel = async (req, res) => {
  try {
    const { id } = req.params;
    const company = await getCompanyByIdSchema(id);

    console.log(company);
    return res.status(200).json(company);
  } catch (error) {
    console.log(error);
    return res.status(500).json(error.message);
  }
};

const getCompanyByEmailModel = async (req, res) => {
  try {
    const { email } = req.body;
    console.log(email)
    const company = await getCompanyByEmailSchema(email);

    if (company) {
      console.log(company);
      return res.status(200).json(company);
    } else {
      console.log("Company email cant be found");
      return res.status(400).json({ message: "Company not found" });
    }
  } catch (error) {
    console.log('error');
    return res.status(500).json(error.message);
  }
};

// const getCompanyEmployeeByIdSchema = async (req, res) => {
//   try {
//     const { employee_id } = req.body;

//     // const employee = getEm;
//   } catch (error) {
//     console.log(error);
//     return res.status(500).json(error.message);
//   }
// };


const createCompanyModel = async (req, res) => {
    try {
        const {id}  = req.params;
        const {company_name, company_email, company_address, company_website, industry, socials}  = req.body;
        console.log(id)
        if (!company_name || !company_email || !company_address || !id) {

            return res.status(500).json({message: "Pass in all params"})
        }

        const isUser = await getAdminUserById(id)

        if(!isUser) {
            return res.status(500).json({message: "User not found"})
        } else {
            console.log('user found')
            console.log(isUser.firstname)
        }
        const companyNameExist = await getCompanyByNameSchema(company_name)
        if(companyNameExist) {
            console.log('Company name already exists')
            return res.status(500).json({message: "Company name is already taken"})
        }
        const companyIdExist = await getCompanyByEmailSchema(company_name)
        if(companyIdExist) {
            console.log('Company name already exists')
            return res.status(500).json({message: "Company email is already used"})
        }

        const company = await createCompanySchema({
            company_name: company_name,
            company_email: company_email,
            company_address: company_address,
            company_website: company_website,
            socials: socials ? socials: [],
            employees: [
                {
                    employee_id: id,
                    employee_name: `${isUser.firstname} ${isUser.lastname}`,
                     role: "Manager"
                }
            ]
        })


        console.log(company)
return res.status(200).json(company)



    } catch(error) {
        console.log(error.message)
        return res.status(500).json(error.message)
    }
}

const addEmployee = async (req, res) => {
    try {
        const {id} = req.params;
        const {email, role, password} = req.body;

        if(!id || !email || !role || !password) {
            return res.status(500).json({message: 'Pass necessary params'})
        }

        const isCompany = await getCompanyByIdSchema(id);

        if(!isCompany) {
            return res.status(500).json({message: "Message not found"})
        }

        const userExists = await getAdminUserByEmail(email).select(
            "+authentication.salt +authentication.password"
          );
          const expectedHash = authentication(userExists.authentication.salt, password);

          if (userExists.authentication.password != expectedHash) {
            console.log('password doesnt match')
            return res.sendStatus(403);
          }

          userExists.company_information = {
            company_id: id,
            company_name: isCompany.company_name,
            role: role
          }

          await userExists.save()

          return res.status(200).json({message: "Successfully added user"})

        console.log(userExists)
    } catch(error) {
        console.log(error.message)
        return res.status(500).json(error.message)
    }
}





const deleteEmployee = async (req, res) => {
    try {
        const {id} = req.params;
        const {email, role, password} = req.body;

        if(!id || !email || !role || !password) {
            return res.status(500).json({message: 'Pass necessary params'})
        }

        const isCompany = await getCompanyByIdSchema(id);

        if(!isCompany) {
            return res.status(500).json({message: "Message not found"})
        }

        const userExists = await getAdminUserByEmail(email).select(
            "+authentication.salt +authentication.password"
          );
          const expectedHash = authentication(userExists.authentication.salt, password);

          if (userExists.authentication.password != expectedHash) {
            console.log('password doesnt match')
            return res.sendStatus(403);
          }

          userExists.company_information = {
            company_id: null,
            company_name: null,
            role: null
          }

          await userExists.save()

          return res.status(200).json({message: "Successfully deleted user"})

        console.log(userExists)
    } catch(error) {
        console.log(error.message)
        return res.status(500).json(error.message)
    }
}
export {getAllCompanyModel, getCompanyByEmailModel, getCompanyByIdModel, createCompanyModel, addEmployee, deleteEmployee}