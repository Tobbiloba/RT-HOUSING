// @ts-nocheck
import * as yup from 'yup'

const passwordRules = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{5,}$/

export const loginSchema = yup.object().shape({
  email: yup.string().email('Please enter a valid email').required('Required'),
  password: yup
    .string()
    .min(5, 'Password must be at least 5 characters')
    .matches(passwordRules, 'Please create a stronger password')
    .required('Required'),
})

export const registerSchema = yup.object().shape({
  username: yup.string().required('Required'),
  email: yup.string().email('Please enter a valid email').required('Required'),
  phoneNo: yup.number().positive().integer().required('Required'),
  password: yup
    .string()
    .min(5, 'Password must be at least 5 characters')
    .matches(passwordRules, 'Please create a stronger password')
    .required('Required'),
})

export const updatePasswordSchema = yup.object().shape({
  email: yup.string().email('Please enter a valid email').required('Required'),
  oldPassword: yup
    .string()
    .min(5, 'Password must be at least 5 characters')
    .matches(passwordRules, 'Please create a stronger password')
    .required('Required'),

  newPassword: yup
    .string()
    .min(5, 'Password must be at least 5 characters')
    .matches(passwordRules, 'Please create a stronger password')
    .notOneOf(
      [yup.ref('oldPassword'), null],
      'New password must not be equal to old password',
    )
    .required('Required'),

  confirmNewPassword: yup
    .string()
    .min(5, 'Password must be at least 5 characters')
    .oneOf([yup.ref('newPassword'), null], 'Passwords must match')
    .matches(passwordRules, 'Please create a stronger password')
    .notOneOf(
      [yup.ref('oldPassword'), null],
      'Confirm password must not be equal to old password',
    )
    .required('Required'),
})

export const updateProfileSchema = yup.object().shape({
  username: yup.string().required('Required'),
  phoneNo: yup.number().positive().integer().required('Required'),
  image: yup.string().required('Required'),
  firstname: yup.string().required('Required'),
  lastname: yup.string().required('Required'),
})

export const registerAdminSchema = yup.object().shape({
  firstname: yup.string().required('Required'),
  lastname: yup.string().required('Required'),
  username: yup.string().required('Required'),
  country: yup.string().required('Required'),
  state: yup.string().required('Required'),
  city: yup.string().required('Required'),
  email: yup.string().email('Please enter a valid email').required('Required'),
  phone: yup.number().positive().integer().required('Required'),
  password: yup
    .string()
    .min(5, 'Password must be at least 5 characters')
    .matches(passwordRules, 'Please create a stronger password')
    .required('Required'),
})

export const createProductSchema = yup.object().shape({
  title: yup.string().required('Required'),
  type: yup.string().required('Required'),
  description: yup.string().required('Required'),
  bathroom: yup.string().required('Required'),
  bedroom: yup.string().required('Required'),
  adults: yup.string().required('Required'),
  children: yup.string().required('Required'),
  infant: yup.string().required('Required'),
  pricing: yup.string().required('Required'),
  address: yup.string().required('Required'),
  country: yup.string().required('Required'),
  state: yup.string().required('Required'),
  city: yup.string().required('Required'),
  postal_code: yup.string().required('Required'),
})

export const createPropertySchema = yup.object().shape({
  propertyName: yup.string().trim().required('Property Name is required'),
  propertyDescription: yup
    .string()
    .trim()
    .required('Property Description is required'),
  propertyType: yup.string().trim().required('Property Type is required'),
  bathrooms: yup
    .number()
    .integer()
    .min(1, 'Number of Bathrooms must be greater than 0')
    .required('Number of Bathrooms is required'),
  bedrooms: yup
    .number()
    .integer()
    .min(1, 'Number of Bedrooms must be greater than 0')
    .required('Number of Bedrooms is required'),
  floors: yup
    .number()
    .integer()
    .min(1, 'Number of Floors must be greater than 0')
    .required('Number of Floors is required'),
  garages: yup
    .number()
    .integer()
    .min(1, 'Number of Garages must be greater than 0')
    .required('Number of Garages is required'),
  adults: yup
    .number()
    .integer()
    .min(1, 'Number of Adults must be greater than 0')
    .required('Number of Adults is required'),
  children: yup
    .number()
    .integer()
    .min(1, 'Number of Children must be greater than 0')
    .required('Number of Children is required'),
  infants: yup
    .number()
    .integer()
    .min(1, 'Number of Infants must be greater than 0')
    .required('Number of Infants is required'),
  pricing: yup.string().trim().required('Pricing is required'),
  address: yup.string().trim().required('Address is required'),
  country: yup.string().trim().required('Country is required'),
  state: yup.string().trim().required('State is required'),
  city: yup.string().trim().required('City is required'),
  postalCode: yup.string().trim().required('Postal Code is required'),
  images: yup.array().of(yup.string()).min(5, 'At least 5 images are required'),
  amenities: yup
    .array()
    .of(yup.string())
    .min(3, 'At least 3 amenities are required'),
  availableFromDate: yup.date().required('Available From Date is required'),
  availableTillDate: yup.date().required('Available From Date is required'),
  agent: yup.array(),
  // unavailableFromDate: yup.date(),
  // unavailableTillDate: yup.date()
  // .when('unavailableFromDate', {
  //   is: (unavailableFromDate) => !!unavailableFromDate, // Check if unavailableFromDate is truthy
  //   then: yup.date().min(yup.ref('unavailableFromDate'), "Unavailable Till Date must be after Unavailable From Date")
  // }),

  // reasonForUnavailability: yup.string()
  //   .when(['unavailableFromDate', 'unavailableTillDate'], {
  //     is: (unavailableFromDate, unavailableTillDate) => !!unavailableFromDate || !!unavailableTillDate, // Check if either field is truthy
  //     then: yup.string().required("Reason for Unavailability is required")
  //   })
})

export const contactAgentSchema = yup.object().shape({
  name: yup.string().required('Required'),
  message: yup.string().required('Required'),
  email: yup.string().email('Please enter a valid email').required('Required'),
  // phone: yup.number().positive().integer().required("Required"),
  phone: yup
    .string()
    .matches(/^\d+$/, 'Phone number must only contain digits')
    .min(11, 'Phone number must be at least 11 digits long')
    .required('Required'),
  termsAndConditions: yup
    .boolean()
    .oneOf([true], 'Please accept the terms and conditions')
    .required('Required'),
})

export const tourSchema = yup.object().shape({
  name: yup.string().required('Required'),
  email: yup.string().email('Please enter a valid email').required('Required'),
  phone: yup.number().positive().integer().required('Required'),
})

export const couponSchema = yup.object().shape({
  code: yup.string().required('Required'),
  free_shipping: yup.bool().required('Required'),
  discount_type: yup.string().required('Required'),
  discount_price: yup.number().positive().integer().required('Required'),
  min_price: yup.number().positive().integer().required('Required'),
})

export const createEmployeeSchema = yup.object().shape({
  firstname: yup.string().required('Required'),
  lastname: yup.string().required('Required'),
  username: yup.string().required('Required'),
  email: yup.string().email('Please enter a valid email').required('Required'),
  phone: yup
    .string()
    .matches(/^\d+$/, 'Phone number must only contain digits')
    .required('Required'),
  role: yup.string().required('Required'),
  start_date: yup.date().required('Start Date is required'),
  job_type: yup.string().required('Required'),
  status: yup.string().required('Required'),
  img: yup.string().required('Required'),
})

export const updateAdminProfileSchema = yup.object().shape({
  firstname: yup.string().required('Required'),
  lastname: yup.string().required('Required'),
  email: yup.string().email('Please enter a valid email').required('Required'),
  phone: yup
    .string()
    .matches(/^\d+$/, 'Phone number must only contain digits')
    .required('Required'),
  city: yup.string().required('Required'),
  state: yup.string().required('Required'),
  country: yup.string().required('Required'),
  password: yup
    .string()
    .min(5, 'Password must be at least 5 characters')
    .matches(passwordRules, 'Please create a stronger password')
    .required('Required'),
})
