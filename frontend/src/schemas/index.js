// @ts-nocheck
import * as yup from "yup";

const passwordRules = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{5,}$/;

export const loginSchema = yup.object().shape({
  email: yup.string().email("Please enter a valid email").required("Required"),
  password: yup
    .string()
    .min(5, "Password must be at least 5 characters")
    .matches(passwordRules, "Please create a stronger password")
    .required("Required"),
});

export const registerSchema = yup.object().shape({
  name: yup.string().required("Required"),
  email: yup.string().email("Please enter a valid email").required("Required"),
  phone: yup.number().positive().integer().required("Required"),
  password: yup
    .string()
    .min(5, "Password must be at least 5 characters")
    .matches(passwordRules, "Please create a stronger password")
    .required("Required"),
});




export const updatePasswordSchema = yup.object().shape({
  email: yup.string().email("Please enter a valid email").required("Required"),
  password: yup
    .string()
    .min(5, "Password must be at least 5 characters")
    .matches(passwordRules, "Please create a stronger password")
    .required("Required"),
  confirmPassword: yup
    .string()
    .min(5, "Password must be at least 5 characters")
    .oneOf([yup.ref('password'), null], 'Passwords must match')
    .matches(passwordRules, "Please create a stronger password")
    .required("Required"),
});



export const updateProfileSchema = yup.object().shape({
  name: yup.string().required("Required"),
  phone: yup.number().positive().integer().required("Required"),
});

export const registerAdminSchema = yup.object().shape({
  firstname: yup.string().required("Required"),
  lastname: yup.string().required("Required"),
  username: yup.string().required("Required"),
  country: yup.string().required("Required"),
  state: yup.string().required("Required"),
  city: yup.string().required("Required"),
  email: yup.string().email("Please enter a valid email").required("Required"),
  phone: yup.number().positive().integer().required("Required"),
  password: yup
    .string()
    .min(5, "Password must be at least 5 characters")
    .matches(passwordRules, "Please create a stronger password")
    .required("Required"),
});


export const createProductSchema = yup.object().shape({
  title: yup.string().required("Required"),
  type: yup.string().required("Required"),
  description: yup.string().required("Required"),
  bathroom: yup.string().required("Required"),
  bedroom: yup.string().required("Required"),
  adults: yup.string().required("Required"),
  children: yup.string().required("Required"),
  infant: yup.string().required("Required"),
  pricing: yup.string().required("Required"),
  address: yup.string().required("Required"),
  country: yup.string().required("Required"),
  state: yup.string().required("Required"),
  city: yup.string().required("Required"),
  postal_code: yup.string().required("Required"),
  // adults: yup.object().required("Required"),
  // children: yup.string().email("Please enter a valid email").required("Required"),
  // infant: yup.number().positive().integer().required("Required"),
  // password: yup
  //   .string()
  //   .min(5, "Password must be at least 5 characters")
  //   .matches(passwordRules, "Please create a stronger password")
  //   .required("Required"),
});